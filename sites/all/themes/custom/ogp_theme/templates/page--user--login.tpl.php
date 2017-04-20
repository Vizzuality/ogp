<?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>
<div class="login l-login l-page" id="loginPage">
  <div class="row">
    <div id="top_part">
      <h1 class="text -dark -title">
        Access
      </h1>
    </div>
    <div class="container-form" id="middle_part">
      <?php print render($page['content']); ?>
    </div>
    <div id="bottom_part">
      <div class="password_link text -blue">
        <?php print l(t('Forgot your password?'), 'user/password'); ?>
      </div>
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
