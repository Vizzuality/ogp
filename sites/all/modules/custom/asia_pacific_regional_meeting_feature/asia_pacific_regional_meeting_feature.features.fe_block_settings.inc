<?php
/**
 * @file
 * asia_pacific_regional_meeting_feature.features.fe_block_settings.inc
 */

/**
 * Implements hook_default_fe_block_settings().
 */
function asia_pacific_regional_meeting_feature_default_fe_block_settings() {
  $export = array();

  $export['version'] = '2.0';

  $export['bean-asia-pacific-regional-meeting'] = array(
    'cache' => 1,
    'css_class' => 'meeting-block-title-image',
    'custom' => 0,
    'delta' => 'asia-pacific-regional-meeting',
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

  $export['bean-europe-regional-meeting'] = array(
    'cache' => 1,
    'css_class' => 'meeting-block-title-image',
    'custom' => 0,
    'delta' => 'europe-regional-meeting',
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

  $export['block-front_video_america'] = array(
    'cache' => -1,
    'css_class' => '',
    'custom' => 0,
    'i18n_block_language' => array(),
    'i18n_mode' => 0,
    'machine_name' => 'front_video_america',
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
    'title' => '',
    'visibility' => 0,
  );

  $export['menu_block-11'] = array(
    'cache' => -1,
    'css_class' => 'meeting-block-menu',
    'custom' => 0,
    'delta' => 11,
    'i18n_block_language' => array(),
    'i18n_mode' => 0,
    'module' => 'menu_block',
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
