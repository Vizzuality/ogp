function showStarredCommitmentDetail(id) {
  (function ($) {
    $('#theme-menu').addClass('active');
    buildExploreMoreTiles('starredcommitments', '', '', true);
  })(jQuery);
}
