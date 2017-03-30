<?php
/**
 * @file
 * ogp_sitewide.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function ogp_sitewide_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: menu-footer-menu.
  $menus['menu-footer-menu'] = array(
    'menu_name' => 'menu-footer-menu',
    'title' => 'Footer menu',
    'description' => '',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Footer menu');

  return $menus;
}
