function aboutMenu() {
  (function ($) {

    $('.parent .icon').click(function() {
      const id = $(this).attr('id');
      $(`#${id}.sub-menu`).toggleClass('-open');
      $(this).toggleClass('-open');
    });

  })(jQuery);
}
