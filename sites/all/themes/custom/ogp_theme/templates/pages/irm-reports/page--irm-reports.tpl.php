<?php
/**
 * @file
 * Page
 */
 $irmReports = node_load(43954);
 $irmReports_introduction = node_load(44037);
 $irmReports_heading = field_get_items('node', $irmReports, 'field_headline')[0]['value'];
 $irmReports_body = field_get_items('node', $irmReports, 'body')[0]['value'];

 $irmReports_heading_introduction = field_get_items('node', $irmReports_introduction, 'field_headline')[0]['value'];
 $irmReports_body_introduction = field_get_items('node', $irmReports_introduction, 'body')[0]['value'];
?>
<div id="irmReportsPage" class="<?php print $classes; ?>">

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>

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

      <div class="c-tabs -horizontal">
        <div class="tabs">
          <div class="row">
            <div class="column small-12">
              <ul class="tabs-container">
                <li class="tab text -tab -selected" data-node="download">download</li>
                <li class="tab text -tab" data-node="comment">comment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="l-gallery l-section" id="container-info">
        <div class="content-tiles tab-content download" id="tab-loader">
          <div class="row">
            <div class="column small-12 medium-12">
              <div class="small-12 medium-3">
                <div class="c-selector -tall">
                  <select class="country-filter-download"></select>
                </div>
              </div>
            </div>
          </div>
          <div class="row content-tiles" id="downloadContainer">
          </div>
          <!-- <div class="column small-12">
            <div class="c-pagination-click c-pagination-click-download">
              <div class="reload-thematic reload-thematic-download" data-value="1">
                <svg class="icon icon-reload"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-loading"></use></svg>
                <span class="text -blue -small-bold">LOAD MORE IRM REPORTS</span>
              </div>
            </div>
          </div> -->
        </div>
        <div class="content-tiles tab-content comment -hidden" id="tab-loader-comments">
          <div class="row">
            <div class="column small-12 medium-12">
              <div class="small-12 medium-3">
                <div class="c-selector -tall">
                  <select class="country-filter-comments"></select>
                </div>
              </div>
            </div>
          </div>
          <div class="row content-tiles" id="commentsContainer">
          </div>
          <!-- <div class="column small-12">
            <div class="c-pagination-click c-pagination-click-comments">
              <div class="reload-thematic reload-thematic-comments" data-value="1">
                <svg class="icon icon-reload"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-loading"></use></svg>
                <span class="text -blue -small-bold">LOAD MORE COMMENT REPORTS</span>
              </div>
            </div>
          </div> -->
        </div>
        <div class="c-loader"><div class="loader"></div></div>
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
