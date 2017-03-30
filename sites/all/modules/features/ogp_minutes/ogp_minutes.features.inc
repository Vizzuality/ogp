<?php
/**
 * @file
 * ogp_minutes.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function ogp_minutes_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function ogp_minutes_node_info() {
  $items = array(
    'minutes' => array(
      'name' => t('Meeting minutes'),
      'base' => 'node_content',
      'description' => t('Minutes from OGP meetings.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
