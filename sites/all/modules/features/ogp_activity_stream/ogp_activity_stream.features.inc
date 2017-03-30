<?php
/**
 * @file
 * ogp_activity_stream.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function ogp_activity_stream_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "ds" && $api == "ds") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function ogp_activity_stream_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}
