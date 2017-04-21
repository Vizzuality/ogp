function aboutMenu() {
  (function ($) {

    $('.parent').click(function() {
      const id = $(this).attr('id');
      $(`#${id}.sub-menu`).toggleClass('-open');
      $(this).toggleClass('-open');
    });

  })(jQuery);
}
