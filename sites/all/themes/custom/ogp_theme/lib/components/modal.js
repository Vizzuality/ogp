function initModal(id, template, customClass) {
  const html = `
    <div id="${id}" class="c-modal ${customClass}">
      <div class="modal-overlay"></div>
      <div class="modal-container">
        <svg class="icon close-icon js-close-modal"><use xlink:href="#icon-close"></use></svg>
        <div class="modal-content">
          ${template}
        </div>
      </div>
    </div>
  `;
  $('body').append(html);
  setModalListeners(id);
}

function closeModal(id) {
  $(`#${id}`).removeClass('-open');
}

function openModal(id) {
  $(`#${id}`).addClass('-open');
  $('body').addClass('-fixed');
}

function updateModalContainer(id, template) {
  $(`#${id} .modal-content`).html(template);
}

function setModalListeners(id) {
  $(`.js-${id}Open`).on('click', function() {
    openModal(id);
  });
  $(`.js-close-modal`).on('click', function() {
    closeModal(id);
  });
  $(`.modal-overlay`).on('click', function() {
    closeModal(id);
  });
  if (id === 'subscribeModal') {
    onChangeNewsletterListener();
  }
}

function onChangeNewsletterListener() {
  $('.newsletter-selector').on('click', function() {
    const newsletterId = `http://opengovpartnership.us3.list-manage.com/subscribe/post?u=b25f647af089f5f52485a663d&id=${$(this).data('option')}`;
    $('.newsletter-selector').removeClass('-selected');
    $(this).addClass('-selected');
    $('#subscribeModal .c-form').attr('target', newsletterId);
  });
}

function buildSubscribeModal() {
  const subscribeModalTemplate = `
    <form class="c-form validate" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" action="http://opengovpartnership.us3.list-manage.com/subscribe/post?u=b25f647af089f5f52485a663d&id=874e29c81c" method="POST">
      <div class="content-wrapper">
        <h3 class="text -module-title with-padding">Our Newsletters</h3>
        <label class="text -small-bold -blue" for="email">Email</label>
        <input type="email" required="required" placeholder="Your email address" id="mce-EMAIL" name="EMAIL">
        <label class="text -small-bold -blue">Subscribe to</label>
        <div class="selector-boxes">
          <div class="text newsletter-selector -selected -interactive" data-option="874e29c81c">OGP Newsletter</div>
          <div class="text newsletter-selector -interactive" data-option="20323ef712">OGP Gazette</div>
          <div class="text newsletter-selector -interactive" data-option="ec2455b5b5">Boletín de OGP</div>
        </div>
      </div>
      <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="c-button -tall -green-back -white" value="subscribe">
    </form>
  `;
  initModal('subscribeModal', subscribeModalTemplate, '-subscribe');
}

function buildMapModal() {
  let mapModalTemplate = '';
  initModal('mapModal', mapModalTemplate, '-map');
}

function updateMapModal(countryId, type, countriesData) {
  $(`#mapModal .modal-content`).html('');
  setMapModalContent('mapModal', type, countryId, countriesData);
}

function setDataToModal(id, html) {
  updateModalContainer(id, html);
  removeLoader('.l-map', null, true);
  openModal(id);
}

function pushDefaultModal(id, query, countryData, dataLabel, buttonText, buttonLink, modalType) {
  $.getJSON(`apiJSON/${query}`, function (data) {
    let dataInfo = '';
    if (data.data.length > 0) {
      const trimmedData = modalType === 'slider' ? data.data.slice(0,3): data.data;
      trimmedData.forEach(function(data) {
        if (modalType === 'list') {
          dataInfo += `
            <a href="${data.alias}">
              <h2 class="text -title-x-small">${data.label}</h2>
            </a>
          `;
        } else if (modalType === 'grid'){
          dataInfo += `
            <span class="text -small-bold -blue">${data.label}</span>
            <p class="text -body-content">${data.body.value}</p>
          `;
        } else if (modalType === 'slider') {
          dataInfo += `
            <div class="slide">
              <a href="${data.topic[0] ? data.topic[0].alias : ''}" class="text -small-bold -blue">${data.topic[0] ? data.topic[0].label : ''}</a>
              <h2 class="text -title-x-small">${data.label}</h2>
              <p class="text -meta">${data.author[0] ? data.author[0].label : ''}</p>
            </div>
          `;
        }
      });
    }
    const html = `
      <div class="modal-header">
        <div class="header-info">
          <h3 class="text -module-title">${countryData[0].label}</h3>
          <p class="text -meta">Member since ${moment.unix(countryData[0].memberSince).format('YYYY')}, Action plan 1</p>
        </div>
        <div class="c-data-number">
          <h3 class="text -number">${data.count}</h3>
          <p class="text -small-bold">${dataLabel}</p>
        </div>
      </div>
      <div class="content-wrapper -scroll ${modalType === 'slider' ? 'stories-slider': ''}">
        ${dataInfo}
      </div>
      <div class="button-container -fixed">
        <a href="/${buttonLink}" class="c-button -tall -green-back -box">${buttonText}</a>
        <a href="${countryData[0].alias}" class="c-button -tall -green-back -box">VIEW COUNTRY</a>
      </div>
    `;
    setDataToModal(id, html);
    if (modalType === 'slider') {
      $('.stories-slider').slick({
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dotsClass: 'dots-slider-modal',
      });
    }
  });
}

function pushSmallModal(id, query, countryData, firstDataLabel, secondDataLabel, buttonText, buttonLink) {

  $.getJSON(`apiJSON/${query}`, function (data) {
    const html = `
      <div class="content-wrapper">
        <h3 class="text -module-title">${countryData[0].label}</h3>
        <p class="text -meta">Member since ${moment.unix(countryData[0].memberSince).format('YYYY')}</p>
        <div class="data-container">
          <div class="c-data-number -with-padding">
            <h4 class="text -number">${data.count}</h4>
            <span class="text -small-bold">${firstDataLabel}</span>
          </div>
          <div class="c-data-number -with-padding">
            <h4 class="text -number">3</h4>
            <span class="text -small-bold">${secondDataLabel}</span>
          </div>
        </div>
      </div>
      <div class="button-container">
        <a class="c-button -box -tall -green-back -white" href="${buttonLink}">${buttonText}</a>
        <a class="c-button -box -tall -green-back -white" href="${countryData[0].alias}">View country</a>
      </div>
    `;
    setDataToModal(id, html);
  });
}

function setMapModalContent(id, type, countryId, countriesData) {
  const countryData = countriesData.filter(function(country) {
    return country.id == countryId;
  });
  switch (type) {
    case 'actionPlan':
      pushSmallModal(id, `irm_commitments?filter[country]=${countryId}`, countryData, 'commitments', 'themes covered', 'latest stories', '/stories');
      break;
    case 'starred':
      pushDefaultModal(id, `starredcommitments?filter[country]=${countryId}`, countryData, 'starred commitments', 'latest stories', '/stories', 'list');
      break;
    case 'event':
      pushDefaultModal(id, `events?filter[country]=${countryId}`, countryData, 'upcoming events', 'go to events', '/events', 'list');
      break;
    case 'commitment':
      const currentFilter = $('.select-legend-dropdown').val() ? `&filter[theme_id]=${$('.select-legend-dropdown').val()}` : '';
      pushDefaultModal(id, `current_commitment?filter[country]=${countryId}${currentFilter}`, countryData, 'current commitments', 'explore this theme', '/theme', 'list');
      break;
    case 'people':
      pushDefaultModal(id, `people?filter[country]=${countryId}`, countryData, 'people involved', 'latest stories', '/stories', 'grid');
      break;
    case 'stories':
      pushDefaultModal(id, `stories?filter[country]=${countryId}`, countryData, 'stories', 'latest stories', '/stories', 'slider');
      break;
    default:
      break;
  }
}