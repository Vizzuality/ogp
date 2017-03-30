<?php
/**
 * @file
 * ogp_country.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function ogp_country_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function ogp_country_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function ogp_country_image_default_styles() {
  $styles = array();

  // Exported image style: country_banner.
  $styles['country_banner'] = array(
    'label' => 'country_banner',
    'effects' => array(
      1 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 1120,
          'height' => 395,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function ogp_country_node_info() {
  $items = array(
    'action_plan' => array(
      'name' => t('Action plan'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'country_page' => array(
      'name' => t('Country Page'),
      'base' => 'node_content',
      'description' => t('A country page is a group which can have members.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'report_comments' => array(
      'name' => t('Report Comments'),
      'base' => 'node_content',
      'description' => t('Report Comments belong to IRM Reports'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
