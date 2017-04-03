function showCountriesDetail(id) {
  (function($) {

    //cache
    const years = ['2014', '2015', '2016'];
    const docTypes = {
      actionPlans: ['2703'],
      letters: ['2779'],
      reports: ['2704', '2768', '2705']
    }
    const pageThreshold = 10;

    // selectors and containers
    const actionPlansContainer = '#actionPlansLinks';
    const reportsContainer = '#reportsLinks';
    const lettersContainer = '#lettersLinks';
    const eventsContainer = '#eventsBanner';
    const themesContainer = '.themes-container';
    const completionContainer = '.completion-container';

    // initial settings
    let page = 1;
    let currentPageCount = 0;
    let irmPageCount = 0;

    //data cache
    let lettersData;
    let actionPlansData;
    let reportsData;


    // init selectors
    $('select').select2({
      minimumResultsForSearch: Infinity,
      containerCssClass: '-hidden'
    });

    // local functions
    function _setDataCount(selector, count) {
      $(selector).html(`${count}`);
    }

    function _appendLoadingBar(view, data) {
      const container = $(view);
      data.forEach(function(data) {
        if (data.value) {
          const html = `
          <div class="c-loading-bar">
          <div class="text -small-bold -white">${data.value}% ${data.theme}</div>
          <div class="bar -white" style="width: ${data.value}%;"></div>
          </div>
          `;
          container.append(html);
        }
      });
    }

    function _appendStories(view, stories) {
      const container = $(view);
      stories.forEach(function(story) {
        const html = `
          <li class="story-item">
            <div class="badge">
              <svg class="icon -white"><use xlink:href="#icon-external-link"></use></svg>
            </div>
            <div class="notification">
              A new OGP <b>Story</b> has been posted: <b><a href="/${story.alias}">${story.label}</a></b>
            </div>
          </li>
        `;
        container.append(html);
      });
    }

    function _appendLinks(view, data, selector, type) {
      const activeFilter = $(selector).val();
      const container = $(`${view} .links-container`);
      let html = '';
      data.forEach(function(link) {
        if (link.type && type.some(index => link.type.indexOf(index) >= 0)) {
          if ((link.date && moment(link.date.value).year() === parseInt(activeFilter)) ||
              (link.date && moment(link.date.value2).year() === parseInt(activeFilter))) {
            html += buildRelLink(link);
          }
        }
      });
      if (html === '') {
        showNoResults(container, 'No documents available', 'short', 'grey', 'xlarge');
      } else {
        container.html(html);
      }
    }

    function _appendEvents(event) {
      if (event.image) {
        $(`${eventsContainer} .banner-image`).css('background-image', `url(${event.image})`);
      }
      $(`${eventsContainer} .banner-title`).html(event.label);

      let eventMeta = '';
      eventMeta += convertEventDate(event.date.value);
      if (event.date.value2) {
        const endDate = convertEventDate(event.date.value2);
        eventMeta += ` to ${endDate}.`;
      }
      eventMeta += ` | ${event.location.locality}, ${event.location.country}`;
      $(`${eventsContainer} .banner-date`).html(eventMeta);
      $(`${eventsContainer} .c-button`).attr('href', `/${event.alias}`);
    }

    function setPaginationListerners(container, endPoint, pageCount) {
      $(`#${container} .onClickPagination`).on('click', function(e) {
        const pageNum = $(this).data('value');
        showLoader(`#${container}`);
        $.getJSON(`/apiJSON/${endPoint}?filter[country]=${id}&page[number]=${pageNum}&page[size]=${pageThreshold}&sort=label`, (data) => {
          initAccordion(container, data.data);
          initPagination(pageNum, pageCount, container);
          setPaginationListerners(container, endPoint, pageCount);
          removeLoader(`#${container}`, null, true);
        });
      })
    }

    function setSelectorListener(view, selector, data, type) {
      _appendLinks(view, data, selector, type);
      $(selector).on('change', function() {
        _appendLinks(view, data, selector, type);
      });
    }

    function initLinksSelectorContainer(dataCache, container, filter, type) {
      if (dataCache.length) {
        const optionValues = getSelectOptionsFromData(dataCache, filter, type);
        if (optionValues.length) {
          $(`${container} select`).removeClass('-hidden');
          buildSelector(`${container} select`, optionValues);
          setSelectorListener(`${container}`, `${container} select`, dataCache, type);
          $(`${container} .select2-selection`).removeClass('-hidden');
        } else {
          _appendLinks(`${container}`, dataCache, `${container} select`, type);
        }
      }
    }

    function bodyContentListener() {
      $('.js-view-more').on('click', function() {
        $('.body-view-more').toggleClass('-show');
        $(this).toggleClass('-open');
        if ($(this).hasClass('-open')) {
          $('span', this).html('VIEW LESS');
        } else {
          $('span', this).html('VIEW MORE');
        }
      });
    }


    /////////////
    // FETCH DATA
    /////////////

    // get country data
    $.getJSON(`/apiJSON/countries?filter[id]=${id}`, function (data) {
      if (data.data) {
        const country = data.data[0];
        // set banner counts
        _setDataCount('.c-commitment-count .content-count', country.current_commitments_count);
        _setDataCount('.irm-count', country.irm_commitments_count);
        _setDataCount('.starred-count', country.starred_commitments_count);
        _setDataCount('#currentCommitmentsAccordion .content-count', country.current_commitments_count);
        _setDataCount('#irmReviewedCommitmentsAccordion .content-count', country.irm_commitments_count);
        // loading bar data
        if (country.current_themes) {
          let themesData = [];
          for (let i = 0; i < country.current_themes.length; i++) {
            themesData.push({theme: country.current_themes[i], value: country.current_percentage[i]})
          }
          _appendLoadingBar(themesContainer, themesData);
        }
        if (country.midterm_percentage || country.endofterm_percentage) {
          const completionData = [
            {theme: 'Mid term percentage', value: country.midterm_percentage},
            {theme: 'End of term percentage', value: country.endofterm_percentage}
          ];
          _appendLoadingBar(completionContainer, completionData);
        } else {
          showNoResults(`.completion-container`, 'Not yet reviewed', 'short', 'white', 'xlarge');
        }
      }
      removeLoader('#countryHeaderBanner', null, true);
    });


    // fetch current commitments
    $.getJSON(`/apiJSON/current_commitment?filter[country]=${id}&sort=label&page[size]=${pageThreshold}&page[number]=1`, (data) => {
      if (data.data.length) {
        initAccordion('currentCommitmentsAccordion', data.data);
        if (data.count > pageThreshold) {
          currentPageCount = getPageCount(data.count, pageThreshold);
          initPagination(page, currentPageCount, 'currentCommitmentsAccordion');
          setPaginationListerners('currentCommitmentsAccordion', 'current_commitment', currentPageCount);
        }
      } else {
        showNoResults(`#currentCommitmentsAccordion .c-accordion`, 'No current commitments', 'medium', 'grey', 'xxlarge');
      }
      removeLoader('#currentCommitmentsAccordion', null, true);
    });


    // fetch review commitments
    $.getJSON(`/apiJSON/irm_commitments?filter[country]=${id}&page[size]=${pageThreshold}&sort=label&page[number]=1`, (data) => {
      if (data.data.length) {
        initAccordion('irmReviewedCommitmentsAccordion', data.data);
        if (data.count > pageThreshold) {
          irmPageCount = getPageCount(data.count, pageThreshold);
          initPagination(page, irmPageCount, 'irmReviewedCommitmentsAccordion');
          setPaginationListerners('irmReviewedCommitmentsAccordion', 'irm_commitments', irmPageCount);
        }
      } else {
        showNoResults(`#irmReviewedCommitmentsAccordion .c-accordion`, 'No reviewed commitments', 'medium', 'grey', 'xxlarge');
      }
      removeLoader('#irmReviewedCommitmentsAccordion', null, true);
    });

    // fetch stories
    $.getJSON(`/apiJSON/stories?filter[country]=${id}&page[size]=9`, (data) => {
      if (data.data.length) {
        _appendStories('.c-activity-stream ul', data.data);
        $('.item-bridge').removeClass('-hidden');
      } else {
        showNoResults('.c-activity-stream ul', 'No recent activity', 'medium', 'white', 'xlarge');
      }
      removeLoader('.c-activity-stream');
    });

    // fetch events
    $.getJSON(`/apiJSON/events?filter[country]=${id}`, (data) => {
      if (data.data.length) {
        if (dateDiff(data.data[0].date.value) <= 0) {
          _appendEvents(data.data[0]);
          $(eventsContainer).removeClass('-hidden');
        }
      }
    });

    $.getJSON(`/apiJSON/documents?filter[country]=${id}`, (data) => {
      const dataCache = data.data;
      initLinksSelectorContainer(dataCache, actionPlansContainer, ['date'], docTypes.actionPlans);
      initLinksSelectorContainer(dataCache, reportsContainer, ['date'], docTypes.reports);
      initLinksSelectorContainer(dataCache, lettersContainer, ['date'], docTypes.letters);
      removeLoader('#resourceDocsContainer', null, true);
    });

    // init selectors and views for actions, reports and letters data
    bodyContentListener();

  })(jQuery);
}
