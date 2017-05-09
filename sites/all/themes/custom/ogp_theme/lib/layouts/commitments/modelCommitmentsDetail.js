function showModelCommitmentDetail(id) {
  (function ($) {

    const onChangeTab = (id, label) => {
      $('.tab-container').addClass('-hidden')
      $(`#${id} .tab-container`).removeClass('-hidden');
    }

    function fetchModelCommitmentDetail() {
      $.getJSON(`/apiJSON/modelcommitments/${id}`, function (data) {
        $('.strength-info').html(`<strong>Strength: </strong>${data.data[0].strength.label}`);
        $('.contributor-info').html(`<strong>Contributors: </strong>${data.data[0].contributors}`);
        $('#justification .container').html(data.data[0].justification);
        appendStandardsTiles(data.data[0], $('#standards .container'), 2);
        removeLoader('.l-section', null, true);
      });
    }

    // init view
    initTabs();
    setTabListeners(onChangeTab);
    fetchModelCommitmentDetail();
    buildExploreMoreTiles('modelcommitments', '', '', false, false);

  })(jQuery);
}
