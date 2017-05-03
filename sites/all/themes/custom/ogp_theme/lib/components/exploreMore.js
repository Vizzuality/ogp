function buildExploreMoreTiles(endPoint, filter, value) {
  let filters = '';
  if (filter) {
    filters = `filter[${filter}]=${value}&`;
  }
  console.log(`/apiJSON/${endPoint}?${filters}`);
  $.getJSON(`/apiJSON/${endPoint}?${filters}`, (data) => {
    if (data.data.length) {
      const tiles = data.data;
      appendTilesRandom(tiles, $('.explore-more-container'), 4);
    }
    removeLoader('.c-explore-more');
  });
}
