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
          <div class="text newsletter-selector -interactive" data-option="add766fb76">OGP in the News</div>
        </div>
      </div>
      <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="c-button -tall -green-back -white" value="subscribe">
    </form>
    <a href="https://dgroups.org/hivos/ogp/login" rel="noreferrer noopener" target="_blank">
      <div class="content-footer">
        <span class="text -newsletter-selector">Join the OGP Civil Society Mailing List</span>
        <svg class="icon -blue -medium arrow"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use></svg>
      </div>
    </a>
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

function pushDefaultModal(id, query, countryData, dataLabel, buttonText, buttonLink, modalType, secondData) {
  let secondDataCount = 0;
  $.getJSON(`/apiJSON/${query}`, function (data) {
    let dataInfo = '';
    let id_people= [];
    if (dataLabel === 'people involved') {
      if (secondData.data.length > 0) {
        secondDataCount = secondData.data.length;
        for (let i = 0; i < secondData.data.length; i += 1) {
          id_people[i] = secondData.data[i].id;
          dataInfo += `
            <a class="text -small-bold -blue" href="${secondData.data[i].alias}">(point of contact) ${secondData.data[i].label}</a>
            <p class="text -body-content">${secondData.data[i].body ? secondData.data[i].body.value : ''}</p>`;
        }
      }
    }

    if (data.data.length > 0) {
      const trimmedData = modalType === 'slider' ? data.data.slice(0,3): data.data;
      trimmedData.forEach(function(data) {
        if (modalType === 'list') {
          dataInfo += `
            <a href="${data.alias}">
              <h2 class="text -title-x-small">${data.label}</h2>
            </a>
          `;
        } else if (modalType === 'grid') {
          if ($.inArray(data.id, id_people) === -1) {
            dataInfo += `
              <a class="text -small-bold -blue" href="${data.alias}">${data.label}</a>
              <p class="text -body-content">${addDots(data.body.value, 100)}</p>
            `;
          }
        } else if (modalType === 'slider') {
          dataInfo += `
            <div class="slide -stories">
              <a href="${data.topic[0] ? data.topic[0].alias : ''}" class="text -small-bold -blue">${data.topic[0] ? data.topic[0].label : ''}</a>
              <a href="/${data.alias}" class="text -section-title-small">${data.label}</a>
              <span class="text date-text -small-bold">${moment.unix(data.created).format('D MMMM YYYY')}</span>
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
          <p class="text -meta">Member since ${moment.unix(countryData[0].memberSince).format('YYYY')}, Action plans ${countryData[0].action_plan_count}</p>
        </div>
        <div class="c-data-number">
          <h3 class="text -number">${data.count + secondDataCount}</h3>
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
  });
}

function pushSmallModal(id, query, countryData, firstDataLabel, secondDataLabel, buttonText, buttonLink) {

  $.getJSON(`/apiJSON/${query}`, function (data) {
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
  let themeCommitmentAlias = 'theme';
  let countryData;
  if (type !== 'people') {
    countryData = countriesData.filter(function(country) {
      return country.id == countryId;
    });
  } else {
    countryData = countriesData.data;
  }
  switch (type) {
    case 'actionPlan':
      pushSmallModal(id, `irm_commitments?filter[country]=${countryId}`, countryData, 'commitments', 'themes covered', 'latest stories', 'stories', '');
      break;
    case 'starred':
      pushDefaultModal(id, `starredcommitments?filter[country]=${countryId}`, countryData, 'starred commitments', 'latest stories', 'stories', 'list', '');
      break;
    case 'event':
      pushDefaultModal(id, `events?filter[country]=${countryId}`, countryData, 'events', 'go to events', 'news-and-events', 'list', '');
      break;
    case 'commitment':
      if ($('.select-legend-dropdown').find(':selected').data('value')) {
        themeCommitmentAlias = $('.select-legend-dropdown').find(':selected').data('value');
      }
      const currentFilter = $('.select-legend-dropdown').val() ? `&filter[theme_id]=${$('.select-legend-dropdown').val()}` : '';
      pushDefaultModal(id, `current_commitment?filter[country]=${countryId}${currentFilter}`, countryData, 'current commitments', 'explore this theme', `${themeCommitmentAlias}`, 'list', '');
      break;
    case 'people':
      $.getJSON(`/apiJSON/people?filter[country_poc]=${countryId}`, function (poc) {
        pushDefaultModal(id, `people?filter[country]=${countryId}`, countryData, 'people involved', 'latest stories', 'stories', 'grid', poc);
      });
      break;
    case 'stories':
      pushDefaultModal(id, `stories?filter[country]=${countryId}&sort=-created`, countryData, 'stories', 'latest stories', 'stories', 'slider', '');
      break;
    default:
      break;
  }
}
