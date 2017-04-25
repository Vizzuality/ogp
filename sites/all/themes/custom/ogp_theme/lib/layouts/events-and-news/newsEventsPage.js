function showNewsEventsPage() {
  (function ($) {
    // cache
    let countryFilter = 0;
    let typeFilter = 0;
    let page = 1;
    let totalPages = 0;
    let totalPagesEvents = 0;
    let pageEvents = 1;

    //selectors
    const countrySelector = $('.country-filter');
    const typeSelector = $('.type-filter');
    const coverEvents = $('.c-content-banner');
    const eventsContainer = $('#eventsTiles');
    const newsContainer = $('#newsTiles');

    // public functions
    function buildHighlightedEvent(event) {
      if (event.image) {
        $('.c-content-banner').css('background-image', `url(${event.image})`);
      }
      if (moment() > moment(event.date.value)) {
        $('.banner-type-date-event').html('Past Event');
      } else {
        $('.banner-type-date-event').html('Upcoming Event');
      }
      $('.banner-link', coverEvents).attr('href', event.alias);
      $('.banner-title', coverEvents).html(event.label);
      $('.banner-date', coverEvents).html(moment(event.date.value).format('MMMM DD, hh:mm a'));
      $('.c-content-banner').removeClass('-hidden');
    }

    function setPageCount(val) {
      $('.page-count').data('value', val);
    }

    function getCurrentPage() {
      const pageCount = $('.page-count').data('value');
      return pageCount;
    }

    function onClickPagination() {
      $('.page-count').on('click', function() {
        setPageCount(getCurrentPage() + 1);
        pageEvents = getCurrentPage();
        if (totalPagesEvents > getCurrentPage()) {
          showLoader('#eventsContainer');
          showEvents(countryFilter, typeFilter, getCurrentPage());
        }
      });
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
          // showLoader('#newsContainer');
          showLoader('#eventsContainer');
          countryFilter = countrySelector.val();
          typeFilter = typeSelector.val();
          page = 1;
          // showNews(countryFilter, typeFilter, page);
          showEvents(countryFilter, typeFilter, page);
        });
      });
    }

    function setPaginationListerners() {
      countryFilter = countrySelector.val();
      typeFilter = typeSelector.val();
      $('.onClickPagination').on('click', function(e) {
        showLoader('#newsContainer');
        const pageNum = $(this).data('value');
        showNews(countryFilter, typeFilter, pageNum);
      })
    }

    function showEvents(country, type, page) {
      const activeCountry = parseInt(country) > 0 ? `filter[country]=${country}&` : '';
      const activeType = parseInt(type) > 0 ? `filter[category]=${type}&` : '';
      const activeFilters = `${activeCountry}${activeType}&page=${page}`;
      $.getJSON(`/apiJSON/events?${activeFilters}&sort=-date`, function (events) {
        totalPagesEvents = getPageCount(events.count, 4);
        if (events.data.length > 0) {
          if (pageEvents === 1) {
            $.getJSON(`/apiJSON/events?sort=-date`, function (highlightedEvent) {
              buildHighlightedEvent(highlightedEvent.data[0]);
              appendTilesEvent(events.data, eventsContainer);
              removeLoader('#eventsContainer', null, true);
            });
          } else {
            appendTilesEvent(events.data, eventsContainer);
            removeLoader('#eventsContainer', null, true);
          }
        } else {
          showNoResults('#eventsContainer', 'No events with these filters', 'tall', 'grey', 'xxlarge', 'blue');
          removeLoader('#eventsContainer', null, true);
        }
      });
    }

    function showNews(country, type, page) {
      const activeCountry = parseInt(country) > 0 ? `filter[country]=${country}&` : '';
      const activeType = parseInt(type) > 0 ? `filter[category]=${type}&` : '';
      const activeFilters = `${activeCountry}${activeType}&page=${page}`;
      $.getJSON(`/apiJSON/news?${activeFilters}&sort=-date&range=4`, function (news) {
        if (news.data.length > 0) {
          totalPages = getPageCount(news.count, 4);
          if (page === 1) {
            $.getJSON(`/apiJSON/news?sort=-date&range=4`, function (highlightedNews) {
              buildHighlightedEvent(highlightedNews.data[0]);
              appendTilesDetailedNews(news.data, newsContainer, 2);
              initPagination(page, totalPages, 'newsEventsPage');
              setPaginationListerners();
              removeLoader('#newsContainer', null, true);
            });
          } else {
            appendTilesDetailedNews(news.data, newsContainer, 2);
            removeLoader('#newsContainer', null, true);
            initPagination(page, totalPages, 'newsEventsPage');
            setPaginationListerners();
          }
        } else {
          showNoResults('#newsTiles', 'No news with these filters', 'tall', 'grey', 'xxlarge', 'blue');
          $('.c-pagination').html('');
          removeLoader('#newsContainer', null, true);
        }
      });
    }

    // build page
    buildSelector(countrySelector, 'All countries', 'countries', 'fields=id,label&sort=label');
    buildSelector(typeSelector, 'All story types', 'stories_categories', 'fields=id,label&sort=label');
    showEvents(countryFilter, typeFilter, page);
    showNews(countryFilter, typeFilter, page);
    onClickPagination();

  })(jQuery);
}
