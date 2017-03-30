<?php
/**
 * @file
 * Page
 */
 $themes = node_load(25023);
 $themes_heading = field_get_items('node', $themes, 'field_headline')[0]['value'];
 $themes_body = field_get_items('node', $themes, 'body')[0]['value'];
?>
<div id="themesPage" class="<?php print $classes; ?>">

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>

  <div class="l-page">

    <div class="row">
      <div class="column small-12 medium-8 content-header">
        <h1 class="text -title"><?php echo $themes_heading ?></h1>
        <div class="text -body-content"><?php echo $themes_body ?></div>
      </div>
    </div>

    <div class="l-section">
      <div class="c-loader"><div class="loader"></div></div>

      <div id="themesTilesSearch" class="row">
        <div class="columns small-12">
          <form class="c-search-bar">
            <input type="text" class="text -search" placeholder="Search commitment themes...">
            <svg class="icon -medium -blue"><use xlink:href="#icon-search"></use></svg>
          </form>
        </div>
      </div>

      <div id="themesTiles">
        <div class="row">
          <div class="column small-12 medium-3">
            <div class="c-tabs -vertical">
              <ul class="tabs-container">
                <li class="tab text -tab -grey" data-node="0">All themes</li>
                <li class="tab text -tab -grey" data-node="2888">Access to information and open data</li>
                <li class="tab text -tab -grey" data-node="2889">Branches of government</li>
                <li class="tab text -tab -grey" data-node="2891">Citizen engagement with government</li>
                <li class="tab text -tab -grey" data-node="2892">Elections and political financing</li>
                <li class="tab text -tab -grey " data-node="2893">Fiscal openness</li>
                <li class="tab text -tab -grey" data-node="2894">Justice, public safety, and rule of law</li>
                <li class="tab text -tab -grey" data-node="2895">Natural resources and development</li>
                <li class="tab text -tab -grey" data-node="2896">Public integrity measures</li>
                <li class="tab text -tab -grey" data-node="2897">Public procurement</li>
                <li class="tab text -tab -grey" data-node="2890">Citizen engagement</li>
              </ul>
            </div>
          </div>
          <div class="column small-12 medium-9">
            <h2 class="text -section-title tiles-heading">All themes</h2>
            <div id="tilesContainer" class="row"></div>
            <div id="noResultsContainer"></div>
          </div>
        </div>
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
