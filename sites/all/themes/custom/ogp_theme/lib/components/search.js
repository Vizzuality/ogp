function setSearchPlaceholder(container, label) {
  container.attr('placeholder', `Search ${label.toLowerCase()}...`);
}

function setSearchListeners() {
  $('.c-search-bar input').keyup(function() {
    const activeTab = $('#themesTiles .c-tabs .-selected').data('node');

    // listen for type ahead
    let valueInput = $(this).val();
    valueInput = valueInput.toLowerCase();
    $('.c-tile').each(function () {
      if (activeTab) {
        if ( $('.tile', this).html().toLowerCase().indexOf(valueInput) !== -1 && $(this).data('group') === activeTab ) {
          $(this).css('display', 'block');
        } else {
          $(this).css('display', 'none');
        }
      } else {
        if ($('.tile', this).html().toLowerCase().indexOf(valueInput) !== -1) {
          $(this).css('display', 'block');
        } else {
          $(this).css('display', 'none');
        }
      }
    });
    // check for zero results
    const results = $('.c-tile').filter(function () {
      return $(this).css('display') === 'block';
    }).length;

    // show empty results
    if (results === 0) {
      showNoResults('#noResultsContainer', 'No resources available', 'tall', 'grey', 'xxlarge');
    } else {
      hideNoResults('#noResultsContainer');
    }
  });
}
