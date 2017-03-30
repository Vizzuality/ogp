/* New D7 Wrapper --> */(function ($) { //can show on home page
Drupal.behaviors.ogp_country_apc = {
  attach: function(context, settings) { //new attach function
    // Don't start twice
    $('#country_apc').once('map', function() {
      // Start tracking mouse movements
      var mouseX;
      var mouseY;
      if($('div').is('#block-ogp-map-country-apc')) {
        $('#block-ogp-map-country-apc').mousemove(function(e){
          var pos = $(this).offset();
          var elem_left = pos.left;
          var elem_top = pos.top;
          mouseX = e.pageX - elem_left;
          mouseY= e.pageY - elem_top;
        });
      }
      /* $(document).mousemove(function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY - $('#block-ogp-map-country-apc').offset().top;
      });*/

      //set the responsive zoom level
      var width = $(window).width();
      var zoom = 1;
      // $('#country_apc').css('height', 860 + 'px');
      if (width > 900) {
        zoom = 4;
      }

      //setup the map
      window.country_apc = new L.Map(country_apc, {
        center: [25, 10],
        zoom: zoom,
        maxZoom: 6,
        minZoom: 4,
        zoomControl: true,
        dragging: true,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: true,
        boxZoom: true,
        tap: false,
        attributionControl: false,
        keyboard: false,
        reset: true,
        trackResize: true
      })
      .addLayer(new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {noWrap: true}
      ));

      window.country_apc.zoomControl.setPosition('topright');


      $(window).on('resize', function(e) {
        if ($('#country_apc:visible').length) {
          var width = $('#country_apc').width();
          if (width) {
            var zoom = 1;
            // $('#country_apc').css('height', 850 + 'px');
            if (width > 900) {
              zoom = 2;
            }
            window.country_apc.setZoom(zoom);
          }
        }
      });

      $('#quicktabs-front_page_maps .quicktabs-tabs li a').click(function() {
        setTimeout(function(){ window.country_apc.invalidateSize() }, 200);
      });

      //Load a geoJSON file with ajax into Leaflet
      jQuery.getJSON(settings.ogp_map.geojson, function(collection) {
        var geojson = L.geoJson(collection, {
          onEachFeature: onEachFeature
        }).addTo(country_apc);

        function clickFeature(e) {
          var layer = e.target;
          if (layer.feature.properties.url != undefined) {
            window.location = layer.feature.properties.url;
          }
        }

        function mouseoverFeature(e) {
          var layer = e.target;
          if (layer.feature.properties.color != undefined) {
            layer.setStyle({color: shadeColor(layer.feature.properties.color, 10)});
            var html = '<span class="legend-color" style="background-color: ' + layer.feature.properties.color + '"></span> ' + layer.feature.properties.name;
            $('#country_apc_title').html(html).css({'top':mouseY,'left':mouseX}).fadeIn(); //country info from geojson
          }
        }

        function mouseoutFeature(e) {
          var layer = e.target;
          layer.setStyle({color: layer.feature.properties.color});
          $('#country_apc_title').hide();
        }

        // Combine the geoJSON with the data from settings.ogp_map.countries
        function onEachFeature(feature, layer) {
          var country;
          for (var i = 0; i < settings.ogp_map.countries.length; i++) {
            if (settings.ogp_map.countries[i].country_official === feature.properties.name ||
                settings.ogp_map.countries[i].country === feature.properties.name) {
              country = settings.ogp_map.countries[i];
              layer.feature.properties.url = country.url;
            }
          }
          if (country != undefined) {
            layer.feature.properties.color = settings.ogp_map.legend[country.apc].color;
            layer.setStyle({color: layer.feature.properties.color});
            layer.on('click', clickFeature);
            layer.on('mouseover', mouseoverFeature);
            layer.on('mouseout', mouseoutFeature);
          }
          else {
            layer.setStyle({color: '#000', fill: false});
          }
        }

        // Darken/lighten a color
        function shadeColor(color, percent) {
          var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, B = (num >> 8 & 0x00FF) + amt, G = (num & 0x0000FF) + amt;
          return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
        }

      });
    });
  }//attach
};//behaviors
/* New D7 Wrapper --> */ })(jQuery);
