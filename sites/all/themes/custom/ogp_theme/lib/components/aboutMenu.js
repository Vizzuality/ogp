function aboutMenu() {
  (function ($) {

    $('.parent .icon').click(function() {
      const id = $(this).data('value');
      $(`#${id}.sub-menu`).toggleClass('-open');
      $(`#${id}`).toggleClass('-open');
    });

  })(jQuery);
}
