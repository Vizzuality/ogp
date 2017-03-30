<?php
/**
 * @file
 * news_and_rvents_content_type_and_view_.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function news_and_rvents_content_type_and_view__ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function news_and_rvents_content_type_and_view__views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function news_and_rvents_content_type_and_view__node_info() {
  $items = array(
    'news_and_events' => array(
      'name' => t('News and Events'),
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
