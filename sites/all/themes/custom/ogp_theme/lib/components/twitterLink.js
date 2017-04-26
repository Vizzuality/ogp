function twitterLink() {
  (function ($) {
    const idStatus = $('.value-status').text();
    $('.link-twitter').attr('href', `https://twitter.com/opengovpart/status/${idStatus}`);
  })(jQuery);
}
