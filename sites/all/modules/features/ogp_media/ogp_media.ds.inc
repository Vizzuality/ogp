<?php
/**
 * @file
 * ogp_media.ds.inc
 */

/**
 * Implements hook_ds_view_modes_info().
 */
function ogp_media_ds_view_modes_info() {
  $export = array();

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'ogp_large_image';
  $ds_view_mode->label = 'Large Image';
  $ds_view_mode->entities = array(
    'file' => 'file',
  );
  $export['ogp_large_image'] = $ds_view_mode;

  return $export;
}
