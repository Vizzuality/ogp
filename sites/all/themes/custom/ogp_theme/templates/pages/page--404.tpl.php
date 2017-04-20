<?php
/**
 * @file
 * Page
 */
?>
<div id="page404">

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>

  <?php if (user_is_logged_in() && ($primary_local_tasks || $secondary_local_tasks || $action_links)): ?>
    <div class="c-node-tools">
        <div id="tasks" class="tools">
          <?php if ($primary_local_tasks): ?>
            <?php print render($primary_local_tasks); ?>
          <?php endif; ?>
        </div>
    </div>
  <?php endif; ?>

  <div class="row">
    <div class="c-no-results -xtall column small-12">
      <svg class="icon -xxlarge"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-compass-blue"></use></svg>
      <p class="text -title-x-small -grey">Page could not be found, try <a href="/search">searching</a></p>
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
