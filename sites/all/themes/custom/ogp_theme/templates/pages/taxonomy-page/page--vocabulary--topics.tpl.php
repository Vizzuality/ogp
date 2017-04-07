<?php

/**
 * @file
 */

$term = $page['content']['system_main']['term_heading']['term']['field_group']['#object'];

$starred = node_load(25024);
$starred_heading = field_get_items('node', $starred, 'field_headline')[0]['value'];
$starred_body = field_get_items('node', $starred, 'body')[0]['value'];

$model = node_load(25025);
$model_heading = field_get_items('node', $model, 'field_headline')[0]['value'];
$model_body = field_get_items('node', $model, 'body')[0]['value'];

$expert = node_load(25026);
$expert_heading = field_get_items('node', $expert, 'field_headline')[0]['value'];
$expert_body = field_get_items('node', $expert, 'body')[0]['value'];

$stories = node_load(25027);
$stories_heading = field_get_items('node', $stories, 'field_headline')[0]['value'];
$stories_body = field_get_items('node', $stories, 'body')[0]['value'];

$research = node_load(25028);
$research_heading = field_get_items('node', $research, 'field_headline')[0]['value'];
$research_body = field_get_items('node', $research, 'body')[0]['value'];
?>
<div id="themesDetail" class="<?php print $classes; ?>">

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>

  <div class="l-page">

    <div class="row">
      <div class="column small-12 medium-8 content-header">
        <h1 class="text -title"><?php print $term->name ?></h1>
        <p class="text -body-content"><?php print $term->description ?></p>
      </div>
    </div>

    <div class="l-section">

      <div class="c-tabs -horizontal">
        <div class="tabs">
          <div class="row">
            <div class="column small-12">
              <ul class="tabs-container">
                <li class="tab text -tab" data-node="starredcommitments">starred commitments</li>
                <li class="tab text -tab" data-node="modelcommitments">illustrative commitments</li>
                <li class="tab text -tab" data-node="expert">expert organizations</li>
                <li class="tab text -tab" data-node="stories">stories</li>
                <li class="tab text -tab" data-node="research">research</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column small-12">

          <div id="themesDetail" class="l-gallery">
            <div class="row">
              <div class="column small-12 medium-8">
                <p id="contributorsText" class="text -body-content -hidden"></p>
                <div class="text -body-content starredcommitments"><?php echo $starred_body ?></div>
                <div class="text -body-content -hidden modelcommitments"><?php echo $model_body ?></div>
                <div class="text -body-content -hidden expert"><?php echo $expert_body ?></div>
                <div class="text -body-content -hidden stories"><?php echo $stories_body ?></div>
                <div class="text -body-content -hidden research"><?php echo $research_body ?></div>
              </div>
            </div>
            <div class="row">
              <div class="column small-12 medium-3">
                <select class="country-selector">
                  <option value="0">All countries</option>
                </select>
              </div>
            </div>
            <div id="contentContainer">
              <div class="row content-tiles"></div>
              <div id="noResultsContainer"></div>
            </div>
          </div>

        </div>
      </div>

      <div class="c-loader"><div class="loader"></div></div>

    </div>

    <div class="row">
      <div class="column small-12 medium-4 medium-offset-4">
        <a class="c-button -box -green -full" href="http://www.opengovpartnership.org/explorer/all-data.html" target="_blank">view ogp explorer</a>
      </div>
    </div>

    <!-- Explore more dynamic block -->
    <div class="c-explore-more">
      <div class="row container">
        <div class="column small-12">
          <h3 class="text -module-title">Explore similar themes</h3>
          <div class="c-loader"><div class="loader"></div></div>
        </div>
      </div>
    </div>

  </div>

  <div class="theme-content-banner">
      <?php
      $blocks = block_get_blocks_by_region('contentThemeContent');
      print render($blocks);
      ?>
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
