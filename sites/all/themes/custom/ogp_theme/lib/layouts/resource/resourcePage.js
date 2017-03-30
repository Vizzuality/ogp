function showDocumentResourcePage() {
  (function($) {
    // cache dom
    const tileContainer = $('#resourceDocsTiles');
    const searchEl = $('.c-tile');
    const searchText = $('.c-tile .tile');
    const searchContainer = $('#resourceTilesSearch input');

    // fetch content and append
    $.getJSON(`/apiJSON/resource`, function (data) {
      setSearchPlaceholder(searchContainer, data.data[0].label);
      setSearchListeners(searchEl, searchText);
      if (data.data.length) {
        appendTiles(data.data, tileContainer, 4);
      } else {
        showNoResults();
      }
    });

  })(jQuery);
}
