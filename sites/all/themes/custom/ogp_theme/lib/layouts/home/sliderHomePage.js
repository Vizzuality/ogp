function showSliderHomePage() {
  (function ($) {

    function getSlideConten(dataContent, dataSlide, imageContent) {
      let textLink = 'Explore the content';
      let imageSlide;
      if (dataSlide.text_link) {
        textLink = `${dataSlide.text_link}`;
      }
      if (imageContent) {
        if (dataSlide.image) {
          imageSlide = `<div class="c-slider-home-page slider-image-0 ${dataSlide.image ? '-image' : ''}">`;
        } else {
          imageSlide = `<div class="c-slider-home-page slider-image-0 ${dataContent.image ? '-image' : ''}">`;
        }
      } else {
        imageSlide = `<div class="c-slider-home-page slider-image-0 ${dataSlide.image ? '-image' : ''}">`;
      }
      const slideContent = `
        ${imageSlide}
          <div class="row">
            <div class="column small-12 medium-9">
              <div class="container slider-0">
                <div>
                  <h1 class="title-text -white">
                    <a href="${dataSlide.alias}">${dataContent.label}</a>
                  </h1>
                  <div class="small-12 medium-5 large-4">
                    <a class="c-button -box" href="${dataSlide.alias}">${textLink}</a>
                  <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      return slideContent;
    }

    $.getJSON('/apiJSON/slider_home_page', function (stories) {
      showLoader('.slider-cover-home');
      for (let i = 0; i < stories.count; i += 1) {
        if (stories.data[i].show) {
          let slide = '';

          if (stories.data[i].information_current) {
            slide = getSlideConten(stories.data[i].information_current, stories.data[i], false);
          }

          if (stories.data[i].information_event) {
            slide = getSlideConten(stories.data[i].information_event, stories.data[i], false);
          }

          if (stories.data[i].information_irm) {
            slide = getSlideConten(stories.data[i].information_irm, stories.data[i], false);
          }

          if (stories.data[i].information_model) {
            slide = getSlideConten(stories.data[i].information_model, stories.data[i], false);
          }

          if (stories.data[i].information_news) {
            slide = getSlideConten(stories.data[i].information_news, stories.data[i], false);
          }

          if (stories.data[i].information_page) {
            slide = getSlideConten(stories.data[i].information_page, stories.data[i], false);
          }

          if (stories.data[i].information_starred) {
            slide = getSlideConten(stories.data[i].information_starred, stories.data[i], false);
          }

          if (stories.data[i].information_stories) {
            slide = getSlideConten(stories.data[i].information_stories, stories.data[i], true);
          }

          if (stories.data[i].information_working) {
            slide = getSlideConten(stories.data[i].information_working, stories.data[i], false);
          }

          if (stories.data[i].information_working_page) {
            slide = getSlideConten(stories.data[i].information_working_page, stories.data[i], false);
          }

          $('.slider-cover-home').append(slide);
        }
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
