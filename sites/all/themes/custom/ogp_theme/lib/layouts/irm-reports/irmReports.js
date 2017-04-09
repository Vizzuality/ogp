function showIrmReports() {
  (function($) {

    // cache
    let countryFilter = 0;
    let typeFilter = 0;
    let page = 1;
    let totalPages = 0;

    //selectors
    const countrySelectorDownload = $('.country-filter-download');
    const countrySelectorComments = $('.country-filter-comments');
    const tabsContainer = $('.tabs-container');
    const containerInfo = $('#container-info');
    const irmContainer = $('#downloadContainer');
    const commentsContainer = $('#commentsContainer');

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
      $('.reload-thematic-download').data('value', val);
    }

    function setPageCountComments(val) {
      $('.reload-thematic-comments').data('value', val);
    }

    function getCurrentPage() {
      const pageCount = $('.reload-thematic-download').data('value');
      return pageCount;
    }

    function getCurrentPageComments() {
      const pageCount = $('.reload-thematic-comments').data('value');
      return pageCount;
    }

    function onClickPagination() {
      $('.c-pagination-click-download').on('click', function() {
        setPageCount(getCurrentPage() + 1);
        showLoader('#tab-loader');
        showTilesIrmoReports(countryFilter, getCurrentPage());
      });
    }

    function onClickPaginationComments() {
      $('.c-pagination-click-comments').on('click', function() {
        setPageCountComments(getCurrentPageComments() + 1);
        showLoader('#tab-loader-comments');
        showTilesComments(countryFilter, getCurrentPageComments());
      });
    }

    function showTilesIrmoReports(country, pageNext) {
      const activeCountry = parseInt(country) > 0 ? `filter[id]=${country}&` : '';
      $.getJSON(`/apiJSON/countries?${activeCountry}fields=id,label,alias&sort=label&range=4&page=${pageNext}`, function (countries) {
        for (let i = 0; i < countries.data.length; i += 1) {
          appendTilesIRM(countries.data[i], irmContainer);
        }
      });
    }

    function showTilesComments(country, pageNext) {
      const activeCountry = parseInt(country) > 0 ? `filter[id]=${country}&` : '';
      $.getJSON(`/apiJSON/countries?${activeCountry}fields=id,label,alias&sort=label&range=4&page=${pageNext}`, function (countries) {
        for (let i = 0; i < countries.data.length; i += 1) {
          appendTilesComments(countries.data[i], commentsContainer);
        }
      });
    }

    function buildSelectorDownload(selector, placeholder, endpoint, query) {
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

        $(countrySelectorDownload).on('change', function () {
          $(irmContainer).html('');
          showLoader('#tab-loader');
          countryFilter = countrySelectorDownload.val();
          page = 1;
          showTilesIrmoReports(countryFilter, page);
        });
      });
    }

    function buildSelectorComments(selector, placeholder, endpoint, query) {
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

        $(countrySelectorComments).on('change', function () {
          $(irmContainer).html('');
          showLoader('#tab-loader-comments');
          countryFilter = countrySelectorComments.val();
          page = 1;
          showTilesComments(countryFilter, page);
        });
      });
    }


    buildSelectorDownload(countrySelectorDownload, 'All countries', 'countries', 'fields=id,label&sort=label');
    buildSelectorComments(countrySelectorComments, 'All countries', 'countries', 'fields=id,label&sort=label');
    onClickPagination();
    onClickPaginationComments();
    initIRMTabs(onChangeIRMTabs);
    showTilesIrmoReports(countryFilter, page);
    showTilesComments(countryFilter, page);


  })(jQuery);
}
