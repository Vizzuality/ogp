<?php
/**
 * @file
 * ogp_map.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function ogp_map_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: main-menu:countries
  $menu_links['main-menu:countries'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'countries',
    'router_path' => 'countries',
    'link_title' => 'Countries',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'language' => 'en',
    'customized' => 1,
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Countries');


  return $menu_links;
}
