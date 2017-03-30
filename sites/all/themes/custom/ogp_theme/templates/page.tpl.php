<?php
/**
 * @file
 * Page
 */
?>
<div id="page">

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

  <?php if ($content = render($page['content'])): ?>
    <?php print $content; ?>
  <?php endif; ?>

  <div class="l-social-region">
    <?php
    $social = block_get_blocks_by_region('contentSocialFeed');
    print render($social);
    ?>
  </div>

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/footer.tpl.php'); ?>

</div>
