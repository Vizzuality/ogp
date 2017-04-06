function showIrmReports() {
  (function($) {

    // cache
    let countryFilter = 0;
    let typeFilter = 0;
    let page = 1;
    let totalPages = 0;

    //selectors
    const tabsContainer = $('.tabs-container');
    const containerInfo = $('#container-info');
    const irmContainer = $('#downloadContainer');

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
      $('.reload-thematic').data('value', val);
    }

    function getCurrentPage() {
      const pageCount = $('.reload-thematic').data('value');
      return pageCount;
    }

    function onClickPagination() {
      $('.c-pagination-click').on('click', function() {
        setPageCount(getCurrentPage() + 1);
        showLoader('#downloadContainer');
        showTilesIrmoReports(countryFilter, typeFilter, getCurrentPage());
      });
    }

    function showTilesIrmoReports(country, type, page) {
      $.getJSON(`/apiJSON/countries?fields=id,label&sort=-label&range=4&page=${page}`, function (countries) {
        for (let i = 0; i < countries.data.length; i += 1) {
          $.getJSON(`/apiJSON/documents?filter[type]=2704&filter[country]=${countries.data[i].id}&sort=-date&range=2`, function (reports) {
            if (reports.data.length > 0) {
              appendTilesIRM(reports.data, irmContainer, reports.count);
              removeLoader('#downloadContainer', null, true);
            } else {
              removeLoader('#downloadContainer', null, true);
            }
          });
        }
      });
    }

    onClickPagination();
    initIRMTabs(onChangeIRMTabs);
    showTilesIrmoReports(countryFilter, typeFilter, page);


  })(jQuery);
}
