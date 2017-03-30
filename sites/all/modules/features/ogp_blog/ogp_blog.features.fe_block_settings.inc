<?php
/**
 * @file
 * ogp_blog.features.fe_block_settings.inc
 */

/**
 * Implements hook_default_fe_block_settings().
 */
function ogp_blog_default_fe_block_settings() {
  $export = array();

  $export['version'] = '2.0';

  $export['tagclouds-2'] = array(
    'cache' => 8,
    'css_class' => '',
    'custom' => 0,
    'delta' => 2,
    'i18n_block_language' => array(),
    'i18n_mode' => 1,
    'module' => 'tagclouds',
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
    'title' => 'Tags',
    'visibility' => 0,
  );

  return $export;
}
