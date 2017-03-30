<?php
/**
 * @file
 * ogp_sitewide.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function ogp_sitewide_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_flexslider_default_presets_alter().
 */
function ogp_sitewide_flexslider_default_presets_alter(&$data) {
  if (isset($data['default'])) {
    $data['default']->options['slideshowSpeed'] = 3500; /* WAS: 7000 */
  }
}
