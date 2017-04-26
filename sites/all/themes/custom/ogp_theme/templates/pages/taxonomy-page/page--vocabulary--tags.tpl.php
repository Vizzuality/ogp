<?php

/**
 * @file
 */
 $term = $page['content']['system_main']['term_heading']['term']['#term'];
?>

<div id="tagDetail" class="<?php print $classes; ?>">

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/header.tpl.php'); ?>
<div class="l-page">
  <div class="row">
    <div class="column small-12 content-header">
      <h1 class="text -title"><?php echo $term->name ?></h1>
    </div>
    <div class="column small-12 medium-8 medium-offset-2">
      <div class="l-section">
        <div class="text -blank -body-content">
          <?php
            if($term->description ) {
              echo $term->description;
            } else {
            ?>
              <p>This tag has no description.</p>
            <?php
            }
          ?>
        </div>
      </div>
    </div>
  </div>
</div>

  <div class="banners-container"></div>

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/footer.tpl.php'); ?>

</div>
