function showStoriesPage() {
  (function ($) {

    // cache
    let countryFilter = 0;
    let typeFilter = 0;
    let page = 1;
    let totalPages = 0;
    let authorsHtml = '';

    //selectors
    const countrySelector = $('.country-filter');
    const typeSelector = $('.type-filter');
    const coverEvents = $('.c-content-banner');
    const storiesContainer = $('#storiesTiles');

    // public functions
    function buildHighlightedEvent(story) {
      if (story.image) {
        $('.c-content-banner').css('background-image', `url(${story.image})`);
      }
      if (story.author[0]) {
        story.author.forEach(function(author ,index) {
          if (index === story.author.length - 1) {
            authorsHtml += `<a class="text -white" href="/${author.alias}">${author.label}</a>`;
          } else {
            authorsHtml += `<a class="text -white" href="/${author.alias}">${author.label}, </a>`;
          }
        });
      }
      $('.banner-link', coverEvents).attr('href', story.alias);
      $('.banner-title', coverEvents).html(story.label);
      $('.banner-date', coverEvents).html(moment.unix(story.created).format('D MMMM YYYY'));
      if (story.author[0]) {
        $('.banner-author', coverEvents).html(authorsHtml);
      }
      $('.c-content-banner').removeClass('-hidden');
    }

    function buildSelector(selector, placeholder, endpoint, query) {
      selector.select2({
        minimumResultsForSearch: Infinity,
        containerCssClass: '-green -tall',
        dropdownCssClass: '-green',
        placeholder: `${placeholder}`,
      });
      selector.append(`<option value="0">${placeholder}</option>`);

      $.getJSON(`/apiJSON/${endpoint}?${query}`, function (data) {
        data.data.forEach(function(data) {
          const option = `<option value="${data.id}">${data.label}</option>`;
          selector.append(option);
        });

        selector.on('change', function () {
          showLoader('#storiesContainer');
          countryFilter = countrySelector.val();
          typeFilter = typeSelector.val();
          page = 1;
          showStories(countryFilter, typeFilter, page);
        });
      });
    }

    function setPaginationListerners() {
      countryFilter = countrySelector.val();
      typeFilter = typeSelector.val();
      $('.onClickPagination').on('click', function(e) {
        showLoader('#storiesContainer');
        const pageNum = $(this).data('value');
        showStories(countryFilter, typeFilter, pageNum);
      })
    }

    function showStories(country, type, page) {
      const activeCountry = parseInt(country) > 0 ? `filter[country]=${country}&` : '';
      const activeType = parseInt(type) > 0 ? `filter[category]=${type}&` : '';
      const activeFilters = `${activeCountry}${activeType}&page[number]=${page}&page[size]=8`;
      $.getJSON(`/apiJSON/stories?${activeFilters}&sort=-created`, function (stories) {
        if (stories.data.length > 0) {
          totalPages = getPageCount(stories.count, 8);
          // if (page === 1) {
          //   $.getJSON(`/apiJSON/stories?sort=-created`, function (highlightedStory) {
          //     if (highlightedStory.data[0]) {
          //       buildHighlightedEvent(highlightedStory.data[0]);
          //     }
          //     appendTilesDetailed(stories.data, storiesContainer, 2);
          //     initPagination(page, totalPages, 'storiesPage');
          //     setPaginationListerners();
          //     removeLoader('#storiesContainer', null, true);
          //   });
          // } else {
            appendTilesDetailed(stories.data, storiesContainer, 2);
            removeLoader('#storiesContainer', null, true);
            initPagination(page, totalPages, 'storiesPage');
            setPaginationListerners();
          // }
        } else {
          showNoResults('#storiesTiles', 'No stories with these filters', 'tall', 'grey', 'xxlarge', 'blue');
          $('.c-pagination').html('');
          removeLoader('#storiesContainer', null, true);
        }
      })
      .error(function () {
        showNoResults('#storiesTiles', 'Sorry, stories counld not be found', 'tall', 'grey', 'xxlarge', 'blue');
        $('.c-pagination').html('');
        removeLoader('#storiesContainer', null, true);
      });

    }

    // build page
    buildSelector(countrySelector, 'All countries', 'countries', 'fields=id,label&sort=label');
    buildSelector(typeSelector, 'All story types', 'stories_categories', 'fields=id,label&sort=label');
    showStories(countryFilter, typeFilter, page);

  })(jQuery);
}
