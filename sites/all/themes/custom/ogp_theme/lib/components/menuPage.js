function menuPage() {
  (function ($) {
    $('.menu-icon-responsive').click(function() {
      const value = $(this).attr('data-value');
      if (value === 'false') {
        $(this).attr('data-value', 'true');
        $('.c-main-menu').css('display', 'block');
        $('.icon-lines').css('display', 'none');
        $('.icon-cross').css('display', 'block');
      } else {
        $(this).attr('data-value', 'false');
        $('.c-main-menu').css('display', 'none');
        $('.icon-lines').css('display', 'block');
        $('.icon-cross').css('display', 'none');
      }
    });
  })(jQuery);
}
