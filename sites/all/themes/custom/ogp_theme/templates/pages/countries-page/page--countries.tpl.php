<?php
/**
 * @file
 * Page
 */
 $starred = node_load(25016);
 $starred_heading = field_get_items('node', $starred, 'field_headline')[0]['value'];
 $starred_body = field_get_items('node', $starred, 'body')[0]['value'];

 $potential = node_load(25017);
 $potential_heading = field_get_items('node', $potential, 'field_headline')[0]['value'];
 $potential_body = field_get_items('node', $potential, 'body')[0]['value'];

 $relevance = node_load(25018);
 $relevance_heading = field_get_items('node', $relevance, 'field_headline')[0]['value'];
 $relevance_body = field_get_items('node', $relevance, 'body')[0]['value'];

 $thematic = node_load(25019);
 $thematic_heading = field_get_items('node', $thematic, 'field_headline')[0]['value'];
 $thematic_body = field_get_items('node', $thematic, 'body')[0]['value'];
?>
<div id="countriesPage" class="<?php print $classes; ?>">

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>

  <div class="l-map">

    <div class="c-loader"><div class="loader"></div></div>
    <div id="countriesMap" class="map"></div>

    <div class="c-map-legend-countries">

      <div class="close-layers">
        <div class="close-layers-icon open">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="text-top-legend">Close the layers</span>
      </div>
      <div class="scroll-contain-legend -scroll">
        <div class="container-all-legends">
          <div class="action-plans-filter">
            <div class="contain-filter">
              <div class="name-filter">
                <input class="select-legend info-legend-input -selected" data-value="info-legend" data-layer="action" type="checkbox" disabled>
                <span class="text -legend">Action Plans</span>
              </div>
              <div class="contain-info info-legend -open-legend">
                <ul>
                  <li class="text -small -grey">
                    <div class="circle-color -developing "></div>
                    Developing Action Plan
                  </li>
                  <li class="text -small -grey">
                    <div class="circle-color -implementing"></div>
                    Implementing Action Plan
                  </li>
                  <li class="text -small -grey">
                    <div class="circle-color -inactive"></div>
                    <a class="inactive-link" href="<?php print drupal_get_path_alias('node/5852') ?>"><span>Inactive</span><svg class="icon"><use xlink:href="#icon-triangle-right"></use></svg></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="starred-filter">
            <div class="contain-filter">
              <div class="name-filter">
                <input class="select-legend starred-legend-input" data-layer="starred" data-value="starred-legend" type="checkbox">
                <span class="text -legend">Starred Commitments</span>
              </div>
              <div class="contain-info starred-legend">
              </div>
            </div>
          </div>
          <div class="people-involved-filter">
            <div class="contain-filter">
              <div class="name-filter">
                <input class="select-legend" data-layer="people" data-value="people-legend" type="checkbox">
                <span class="text -legend">People involved</span>
              </div>
            </div>
          </div>
          <div class="stories-filter">
            <div class="contain-filter">
              <div class="name-filter">
                <input class="select-legend" data-layer="stories" data-value="stories" type="checkbox">
                <span class="text -legend">Stories</span>
              </div>
            </div>
          </div>
          <div class="event-filter">
            <div class="contain-filter">
              <div class="name-filter">
                <input class="select-legend event-legend-input" data-value="events-legend" data-layer="upcomingevent" type="checkbox">
                <span class="text -legend">Events</span>
              </div>
              <div class="contain-info events-legend">
                <ul>
                  <li class="text -small -grey">
                    <div class="circle-color -upcoming"></div>
                    <span class="legend-info-event">Upcoming Events</span>
                  </li>
                </ul>
                <span class="text -blue -small-bold -interactive change-event-layer change-past-event-layer">LOOKING FOR PAST EVENTS?</span>
              </div>
            </div>
          </div>
          <div class="themes-filter">
            <div class="contain-filter">
              <div class="name-filter">
                <input class="select-legend" data-value="theme-legend" data-layer="commitment" type="checkbox">
                <span class="text -legend">Commitment themes</span>
              </div>
              <div class="contain-info theme-legend">
                <div class="contain-select-theme">
                  <select class="select-legend-dropdown">
                    <option></option>
                  </select>
                </div>
                <ul>
                  <li class="text -small -grey">
                    <div class="circle-color -themes"></div>
                    Number of commitments of your selection
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="subnational-participants-filter">
            <div class="contain-filter">
              <div class="name-filter">
                <input class="select-legend" data-layer="participants" data-value="theme-participants" type="checkbox">
                <span class="text -legend">Subnational participants</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="c-zoom-controls -full-width">
      <div class="icons" id="in">
        <svg class="icon"><use xlink:href="#icon-plus"></use></svg>
      </div>
      <div class="icons" id="out">
        <svg class="icon"><use xlink:href="#icon-minus"></use></svg>
      </div>
    </div>

  </div>

  <div class="l-page -short">

    <div class="c-tabs -horizontal">
      <div class="tabs">
        <div class="row">
          <div class="column small-12">
            <ul class="tabs-container">
              <li class="tab text -tab -selected" data-node="starred">starred commitments</li>
              <li class="tab text -tab" data-node="potential">potential impact</li>
              <li class="tab text -tab" data-node="relevance">relevance to OGP values</li>
              <li class="tab text -tab" data-node="thematic">thematic focus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="countriesTabsDetail" class="l-gallery">
      <div class="row">
        <div class="column small-12 medium-9">
          <div class="tab-content starred">
            <h3 class="text -section-title"><?php echo $starred_heading ?></h3>
            <div class="text -body-content"><?php echo $starred_body ?></div>
          </div>
          <div class="tab-content potential -hidden ">
            <h3 class="text -section-title"><?php echo $potential_heading ?></h3>
            <div class="text -body-content"><?php echo $potential_body ?></div>
          </div>
          <div class="tab-content relevance -hidden">
            <h3 class="text -section-title"><?php echo $relevance_heading ?></h3>
            <div class="text -body-content"><?php echo $relevance_body ?></div>
          </div>
          <div class="tab-content thematic -hidden">
            <h3 class="text -section-title"><?php echo $thematic_heading ?></h3>
            <div class="text -body-content"><?php echo $thematic_body ?></div>
          </div>
        </div>
      </div>
    </div>

    <div id="countriesSearch" class="row">
      <div class="columns small-12 medium-6">
        <div class="c-selector -search">
          <select class="select-country"></select>
          <svg class="icon -medium -blue icon-search"><use xlink:href="#icon-search"></use></svg>
        </div>
      </div>
    </div>

    <div id="countriesContentContainer" class="content-container">
      <div class="page-count" data-value="1"></div>
      <div class="c-loader"><div class="loader"></div></div>
      <div class="row content-tiles"></div>
    </div>

    <div class="row">
      <div class="column small-12">
        <div class="c-pagination-click -hidden">
          <div class="reload-thematic" data-value="0">
            <svg class="icon icon-reload"><use xlink:href="#icon-loading"></use></svg>
            <span class="text -blue -small-bold">LOAD MORE COUNTRIES</span>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="column small-12 medium-4 medium-offset-4">
        <a class="c-button -box -green -full" href="http://www.opengovpartnership.org/explorer/all-data.html" target="_blank">view ogp explorer</a>
      </div>
    </div>

  </div>

  <div class="banners-container"></div>

  <div class="l-social-region">
    <?php
    $social = block_get_blocks_by_region('contentSocialFeed');
    print render($social);
    ?>
  </div>

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/footer.tpl.php'); ?>

</div>
