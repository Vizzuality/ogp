function buildExploreMoreTiles(endPoint, filter, value, country, numberInformation) {
  let filters = '';
  if (filter) {
    filters = `filter[${filter}]=${value}&`;
  }
  $.getJSON(`/apiJSON/${endPoint}?${filters}`, (data) => {
    if (data.data.length) {
      const tiles = data.data;
      appendTilesRandom(tiles, $('.explore-more-container'), 4, '', country, numberInformation);
    }
    removeLoader('.c-explore-more');
  });
}
