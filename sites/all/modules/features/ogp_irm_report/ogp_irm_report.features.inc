<?php
/**
 * @file
 * ogp_irm_report.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function ogp_irm_report_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function ogp_irm_report_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function ogp_irm_report_node_info() {
  $items = array(
    'irm_report' => array(
      'name' => t('Progress Report'),
      'base' => 'node_content',
      'description' => t('IRM Reports belong to countries'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
