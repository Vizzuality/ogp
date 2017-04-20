function showSliderHomePage() {
  (function ($) {
    $.getJSON(`/apiJSON/stories?fields=label,alias,image&sort=-created&range=3`, function (stories) {
      showLoader('.slider-cover-home');
      for (let i = 0; i < 3; i += 1) {
        $('.slider-cover-home').append(`
          <div class="c-slider-home-page slider-image-0 ${stories.data[i].image ? '-image' : ''}">
            <div class="row">
              <div class="column small-12 medium-9">
                <div class="container slider-0">
                  <div>
                    <h1 class="title-text -white">
                      <a href="${stories.data[i].alias}">${stories.data[i].label}</a>
                    </h1>
                    <div class="small-12 medium-5 large-4">
                      <a class="c-button -box" href="${stories.data[i].alias}">Explore the story</a>
                    <div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        `);
        if (stories.data[i].image) {
          $(`.slider-image-${i}`).css('background-image', `url(${stories.data[i].image})`);
        }
      }
      removeLoader('.slider-cover-home');
      $('.slider-cover-home').slick({
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dotsClass: 'dots-slider',
        adaptiveHeight: true
      });
    });
  })(jQuery);
}
