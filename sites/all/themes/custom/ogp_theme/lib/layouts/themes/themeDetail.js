function showThemesDetail(id) {
  (function showAPIThemes($) {

    //cache
    const countrySelector = $('.country-selector');
    const contentContainer = $('#contentContainer .content-tiles');
    const contributorText = $('#contributorsText');
    let countryFilter;

    // local functions
    function setContributorsText(log, author, email) {
      const html = `
        <b>Contributors:</b> This topic has been developed for the Open Gov Guide by the National Democratic Institute. The lead author was Patrick Merloe with contributions from Michelle Brown and Tova Wang. Please send comments to pat@ndi.org.
      `;
      contributorText.html(html);
    }

    function setSelectCountryListerners() {
      countrySelector.on('change', function () {
        hideNoResults();
        showLoader('#themesDetail');
        const activeTab = $('.c-tabs .-selected').data('node');
        const countryModel = $(this).val();
        if (parseInt(countryModel) === 0) {
          showContent(contentContainer, activeTab);
        } else {
          showContent(contentContainer, activeTab, countryModel);
        }
      });
    }

    // init selector
    function initSelectors() {
      countrySelector.select2({
        minimumResultsForSearch: Infinity,
        containerCssClass: '-green -tall',
        dropdownCssClass: '-green',
        placeholder: 'All countries',
      });
      $('.select2').addClass('-green-select');
      $.getJSON(`/apiJSON/countries?fields=id,label&sort=label`, function(data) {
        data.data.forEach(function(country) {
          const option = `<option value="${country.id}">${country.label}</option>`;
          countrySelector.append(option);
        });
      });
      setSelectCountryListerners();
    }

    // custom callback for tabs component
    const onChangeTab = (id, label) => {
      hideNoResults();
      showLoader('#themesDetail');
      $('#themesDetail .-body-content').addClass('-hidden');
      $(`#themesDetail .${id}`).removeClass('-hidden');
      const activeCountry = countrySelector.val();
      if (parseInt(activeCountry) === 0) {
        showContent(contentContainer, id);
      } else {
        showContent(contentContainer, id, activeCountry);
      }
      setContributorsText();
      if (id === 'modelcommitments') {
        contributorText.removeClass('-hidden');
      } else {
        contributorText.addClass('-hidden');
      }
    }

    function showContent(container, endpoint, countryFilter) {
      container.html('');
      const countryQuery = countryFilter && (endpoint !== 'modelcommitments') ? `&filter[country]=${countryFilter}` : '';
      $.getJSON(`/apiJSON/${endpoint}?filter[theme]=${id}${countryQuery}`, function(data) {
        hideNoResults();
        if (data.data.length) {
          appendTilesWithoutBackground(data.data, container, 2, '-themes');
        } else {
          showNoResults(container, 'No content available', 'tall', 'grey', 'xxlarge', 'blue');
        }
        removeLoader('#themesDetail', null, true);
      });
    }
    // init page
    initTabs();
    setTabListeners(onChangeTab);
    initSelectors();
    showContent(contentContainer, 'starredcommitments');
    buildExploreMoreTiles('themes');

  })(jQuery);
}
