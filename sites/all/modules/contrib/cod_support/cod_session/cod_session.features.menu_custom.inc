<?php
/**
 * @file
 * cod_session.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function cod_session_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: menu-menu-quick-links.
  $menus['menu-menu-quick-links'] = array(
    'menu_name' => 'menu-menu-quick-links',
    'title' => 'Quick links - Authenticated',
    'description' => 'Utility links that display on every page of the site, such as "Your account" and "Your schedule"',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Quick links - Authenticated');
  t('Utility links that display on every page of the site, such as "Your account" and "Your schedule"');

  return $menus;
}
