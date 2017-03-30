<?php
/**
 * @file
 * Page
 */
 $resources = node_load(25022);
 $resources_heading = field_get_items('node', $resources, 'field_headline')[0]['value'];
 $resources_body = field_get_items('node', $resources, 'body')[0]['value'];
?>
<div id="groupResourcesPage" class="<?php print $classes; ?>">

    <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>

    <div class="l-resources" id="content">
        <div class="row">
            <div class="column small-12 medium-9">
                <h1 class="text -title"><?php echo $resources_heading ?></h1>
                <div class="text -body-content"><?php echo $resources_body ?></div>
                <h2 class="text -section-title">Who are you?</h2>
            </div>
        </div>
        <div class="l-section">
          <div class="c-loader"><div class="loader"></div></div>
          <div id="groupResourcesTiles" class="row"></div>
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
