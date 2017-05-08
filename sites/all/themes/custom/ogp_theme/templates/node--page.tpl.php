<?php
/**
 * @file
 * Adaptivetheme implementation to display a node.
 */
  $body = field_get_items('node', $node, 'body')[0]['value'];
  $attachments = field_get_items('node', $node, 'field_documents');
  $attachments_datasets = field_get_items('node', $node, 'field_page_documents');
?>
<article id="node" class="l-page">

  <!-- Narrow content -->
  <div class="row">
    <div class="column small-12 content-header">
      <h1 class="text -title"><?php echo $node->title ?></h1>
    </div>
    <?php if (isset($node->book)) { ?>
      <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/about-menu.tpl.php'); ?>
      <div class="column small-12 medium-8">
    <?php } else { ?>
      <div class="column small-12 medium-8 medium-offset-2">
    <?php } ?>
      <div class="text -body-content -has-documents">
        <?php echo $body ?>
      </div>
      <?php if ($attachments || $attachments_datasets) { ?>
        <div class="c-documents">
          <h1 class="text -section-title">Documents</h1>
          <div class="text -body-content">
            <?php if ($attachments) {
              foreach ($attachments as $attachment) { ?>
              <div class="c-link">
                <svg class="icon -blue -small"><use xlink:href="#icon-external-link"></use></svg>
                <a class="text -link -blue" href="<?php echo drupal_get_path_alias('node/' . $attachment['target_id']) ?>" target="_blank" rel="nofollow"><?php echo $attachment['entity']->title ?></a>
              </div>
            <?php }} ?>
            <?php if ($attachments_datasets) {
              foreach ($attachments_datasets as $attachment) {
                $dataset = node_load($attachment['target_id']);
                $dataset_docs = field_get_items('node', $dataset, 'field_resources');
                foreach ($dataset_docs as $attachment) {
                  $document = node_load($attachment['target_id']); ?>
                  <div class="c-link">
                    <svg class="icon -blue -small"><use xlink:href="#icon-external-link"></use></svg>
                    <a class="text -link -blue" href="<?php echo drupal_get_path_alias('node/' . $attachment['target_id']) ?>" target="_blank" rel="nofollow"><?php echo $document->title ?></a>
                  </div>
            <?php }}} ?>
          </div>
        </div>
      <?php } ?>
    </div>
  </div>

</article>

<div class="banners-container"></div>
