<?php

/**
 * @file
 * Group resources node template
 */
 $attachments = field_get_items('node', $node, 'field_attachment');
 $links = field_get_items('node', $node, 'field_link');
 $date = format_date($node->changed, 'custom', 'd/m/Y');
 $post_date = field_get_items('node', $node, 'field_post_date_resource');
 $body = field_get_items('node', $node, 'body')[0]['value'];
 $file_types = ['.xlsx', '.pdf'];
?>
<div id="resourcesDetail" class="l-resources -single"<?php print $attributes; ?>>

  <!-- Full width header -->
  <div class="l-full-width -blue">
    <div class="row">
      <div class="column small-12 medium-9">
        <h1 class="text -title -white"><?php echo $node->title ?></h1>
        <div class="meta">
          <span class="text -date -white">
            <?php
              $date = date_create($post_date[0]['value']);
              echo date_format($date,"d/m/Y");
            ?>
          </span>
        </div>
      </div>
    </div>
  </div>

  <!-- Narrow content -->
  <div class="row">
    <div class="column small-12 medium-8 medium-offset-2">
      <h1 class="text -section-title">Description</h1>
      <div class="text -body-content">
        <?php echo $body ?>
      </div>
      <?php if ($attachments || $links) { ?>
        <div class="c-documents">
          <h1 class="text -section-title">Documents</h1>
          <div class="text -body-content">
            <?php foreach ($attachments as $attachment) { ?>
              <div class="c-link">
                <svg class="icon -blue -small"><use xlink:href="#icon-external-link"></use></svg>
                <a class="text -link -blue" href="<?php echo file_create_url($attachment['uri']) ?>" target="_blank" rel="nofollow"><?php echo $attachment['filename'] ?></a>
              </div>
            <?php } ?>
            <?php foreach ($links as $link) { ?>
              <div class="c-link">
                <svg class="icon -blue -small"><use xlink:href="#icon-external-link"></use></svg>
                <a class="text -link -blue" href="<?php echo $link['url'] ?>" target="_blank" rel="nofollow"><?php echo $link['title'] ?></a>
              </div>
            <?php } ?>
          </div>
        </div>
      <?php } ?>
    </div>
  </div>

  <!-- Explore more dynamic block -->
  <div class="c-explore-more">
    <div class="row container">
      <div class="column small-12">
        <h3 class="text -module-title">Explore more resources</h3>
        <div class="c-loader"><div class="loader"></div></div>
      </div>
    </div>
  </div>

  <div class="banners-container"></div>

</div>
