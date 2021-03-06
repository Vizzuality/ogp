function showCountriesPage() {
  (function ($) {

    // consts for map
    const cartoQueryLink = 'https://jmonaco.carto.com/api/v2/sql?q=';
    const layers = {
      action: {
        sql: 'SELECT  wb.the_geom_webmercator the_geom_webmercator, nid, member_since, at.path, actionplan, at.country, at.cartodb_id FROM ggtqckcj2bioeepnuvxoow at INNER JOIN country_centroids_all ca on at.country = ca.short_name INNER JOIN world_border_ogp wb on ca.iso3136 = wb.wb_a2',
        cartocss: '#layer {polygon-fill: ramp([actionplan], (#2d4f00, #66bc29, #2d4f00, #66bc29, #2d4f00, #2d4f00, #cc3300, #cc3300), ("Implementing 1st action plan and Developing 2nd action plan","Developing action plan", "Implementing 2nd action plan", "Developing 1st Action Plan", "Implementing 1st action plan", "Implementing action plan", , "Inactive"), "="); line-width: 1; line-color: #FFF; line-opacity: 0.5;}',
        interactivity: 'the_geom_webmercator, nid, country, cartodb_id',
        name: 'action'
      },
      starred: {
        sql: 'SELECT numberstarred,country, st.cartodb_id, st_centroid(wb.the_geom_webmercator) the_geom_webmercator FROM zzpexx07fxnjtcvjpptz2q st INNER JOIN country_centroids_all wb on st.country = wb.short_name WHERE wb.the_geom_webmercator IS NOT NULL ORDER BY numberstarred',
        cartocss: '#layer::z1 {marker-width: 30;marker-fill: #ffffff;marker-fill-opacity: 1;marker-line-width: 1;marker-line-color: #4b392f;marker-line-opacity: 0.2;marker-allow-overlap:true;marker-comp-op: src;[zoom = 2] {marker-width: 30;}[zoom = 3] {marker-width: 35;}[zoom = 4] {marker-width: 40;}[zoom = 5] {marker-width: 45;}[zoom = 6] {marker-width: 45;}} #layer::z1 {text-name: [numberstarred];text-face-name: "DejaVu Sans Book";text-size: 10;text-fill: #000000;text-label-position-tolerance: 0;text-halo-radius: 0;text-halo-fill: #6F808D;text-dy: 0;text-allow-overlap: true;}',
        interactivity: 'numberstarred, country, cartodb_id, the_geom_webmercator',
        name: 'starred'
      },
      people: {
        sql: 'SELECT numberpeopleinvolved,country,countryid, pi.cartodb_id, st_centroid(wb.the_geom_webmercator) the_geom_webmercator FROM u4yhv_fq5_jb91rzuzgd8q pi INNER JOIN country_centroids_all wb on pi.country = wb.short_name WHERE wb.the_geom_webmercator IS NOT NULL',
        cartocss: '#layer {marker-width: 50;marker-height: 45;marker-fill: #007acb;marker-fill-opacity: 1;marker-file:url("https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg");marker-allow-overlap: true;marker-line-width: 1;marker-line-color: #4b392f;marker-line-opacity: 1;marker-comp-op: src-over;[zoom = 2] {marker-width: 30;marker-height: 25;}[zoom = 3] {marker-width: 35;marker-height: 30;}[zoom = 4] {marker-width: 45;marker-height: 40;} [zoom = 5] {marker-width: 50;marker-height: 45;}[zoom = 6] {marker-width: 55;marker-height: 50;}}',
        interactivity: 'numberpeopleinvolved,countryid, country, cartodb_id, the_geom_webmercator',
        name: 'people'
      },
      stories: {
        sql: 'SELECT numberstories,country, st.cartodb_id, st_centroid(wb.the_geom_webmercator) the_geom_webmercator FROM cajq0nm1zsu0aav_wrnyvg st INNER JOIN country_centroids_all wb on st.country = wb.short_name WHERE st.the_geom_webmercator IS NOT NULL',
        cartocss: '#layer::z1{marker-width: 50;marker-height: 45;marker-fill: #0099ff;marker-fill-opacity: 1;marker-file:url("https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg");marker-allow-overlap: true;marker-line-width: 1;marker-line-color: #4b392f;marker-line-opacity: 1;marker-comp-op: src-over;[zoom = 2] {marker-width: 50;marker-height: 45;}[zoom = 3] {marker-width: 55;marker-height: 50;}[zoom = 4] {marker-width: 60;marker-height: 55;}[zoom = 5] {marker-width: 65;marker-height: 60;}[zoom = 6] {marker-width: 70;marker-height: 65;}} #layer::z1{text-name: [numberstories];text-face-name: "DejaVu Sans Book";text-size: 10;text-fill: #FFFFFF;text-label-position-tolerance: 0;text-halo-radius: 0;text-halo-fill: #6F808D;text-dy: -0.9;text-allow-overlap: true;text-placement: point;text-placement-type: simple;text-comp-op: screen;}',
        interactivity: 'numberstories, country, cartodb_id, the_geom_webmercator',
        name: 'stories'
      },
      upcomingevent: {
        sql: 'SELECT now(), country, countryid, count(country), Min(ec.cartodb_id) cartodb_id, Min(date) date, Min(end_date) end_date, Min(start_date) start_date, Min(title) title, st_centroid(wb.the_geom_webmercator) the_geom_webmercator FROM ojy344p9szp9irh8dc1uaa ec INNER JOIN country_centroids_all wb on ec.country = wb.short_name WHERE title IS NOT NULL AND wb.the_geom_webmercator IS NOT NULL AND end_date > now() GROUP BY country, countryid, wb.the_geom_webmercator ORDER BY country',
        cartocss: '#layer::z1 {marker-width: 30;marker-fill: #66bc29;marker-fill-opacity: 1;marker-line-width: 0;marker-line-color: #151718;marker-line-opacity: 0.2;marker-allow-overlap:true;marker-comp-op: src;[zoom = 2] {marker-width: 30;}[zoom = 3] {marker-width: 35;}[zoom = 4] {marker-width: 40;}[zoom = 5] {marker-width: 45;}[zoom = 6] {marker-width: 45;}} #layer::z1 {text-name: [count];text-face-name: "DejaVu Sans Book";text-size: 10;text-fill: #FFFFFF;text-label-position-tolerance: 0;text-halo-radius: 0;text-halo-fill: #6F808D;text-dy: 0;text-allow-overlap: true;}',
        interactivity: 'cartodb_id, the_geom_webmercator',
        name: 'event'
      },
      pastevent: {
        sql: 'SELECT now(), country, countryid, count(country), Min(ec.cartodb_id) cartodb_id, Min(date) date, Min(end_date) end_date, Min(start_date) start_date, Min(title) title, st_centroid(wb.the_geom_webmercator) the_geom_webmercator FROM ojy344p9szp9irh8dc1uaa ec INNER JOIN country_centroids_all wb on ec.country = wb.short_name WHERE title IS NOT NULL AND wb.the_geom_webmercator IS NOT NULL AND end_date < now() GROUP BY country, countryid, wb.the_geom_webmercator ORDER BY country',
        cartocss: '#layer::z1 {marker-width: 30;marker-fill: #66bc29;marker-fill-opacity: 1;marker-line-width: 0;marker-line-color: #151718;marker-line-opacity: 0.2;marker-allow-overlap:true;marker-comp-op: src;[zoom = 2] {marker-width: 30;}[zoom = 3] {marker-width: 35;}[zoom = 4] {marker-width: 40;}[zoom = 5] {marker-width: 45;}[zoom = 6] {marker-width: 45;}} #layer::z1 {text-name: [count];text-face-name: "DejaVu Sans Book";text-size: 10;text-fill: #FFFFFF;text-label-position-tolerance: 0;text-halo-radius: 0;text-halo-fill: #6F808D;text-dy: 0;text-allow-overlap: true;}',
        interactivity: 'cartodb_id, the_geom_webmercator, country',
        name: 'event'
      },
      commitment: {
        sql: 'SELECT country,Min(countryid) countryid, Min(cc.cartodb_id) cartodb_id, count(country), st_centroid(wb.the_geom_webmercator) the_geom_webmercator FROM c73t2gfiumef0fs5de9huq cc INNER JOIN country_centroids_all wb on cc.country = wb.short_name WHERE country IS NOT NULL AND wb.the_geom_webmercator IS NOT NULL AND LENGTH(country) > 0 GROUP BY wb.the_geom_webmercator, country ORDER BY country DESC',
        cartocss: '#layer::z1 {marker-width: 30;marker-fill: #ffa200;marker-fill-opacity: 1;marker-line-width: 1;marker-line-color: #4b392f;marker-line-opacity: 0.1;marker-allow-overlap:true;marker-comp-op: src;[zoom = 2] {marker-width: 30;}[zoom = 3] {marker-width: 35;}[zoom = 4] {marker-width: 40;}[zoom = 5] {marker-width:45;} [zoom = 6] {marker-width: 45;}} #layer::z1 {text-name: [count];text-face-name: "DejaVu Sans Book";text-size: 10;text-fill: #FFFFFF;text-label-position-tolerance: 0;text-halo-radius: 0;text-halo-fill: #6F808D;text-dy: 0;text-allow-overlap: true;}',
        interactivity: 'cartodb_id, the_geom_webmercator, country',
        name: 'commitment'
      },
      participants: {
        sql: 'SELECT * FROM table_4q9xwd8iroblyagpt_dx5q WHERE show_on_map IS TRUE',
        cartocss: '#layer {marker-width: 50;marker-height: 45;marker-fill: #FFB927;marker-fill-opacity: 1;marker-file: url("https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-18.svg");marker-allow-overlap: true;marker-line-width: 1;marker-line-color: #4b392f;marker-line-opacity: 1;marker-comp-op: src-over;[zoom = 2] {marker-width: 30;marker-height: 25;}[zoom = 3] {marker-width: 35;marker-height: 30;}[zoom = 4] {marker-width: 45;marker-height: 40;}[zoom = 5] {marker-width: 50;marker-height: 45;}[zoom = 6] {marker-width: 55;marker-height: 50;}}',
        interactivity: 'cartodb_id, title',
        name: 'participants'
      }
    };

    //consts for tabs
    const countriesContent = '#countriesContentContainer';
    let page = 1;
    let activeTab = 'starred';
    const pageThreshold = 10;

    // cache
    let countriesMap;
    let countriesData;
    let themesData;

    // custom callback for tabs component
    const onChangeCountryTab = function(id, label) {
      setPageCount(1);
      $('.tab-content').addClass('-hidden');
      $(`.${id}`).removeClass('-hidden');
      showLoader('#countriesContentContainer');
      showCountriesData(countriesData, id, countriesContent, $('#countriesSearch select').val());
    };

    function cacheData() {
      $.getJSON(`/apiJSON/countries?sort=label`, function (countries) {
        countriesData = countries.data;
        initMapLayer(countriesMap, countriesData, layers, cartoQueryLink);
        countriesMap.invalidateSize();
        showCountriesData(countriesData, activeTab, countriesContent);
        buildCountrySelector($('#countriesSearch select'), countriesContent, countriesData, activeTab);
        onClickPagination(activeTab, countriesContent, countriesData);
        initCountryTabs(onChangeCountryTab);
        $.getJSON(`/apiJSON/themes?sort=name&fields=id,label,alias`, function (themes) {
          themesData = themes.data;
          appendSelectOptionsFromData('.select-legend-dropdown', themesData);
          removeLoader('.l-map', null, true);
        });
      });
    }

    function initViews() {
      countriesMap = initCountriesMap();
      $('.select-legend-dropdown').select2({
        minimumResultsForSearch: Infinity,
        placeholder: 'All themes',
      });
      $('#countriesSearch select').select2({
        containerCssClass: '-tall',
        placeholder: 'Search country...'
      });
      $('.select-legend-dropdown').change(function () {
        changeCommitmentLayer();
      });
    }

    // let's begin
    initViews();
    cacheData();
    buildMapModal();

  })(jQuery);
}
