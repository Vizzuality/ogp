function removeLoader(container, removeList, hide) {
  if (hide) {
    $(`${container} .c-loader`).addClass('-hidden');
  } else {
    $(`${container} .c-loader`).remove();
  }

  // additional items to remove -hidden class from
  if (removeList) {
    removeList.forEach(function(item) {
      $(item).removeClass('-hidden');
    });
  }
}

function showLoader(container) {
  $(`${container} .c-loader`).removeClass('-hidden');
}
