<?php
/**
 * @file
 * ogp_search.features.fe_block_settings.inc
 */

/**
 * Implements hook_default_fe_block_settings().
 */
function ogp_search_default_fe_block_settings() {
  $export = array();

  $export['version'] = '2.0';

  $export['facetapi-18gKLhxSq6VGWVOB3Vb71Ylmf1kIOz7I'] = array(
    'cache' => -1,
    'css_class' => '',
    'custom' => 0,
    'delta' => '18gKLhxSq6VGWVOB3Vb71Ylmf1kIOz7I',
    'i18n_block_language' => array(),
    'i18n_mode' => 0,
    'module' => 'facetapi',
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
    'title' => '',
    'visibility' => 0,
  );

  return $export;
}
