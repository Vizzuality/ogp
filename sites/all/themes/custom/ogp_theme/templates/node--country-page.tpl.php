<?php

/**
 * @file
 */
$body = field_get_items('node', $node, 'body')[0]['value'];

$current = node_load(25020);
$current_heading = field_get_items('node', $current, 'field_headline')[0]['value'];
$current_body = field_get_items('node', $current, 'body')[0]['value'];

$reviewed = node_load(25021);
$reviewed_heading = field_get_items('node', $reviewed, 'field_headline')[0]['value'];
$reviewed_body = field_get_items('node', $reviewed, 'body')[0]['value'];

$current_themes = field_get_items('node', $node, 'field_current_themes')[0]['value'];
$themes_percentage = field_get_items('node', $node, 'field_themes_percentage')[0]['value'];
?>
<div id="countriesDetail" class="l-countries -single"<?php print $attributes; ?>>

  <div id="countryHeaderBanner" class="header-banner">

    <div class="colour-panel -blue -left">
      <div class="row">
        <div class="columns small-12 medium-10">
          <h1 class="text -title -white"><?php echo $node->title ?></h1>
          <div class="body-view-more text-container text -white -heavy">
              <?php print $body; ?>
          </div>
          <a href="#countryHeaderBanner" class="js-view-more">
            <div class="text -white -heavy">
              <span>VIEW MORE</span><svg class="icon -small"><use xlink:href="#icon-down-arrow"></use></svg>
            </div>
          </a>
          <div class="c-commitment-count">
            <span class="content-count text -large-number -white">0</span>
            <h4 class="text -section-title-small -white">
              <span>Current</span>
              <span>Commitments</span>
            </h4>
          </div>
          <div class="text -white -heavy"><span class="irm-count">0</span> reviewed commitments</div>
          <div class="text -white -heavy"><span class="starred-count">0</span> starred commitments</div>
        </div>
      </div>
    </div>

    <div class="colour-panel -right">
      <div class="row">
        <div class="columns small-12 medium-10 medium-offset-1">
          <div class="themes-container">
            <h2 class="current-actions text -section-title-small -white">Current Action Plan Thematic Focus</h2>
          </div>
          <h2 class="completion text -section-title-small -white">Commitment Completion</h2>
          <div class="completion-container"></div>
        </div>
      </div>
    </div>

    <div class="c-loader"><div class="loader"></div></div>

  </div>

  <section id="currentCommitmentsAccordion" class="l-accordion">
    <div class="row">
      <div class="columns small-12 medium-8">
        <h2 class="text -section-title"><?php echo $current_heading ?> (<span class="content-count"></span>)</h2>
        <div class="text -body-content"><?php echo $current_body ?></div>
      </div>
      <div class="l-section columns small-12 -short">
        <div class="c-accordion"></div>
        <div class="c-loader"><div class="loader"></div></div>
      </div>
      <div class="column small-12">
        <div class="c-pagination"></div>
      </div>
    </div>
  </section>

  <section id="irmReviewedCommitmentsAccordion" class="l-accordion">
    <div class="row">
      <div class="columns small-12 medium-8">
        <h2 class="text -section-title"><?php echo $reviewed_heading ?> (<span class="content-count"></span>)</h2>
        <div class="text -body-content"><?php echo $reviewed_body ?></div>
      </div>
      <div class="l-section columns small-12 -short">
        <div class="c-accordion"></div>
        <div class="c-loader"><div class="loader"></div></div>
      </div>
      <div class="column small-12">
        <div class="c-pagination"></div>
      </div>
    </div>
  </section>

  <section class="l-reports">
    <div class="row">
      <div class="columns small-12 medium-6">
        <div class="l-section" id="resourceDocsContainer">
          <div id="actionPlansLinks" class="row document-panel">
            <div class="columns small-12 medium-6">
              <h3 class="text -section-title">National Action Plans</h3>
            </div>
            <div class="columns small-12 medium-6">
              <select class="years-filter -hidden">
              </select>
            </div>
            <div class="columns small-12 links-container"></div>
          </div>
          <div id="reportsLinks" class="row document-panel">
            <div class="columns small-12 medium-6">
              <h3 class="text -section-title">Reports</h3>
            </div>
            <div class="columns small-12 medium-6">
              <select class="years-filter -hidden">
              </select>
            </div>
            <div class="columns small-12 links-container"></div>
          </div>
          <div id="lettersLinks" class="row document-panel">
            <div class="columns small-12 medium-6">
              <h3 class="text -section-title">Letters</h3>
            </div>
            <div class="columns small-12 medium-6">
              <select class="years-filter -hidden">
              </select>
            </div>
            <div class="columns small-12 links-container"></div>
          </div>
          <div class="c-loader"><div class="loader"></div></div>
        </div>
      </div>
      <div class="columns small-12 medium-6">
        <div class="c-activity-stream">
          <div class="c-loader"><div class="loader"></div></div>
          <h3 class="text -section-title -white">Activity Stream</h3>
          <ul class="text -white"></ul>
          <div class="item-bridge -hidden"></div>
        </div>
      </div>
    </div>
  </section>

  <section id="eventsBanner" class="l-full-width -short -white -hidden">
    <div class="row to-front">
      <div class="columns small-12">
        <div class="c-content-banner -with-background">
          <span class="text -small-bold -white">Upcoming event</span>
          <h2 class="text -title -white banner-title">Brazil event</h2>
          <span class="text -white banner-title">12th march</span>
          <div class="row">
            <div class="column small-12 medium-4">
              <a class="c-button -box -white" href="">View event</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="back -grey"></div>
  </section>

  <div class="banners-container"></div>

  <?php
    $blocks = block_get_blocks_by_region('contentCountriesPage');
    print render($blocks);
  ?>

</div>
