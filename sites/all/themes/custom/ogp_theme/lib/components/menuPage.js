function menuPage() {
  (function ($) {
    $('.menu-icon-responsive').click(function() {
      const value = $(this).attr('data-value');
      if (value === 'false') {
        $(this).attr('data-value', 'true');
        $('.c-main-menu').css('display', 'block');
        $('.c-main-menu').css('left', 'calc(0vw - 100px)');
        $('.icon-lines').css('display', 'none');
        $('.icon-cross').css('display', 'block');
      } else {
        $(this).attr('data-value', 'false');
        $('.c-main-menu').css('display', 'none');
        $('.icon-lines').css('display', 'block');
        $('.c-main-menu').css('left', '-100vw');
        $('.icon-cross').css('display', 'none');
      }
    });
  })(jQuery);
}
