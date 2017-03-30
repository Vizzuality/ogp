<?php

/**
 * @file
 */
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
        </div>
      </div>
    </div>
  </div>

</div>

<div class="l-comments">
  <div class="row">
    <div class="column small-12 medium-8 medium-offset-2">
      <?php print render($content['disqus']); ?>
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
