function showGroupResourcesDetail(id) {
  (function($) {

    // cache dom
    const currentNode = $('#groupResourcesDetail').data('node');
    const tabsContainer = $('#groupResourcesTabs .tabs-container');
    const searchContainer = $('#resourceTilesSearch input');
    const tilesContainer = $('#tilesContainer');
    const searchEl = $('.c-tile');
    const searchText = $('.c-tile .tile');

    // custom callback for tabs component
    const onChangeTab = (sub_group_id, label) => {
      hideNoResults('#noResultsContainer');
      showLoader('.l-section');
      tilesContainer.html('');
      searchContainer.val('');
      const filterGroup = currentNode === 'All Resources' ? '' : `filter[group_resource]=${currentNode}&`;
      $.getJSON(`/apiJSON/resources?${filterGroup}filter[sub_group]=${sub_group_id}`, (data) => {
        if (data.data.length) {
          appendTiles(data.data, tilesContainer, 4);
        } else {
          showNoResults('#noResultsContainer', 'No resources available', 'tall', 'grey', 'xxlarge');
        }
        removeLoader('.l-section', null, true);
      });
      setSearchPlaceholder(searchContainer, label);
    };

    // fetch content and append
    $.getJSON(`/apiJSON/sub_group_resource`, (data) => {
      buildTabs(data.data, tabsContainer, onChangeTab);
      setSearchPlaceholder(searchContainer, data.data[0].label);
      setSearchListeners(searchEl, searchText);
      const filterGroup = currentNode === 'All Resources' ? '' : `filter[group_resource]=${currentNode}&`;
      $.getJSON(`/apiJSON/resources?${filterGroup}filter[sub_group]=${data.data[0].id}&sort=-post_highlighted`, (resources) => {
        if (resources.data.length) {
          appendTiles(resources.data, tilesContainer, 4);
        } else {
          showNoResults('#noResultsContainer', 'No resources available', 'tall', 'grey', 'xxlarge');
        }
        removeLoader('.l-section', null, true);
      });
    });
  })(jQuery);
}
