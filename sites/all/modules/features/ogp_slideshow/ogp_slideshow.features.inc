<?php
/**
 * @file
 * ogp_slideshow.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function ogp_slideshow_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "bean_admin_ui" && $api == "bean") {
    return array("version" => "5");
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
function ogp_slideshow_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function ogp_slideshow_image_default_styles() {
  $styles = array();

  // Exported image style: ogp_slideshow.
  $styles['ogp_slideshow'] = array(
    'label' => 'ogp_slideshow',
    'effects' => array(
      1 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 1170,
          'height' => 375,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}
