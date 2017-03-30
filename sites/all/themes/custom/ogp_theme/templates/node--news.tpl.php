<?php
/**
 * @file
 */
$node = node_load($nid);
$fields = field_info_instances('node', 'news');

$field_publication_date = field_get_items('node', $node, 'field_publication_date');
$field_link = field_get_items('node', $node, 'field_link');
$body = field_get_items('node', $node, 'body');
?>
<div id="newsTemplate" class="l-news-events news-template">

  <section class="l-full-width -blue -short -with-padding-big">
    <div class="row">
      <div class="column small-12 medium-9">
        <p class="text -white -heavy">News</p>
        <p class="container-date">
          <span class="text -section-title-small -white">
            <?php
              $date = date_create($field_publication_date[0]['value']);
              echo date_format($date,"j F, Y");
              // echo $field_publication_date[0]['value']
            ?>
          </span>
        </p>
        <h1 class="text -title -white title"><?php echo $node->title ?></h1>
      </div>
    </div>
  </section>

  <div class="container-body">
    <div class="row">
      <div class="column small-12 medium-8 medium-offset-2">
        <div class="text -body-content">
          <p><?php echo $node->body[$node->language][0]['value']; ?></p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="container-link column small-12 medium-12">
        <a class="text -blue -interactive" href="<?php echo $field_link[0]['query']['url'] ?>" target="_blank">Link to the new <svg class="icon -blue -medium"><use xlink:href="#icon-arrow"></use></svg></a>
      </div>
    </div>
  </div>

</div>

<div class="banners-container"></div>
