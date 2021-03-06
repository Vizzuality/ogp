function buildCountrySelector(selector, container, countries, activeTab) {
  selector.append('<option value="0">All countries</option>');
  selector.append('<svg class="icon -medium -blue"><use xlink:href="#icon-search"></use></svg>');
  appendSelectOptionsFromData(selector, countries)
  setCountrySelectorListeners(selector, container, countries, activeTab);
}

function setCountrySelectorListeners(selector, container, countriesData, activeTab) {
  selector.on('change', function () {
    setPageCount(1);
    showLoader(container);
    const filterValue = $(this).val();
    showCountriesData(countriesData, activeTab, container, filterValue);
  });
}

function setPageCount(val) {
  $('.page-count').data('value', val);
}

function getCurrentPage() {
  const pageCount = $('.page-count').data('value');
  return pageCount;
}

function onClickPagination(activeTab, container, countriesData) {
  $('.c-pagination-click').on('click', function() {
    setPageCount(getCurrentPage() + 1);
    showCountriesData(countriesData, activeTab, container);
  });
}

function showOnClickPagination() {
  $('.c-pagination-click').removeClass('-hidden');
}

function hideOnClickPagination() {
  $('.c-pagination-click').addClass('-hidden');
}

function initModalStarred(countriesData) {
  $('.show-modal-starred').click(function() {
    const country = $(this).data('value');
    setMapModalContent('mapModal', 'starred', country, countriesData);
  });
}

function setCountryDataTiles(container, country) {
  const activeTab = $('.tabs-container').find('.-selected').data('node');
  $(`#country-${country.id} .data-tiles`).html('');
  if (activeTab === 'starred') {
    if (country.starred_commitments.length > 0) {
      const trimCommitments = country.starred_commitments.slice(0, 2);
      appendSmallTiles(trimCommitments, `#country-${country.id}`, 2, '-short -country');
      $(`#country-${country.id} > .c-country-tile`).append(`
        <span data-value="${country.id}" class="show-modal-starred text -interactive -blue">Show all starred commitments</span>
      `);
    } else {
      showNoResults(`#country-${country.id} .data-tiles`, 'No starred commitments', 'medium', 'grey', 'xlarge', 'grey');
    }
  } else if (activeTab === 'potential') {
    if (country.year_action_plan !== null) {
      appendCountriesInfoBars(country, `#country-${country.id}`);
    } else {
      showNoResults(`#country-${country.id} .data-tiles`, 'No data available', 'medium', 'grey', 'xlarge', 'grey');
    }
  } else if (activeTab === 'relevance') {
    if (country.access_information || country.civic_participation || country.public_accountability || country.unclear) {
      appendCountriesRelevance(country, `#country-${country.id}`);
    } else {
      showNoResults(`#country-${country.id} .data-tiles`, 'No data available', 'medium', 'grey', 'xlarge', 'grey');
    }
  } else if (activeTab === 'thematic') {
    if (country.current_themes) {
      appendCountriesThematicBars(country, `#country-${country.id}`);
    } else {
      showNoResults(`#country-${country.id} .data-tiles`, 'No data available', 'medium', 'grey', 'xlarge', 'grey');
    }
  } else {
    showNoResults(`#country-${country.id} .data-tiles`, 'No data available', 'medium', 'grey', 'large', 'grey');
  }
  removeLoader('#countriesContentContainer', null, true);
}

function initCountryBox(container, country, activeTab) {
  const html = `
    <div class="column small-12 medium-6" id="country-${country.id}">
      <div class="c-country-tile">
        <a class="text -title-x-small" href="/${country.alias}">${country.label}&nbsp;<svg class="icon -blue -medium arrow"><use xlink:href="#icon-arrow"></use></svg></a>
        <div class="first-info text">
          <span>Current Commitments ${parseInt(country.current_commitments_count)}</span>
          <span>Reviewed Commitments ${parseInt(country.irm_commitments_count)}</span>
        </div>
        <div class="text border-line">
          <span>Starred Commitments ${parseInt(country.starred_commitments_count)}</span>
        </div>
        <div class="first-info text">
          <span>Action Plans ${country.action_plan_count}</span>
          <span>Member since ${moment.unix(country.memberSince).format('YYYY')}</span>
        </div>
        <div class="row data-tiles"></div>
      </div>
    </div>
  `;
  $('.content-tiles', container).append(html);
}

function showCountriesData(countriesData, activeTab, container, countryId) {
  hideOnClickPagination();
  const page = getCurrentPage();
  // get filter country data
  let filteredCountries = '';
  if (page === 1) {
    $('.content-tiles', container).html('');
  }
  if (countryId && countryId > 0) {
    filteredCountries = countriesData.filter(function(country) {
      return country.id == countryId;
    });
  } else {
    const sliceStart = (page - 1) * 10;
    filteredCountries = countriesData.slice(sliceStart, sliceStart + 10);
  }

  filteredCountries.forEach(function(country, index) {
    initCountryBox(container, country, activeTab);
    setCountryDataTiles(container, country);
  });

  if (page < Math.ceil(countriesData.length / 10) && filteredCountries.length > 1) {
    showOnClickPagination();
  }
  removeLoader(container, null, true);
  initModalStarred(countriesData);
}

function initCountryTabs(onChangeCountryTab) {
  initTabs();
  setTabListeners(onChangeCountryTab);
}
