<?php
/**
 * @file
 * Page
 */
?>



<?php require_once('submitStory.php'); ?>
<div id="storiesSubmitPage">

    <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>

    <div class="l-page">

      <section class="row">
        <div class="column small-12 medium-8 content-header">
          <h1 class="text -title">Story accepted</h1>
          <p class="text -body-content">
          </p>
        </div>
      </section>
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
