function showStoriesSubmitPage(id) {
  (function ($) {

    // cache
    const themeSelector = '.type-select';
    const countrySelector = '.country-select';

    $('#stories-menu').addClass('active');

    $(themeSelector).select2({
      minimumResultsForSearch: Infinity,
      containerCssClass: '-tall',
      placeholder: 'All story types'
    });
    $(countrySelector).select2({
      minimumResultsForSearch: Infinity,
      containerCssClass: '-tall',
      placeholder: 'All countries'
    });

    $.getJSON(`/apiJSON/countries?fields=id,name,label&sort=label`, function (data) {
      appendSelectOptionsFromData(countrySelector, data.data);
      $.getJSON(`/apiJSON/themes?sort=label&fields=id,label`, function (data) {
        appendSelectOptionsFromData(themeSelector, data.data);
        removeLoader('.c-form', null, true);
      });
    });

    $('.js-submit-story').click(function() {
      const title = $('.-title').val();
      const countryId = $('.country-select').val();
      const topicId = $('.type-select').val();
      const date = $('.-date').val();
      const image = $('.-image').val();
      const content = $('.-content').val();
      const email = $('.-email').val();
      const author = $('.-author').val();
      $.ajax({
        url: `/sites/all/themes/custom/ogp_theme/phpFunctions/createNode.php`,
        type: 'POST',
        dataType: 'json',
        data: {}
      }).done(function (data) {
      });
    });

  })(jQuery);
}
