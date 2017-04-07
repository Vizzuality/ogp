<?php
/**
 * @file
 */
$node = node_load($nid);
$fields = field_info_instances('node', 'current_commitment');

$other_field_keys = array_diff(array_keys($fields), [
    'field_year_action_plan_current',
    'field_start_date_current',
    'field_end_date_current',
    'field_lead_institution',
    'field_support_institution_curren',
    'field_theme_current',
    'field_country_current',
    'body',
]);

$field_country = field_get_items('node', $node, 'field_country_current');
$field_start_date = field_get_items('node', $node, 'field_start_date_current');
$field_end_date = field_get_items('node', $node, 'field_end_date_current');
$field_theme = field_get_items('node', $node, 'field_theme_current');
$field_year = field_get_items('node', $node, 'field_year_action_plan_current');
$field_support_institution_curren = field_get_items('node', $node, 'field_support_institution_curren');
$field_lead_institution = field_get_items('node', $node, 'field_lead_institution');
?>
<div id="currentCommitmentsDetail" class="l-commitment">

  <section class="l-full-width -blue -short -with-padding">
    <div class="row">
      <div class="column small-12 medium-9">
        <p class="text -white -heavy tag">Current Commitments</p>
        <h1 class="text -title -white title"><?php echo $node->title ?></h1>
        <span class="text -social-title"><?php echo $field_country[0]['entity']->title; ?></span>
        <div class="commitment-meta">
          <span class="text -body-content"><?php echo $fields['field_start_date_current']['label'] ?>: <?php echo $field_start_date[0]['value']; ?></span>
          <span class="text -body-content">&nbsp;| &nbsp;<?php echo $fields['field_end_date_current']['label'] ?>: <?php echo $field_end_date[0]['value']; ?></span>
        </div>
      </div>
    </div>
  </section>

  <section class="commitment-content">
    <div class="row">
      <div class="column small-12 medium-6">

        <div class="info-box">
          <h4 class="text -small-bold"><?php echo $fields['field_theme_current']['label'] ?></h4>
          <?php
            for ($i = 0; $i < $iMax = count($field_theme); $i++) {
              if($i === (count($field_theme) - 1)) {
                echo '<a class="text -blue -small-bold" href="/' . drupal_get_path_alias('taxonomy/term/' . $field_theme[$i]['target_id']) . '">' . $field_theme[$i]['entity']->name . '</a>';
              } else {
                echo '<a class="text -blue -small-bold" href="/' . drupal_get_path_alias('taxonomy/term/' . $field_theme[$i]['target_id']) . '">' . $field_theme[$i]['entity']->name . ', </a>';
              }
            }
          ?>
        </div>

        <div class="row">

          <div class="column small-12 medium-4 large-4">
            <div class="info-box">
              <h4 class="text -small-bold"><?php echo $fields['field_year_action_plan_current']['label'] ?></h4>
                <span class="text -body-content">
                  <?php
                    if ($field_year) {
                      $date = date_create($field_year[0]['value']);
                      echo date_format($date,"Y");
                    } else {
                        echo 'Not Specified';
                    }
                  ?>
                </span>
            </div>
          </div>

          <?php if ($field_support_institution_curren) { ?>
            <div class="column small-12 medium-4 large-4">
              <div class="info-box">
                <h4 class="text -small-bold"><?php echo $fields['field_support_institution_curren']['label'] ?></h4>
                <span class="text -body-content">
                  <ul>
                    <?php
                    for ($i = 0; $i < $iMax = count($field_support_institution_curren); $i++) {
                        echo '<li>' . $field_support_institution_curren[$i]['value'] . '</li>';
                    }
                    ?>
                  </ul>
                </span>
              </div>
            </div>
          <?php } ?>

          <?php if ($field_lead_institution) { ?>
            <div class="column small-12 medium-4 large-4">
              <div class="info-box">
                <h4 class="text -small-bold"><?php echo $fields['field_lead_institution']['label'] ?></h4>
                <span class="text -body-content">
                  <ul>
                    <?php
                    for ($i = 0; $i < $iMax = count($field_lead_institution); $i++) {
                        echo '<li>' . $field_lead_institution[$i]['value'] . '</li>';
                    }
                    ?>
                  </ul>
                </span>
              </div>
            </div>
          <?php } ?>

          <?php
            foreach ($other_field_keys as $other_field_key) {
              $field = field_get_items('node', $node, $other_field_key); ?>
              <div class="column small-12 medium-4 large-4">
                <div class="info-box">
                  <h4 class="text -small-bold"><?php echo $fields[$other_field_key]['label'] ?></h4>
                  <span class="text capitalize-text -body-content"><?php echo $field[0]['value']; ?></span>
                </div>
              </div>
            <?php }
          ?>

        </div>
      </div>

      <div class="column small-12 medium-6">

        <div class="info-box -grey">
          <p class="text -body-content">
            <?php echo $node->body[$node->language][0]['value']; ?>
          </p>
        </div>

      </div>
    </div>
  </section>

  <div class="c-explore-more">
    <div class="row container">
      <div class="column small-12">
        <h3 class="text -module-title">More Current Commitments</h3>
        <div class="c-loader"><div class="loader"></div></div>
      </div>
    </div>
  </div>

  <div class="banners-container"></div>

</div>
