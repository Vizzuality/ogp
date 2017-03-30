function addBanner(type, id) {
  switch (type) {
    case 'writestory':
      $('.banners-container').append(`
        <div class="l-full-width -blue -short -center">
          <div class="row">
            <div class="column small-12 medium-7 large-9">
              <h3 class="text -title-small -white">What is your country doing?</h3>
              <p class="text -white">
                See how your goverment and civil society are working together to accomplish commitments
               for the current National Action Plan cycle. Or write your own story.
              </p>
            </div>
            <div class="column small-12 medium-5 large-3 vertical">
              <a class="c-button -box -large -center" href="/submit-story">write story</a>
            </div>
          </div>
        </div>
      `);
      break;
    case 'newsletter':
      $('.banners-container').append(`
        <div class="l-full-width -black -short -center">
          <div class="row">
            <div class="column small-12 medium-7 large-9">
              <h3 class="text -title-small -white">OGP’s monthly newsletter</h3>
              <p class="text -white">
                Helps goverments, civil society actors and concerned citizens stay informed
              </p>
            </div>
            <div class="column small-12 medium-5 large-3 vertical">
                <span class="c-button -box -large -center js-subscribeModalOpen">Subscribe</span>
            </div>
          </div>
        </div>
      `);
      break;
    case 'involved':
      $('.banners-container').append(`
        <div class="l-full-width -black -short -center">
          <div class="row">
            <div class="column small-12 medium-7 large-9">
              <h3 class="text -title-small -white">Get involved</h3>
              <p class="text -white">
                For the Open Government Partnership model to work, lots of people need to get involved
              </p>
            </div>
            <div class="column small-12 medium-5 large-3 vertical">
                <a class="c-button -box -large -center" href="/resources">Resources</a>
            </div>
          </div>
        </div>
      `);
      break;
      case 'peopleCountry':
        $.getJSON(`/apiJSON/countries/${id}`, function (data) {
          $('.banners-container').append(`
            <div class="l-full-width -blue -short -center">
              <div class="row">
                <div class="column small-12 medium-7 large-9">
                  <h3 class="text -title-small -white">People involved from ${data.data[0].label}</h3>
                  <p class="text -white">
                    For the Open Government Partnership model to work, lots of people need to get involved
                  </p>
                </div>
                <div class="column small-12 medium-5 large-3 vertical">
                  <a class="c-button -box -large -center" href="/submit-story">EXPLORE PEOPLE</a>
                </div>
              </div>
            </div>
          `);
        });
      break;
    default:
      break;
  }
}
