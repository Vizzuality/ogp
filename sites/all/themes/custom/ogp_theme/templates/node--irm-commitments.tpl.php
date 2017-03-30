<?php
/**
 * @file
 */
$node = node_load($nid);
$fields = field_info_instances('node', 'irm_commitments');

$other_field_keys = array_diff(array_keys($fields), [
    'field_country_irm',
    'field_start_date_irm',
    'field_end_date_irm',
    'field_theme_irm',
    'field_specificity',
    'field_year_submission',
    'field_potential_impact',
    'field_completion_at_midterm',
    'field_completion_at_end_term',
    'field_shoe_end_term',
    'field_completion_at_end_term',
    'field_dit_completion_chance',
    'field_did_it_open',
    'field_relevant_to_the_advancemen',
    'field_starred_as_of_midterm',
    'field_starred_end_term',
    'body',
]);

$field_country = field_get_items('node', $node, 'field_country_irm');
$field_start_date = field_get_items('node', $node, 'field_start_date_irm');
$field_end_date = field_get_items('node', $node, 'field_end_date_irm');
$field_theme = field_get_items('node', $node, 'field_theme_irm');
$field_specificity = field_get_items('node', $node, 'field_specificity');
$field_year_submission = field_get_items('node', $node, 'field_year_submission');
$field_potential_impact = field_get_items('node', $node, 'field_potential_impact');
$field_completion_at_midterm = field_get_items('node', $node, 'field_completion_at_midterm');
$field_completion_at_end_term = field_get_items('node', $node, 'field_completion_at_end_term');
$field_shoe_end_term = field_get_items('node', $node, 'field_shoe_end_term');
$field_completion_at_end_term = field_get_items('node', $node, 'field_completion_at_end_term');
$field_dit_completion_chance = field_get_items('node', $node, 'field_dit_completion_chance');
$field_did_it_open = field_get_items('node', $node, 'field_did_it_open');
$field_relevant_to_the_advancemen = field_get_items('node', $node, 'field_relevant_to_the_advancemen');
$field_starred_as_of_midterm = field_get_items('node', $node, 'field_starred_as_of_midterm');
$field_starred_end_term = field_get_items('node', $node, 'field_starred_end_term');
?>
<div id="irmCommitmentsDetail" class="l-commitment">

  <section class="l-full-width -blue -short -with-padding">
    <div class="row">
      <div class="column small-12 medium-9">
        <p class="text -white -heavy tag">IRM Commitments</p>
        <h1 class="text -title -white title"><?php echo $node->title ?></h1>
        <span class="text -social-title"><?php echo $field_country[0][entity]->title; ?></span>
        <div class="commitment-meta">
          <span class="text -body-content"><?php echo $fields['field_start_date_irm']['label'] ?>: <?php echo $field_start_date[0]['value']; ?></span>
          <span class="text -body-content">&nbsp;| &nbsp;<?php echo $fields['field_end_date_irm']['label'] ?>: <?php echo $field_end_date[0]['value']; ?></span>
        </div>
      </div>
    </div>
  </section>

  <section class="commitment-content">
    <div class="row">
      <div class="column small-12 medium-6">

        <div class="info-box">
          <h4 class="text -small-bold"><?php echo $fields['field_theme_irm']['label'] ?></h4>
          <?php
            for ($i = 0; $i < $iMax = count($field_theme); $i++) {
              if($i === (count($field_theme) - 1)) {
                echo '<a class="text -blue -small-bold" href="/' . drupal_get_path_alias('taxonomy/term/' . $field_theme[$i][target_id]) . '">' . $field_theme[$i][entity]->name . '</a>';
              } else {
                echo '<a class="text -blue -small-bold" href="/' . drupal_get_path_alias('taxonomy/term/' . $field_theme[$i][target_id]) . '">' . $field_theme[$i][entity]->name . ', </a>';
              }
            }
          ?>
        </div>

        <div class="row">

          <div class="column small-12 medium-4 large-4">
            <div class="info-box">
              <h4 class="text -small-bold"><?php echo $fields['field_year_submission']['label'] ?></h4>
                <span class="text -body-content">
                  <?php
                    if ($field_year_submission) {
                      $date = date_create($field_year_submission[0]['value']);
                      echo date_format($date,"Y");
                    } else {
                        echo 'Not Specified';
                    }
                  ?>
                </span>
            </div>
          </div>

          <div class="column small-12 medium-4 large-4">
            <div class="info-box">
              <h4 class="text -small-bold"><?php echo $fields['field_specificity']['label'] ?></h4>
              <span class="text -body-content">
                <?php
                  if ($field_specificity) {
                      echo $field_specificity[0]['value'];
                  } else {
                      echo 'Not Specified';
                  }
                ?>
              </span>
            </div>
          </div>

          <?php if ($field_potential_impact) { ?>
            <div class="column small-12 medium-4 large-4">
              <div class="info-box">
                <h4 class="text -small-bold"><?php echo $fields['field_potential_impact']['label'] ?></h4>
                <span class="text -body-content"><?php echo $field_potential_impact[0]['value']; ?></span>
              </div>
            </div>
          <?php } ?>

          <?php if ($field_completion_at_midterm) { ?>
            <div class="column small-12 medium-4 large-4">
              <div class="info-box">
                <h4 class="text -small-bold"><?php echo $fields['field_completion_at_midterm']['label'] ?></h4>
                <span class="text -body-content"><?php echo $field_completion_at_midterm[0]['value']; ?></span>
              </div>
            </div>
          <?php } ?>

          <?php if ($field_completion_at_end_term) { ?>
            <div class="column small-12 medium-4 large-4">
              <div class="info-box">
                <h4 class="text -small-bold"><?php echo $fields['field_completion_at_end_term']['label'] ?></h4>
                <span class="text -body-content"><?php echo $field_completion_at_end_term[0]['value']; ?></span>
              </div>
            </div>
          <?php } ?>

          <?php if ($field_completion_at_end_term) { ?>
            <div class="column small-12 medium-4 large-4">
              <div class="info-box">
                <h4 class="text -small-bold"><?php echo $fields['field_shoe_end_term']['label'] ?></h4>
                <span class="text -body-content">
                  <?php
                    if ($field_shoe_end_term[0]['value'] === 1) {
                      echo 'Yes';
                    } else {
                      echo 'No';
                    }
                  ?>
                </span>
              </div>
            </div>
          <?php } ?>

          <?php if ($field_dit_completion_chance) { ?>
            <div class="column small-12 medium-4 large-4">
              <div class="info-box">
                <h4 class="text -small-bold"><?php echo $fields['field_dit_completion_chance']['label'] ?></h4>
                <span class="text -body-content"><?php echo $field_dit_completion_chance[0]['value']; ?></span>
              </div>
            </div>
          <?php } ?>

          <?php if ($field_did_it_open) { ?>
            <div class="column small-12 medium-4 large-4">
              <div class="info-box">
                <h4 class="text -small-bold"><?php echo $fields['field_did_it_open']['label'] ?></h4>
                <span class="text -body-content"><?php echo $field_did_it_open[0]['value']; ?></span>
              </div>
            </div>
          <?php } ?>

          <?php if ($field_relevant_to_the_advancemen) { ?>
            <div class="column small-12 medium-4 large-4">
              <div class="info-box">
                <h4 class="text -small-bold"><?php echo $fields['field_relevant_to_the_advancemen']['label'] ?></h4>
                <span class="text -body-content">
                  <ul>
                    <?php
                    for ($i = 0; $i < $iMax = count($field_relevant_to_the_advancemen); $i++) {
                        echo '<li>' . $field_relevant_to_the_advancemen[$i]['value'] . '</li>';
                    }
                    ?>
                  </ul>
                </span>
              </div>
            </div>
          <?php } ?>

          <?php if ($field_starred_as_of_midterm) { ?>
            <div class="column small-12 medium-4 large-4">
              <div class="info-box">
                <h4 class="text -small-bold"><?php echo $fields['field_starred_as_of_midterm']['label'] ?></h4>
                <span class="text -body-content"><?php echo $field_starred_as_of_midterm[0]['value']; ?></span>
              </div>
            </div>
          <?php } ?>

          <?php if ($field_starred_end_term) { ?>
            <div class="column small-12 medium-4 large-4">
              <div class="info-box">
                <h4 class="text -small-bold"><?php echo $fields['field_starred_end_term']['label'] ?></h4>
                <span class="text -body-content">
                  <?php
                    if($field_starred_end_term[0]['value'] === 1) {
                      echo 'No.';
                    } else {
                      echo 'Yes.';
                    }
                  ?>
                </span>
              </div>
            </div>
          <?php } ?>

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
        <h3 class="text -module-title">More IRM commitments</h3>
        <div class="c-loader"><div class="loader"></div></div>
      </div>
    </div>
  </div>

  <div class="banners-container"></div>

</div>
