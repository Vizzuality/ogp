function showResourcesDetail(id) {
  (function($) {
    $.getJSON(`/apiJSON/resources_info?filter[id]=${id}`, function (data) {
      buildExploreMoreTiles('resources_info', 'group_resource', data.data[0].group_resource[0]);
    });
  })(jQuery);
}
