function showIrmReports() {
  (function($) {

    const tabsContainer = $('.tabs-container');
    const containerInfo = $('#container-info');

    // custom callback for tabs component
    const onChangeIRMTabs = function (id, label) {
      $('.tab-content').addClass('-hidden');
      $(`.${id}`).removeClass('-hidden');
    };

    function initIRMTabs(onChange) {
      initTabs();
      setTabListeners(onChange);
    }

    initIRMTabs(onChangeIRMTabs);

  })(jQuery);
}
