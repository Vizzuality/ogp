<header class="l-header">

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/icons.tpl.php'); ?>

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/logo.tpl.php'); ?>

  <?php include(drupal_get_path('theme', 'ogp_theme').'/templates/components/menu.tpl.php'); ?>

  <?php if (drupal_is_front_page() == false) {
    include(drupal_get_path('theme', 'ogp_theme').'/templates/components/breadcrumbs.tpl.php');
  } ?>

</header>
