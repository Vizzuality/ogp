function buildPagination(page, totalPages) {
  let numbersPager = '';
  if (page > 1) {
    numbersPager += '<li class="prev text -pagination onClickPagination" data-value="' + (page - 1) + '">back</li>';
  }
  // previous pages
  for (var j = page - 4; j < page; j += 1) {
    if (j < 1) continue;

    if (j === page - 4 && j >= 2) {
      numbersPager += '<li class="text -pagination onClickPagination" data-value="1">1</li>';
      numbersPager += '<li class="text -pagination onClickPagination" data-value="' + j + '">\u2026</li>';
      continue;
    }

    if (j <= totalPages) {
      if (j < page) {
        numbersPager += '<li class="text -pagination onClickPagination" data-value="' + j + '">' + j + '</li>';
      }
    }
  }
  // next pages
  for (var _j = page; _j < page + 5; _j += 1) {
    if (_j <= totalPages) {
      if (_j === page) {
        numbersPager += '<li class="-selected text -pagination onClickPagination" data-value="' + _j + '">' + _j + '</li>';
        continue;
      }

      if (_j < page + 4) {
        numbersPager += '<li class="text -pagination onClickPagination" data-value="' + _j + '">' + _j + '</li>';
      }

      if (_j === page + 4) {
        numbersPager += '<li class="text -pagination onClickPagination" data-value="' + _j + '">\u2026</li>';
        numbersPager += '<li class="text -pagination onClickPagination" data-value="' + totalPages + '">' + totalPages + '</li>';
      }
    }
  }
  if (page < totalPages) {
    numbersPager += '<li class="next text -pagination onClickPagination" data-value="' + (page + 1) + '">next</li>';
  }
  return numbersPager;
}

function initPagination(page, totalPages, containerId) {
  const container = $(`#${containerId} .c-pagination`);
  if (totalPages > 1) {
    const paginationHtml = buildPagination(page, totalPages);
    container.html(paginationHtml);
  } else {
    container.html('');
  }
}
