<?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>
<div class="password l-pass l-page" id="loginPage">
  <div class="row">
    <div id="top_part">
      <h1 class="text -dark -title">
        Request new password
      </h1>
    </div>

    <div class="container-form" id="middle_part">
      <?php print render($page['content']); ?>
    </div>

    <div id="bottom_part">
      <div class="login_link register_link text -blue">
        <?php print l(t('Login'), 'user/login'); ?>
      </div>

      <?php if (variable_get('user_register')): ?>
        <div class="register_link text -blue">
          <?php print l(t('Register a new account'), 'user/register'); ?>
        </div>
      <?php endif; ?>
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
