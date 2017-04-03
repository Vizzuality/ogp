<?php
/**
 * @file
 * Page
 */
?>
<div id="pagesList" class="l-list-page">
  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>
  <div class="l-page">
    <div class="row">
      <div class="column small-12 medium-6 content-header">
        <h1 class="text -title">Pages</h1>
      </div>
    </div>

    <div class="row container-table" id="tableContainer">
      <div class="column small-12 medium-12">
        <div class="c-loader"><div class="loader"></div></div>
        <table class="c-table -group-table" id="inner-table">
          <thead>
            <tr class="text -uppercase -footnote">
              <th class="sort-field">Title
                <svg class="icon -medium triangle-sort"><use xlink:href="#icon-triangle-down"></use></svg>
              </th>
              <th>Category</th>
              <th>Date</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody class="container-info-table">
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="column small-12">
        <div class="c-pagination"></div>
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
