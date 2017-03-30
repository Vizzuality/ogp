function showThemesPage() {
  (function showAPIThemes($) {

    //consts
    const themesContainer = $('#tilesContainer');
    const searchContainer = $('#themesTilesSearch input');
    const searchEl = $('.c-tile');
    const searchText = $('.c-tile .tile');
    const themesTitle = $('.tiles-heading');

    // local functions
    function showThemesTiles() {
      $.getJSON(`/apiJSON/themes`, function(data) {
        if (data.data.length) {
          appendTiles(data.data, themesContainer, 3);
        } else {
          showNoResults('#tilesNoResults', 'No themes available', 'tall', 'grey', 'xxlarge');
        }
        removeLoader('.l-section', null, true);
      });
    }

    // custom callback for tabs component
    const onChangeTab = (id, label) => {
      themesTitle.html(label);
      let currentSearch = searchContainer.val();
      currentSearch = currentSearch.toLowerCase();
      const parseId = parseInt(id);
      $('.c-tile').each(function () {
        if (currentSearch) {
          if ( ($(this).data('group') === parseId && $(this).html().toLowerCase().indexOf(currentSearch) > -1) ||
          (id === '0' && $('.tile', this).html().toLowerCase().indexOf(currentSearch) > -1 )) {
            $(this).css('display', 'block');
          } else {
            $(this).css('display', 'none');
          }
        } else {
          if ($(this).data('group') === parseId || parseId === 0) {
            $(this).css('display', 'block');
          } else {
            $(this).css('display', 'none');
          }
        }
      });

      // check for zero results
      const results = $('.c-tile').filter(function () {
        return $(this).css('display') === 'block';
      }).length;

      // show empty results
      if (results === 0) {
        showNoResults('#noResultsContainer', 'No themes available', 'tall', 'grey', 'xxlarge');
      } else {
        hideNoResults('#noResultsContainer');
      }
    };

    // init page
    showThemesTiles();
    initTabs();
    setTabListeners(onChangeTab);
    setSearchListeners(searchEl, searchText);

  })(jQuery);
}
