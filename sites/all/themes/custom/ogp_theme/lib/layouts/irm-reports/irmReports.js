function showIrmReports() {
  (function($) {

    // cache
    let page = 1;
    let totalPages = 0;

    //selectors
    const tabsContainer = $('.tabs-container');
    const containerInfo = $('#container-info');

    // custom callback for tabs component
    const onChangeIRMTabs = function (id, label) {
      $('.tab-content').addClass('-hidden');
      $(`.${id}`).removeClass('-hidden');
    };

    function initIRMTabs(onChange) {
      initTabs();
      setTabListeners(onChange);
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

    function showTilesIrmoReports() {
      $.getJSON(`/apiJSON/events?sort=-date`, function (events) {
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


    initIRMTabs(onChangeIRMTabs);

  })(jQuery);
}
