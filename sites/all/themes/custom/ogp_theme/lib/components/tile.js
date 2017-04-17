// append tiles to div
function appendTilesWithoutBackground(data, container, gridNum, customClass) {
  const gridWidth = 12 / gridNum;
  if (data.length !== 0) {
    data.forEach((item) => {
      const html = `
        <div class="column small-12 medium-${gridWidth} c-tile ${customClass ? customClass : ''}" data-group="${item.group ? item.group : ''}">
          <a href="/${item.alias}" class="tile">
            <span class="text -tile -white">
              ${item.label}
            </span>
          </a>
        </div>
      `;
      container.append(html);
    });
  }
}

function appendTiles(data, container, gridNum, customClass) {
  const gridWidth = 12 / gridNum;
  if (data.length !== 0) {
    data.forEach((item) => {
      const html = `
        <div class="column small-12 medium-${gridWidth} c-tile ${customClass ? customClass : ''}" data-group="${item.group ? item.group : ''}">
          <a href="/${item.alias}" class="tile" style="background-image: url('${item.image ? item.image : ''}')">
            <div class="${item.image ? 'overlay' : ''}"></div>
            <span class="text -tile -white">
              ${item.label}
            </span>
          </a>
        </div>
      `;
      container.append(html);
    });
  }
}

function appendTilesStandards(data, container, gridNum, customClass) {
  const gridWidth = 12 / gridNum;
  if (data.length !== 0) {
    data.forEach((item) => {
      const html = `
        <div class="column small-12 medium-4 large-${gridWidth} c-tile ${customClass ? customClass : ''}" data-group="${item.group ? item.group : ''}">
          <a href="" class="tile" style="background-image: url('${item.image ? item.image : ''}')">
            <div class="${item.image ? 'overlay' : ''}"></div>
            <span class="text -tile -white">
              ${item}
            </span>
          </a>
        </div>
      `;
      container.append(html);
    });
  }
}

function appendSmallTiles(data, topContainer, gridNum, customClass) {
  const container = $(`${topContainer} .data-tiles`);
  const gridWidth = 12 / gridNum;
  if (data.length > 0) {
    data.forEach((item) => {
      const html = `
        <div class="column small-12 large-${gridWidth} c-tile ${customClass ? customClass : ''}" data-group="${item.group ? item.group : ''}">
          <a href="/${item.alias}" class="tile" style="background-image: url('${item.image ? item.image : ''}')">
            <div class="${item.image ? 'overlay' : ''}"></div>
            <span class="text -tile -white">
              ${item.label}
            </span>
          </a>
        </div>
      `;
      container.append(html);
    });
  }
}

function appendTilesIRM(data, topContainer) {
  $.getJSON(`/apiJSON/documents?filter[type]=2704&filter[country]=${data.id}&sort=-date&range=2`, function (reports) {
      let html = `
      <div class="column small-12 medium-6">
        <div class="column c-country-tile">
          <a class="text -title-x-small" href="${data.alias}">${data.label}<svg class="icon -blue -medium arrow"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use></svg></a>
          <div class="first-info text">
            <span class="text">Total reports ${reports.count}</span>
          </div>
          <div class="row data-tiles">`;
      for (let i = 0; i < reports.data.length; i += 1) {
        html += `
        <div class="column small-12 large-6 c-tile -short -hiden">
          <a href="" class="tile">
            <div class=""></div>
            <span class="text -tile -white">${reports.data[i].label}</span>
          </a>
        </div>`;
      }
      html += `</div></div></div>`;
      removeLoader('#tab-loader', null, true);
      $(`${topContainer.selector}`).append(html);
  });
}

function appendTilesComments(data, topContainer) {
  $.getJSON(`/apiJSON/documents?filter[type]=2924&filter[country]=${data.id}&sort=-date&range=2`, function (comments) {
      let html = `
      <div class="column small-12 medium-6">
        <div class="column c-country-tile">
          <a class="text -title-x-small" href="${data.alias}">${data.label}<svg class="icon -blue -medium arrow"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use></svg></a>
          <div class="first-info text">
            <span class="text">Total reports ${comments.count}</span>
          </div>
          <div class="row data-tiles">`;
      for (let i = 0; i < comments.data.length; i += 1) {
        html += `
        <div class="column small-12 large-6 c-tile -short -hiden">
          <a href="" class="tile">
            <div class=""></div>
            <span class="text -tile -white">${comments.data[i].label}</span>
          </a>
        </div>`;
      }
      html += `</div></div></div>`;
      removeLoader('#tab-loader-comments', null, true);
      $(`${topContainer.selector}`).append(html);
  });
}

function appendTilesEvent(data, container) {
  if (data.length > 0) {
    let html = '';
    data.forEach((item) => {
      html += `
        <div class="small-12 medium-3 event-tile-container">
          <div>
            <h3 class="text -title-x-small">${moment(item.date.value).format('MMMM, DD')}</h3>
            <span class="text language-text">Language: ${item.language ? item.language : 'not specified'}</span>
          </div>
          <div>
            <a class="text -interactive -blue" href="${item.alias}">${item.label}</a>
          </div>
        </div>
      `;
    });
    container.html(html);
  }
}

// append tiles to div
function appendTilesDetailed(data, container, gridNum) {
  const gridWidth = 12 / gridNum;
  let html = '';
  data.forEach((item) => {
    // get variables
    let topicsHtml = '';
    let authorsHtml = '';

    // build topics
    if (item.topic[0]) {
      item.topic.forEach(function(topic ,index) {
        if (index === item.topic.length - 1) {
          topicsHtml += `<a href="/${topic.alias}">${topic.label}</a>`;
        } else {
          topicsHtml += `<a href="/${topic.alias}">${topic.label}, </a>`;
        }
      });
    }

    if (item.author[0]) {
      item.author.forEach(function(author ,index) {
        if (index === item.author.length - 1) {
          authorsHtml += `<a class="text -blue" href="/${author.alias}">${author.label}</a>`;
        } else {
          authorsHtml += `<a class="text -blue" href="/${author.alias}">${author.label}, </a>`;
        }
      });
    }

    html +=`
      <div class="column small-12 medium-${gridWidth} c-tile">
        <div class="tile-detailed" style="background-image: url('${item.image ? item.image : ''}')">
          <div class="${item.image ? 'overlay' : ''}"></div>
          <div class="tile-content">
            <div class="topics text -dynamic-link ${item.image ? '-white' : ''}">${topicsHtml}</div>
            <a href="/${item.alias}"><h3 class="text -tile-detail ${item.image ? '-white' : ''}">${item.title ? item.title : ''}</h3></a>
            <div class="meta">
              <span class="text -meta-large ${item.image ? '-white' : ''}">${moment.unix(parseInt(item.created)).format('D MMMM YYYY')}</span>
              <a class="text -meta-large ${item.image ? '-white' : ''}">${authorsHtml}</a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  container.html(html);
}

function appendTilesDetailedNews(data, container, gridNum) {
  const gridWidth = 12 / gridNum;
  let html = '';
  data.forEach((item) => {
    html +=`
      <div class="column small-12 medium-6 c-tile">
        <div class="tile-detailed">
          <div></div>
          <span class="text -uppercase -blue -small-bold">News</span>
          <div class="tile-content">
            <a href="/${item.alias}"><h3 class="text -tile-detail ">${item.label ? item.label : ''}</h3></a>
            <div class="meta">
              <span class="text -meta-large">${moment.unix(parseInt(item.date)).format('DD MMMM YYYY ')}</span>
              <span class="text -meta-large">${item.name.name}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  container.html(html);
}

function appendCountriesInfoBars(item, topContainer) {
  const container = $(`${topContainer} .data-tiles`);
  let html = '';
  html = `
    <div class="column small-12">
      <div class="c-country-info-bar">
        <strong>Action Plan ${item.year_action_plan} Potential Impact</strong>
        <div class="${item.year_action_plan === null ? 'contain-legend-bars -hiden' : 'contain-legend-bars -show'}">
          <span class="box box-none"><div class="box-color"></div>None</span>
          <span class="box box-minor"><div class="box-color"></div>Minor</span>
          <span class="box box-moderate"><div class="box-color"></div>Moderate</span>
          <span class="box box-transformative"><div class="box-color"></div>Transformative</span>
        </div>
        <div class="${item.year_action_plan === null ? 'contain-bars-potential -hiden' : 'contain-bars-potential -show'}">
          <div class="bar ${item.none_impact? 'none-bar' : '-hiden'}" style="flex-basis:${item.none_impact}%"><span>${item.none_impact}%</span></div>
          <div class="bar ${item.minor_impact ? 'minor-bar' : '-hiden'}" style="flex-basis:${item.minor_impact}%"><span>${item.minor_impact}%</span></div>
          <div class="bar ${item.moderate_impact ? 'moderate-bar' : '-hiden'}" style="flex-basis:${item.moderate_impact}%"><span>${item.moderate_impact}%</span></div>
          <div class="bar ${item.transformative_impact ? 'transformative-bar' : '-hiden'}" style="flex-basis:${item.transformative_impact}%"><span>${item.transformative_impact}%</span></div>
        </div>
        <div class="message-error ${item.year_action_plan === null ? '-show' : '-hiden'}">
          <span>Sorry, nothing to see</span>
        </div>
        <a href="http://www.opengovpartnership.org/explorer/all-data.html" target="_blank" class="text -blue">For data definitions and more data, see the OGP Explorer</a>
      </div>
    </div>
  `;
  container.html(html);
}

function appendCountriesRelevance(item, topContainer) {
  const container = $(`${topContainer} .data-tiles`);
  let html;
  html = `
    <div class="column small-12">
      <div class="c-country-relevance-bar">
        <div class="relevance-bar">
          <h4>Access to Information ${item.access_information ? '(' + item.access_information + '% )' : ''}</h4>
          <div class="${item.access_information ? 'bar-border' : 'bar-border -hiden'}">
            <div class="${item.access_information ? 'bar' : 'bar -hiden'}" style="${item.access_information ? 'width:' + item.access_information + '%' : ''}" >
              <span class="${item.access_information ? 'bar-error -hiden' : 'bar-error'}">Sorry, nothing to see.</span>
            </div>
          </div>
          <h4>Civic Participation ${item.civic_participation ? '(' + item.civic_participation + '% )' : ''}</h4>
          <div class="${item.civic_participation ? 'bar-border' : 'bar-border -hiden'}">
            <div class="${item.civic_participation ? 'bar' : 'bar -hiden'}" style="${item.civic_participation ? 'width:' + item.civic_participation + '%' : ''}" >
              <span class="${item.civic_participation ? 'bar-error -hiden' : 'bar-error'}">Sorry, nothing to see.</span>
            </div>
          </div>
          <h4>Public Accountability ${item.public_accountability ? '(' + item.public_accountability + '% )' : ''}</h4>
          <div class="${item.public_accountability ? 'bar-border' : 'bar-border -hiden'}">
            <div class="${item.public_accountability ? 'bar' : 'bar -hiden'}" style="${item.public_accountability ? 'width:' + item.public_accountability + '%' : ''}" >
              <span class="${item.public_accountability ? 'bar-error -hiden' : 'bar-error'}">Sorry, nothing to see.</span>
            </div>
          </div>
          <h4>Unclear ${item.unclear ? '(' + item.unclear + '% )' : ''}</h4>
          <div class="${item.unclear ? 'bar-border' : 'bar-border -hiden'}">
            <div class="${item.unclear ? 'bar' : 'bar -hiden'}" style="${item.unclear ? 'width:' + item.unclear + '%' : ''}" >
              <span class="${item.unclear ? 'bar-error -hiden' : 'bar-error'}">Sorry, nothing to see.</span>
            </div>
          </div>
        </div>
        <a href="http://www.opengovpartnership.org/explorer/all-data.html" target="_blank" class="text -blue">For data definitions and more data, see the OGP Explorer</a>
      </div>
    </div>
  `;
  container.html(html);
}

function appendCountriesThematicBars(item, topContainer) {
  const container = $(`${topContainer} .data-tiles`);
  const html = `
    <div class="column small-12">
      <div class="c-country-thematic-bar">
        <div class="thematic-bar">
        <div class="thematic-bar">
          <h4>${item.current_themes[0]} ${item.current_percentage.length > 0 ? '(' + item.current_percentage[0] + '%)' : ''}</h4>
          <div class="${item.current_percentage[0] ? 'bar-border' : 'bar-border -hiden'}">
            <div class="${item.current_percentage[0] ? 'bar -green' : 'bar -hiden'}" style="${item.current_percentage[0] ? 'width:' + item.current_percentage[0] + '%' : ''}" >
              <span class="${item.current_percentage[0] ? 'bar-error -hiden' : 'bar-error'}">Sorry, nothing to see.</span>
            </div>
          </div>
          <h4>${item.current_themes[1]} ${item.current_percentage[1] ? '(' + item.current_percentage[1] + '%)' : ''}</h4>
          <div class="${item.current_percentage[1] ? 'bar-border' : 'bar-border -hiden'}">
            <div class="${item.current_percentage[1] ? 'bar -green' : 'bar -hiden'}" style="${item.current_percentage[1] ? 'width:' + item.current_percentage[1] + '%' : ''}" >
              <span class="${item.current_percentage[1] ? 'bar-error -hiden' : 'bar-error'}">Sorry, nothing to see.</span>
            </div>
          </div>
          <h4>${item.current_themes[2]} ${item.current_percentage[2] ? '(' + item.current_percentage[2] + '%)' : ''}</h4>
          <div class="${item.current_percentage[2] ? 'bar-border' : 'bar-border -hiden'}">
            <div class="${item.current_percentage[2] ? 'bar -green' : 'bar -hiden'}" style="${item.current_percentage[2] ? 'width:' + item.current_percentage[2] + '%' : ''}" >
              <span class="${item.current_percentage[2] ? 'bar-error -hiden' : 'bar-error'}">Sorry, nothing to see.</span>
            </div>
          </div>
        </div>
        </div>
        <a href="http://www.opengovpartnership.org/explorer/all-data.html" target="_blank" class="text -blue">For data definitions and more data, see the OGP Explorer</a>
      </div>
    </div>
  `;
  container.html(html);
}
