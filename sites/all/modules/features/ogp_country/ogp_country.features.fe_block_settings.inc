<?php
/**
 * @file
 * ogp_country.features.fe_block_settings.inc
 */

/**
 * Implements hook_default_fe_block_settings().
 */
function ogp_country_default_fe_block_settings() {
  $export = array();

  $export['version'] = '2.0';

  $export['block-countries_intro'] = array(
    'cache' => -1,
    'css_class' => '',
    'custom' => 0,
    'i18n_block_language' => array(),
    'i18n_mode' => 1,
    'machine_name' => 'countries_intro',
    'module' => 'block',
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
    'title' => 'What is the Open Government Partnership?',
    'visibility' => 0,
  );

  return $export;
}
