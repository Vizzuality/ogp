<?php

/**
 * @file
 */
 $attachments = field_get_items('node', $node, 'field_attachment');
?>
<div id="storiesDetail" class="l-page"<?php print $attributes; ?>>

  <!-- Narrow content -->
  <div class="row">
    <div class="column small-12 content-header">
      <h1 class="text -title"><?php echo $node->title ?></h1>
      <div class="text -dynamic-link countries"></div>
    </div>
    <div class="column small-12 medium-8 medium-offset-2">
      <div class="l-section">
        <div class="c-loader"><div class="loader"></div></div>
        <div class="text -body-content"></div>
        <div class="story-detail">
          <div class="author text -grey -meta"></div>
          <div class="topic text -grey -meta"></div>
          <div class="filed-under text -grey -meta"></div>
          <div class="tags text -grey -meta"></div>
        </div>
      </div>
    </div>
  </div>

  <?php if ($attachments) { ?>
    <div class="c-documents">
      <h1 class="text -section-title">Documents</h1>
      <div class="text -body-content">
        <?php foreach ($attachments as $attachment) { ?>
          <div class="c-link">
            <svg class="icon -blue -small"><use xlink:href="#icon-external-link"></use></svg>
            <a class="text -link -blue" href="<?php echo file_create_url($attachment['uri']) ?>" target="_blank" rel="nofollow"><?php echo $attachment['filename'] ?></a>
          </div>
        <?php } ?>
      </div>
    </div>
  <?php } ?>

</div>

<div class="l-comments">
  <div class="row">
    <div class="column small-12 medium-8 medium-offset-2">
      <div id="disqus_thread"></div>
    </div>
  </div>
</div>

<div class="banners-container"></div>

<div>
  <?php
  $blocks = block_get_blocks_by_region('contentStoryDetail');
  print render($blocks);
  ?>
</div>
