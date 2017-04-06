<?php

/**
 * @file
 * Group resources node template
 */
 $date = format_date($node->changed, 'custom', 'd/m/Y');
 $body = field_get_items('node', $node, 'body')[0]['value'];
 $documents = field_get_items('node', $node, 'field_link_api');
 $type = field_get_items('node', $node, 'field_ogp_document_type');
 $publication_date = field_get_items('node', $node, 'field_date_published')[0]['value'];
 $start_date = field_get_items('node', $node, 'field_cycle_start_date')[0]['value'];
 $end_date = field_get_items('node', $node, 'field_cycle_end_date')[0]['value'];
 $file_types = ['.xlsx', '.pdf'];
?>
<div id="documentResourcesDetail" data-node="<?php echo $node_name ?>" class="l-resources -single"<?php print $attributes; ?>>

  <!-- Full width header -->
  <div class="l-full-width -blue">
    <div class="row">
      <div class="column small-12 medium-9">
        <h1 class="text -title -white"><?php echo $node->title ?></h1>
        <div class="meta">
          <?php foreach ($type as $category) { ?>
            <span class="text -date -white"><?php echo $category['taxonomy_term']->name ?></span>
          <?php } ?>
        </div>
      </div>
    </div>
  </div>

  <!-- Narrow content -->
  <div class="row">
    <div class="column small-12 medium-8 medium-offset-2">
      <div class="text -body-content">
        <?php echo $body ?>
      </div>
      <h1 class="text -section-title">Documents</h1>
      <div class="text -body-content">
      <?php foreach ($documents as $document) { ?>
        <div class="c-link">
          <svg class="icon -blue -small"><use xlink:href="#icon-external-link"></use></svg>
          <a class="text -link -blue" href="<?php echo $document['url'] ?>" target="_blank" rel="nofollow"><?php echo $node->title ?></a>
        </div>
      <?php } ?>
    </div>
    </div>
  </div>

  <?php foreach($type as $key => $item) {
    if (in_array('Report Comments', get_object_vars($item['taxonomy_term']))) { ?>
      <div class="l-comments">
        <div class="row">
          <div class="column small-12 medium-8 medium-offset-2">
            <?php print render($content['disqus']); ?>
          </div>
        </div>
      </div>
    <?php }
  } ?>

</div>
