function showSliderHomePage() {
  (function ($) {
    $.getJSON(`/apiJSON/stories?sort=-created`, function (stories) {
      for (let i = 0; i < 3; i += 1) {
        if (stories.data[i].image) {
          $(`.slider-image-${i}`).css('background-image', `url(${stories.data[i].image})`);
        }
        $(`.slider-${i}`).html(`
          <div>
            <h1 class="title-text -white">
              <a href="${stories.data[i].alias}">${stories.data[i].label}</a>
            </h1>
            <div class="small-12 medium-5 large-4">
              <a class="c-button -box" href="${stories.data[i].alias}">Explore the story</a>
            <div>
          </div>
        `);
      }
    });
  })(jQuery);
}
