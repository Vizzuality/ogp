function buildExploreMoreTiles(endPoint, filter, value, country) {
  let filters = '';
  if (filter) {
    filters = `filter[${filter}]=${value}&`;
  }
  $.getJSON(`/apiJSON/${endPoint}?${filters}`, (data) => {
    if (data.data.length) {
      const tiles = data.data;
      appendTilesRandom(tiles, $('.explore-more-container'), 4, '', country);
    }
    removeLoader('.c-explore-more');
  });
}
