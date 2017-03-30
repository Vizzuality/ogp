<?php
/**
 * @file
 * Page
 */
?>
<div id="documentResourcesPage" class="<?php print $classes; ?>">

    <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>

    <div class="l-resources" id="content">
        <div class="row">
            <div class="column small-12 medium-9">
                <h1 class="text -title">Document Resources</h1>
                <div class="text -body-content">
                    Find OGP material relevant to your position and interests. Choose from Government, Civil Society,
                    Researcher, Journalist, or Donor below for a full listing of useful tools and guidance, data and
                    research, and general information documents.
                </div>
            </div>
        </div>

        <div id="resourceDocsTilesSearch" class="row">
          <div class="columns small-12">
            <form class="c-search-bar">
              <input type="text" class="text -search" placeholder="Search resource documents...">
              <svg class="icon -medium -blue"><use xlink:href="#icon-search"></use></svg>
            </form>
          </div>
        </div>

        <div id="resourceDocsTiles" class="row"></div>

        <div id="tilesNoResults" class="c-no-results">
          <h4 class="text -section-title">Sorry, nothing to see</h4>
        </div>
    </div>

    <?php if ($content = render($page['contentResources'])): ?>
        <?php print $content; ?>
    <?php endif; ?>

    <div class="banners-container"></div>

    <div class="l-social-region">
      <?php
      $social = block_get_blocks_by_region('contentSocialFeed');
      print render($social);
      ?>
    </div>

    <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/footer.tpl.php'); ?>

</div>
