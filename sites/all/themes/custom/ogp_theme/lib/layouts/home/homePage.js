function showHomePage() {
  (function ($) {

    const map = L.map('maphome', {
      zoomControl: false,
      center: [35, -60],
      zoom: 2,
      maxZoom: 6,
      minZoom: 2,
      scrollWheelZoom: false
    });
    let over = false;

    $('#in').click(function () {
      map.setZoom(map.getZoom() + 1);
    });

    $('#out').click(function () {
      map.setZoom(map.getZoom() - 1);
    });

    const basemap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(map);

    cartodb.createLayer(map, {
      user_name: 'jmonaco',
      type: 'cartodb',
      sublayers: [{
        sql: 'SELECT * FROM countries_homepage',
        cartocss: '#layer{polygon-fill:ramp([actionplan],(#c30,#c30,#2d4f00,#66bc29,#2d4f00,#2d4f00,#2d4f00,#66bc29,#2d4f00),("","Inactive","Implementing 1st action plan and Developing 2nd action plan","Developing action plan","Implementing 2nd action plan","Implementing 1st action plan","Developing 1st Action Plan","Implementing action plan"),"=");line-width:1;line-color:#FFF;line-opacity:.5}',
        interactivity: 'the_geom, nid, country, cartodb_id'
      }]
    })
    .addTo(map)
    .done(function (layer) {
      layer.setInteraction(true);
      const hovers = [];
      layer.on('featureClick', function(e, latlng, pos, data) {
        $.getJSON(`https://jmonaco.carto.com/api/v2/sql?q= SELECT * FROM countries_homepage WHERE cartodb_id =  ${data.cartodb_id}`, function (datapath) {
          document.location.href = `${window.location.origin}${datapath.rows[0].path}`;
        });
      });

      layer.bind('featureOver', function(e, latlon, pxPos, data, layers) {
        hovers[layers] = 1;
        if (_.any(hovers)) {
          $('#maphome').css('cursor', 'pointer');
        }
      });

      layer.bind('featureOut', function(m, layers) {
        hovers[layers] = 0;
        if (!_.any(hovers)) {
          $('#maphome').css('cursor', 'auto');
        }
      });

      layer.on('featureOver', function(e, latlng, pos, data) {
        if (over === false) {
          $('body').append(`<div class="tooltip" style="padding: 5px; position: absolute; z-index: 10; background-color: rgba(255, 255, 255, 1); top:${e.pageY - 25}px; left:${e.pageX + 25}px">${data.country}</div>`);
          over = true;
        } else {
          $('.tooltip').html(data.country);
          $('.tooltip').css('top', `${e.pageY - 25}px`);
          $('.tooltip').css('left', `${e.pageX + 25}px`);
        }
      });

      layer.on('featureOut', function(e, latlng, pos, data) {
        over = false;
        $('.tooltip').remove();
      });
      map.invalidateSize();
    });
  })(jQuery);
}
