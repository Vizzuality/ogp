<?php
/**
 * @file
 * ogp_sitewide.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function ogp_sitewide_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: user-menu:user/logout
  $menu_links['user-menu:user/logout'] = array(
    'menu_name' => 'user-menu',
    'link_path' => 'user/logout',
    'router_path' => 'user/logout',
    'link_title' => 'Log out',
    'options' => array(),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 10,
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Log out');


  return $menu_links;
}
