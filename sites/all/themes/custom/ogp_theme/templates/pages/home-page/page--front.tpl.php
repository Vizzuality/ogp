<?php
/**
 * @file
 * Page
 */
$map_legend = node_load(24956);
$map_legend_heading = field_get_items('node', $map_legend, 'field_headline');
$map_legend_body = field_get_items('node', $map_legend, 'body');

$ogp_process = node_load(24958);
$ogp_process_heading = field_get_items('node', $ogp_process, 'field_headline');
$ogp_process_body = field_get_items('node', $ogp_process, 'body');
$ogp_process_button_text = field_get_items('node', $ogp_process, 'field_button_text');
$ogp_process_link = field_get_items('node', $ogp_process, 'field_link');
?>
<script type="text/javascript" src="//cdn.transifex.com/live.js"></script>
<div id="homePage" class="<?php print $classes; ?>">

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>

    <div class="l-home-page" id="content">
      <div class="slider-cover-home">
          <div class="c-slider-home-page slider-image-0">
            <div class="row">
              <div class="column small-12 medium-9">
                <div class="container slider-0">
                </div>
              </div>
            </div>
          </div>
          <div class="c-slider-home-page slider-image-1">
            <div class="row">
              <div class="column small-12 medium-9">
                <div class="container slider-1">
                </div>
              </div>
            </div>
          </div>
          <div class="c-slider-home-page slider-image-2">
            <div class="row">
              <div class="column small-12 medium-9">
                <div class="container slider-2">
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

  <div class="l-full-width -short">

    <div class="l-map" id="maphome"></div>

    <div class="row">
      <div class="column small-12">

        <div class="c-map-legend -with-footer">
          <h2 class="text -section-title-small"><?php echo $map_legend_heading[0]['value'] ?></h2>
          <div class="text"><?php echo $map_legend_body[0]['value'] ?></div>
          <div class="c-color-legend">
            <ul>
              <li class="-gray -small">
                <div class="circle-color -developing"></div>Developing Action Plan
              </li>
              <li class="-gray -small">
                <div class="circle-color -implementing"></div>Implementing Action Plan
              </li>
              <li class="-gray -small">
                <div class="circle-color -inactive"></div><a class="inactive-link" href="<?php print drupal_get_path_alias('node/5852') ?>"><span>Inactive</span><svg class="icon"><use xlink:href="#icon-triangle-right"></use></svg></a>
              </li>
            </ul>
          </div>
          <div class="multi-button">
            <a class="c-button -green-back -tall" href="participants">participants</a>
            <a class="c-button -green-back -tall" href="theme">themes</a>
          </div>
        </div>

        <div class="c-zoom-controls">
          <div class="icons" id="in">
            <svg class="icon"><use xlink:href="#icon-plus"></use></svg>
          </div>
          <div class="icons" id="out">
            <svg class="icon"><use xlink:href="#icon-minus"></use></svg>
          </div>
        </div>

      </div>
    </div>

  </div>

  <div class="banners-container"></div>

  <div class="l-full-width -short -blue -center">
    <div class="row">
      <div class="column small-12">
        <div class="c-ogp-process">
          <div class="row">
            <div class="column small-12 medium-7 large-9">
              <h3 class="text -title-small -white"><?php echo $ogp_process_heading[0]['value'] ?></h3>
              <div class="text -white"><?php echo $ogp_process_body[0]['value'] ?></div>
            </div>
            <div class="column small-12 medium-5 large-3 vertical">
              <a class="c-button -box -large" href="<?php if(array_key_exists('value', $ogp_process_link[0])) { echo $ogp_process_link[0]['value']; } ?>"><?php echo $ogp_process_button_text[0]['value'] ?></a>
            </div>
          </div>
          <div class="diagram">
            <div class="container">
              <span class="circle-text text -blue">Participation /<br>Co-creation</span>
              <ol>
                <li class="first"><a href="/resources/eligibility-criteria">Check Eligibility</a></li>
                <li class="second"><a href="/resources/ogp-process-step-1-how-join">Signal Intent</a></li>
                <li class="third"><a href="/resources/ogp-process-step-2-develop-action-plan">Create Action Plan</a></li>
                <li class="fourth"><a href="/resources">Implement Commitments</a></li>
                <li class="fifth"><a href="/resources/ogp-process-step-4-government-self-assessment">First Year Self-assessment</a></li>
                <li class="sixth"><a href="/irm-reports">IRM Progress Report</a></li>
                <li class="seventh">Assess Progress</li>
                <li class="eighth"><a href="/resources/ogp-process-step-3-create-multistakeholder-forum ">Second Year Self-assessment</a></li>
                <li class="nineth"><a href="/irm-reports">IRM End-of-Term Report</a></li>
                <li class="tenth"><a href="/resources/ogp-process-step-2-develop-action-plan">Next Action Plan</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="l-social-region">
    <?php
    $social = block_get_blocks_by_region('contentSocialFeed');
    print render($social);
    ?>
  </div>

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/footer.tpl.php'); ?>

</div>
