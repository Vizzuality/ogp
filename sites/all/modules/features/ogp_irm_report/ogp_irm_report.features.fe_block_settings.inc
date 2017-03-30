<?php
/**
 * @file
 * ogp_irm_report.features.fe_block_settings.inc
 */

/**
 * Implements hook_default_fe_block_settings().
 */
function ogp_irm_report_default_fe_block_settings() {
  $export = array();

  $export['version'] = '2.0';

  $export['bean-irm-introduction'] = array(
    'cache' => 1,
    'css_class' => '',
    'custom' => 0,
    'delta' => 'irm-introduction',
    'i18n_block_language' => array(),
    'i18n_mode' => 0,
    'module' => 'bean',
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

  $export['block-irm_intro'] = array(
    'cache' => -1,
    'css_class' => 'irm-intro',
    'custom' => 0,
    'i18n_block_language' => array(),
    'i18n_mode' => 1,
    'machine_name' => 'irm_intro',
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
    'title' => 'What are Independent Progress Reports?',
    'visibility' => 0,
  );

  return $export;
}
