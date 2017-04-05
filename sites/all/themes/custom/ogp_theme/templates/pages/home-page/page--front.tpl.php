<?php
/**
 * @file
 * Page
 */
$map_legend = node_load(24956);
$map_legend_heading = field_get_items('node', $map_legend, 'field_headline')[0]['value'];
$map_legend_body = field_get_items('node', $map_legend, 'body')[0]['value'];

$ogp_process = node_load(24958);
$ogp_process_heading = field_get_items('node', $ogp_process, 'field_headline')[0]['value'];
$ogp_process_body = field_get_items('node', $ogp_process, 'body')[0]['value'];
$ogp_process_button_text = field_get_items('node', $ogp_process, 'field_button_text')[0]['value'];
$ogp_process_link = field_get_items('node', $ogp_process, 'field_link')[0]['value'];
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
          <h2 class="text -section-title-small"><?php echo $map_legend_heading ?></h2>
          <div class="text"><?php echo $map_legend_body ?></div>
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
            <a class="c-button -green-back -tall" href="countries">countries</a>
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
              <h3 class="text -title-small -white"><?php echo $ogp_process_heading ?></h3>
              <div class="text -white"><?php echo $ogp_process_body ?></div>
            </div>
            <div class="column small-12 medium-5 large-3 vertical">
              <a class="c-button -box -large" href="<?php echo $ogp_process_link ?>"><?php echo $ogp_process_button_text ?></a>
            </div>
          </div>
          <div class="diagram">
            <div class="container">
              <span class="circle-text text -blue">Participation /<br>Co-creation</span>
              <ol>
                <li class="first"><a href="http://ogp.vizzuality.com/resources/eligibility-criteria" target="_blank">Check Eligibility</a></li>
                <li class="second"><a href="http://ogp.vizzuality.com/resources/ogp-process-step-1-how-join" target="_blank">Signal Intent</a></li>
                <li class="third"><a href="http://ogp.vizzuality.com/resources/ogp-process-step-2-develop-action-plan" target="_blank">Create Action Plan</a></li>
                <li class="fourth"><a href="/resources" target="_blank">Implement Commitments</a></li>
                <li class="fifth"><a href="/resources/government/ogp-process-step-4-government-self-assessment" target="_blank" class="-disabled">First Year Self-assessment</a></li>
                <li class="sixth"><a href="/irm" target="_blank">IRM Progress Report</a></li>
                <li class="seventh">Assess Progress</li>
                <li class="eighth"><a href="/resources/civil-society/ogp-process-step-4-civil-society-shadow-reporting" target="_blank" class="-disabled">Second Year Self-assessment</a></li>
                <li class="nineth"><a href="/irm" target="_blank">IRM End-of-Term Report</a></li>
                <li class="tenth"><a href="/resources/ogp-process-step-3-create-multistakeholder-forum" target="_blank">Next Action Plan</a></li>
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
