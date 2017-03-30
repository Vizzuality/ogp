<?php
/**
 * @file
 * ogp_topics.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function ogp_topics_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "facetapi" && $api == "facetapi_defaults") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function ogp_topics_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function ogp_topics_image_default_styles() {
  $styles = array();

  // Exported image style: ogp_resource.
  $styles['ogp_resource'] = array(
    'label' => 'ogp_resource',
    'effects' => array(
      6 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 312,
          'height' => 234,
        ),
        'weight' => 2,
      ),
    ),
  );

  return $styles;
}
