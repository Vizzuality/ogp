let layerMap = '';
function initCountriesMap() {
  const map = L.map('countriesMap', {
    zoomControl: false,
    center: [35, -60],
    zoom: 2,
    maxZoom: 6,
    minZoom: 2,
    scrollWheelZoom: false
  });
  const basemap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: ''
  }).addTo(map);
  $('#in').click(function () {
    map.setZoom(map.getZoom() + 1);
  });

  $('#out').click(function () {
    map.setZoom(map.getZoom() - 1);
  });
  return map;
}

function initMapLayer(map, countriesData, layers, cartoQueryLink) {
  let over = false;

  cartodb.createLayer(map, {
    user_name: 'jmonaco',
    type: 'cartodb',
    sublayers: []
  })
  .addTo(map)
  .done(function (layer) {
    layer.setInteraction(true);
    layer.createSubLayer(layers['action']);
    const hovers = [];

    layer.bind('featureOver', function(e, latlon, pxPos, data, layers) {
      hovers[layers] = 1;
      if (_.any(hovers)) {
        $('#countriesMap').css('cursor', 'pointer');
      }
    });

    layer.bind('featureOut', function(m, layers) {
      hovers[layers] = 0;
      if (!_.any(hovers)) {
        $('#countriesMap').css('cursor', 'auto');
      }
    });

    layer.on('featureClick', function(e, latlng, pos, data) {
      $('.tooltip').remove();
      if (layer.layers[0].options.name !== 'participants') {
        showLoader('.l-map');
      }
      switch (layer.layers[0].options.name) {
        case 'action':
          $.getJSON(`${cartoQueryLink} SELECT * FROM bwhyco5uex5gk6l2sjbo4w WHERE cartodb_id = ${data.cartodb_id}`, function (actionPlanData) {
            updateMapModal(actionPlanData.rows[0].nid, 'actionPlan', countriesData);
          });
          break;
        case 'starred':
          $.getJSON(`${cartoQueryLink} SELECT * FROM zzpexx07fxnjtcvjpptz2q WHERE cartodb_id = ${data.cartodb_id}`, function (starredData) {
            updateMapModal(starredData.rows[0].countryid, 'starred', countriesData);
          });
          break;
        case 'people':
          $.getJSON(`${cartoQueryLink} SELECT * FROM u4yhv_fq5_jb91rzuzgd8q WHERE cartodb_id = ${data.cartodb_id}`, function (peopleInvolvedData) {
            updateMapModal(peopleInvolvedData.rows[0].countryid, 'people', countriesData);
          });
          break;
        case 'stories':
          $.getJSON(`${cartoQueryLink} SELECT * FROM qx43gnom2bzwcwxqladsyg WHERE cartodb_id = ${data.cartodb_id}`, function (storiesData) {
            updateMapModal(storiesData.rows[0].countryid, 'stories', countriesData);
          });
          break;
        case 'event':
          $.getJSON(`${cartoQueryLink} SELECT * FROM events_country WHERE cartodb_id = ${data.cartodb_id} AND country IS NOT NULL`, function (eventData) {
            updateMapModal(eventData.rows[0].countryid, 'event', countriesData);
          });
          break;
        case 'commitment':
          $.getJSON(`${cartoQueryLink} SELECT * FROM currentcommitments_countries WHERE cartodb_id = ${data.cartodb_id}`, function (commitmentsData) {
            updateMapModal(commitmentsData.rows[0].countryid, 'commitment', countriesData);
          });
          break;
        case 'participants':
          $.getJSON(`${cartoQueryLink} SELECT * FROM working_group WHERE cartodb_id = ${data.cartodb_id}`, function (participantsData) {
            document.location.href = `${window.location.origin}${participantsData.rows[0].path}`;
          });
          break;
        default:
      }
    });

    layer.on('featureOver', function(e, latlng, pos, data) {

      const country = data.country;
      const titleEvent = data.title;

      if (over === false) {
        if (country) {
          $('body').append(`<div class="tooltip" style="padding: 5px; position: absolute; z-index: 10; background-color: rgba(255, 255, 255, 1); top:${e.pageY - 25}px; left:${e.pageX + 25}px">${country}</div>`);
        }

        if (titleEvent) {
          $('body').append(`<div class="tooltip" style="padding: 5px; position: absolute; z-index: 10; background-color: rgba(255, 255, 255, 1); top:${e.pageY - 25}px; left:${e.pageX + 25}px">${titleEvent}</div>`);
        }
        over = true;
      } else {

        if (country) {
          $('.tooltip').html(country);
        }

        if (titleEvent) {
          $('.tooltip').html(titleEvent);
        }
        $('.tooltip').css('top', `${e.pageY - 25}px`);
        $('.tooltip').css('left', `${e.pageX + 25}px`);
      }
    });

    layer.on('featureOut', function(e, latlng, pos, data) {
      over = false;
      $('.tooltip').remove();
    });
    layerMap = layer;
    initEventFunctions(layer, layers);
    setMapLegendListeners(layer, layers);
  });
}

function removeLayers(layer) {
  layer.getSubLayers().forEach(function (sublayer) {
    sublayer.remove();
  });
}

function initEventFunctions(layer, layers) {
  $('.change-past-event-layer').click(function() {
    removeLayers(layer);
    $(this).html('LOOKING FOR UPCOMING EVENTS?');
    $('.legend-info-event').html('Past Events');
    $(this).removeClass('change-past-event-layer');
    $(this).addClass('change-upcoming-event-layer');
    layer.setInteraction(true);
    layer.createSubLayer(layers['pastevent']);
    initEventFunctions();
  });

  $('.change-upcoming-event-layer').click(function() {
    removeLayers(layer);
    $(this).html('LOOKING FOR PAST EVENTS?');
    $('.legend-info-event').html('Upcoming Events');
    $(this).removeClass('change-upcoming-event-layer');
    $(this).addClass('change-past-event-layer');
    layer.setInteraction(true);
    layer.createSubLayer(layers['upcomingevent']);
    initEventFunctions();
  });
}

function setMapLegendListeners(layer, layers) {
  $('.select-legend').click(function () {
    $('.tooltip').remove();
    const container = $(this).attr('data-value');
    const namelayer = $(this).attr('data-layer');
    removeLayers(layer);
    if ($(this).hasClass('-selected') === false) {
      $('.select-legend').each(function () {
        if ($(this).hasClass('-selected')) {
          $(this).prop('disabled', false);
          $(this).toggleClass('-selected');
          $(`.${container}`).toggleClass('-open-legend');
        }
      });

      $('.contain-info').each(function () {
        if ($(this).hasClass('-open-legend')) {
          $(this).toggleClass('-open-legend');
        }
      });
      if ($('.scroll-contain-legend').hasClass('-scroll') === false) {
        $('.scroll-contain-legend').toggleClass('-scroll');
      }
      $(`.${container}`).toggleClass('-open-legend');
      $(this).toggleClass('-selected');
      $(this).prop('disabled', true);
      layer.setInteraction(true);
      layer.createSubLayer(layers[namelayer]);
    }
  });
}

function changeCommitmentLayer(){
  const theme =   $('.select-legend-dropdown').val();
  removeLayers(layerMap);
  layerMap.setInteraction(true);
  layerMap.createSubLayer({
    sql: 'SELECT country, Min(cartodb_id) cartodb_id, Min(theme) theme, count(country), st_centroid(the_geom_webmercator) the_geom_webmercator FROM currentcommitments_countries WHERE country IS NOT NULL AND theme LIKE \'%' + theme + '%\' AND the_geom_webmercator IS NOT NULL AND LENGTH(country) > 0 GROUP BY the_geom_webmercator, country ORDER BY country',
    cartocss: '#layer::z1 {marker-width: ramp([count], range(25, 45), quantiles(7));marker-fill: #ffa200;marker-fill-opacity: 1;marker-line-width: 1;marker-line-color: #4b392f;marker-line-opacity: 0.1;marker-allow-overlap:true;marker-comp-op: src;[zoom = 2] {marker-width: ramp([count], range(25, 30), quantiles(3));}[zoom = 3] {marker-width: ramp([count], range(30, 35), quantiles(4));}[zoom = 4] {marker-width: ramp([count], range(30, 40), quantiles(5));}[zoom = 5] {marker-width: ramp([count], range(30, 45), quantiles(6));} [zoom = 6] {marker-width: ramp([count], range(35, 45), quantiles(7));}} #layer::z1 {text-name: [count];text-face-name: "DejaVu Sans Book";text-size: 10;text-fill: #FFFFFF;text-label-position-tolerance: 0;text-halo-radius: 0;text-halo-fill: #6F808D;text-dy: 0;text-allow-overlap: true;}',
    interactivity: 'cartodb_id, the_geom_webmercator, country',
    name: 'commitment'
  });
}
