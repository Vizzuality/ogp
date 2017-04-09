function showAboutPages() {
  (function ($) {

  const tabsContainer = $('.tabs-container');
  const containerInfo = $('#containerInfo');

  // custom callback for tabs component
  const onChangeAboutPageTab = function (id, label) {
    $('.tab-content').addClass('-hidden');
    $(`.${id}`).removeClass('-hidden');
  };

  function initAboutTabs(onChange) {
    initTabs();
    setTabListeners(onChange);
  }

  showLoader('#containerInfo');
  $.getJSON(`/apiJSON/page?filter[page_category]=2925`, (data) => {
    buildTabs(data.data, tabsContainer, onChangeAboutPageTab);
    initAboutTabs(onChangeAboutPageTab);
    for (let i = 0; i < data.data.length; i += 1) {
      containerInfo.append(`
        <div class="tab-content -hidden ${data.data[i].id}">
          <h3 class="text -section-title">${data.data[i].label}</h3>
          <div class="text -body-content">
            <p class="text -body-content">
              ${data.data[i].body.value}
            </p>
          </div>
        </div>
      `);
    }
    removeLoader('#containerInfo', null, true);
  });

  })(jQuery);
}
