<?php
/**
 * @file
 */
$node = node_load($nid);
$fields = field_info_instances('node', 'starred_commitments');
$attachments = field_get_items('node', $node, 'field_attachment');
$body = field_get_items('node', $node, 'body')[0]['value'];
?>
<div id="workingGroupDetail" class="l-working-group">

  <section class="l-full-width -blue -short -with-padding">
    <div class="row">
      <div class="column small-12 medium-9">
        <p class="text -white -heavy tag">Working Group</p>
        <h1 class="text -title -white title"><?php echo $node->title ?></h1>
      </div>
    </div>
  </section>

  <section class="row working-group-content">
    <div class="c-loader"><div class="loader"></div></div>
    <div class="column small-12 medium-4">
      <div class="c-tabs -vertical">
        <ul class="tabs-container">
          <li class="tab text -tab -selected" data-node="about">About</li>
        </ul>
      </div>
    </div>
    <div class="column small-12 medium-8" id="container-info">
      <div class="tab-content about">
        <h3 class="text -section-title">About</h3>
        <div class="text -body-content">
          <?php echo $body ?>
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
  </section>

  <div class="banners-container"></div>

</div>
