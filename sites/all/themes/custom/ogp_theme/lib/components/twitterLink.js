function twitterLink() {
  (function ($) {
    const idStatus = $('.value-status').text();
    $('.link-twitter').attr('href', idStatus);
  })(jQuery);
}
