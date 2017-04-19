<?php
/**
 * @file
 * Page
 */

 // $about = node_load(1002);
 // $about_title = field_get_items('node', $about, 'title_field')[0]['value'];
 // $about_body = field_get_items('node', $about, 'body')[0]['value'];
?>
<div id="searchPage" class="<?php print $classes; ?>">

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>

  <div class="l-page -tall -search">
    <div class="row">
      <div class="column small-12">
        <h1 id="value-search" class="text -title">Search</h1>
      </div>
    </div>

    <?php if ($content = render($page['content'])): ?>
      <?php print $content; ?>
    <?php endif; ?>

  </div>

  <div class="banners-container"></div>

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/footer.tpl.php'); ?>

</div>
