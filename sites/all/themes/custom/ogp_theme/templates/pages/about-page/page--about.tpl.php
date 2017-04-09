<?php
/**
 * @file
 * Page
 */

 $about = node_load(1002);
 $about_title = field_get_items('node', $about, 'title_field')[0]['value'];
 $about_body = field_get_items('node', $about, 'body')[0]['value'];
?>
<script type="text/javascript" src="//cdn.transifex.com/live.js"></script>
<div id="aboutPage" class="<?php print $classes; ?>">

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>
  <div class="l-page">
    <div class="row">
      <div class="column small-12 medium-6 content-header">
        <h1 class="text -title">About</h1>
      </div>
    </div>

    <div class="column small-12 medium-3">
                <div class="c-tabs -vertical">

                </div>
              </div>

    <section class="row l-about-page">
      <div class="column small-12 medium-3">
        <div class="c-tabs -vertical">
          <ul class="tabs-container">
            <li class="tab text -tab -selected" data-node="<?php echo $about_title ?>"><?php echo $about_title ?></li>
          </ul>
        </div>
      </div>
      <div class="small-8" id="containerInfo">
        <div class="c-loader"><div class="loader"></div></div>
        <div class="tab-content <?php echo $about_title ?>">
          <h3 class="text -section-title"><?php echo $about_title ?></h3>
          <div class="text -body-content">
            <p class="text -body-content">
              <?php echo $about_body ?>
            </p>
          </div>
        </div>
      </div>
    </section>
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
