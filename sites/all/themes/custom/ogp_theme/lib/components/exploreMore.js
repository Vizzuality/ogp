function buildExploreMoreTiles(endPoint, filter, value) {
  let filters = '';
  if (filter) {
    filters = `filter[${filter}]=${value}&`;
  }
  $.getJSON(`/apiJSON/${endPoint}?${filters}page[size]=4`, (data) => {
    if (data.data.length) {
      const tiles = data.data.slice(0, 4);
      appendTiles(tiles, $('.c-explore-more .container'), 4);
    }
    removeLoader('.c-explore-more');
  });
}
