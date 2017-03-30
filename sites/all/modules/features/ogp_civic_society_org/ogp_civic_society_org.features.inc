<?php
/**
 * @file
 * ogp_civic_society_org.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function ogp_civic_society_org_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function ogp_civic_society_org_node_info() {
  $items = array(
    'civic_society_org' => array(
      'name' => t('Civic Society Organization'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
