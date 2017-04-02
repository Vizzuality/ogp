<?php

/**
 * @file
 */
 $term = $page['content']['system_main']['term_heading']['term']['#term'];
?>

<div class="<?php print $classes; ?>">

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>

  <div id="groupResourcesDetail" data-node="<?php echo $term->tid ?>" class="l-resources -detail"<?php print $attributes; ?>>

    <!-- Title and description from $node -->
    <div class="row">
      <div class="column small-12 medium-9 content-header">
        <h1 class="text -title"><?php echo $term->name ?></h1>
        <div class="text -body-content">
          <?php print $term->description ?>
        </div>
      </div>
    </div>

    <!-- dynamic tabs block from API -->
    <div id="groupResourcesTabs" class="c-tabs -horizontal">
      <div class="tabs">
        <div class="row">
          <div class="columns small-12">
            <div class="tabs-container"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="l-section">
      <div class="c-loader"><div class="loader"></div></div>

      <div id="resourceTilesSearch" class="row">
        <div class="columns small-12">
          <form class="c-search-bar">
            <input type="text" class="text -search">
            <svg class="icon -medium -blue"><use xlink:href="#icon-search"></use></svg>
          </form>
        </div>
      </div>

      <div id="tilesContainer" class="row"></div>

      <div id="noResultsContainer"></div>

    </div>

  </div>

  <div class="banners-container"></div>

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/footer.tpl.php'); ?>

</div>
