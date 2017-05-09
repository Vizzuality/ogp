<?php
/**
 * @file
 */
$node = node_load($nid);
$fields = field_info_instances('node', 'people');
$field_contact = field_get_items('node', $node, 'field_contact');
$field_job_title = field_get_items('node', $node, 'field_job_title')[0]['value'];
$field_countries_involved = field_get_items('node', $node, 'field_countries_involved');
$field_countries_poc = field_get_items('node', $node, 'field_countries_poc');
$field_people_pic = field_get_items('node', $node, 'field_profile_picture');
?>
<div id="peopleInvolved" class="l-people-involved -no-bottom l-page -tall">
    <div class="row">
        <div class="column small-12 content-header people-header">
          <?php if($field_people_pic) { ?>
            <div class="image-profile">
              <div class="c-loader"><div class="loader"></div></div>
            </div>
          <?php } ?>
          <div>
            <h1 class="text -title"><?php echo $node->title ?></h1>
            <h2 class="text container-information">
              <?php
                if($field_countries_involved) {
                  echo '<div class="line-separator"><a href="/'.drupal_get_path_alias('node/' . $field_countries_involved[0]['target_id']).'" class="text -small-bold -uppercase -blue tag">'.$field_countries_involved[0]['entity']->title.'</a></div>';
                }
                if($field_job_title) {
                  echo '<div class="line-separator"><strong class="text -bold">Job title:<strong><span class="text -blank"> '.$field_job_title.'</span></div>';
                }
              ?>
              <?php
              if($field_contact[0]['value']) { ?>
                <?php
                $temp = explode(' ', $field_contact[0]['value']);
                $result = '';
                foreach($temp as $t)
                    $result .= $t[0];

                if(filter_var($field_contact[0]['value'], FILTER_VALIDATE_EMAIL)) {
                    echo '<div class="line-separator"><strong class="text -blank -bold">Email: <a class="text -blank" href="mailto:' . $field_contact[0]['value'] . '"></strong>'.$field_contact[0]['value'].'</a></div>';
                }

                if($result === '@') {
                    echo '<div class="line-separator"><strong class="text -blank -bold">Twitter: <a class="text -blank" href="mailto:' . str_replace('@', '', $field_contact[0]['value']) . '"></strong>'.$field_contact[0]['value'].'</a></div>';
                }
              }
              ?>
            </h2>
            <p>
              <?php
              if ($field_countries_poc) {
                ?>
                  <strong class="text -bold"><?php echo $fields['field_countries_poc']['label'].': ' ?></strong>
                <?php
                  for ($i = 0; $i < $iMax = count($field_countries_poc); $i++) {
                    if($i === (count($field_countries_poc) - 1)) {
                      echo '<a class="text -blue -small-bold" href="/'. drupal_get_path_alias('node/' . $field_countries_poc[$i]['target_id']) .'">' . $field_countries_poc[$i]['entity']->title .'</a>';
                    } else {
                      echo '<a class="text -blue -small-bold" href="/'. drupal_get_path_alias('node/' . $field_countries_poc[$i]['target_id']) .'">' . $field_countries_poc[$i]['entity']->title  . ', </a>';
                    }
                  }
                }
              ?>
            </p>
          </div>
        </div>
    </div>

    <div class="row">
        <div class="column small-12 medium-8 medium-offset-2">
            <div class="text -body-content">
                <p><?php echo $node->body[$node->language][0]['value']; ?></p>
            </div>
        </div>
    </div>

    <div class="container-content-user">
      <div class="c-loader -white"><div class="loader"></div></div>
      <div class="row containter-people-detail">
        <div class="column small-12 medium-12 title-blogs">
          <h1 class="text -title-small -white">Blogs</h1>
        </div>
      </div>
    </div>
    <div class="container-content-user-news">
      <div class="c-loader -white"><div class="loader"></div></div>
      <div class="row containter-people-detail-news ">
        <div class="column small-12 medium-12 title-news">
          <h1 class="text -title-small -white">News</h1>
        </div>
      </div>
    </div>

</div>

<div class="banners-container"></div>
