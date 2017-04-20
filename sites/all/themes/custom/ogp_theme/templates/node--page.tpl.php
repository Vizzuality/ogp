<?php
/**
 * @file
 * Adaptivetheme implementation to display a node.
 */
  $body = field_get_items('node', $node, 'body')[0]['value'];
?>
<article id="node-<?php print $node->nid; ?>" class="l-page">

  <!-- Narrow content -->
  <div class="row">
    <div class="column small-12 content-header">
      <h1 class="text -title"><?php echo $node->title ?></h1>
    </div>
    <div class="column small-12 medium-4">
      <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/about-menu.tpl.php'); ?>
    </div>
    <div class="column small-12 medium-8">
      <div class="text -body-content">
        <?php echo $body ?>
      </div>
    </div>
  </div>

</article>
