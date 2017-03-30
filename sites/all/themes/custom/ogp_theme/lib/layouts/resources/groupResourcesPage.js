function showGroupResourcesPage() {
  (function($) {
    // cache dom
    const tileContainer = $('#groupResourcesTiles');

    // fetch content and append
    $.getJSON(`/apiJSON/group_resources`, function (data) {
      data.data.forEach(function(resource) {
        const html = `
          <div class="column small-12 medium-4 c-tile">
            <a href="${resource.alias}" class="tile -tall">
              <span class="text -tile -white">
                ${resource.label}
              </span>
            </a>
          </div>
        `;
        tileContainer.append(html);
      });
      removeLoader('.l-section', null, true);
    });
  })(jQuery);
}
