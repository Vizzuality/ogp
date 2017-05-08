function addBanner(type, id) {
  switch (type) {
    case 'writestory':
      $('.banners-container').append(`
        <div class="l-full-width -blue -short -center">
          <div class="row">
            <div class="column small-12 medium-7 large-9">
              <h3 class="text -title-small -white">Have a story worth sharing? </h3>
              <p class="text -white">
                Write your own story and tell us how your government and civil society are working
                together to accomplish open government commitments.
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
              <h3 class="text -title-small -white">OGP Newsletters</h3>
              <p class="text -white">
                Sign-ups for OGP in the News, the Gazette, the Civil Society mailing list, and our monthly highlights.
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
                  <span class="c-button -box -large -center show-people-modal">EXPLORE PEOPLE</span>
                </div>
              </div>
            </div>
          `);
          initModalPeople(data);
        });
      break;
    default:
      break;
  }

  function initModalPeople(countriesData) {
    $('.show-people-modal').click(function() {
      updateMapModal(id, 'peopleDetail', countriesData);
    });
  }
}
