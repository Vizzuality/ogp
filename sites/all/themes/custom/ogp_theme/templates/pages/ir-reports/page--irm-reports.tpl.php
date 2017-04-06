<?php
/**
 * @file
 * Page
 */
 $irmReports = node_load(43954);
 $irmReports_introduction = node_load(43955);
 $irmReports_heading = field_get_items('node', $irmReports, 'field_headline')[0]['value'];
 $irmReports_body = field_get_items('node', $irmReports, 'body')[0]['value'];

 $irmReports_heading_introduction = field_get_items('node', $irmReports_introduction, 'field_headline')[0]['value'];
 $irmReports_body_introduction = field_get_items('node', $irmReports_introduction, 'body')[0]['value'];
?>
<div id="irmReportsPage" class="<?php print $classes; ?>">

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>

  <!-- Stories page view/block -->
  <div class="l-page l-irm-reports">

    <div class="row">
      <div class="column small-12 medium-8 content-header">
        <h1 class="text -title"><?php echo $irmReports_heading ?></h1>
        <div class="text -body-content"><?php echo $irmReports_body ?></div>
      </div>
      <div class="column small-12 medium-8 content-header medium-offset-2">
        <h2 class="text -section-title-small"><?php echo $irmReports_heading_introduction ?></h2>
        <div class="text -body-content">
          <?php echo $irmReports_body_introduction ?>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="column small-12 medium-8 content-header">
        <h2 class="text -section-title tiles-heading">Most Recent IRM Reports</h2>
      </div>
    </div>

  </div>

  <div class="banners-container"></div>

  <div class="l-social-region">
    <?php
    $social = block_get_blocks_by_region('contentSocialFeed');
    print render($social);
    ?>
  </div>

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/footer.tpl.php'); ?>

</div>
