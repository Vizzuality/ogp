function showCurrentCommitmentDetail(id) {
  (function ($) {

    function buildCurrentCommitment() {
      $.getJSON(`/apiJSON/current_commitment/${id}`, function (data) {
        if(data.data[0].lead_institution[0]) {
          $('#currentCommitmentContent .lead').html(data.data[0].lead_institution[0]);
        }
        if(data.data[0].support_institution[0]) {
          $('#currentCommitmentContent .support').html(data.data[0].support_institution[0]);
        }
      });
    }

    $('#theme-menu').addClass('active');
    buildCurrentCommitment();
    buildExploreMoreTiles('current_commitment', '', '', false);

  })(jQuery);
}
