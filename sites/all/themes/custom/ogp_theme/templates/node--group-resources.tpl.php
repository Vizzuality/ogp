<?php

/**
 * @file
 */
 $node_name = ltrim($node->title, ' ');
?>
<div id="groupResourcesDetail" data-node="<?php echo $node_name ?>" class="l-resources -detail"<?php print $attributes; ?>>

  <!-- Title and description from $node -->
  <div class="row">
    <div class="column small-12 medium-9 content-header">
      <h1 class="text -title"><?php echo $node->title ?></h1>
      <div class="text -body-content">
        <?php
          $body = field_get_items('node', $node, 'body');
          print $body[0]['value'];
        ?>
      </div>
    </div>
  </div>



  <!-- dynamic tabs block from API -->
  <div id="groupResourcesTabs" class="c-tabs -horizontal">
    <div class="tabs">
      <div class="row">
        <div class="columns small-12">
          <div class="tabs-container"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="l-section">
    <div class="c-loader"><div class="loader"></div></div>

    <div id="resourceTilesSearch" class="row">
      <div class="columns small-12">
        <form class="c-search-bar">
          <input type="text" class="text -search">
          <svg class="icon -medium -blue"><use xlink:href="#icon-search"></use></svg>
        </form>
      </div>
    </div>

    <div id="tilesContainer" class="row"></div>

    <div id="noResultsContainer"></div>

  </div>

  <div class="banners-container"></div>

  <?php
    $blocks = block_get_blocks_by_region('contentResources');
    print render($blocks);
  ?>

</div>
