<?php
/**
 * @file
 */
$node = node_load($nid);
$fields = field_info_instances('node', 'starred_commitments');

$other_field_keys = array_diff(array_keys($fields), [
    'field_country_starred',
    'field_start_date_current',
    'field_end_date_current',
    'field_theme_starred',
    'field_lead_institution',
    'field_support_institution_curren',
    'field_action_plan_number',
    'field_level_of_completion_at_end',
    'field_potential_impact_list',
    'field_did_it_open_list',
    'field_completion_list',
    'field_transparency_transparency_',
    'field_year_irm_report_published',
    'field_year_irm_end_of_term_publi',
    'body',
    'field_full_text',
    'field_comm_no',
]);

$field_country = field_get_items('node', $node, 'field_country_starred');
$field_start_date = field_get_items('node', $node, 'field_start_date_current');
$field_end_date = field_get_items('node', $node, 'field_end_date_current');
$field_theme = field_get_items('node', $node, 'field_theme_starred');
$field_lead_institution = field_get_items('node', $node, 'field_lead_institution');
$field_support_institution = field_get_items('node', $node, 'field_support_institution_curren');
$field_action_plan = field_get_items('node', $node, 'field_action_plan_number');
$field_completion_end = field_get_items('node', $node, 'field_level_of_completion_at_end');
$field_potential_impact = field_get_items('node', $node, 'field_potential_impact_list');
$field_did_open_list = field_get_items('node', $node, 'field_did_it_open_list');
$field_completion_midterm = field_get_items('node', $node, 'field_completion_list');
$field_relevant = field_get_items('node', $node, 'field_transparency_transparency_');
$field_year_irm_progress = field_get_items('node', $node, 'field_year_irm_report_published');
$field_year_irm_end = field_get_items('node', $node, 'field_year_irm_end_of_term_publi');
$field_comm_no = field_get_items('node', $node, 'field_comm_no');
?>
<div id="starredCommitmentsDetail" class="l-commitment">

  <section class="l-full-width -blue -short -with-padding">
    <div class="row">
      <div class="column small-12 medium-9">
        <p class="text -white -heavy tag">Starred Commitments</p>
        <h1 class="text -title -white title"><?php echo $node->title ?></h1>
        <?php if ($field_country) { ?>
          <span class="text -social-title"><?php echo $field_country[0]['entity']->title; ?></span>
        <?php } ?>
        <div class="commitment-meta">
          <span class="text -body-content"><?php echo $fields['field_start_date_current']['label'] ?>: <?php echo $field_start_date[0]['value']; ?></span>
          <span class="text -body-content">&nbsp;| &nbsp;<?php echo $fields['field_end_date_current']['label'] ?>: <?php echo $field_end_date[0]['value']; ?></span>
        </div>
      </div>
    </div>
  </section>

  <section class="commitment-content">
    <div class="row">
      <div class="column small-12 medium-9">

        <div class="info-box">
          <h4 class="text -small-bold"><?php echo $fields['field_theme_starred']['label'] ?></h4>
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
              <h4 class="text -small-bold"><?php echo $fields['field_year_irm_report_published']['label'] ?></h4>
                <span class="text -body-content">
                  <?php
                    if ($field_year_irm_progress) {
                        echo $field_year_irm_progress[0]['value'];
                    } else {
                        echo 'Not Specified';
                    }
                  ?>
                </span>
            </div>
          </div>

          <div class="column small-12 medium-4 large-4">
            <div class="info-box">
              <h4 class="text -small-bold"><?php echo $fields['field_year_irm_end_of_term_publi']['label'] ?></h4>
              <span class="text -body-content">
                <?php
                  if ($field_year_irm_end) {
                      echo $field_year_irm_end[0]['value'];
                  } else {
                      echo 'Not Specified';
                  }
                ?>
              </span>
            </div>
          </div>

          <div class="column small-12 medium-4 large-4">
            <div class="info-box">
              <h4 class="text -small-bold"><?php echo $fields['field_lead_institution']['label'] ?></h4>
              <span class="text -body-content">
                <ul class="lead-list">
                  <?php
                  for ($i = 0; $i < $iMax = count($field_lead_institution); $i++) {
                    echo '<li>' . $field_lead_institution[$i]['value'] . ', </li>';
                  }
                  ?>
                </ul>
              </span>
            </div>
          </div>

          <div class="column small-12 medium-4 large-4">
            <div class="info-box">
              <h4 class="text -small-bold"><?php echo $fields['field_support_institution_curren']['label'] ?></h4>
              <span class="text -body-content">
                <ul class="support-list">
                  <?php
                    for ($i = 0; $i < $iMax = count($field_support_institution); $i++) {
                        echo '<li>' . $field_support_institution[$i]['value'] . ', </li>';
                    }
                  ?>
                </ul>
              </span>
            </div>
          </div>

          <div class="column small-12 medium-4 large-4">
            <div class="info-box">
              <h4 class="text -small-bold"><?php echo $fields['field_action_plan_number']['label'] ?></h4>
              <span class="text -body-content"><?php echo $field_action_plan[0]['value'] ?></span>
            </div>
          </div>

          <div class="column small-12 medium-4 large-4">
            <div class="info-box">
              <h4 class="text -small-bold"><?php echo $fields['field_comm_no']['label'] ?></h4>
              <span class="text -body-content"><?php echo $field_comm_no[0]['value'] ?></span>
            </div>
          </div>

          <?php if ($field_completion_end) { ?>
            <div class="column small-12 medium-4 large-4">
              <div class="info-box">
                <h4 class="text -small-bold"><?php echo $fields['field_level_of_completion_at_end']['label'] ?></h4>
                <span class="text -body-content"><?php echo $field_completion_end[0]['value']; ?></span>
              </div>
            </div>
          <?php } ?>

          <div class="column small-12 medium-4 large-4">
            <div class="info-box">
              <h4 class="text -small-bold"><?php echo $fields['field_potential_impact_list']['label'] ?></h4>
              <span class="text -body-content"><?php echo $field_potential_impact[0]['value']; ?></span>
            </div>
          </div>

          <?php if ($field_did_open_list) { ?>
            <div class="column small-12 medium-4 large-4">
              <div class="info-box">
                <h4 class="text -small-bold"><?php echo $fields['field_did_it_open_list']['label'] ?></h4>
                <span class="text -body-content"><?php echo $field_did_open_list[0]['value']; ?></span>
              </div>
            </div>
          <?php } ?>

          <div class="column small-12 medium-4 large-4">
            <div class="info-box">
              <h4 class="text -small-bold"><?php echo $fields['field_completion_list']['label'] ?></h4>
              <span class="text -body-content"><?php echo $field_completion_midterm[0]['value']; ?></span>
            </div>
          </div>

          <div class="column small-12 medium-4 large-4">
            <div class="info-box">
              <h4 class="text -small-bold"><?php echo $fields['field_transparency_transparency_']['label'] ?></h4>
              <span class="text -body-content"><?php echo $field_relevant[0]['value']; ?></span>
            </div>
          </div>

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

      <div class="column small-12 medium-3">

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
        <h3 class="text -module-title">More starred commitments</h3>
        <div class="c-loader"><div class="loader"></div></div>
      </div>
    </div>
  </div>

  <div class="banners-container"></div>

</div>
