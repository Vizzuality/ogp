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

    $('.c-form').submit(function(e) {
      const title = $('#title').val();
      const content = $('.-content').val();
      const country = $('#country').val();
      const topic = $('#topic').val();
      const url = './submitCookiesStory.php';
      if (title !== '' && content !== '') {
        const dataString = 'title=' + title + '&content=' + content + '&country=' + country + '&topic=' + topic;
        $.ajax({
          type: 'POST',
          url: url,
          data: dataString,
          success: function(data) {
            document.location.href = `${window.location.origin}/submit-story-accepted`;
          }
        });
      } else {
        // console.log('data not accepted');
      }
      e.preventDefault();
    });

  })(jQuery);
}
