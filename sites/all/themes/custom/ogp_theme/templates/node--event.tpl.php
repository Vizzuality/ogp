<?php
/**
 * @file
 */
$node = node_load($nid);
$fields = field_info_instances('node', 'event');
$today = date("Y-m-d H:i:s");

$field_publication_date = field_get_items('node', $node, 'field_publication_date');
$field_date = field_get_items('node', $node, 'field_date');
$field_country_event = field_get_items('node', $node, 'field_country_event');
$field_location = field_get_items('node', $node, 'field_location');
$field_event_type = field_get_items('node', $node, 'field_event_type');
$field_tags = field_get_items('node', $node, 'field_tags');
$body = field_get_items('node', $node, 'body');
?>
<div id="eventsTemplate" class="l-news-events events-template">

  <section class="l-full-width -blue -short -with-padding-big image-back">
    <div class="row">
      <div class="column small-12 medium-9">
        <p class="text -white -heavy -uppercase">
          <?php
            echo ($field_event_type[0]['taxonomy_term']->name);
          ?>
        </p>
        <p class="container-date -event-date text -white">
          <span>
            <?php
              $date = date_create($field_date[0]['value']);
              echo date_format($date,"l, F j - g:ha");
            ?>
          </span>
          <span class="separate">to</span>
          <span>
            <?php
            $date = date_create($field_date[0]['value2']);
            echo date_format($date,"l, F j - g:ha");
            ?>
          </span>
        </p>
        <h1 class="text -title -white title"><?php echo $node->title ?></h1>
      </div>
    </div>
  </section>

  <div class="container-info">
    <div class="row">
      <div class="column small-12 medium-3">
        <strong class="text -uppercase -small-bold"><?php echo $fields['field_location']['label'] ?></strong>
        <p>
          <?php if ($field_location[0]['locality']) { ?>
            <strong class="text">
              <?php echo field_location[0]['locality'] ?>
            </strong>
          <?php } ?>
          <?php if ($field_country_event[0][entity]->title) { ?>
            <strong class="text">
              <?php echo $field_country_event[0][entity]->title ?>
            </strong>
          <?php } ?>
        </p>
      </div>

      <div class="column small-12 medium-3">
        <strong class="text -uppercase -small-bold">Language</strong>
        <p>
          <strong class="text -small-bold -capitalize"><?php echo $node->language ?> </strong>
        </p>
      </div>

      <div class="column small-12 medium-6">
          <strong class="text -uppercase -small-bold"><?php echo $fields['field_tags']['label'] ?></strong>
          <?php if ($field_country_event[0][entity]->title) { ?>
            <p>
              <strong class="text -white -small-bold -capitalize">
                <?php
                  echo ($field_tags)[0];
                  if ($field_tags[0]['taxonomy_term']->name || $field_tags[0]) {
                    echo ($field_tags[0]['taxonomy_term']->name);
                  } else {
                    echo 'There are not tags.';
                  }
                ?>
              </strong>
            </p>
          <?php } ?>

      </div>
    </div>
  </div>

  <div class="row container-body">
    <div class="column small-12 medium-8 medium-offset-2">
      <div class="text -body-content">
        <h2 class="text -section-title-small">Description</h2>
        <p><?php echo $node->body[$node->language][0]['value']; ?></p>
      </div>
    </div>
  </div>

</div>

<div class="banners-container"></div>