<?php
/**
 * @file
 * ogp_map.features.fe_block_settings.inc
 */

/**
 * Implements hook_default_fe_block_settings().
 */
function ogp_map_default_fe_block_settings() {
  $export = array();

  $export['version'] = '2.0';

  $export['quicktabs-front_page_maps'] = array(
    'cache' => -1,
    'css_class' => '',
    'custom' => 0,
    'delta' => 'front_page_maps',
    'i18n_block_language' => array(),
    'i18n_mode' => 0,
    'module' => 'quicktabs',
    'node_types' => array(),
    'pages' => '',
    'roles' => array(),
    'themes' => array(
      'at_ogp' => array(
        'region' => '',
        'status' => 0,
        'theme' => 'at_ogp',
        'weight' => 0,
      ),
    ),
    'title' => '<none>',
    'visibility' => 0,
  );

  return $export;
}
