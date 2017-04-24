function showWorkingGroupDetail(id) {
  (function($) {
    const tabsContainer = $('.tabs-container');
    const containerInfo = $('#container-info');

    // custom callback for tabs component
    const onChangeWorkinPageTab = function (id, label) {
      $('.tab-content').addClass('-hidden');
      $(`.${id}`).removeClass('-hidden');
    };

    function initWorkingTabs(onChange) {
      initTabs();
      setTabListeners(onChange);
    }
    showLoader('.working-group-content');
    $.getJSON(`/apiJSON/working_group_page?filter[working_group]=${id}&filter[show]=1`, (data) => {
      buildTabs(data.data, tabsContainer, onChangeWorkinPageTab);
      initWorkingTabs(onChangeWorkinPageTab);
      for (let i = 0; i < data.data.length; i += 1) {
        containerInfo.append(`
          <div class="tab-content -hidden ${data.data[i].id}">
            <h3 class="text -section-title">${data.data[i].label}</h3>
            <div class="text -body-content">
              ${data.data[i].body.value}
            </div>
          </div>
        `);
      }
      removeLoader('.working-group-content', null, true);
    });
  })(jQuery);
}
