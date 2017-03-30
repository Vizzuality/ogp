<?php
/**
 * @file
 * ogp_tools.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function ogp_tools_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "bean_admin_ui" && $api == "bean") {
    return array("version" => "5");
  }
}

/**
 * Implements hook_image_default_styles().
 */
function ogp_tools_image_default_styles() {
  $styles = array();

  // Exported image style: tool_image.
  $styles['tool_image'] = array(
    'label' => 'Tool Image',
    'effects' => array(
      1 => array(
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 412,
          'height' => 309,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}
