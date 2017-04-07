<div id="loginPage" class="l-page">

  <div class="row">
    <div class="column small-12">
      <h1 class="text -title login-title">Reset your password</h1>
    </div>
    <div class="column small-12 medium-6">
      <?php print drupal_render($form['name']); ?>
    </div>
    <div class="column small-12 medium-6 offset">
      <?php print drupal_render($form['actions']); ?>
    </div>
    <?php
       print drupal_render($form['form_build_id']);
       print drupal_render($form['form_id']);
    ?>
  </div>

</div>
