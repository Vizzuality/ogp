<?php
/**
 * @file
 * ogp_webinar.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function ogp_webinar_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function ogp_webinar_node_info() {
  $items = array(
    'webinar' => array(
      'name' => t('Webinar'),
      'base' => 'node_content',
      'description' => t('Webinars appear in the Issues section'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
