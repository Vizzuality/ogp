function showResourcesDetail(id) {
  (function($) {
    $.getJSON(`/apiJSON/resources?filter[id]=${id}`, function (data) {
      buildExploreMoreTiles('resources', 'group_resource', data.data[0].group_resource[0], false);
    });
  })(jQuery);
}
