<?php
/**
 * @file
 * ogp_twitter.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function ogp_twitter_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function ogp_twitter_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function ogp_twitter_node_info() {
  $items = array(
    'tweet' => array(
      'name' => t('Tweet'),
      'base' => 'node_content',
      'description' => t('A tweet imported from a cron twitter search looking for #OGP or #OpenGovPartnership'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
