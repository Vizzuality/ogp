<?php
/**
 * @file
 * ogp_activity_stream.ds.inc
 */

/**
 * Implements hook_ds_custom_fields_info().
 */
function ogp_activity_stream_ds_custom_fields_info() {
  $export = array();

  $ds_field = new stdClass();
  $ds_field->api_version = 1;
  $ds_field->field = 'activity_stream_item';
  $ds_field->label = 'Activity Stream item';
  $ds_field->field_type = 3;
  $ds_field->entities = array(
    'node' => 'node',
  );
  $ds_field->ui_limit = '*|activity_stream';
  $ds_field->properties = array();
  $export['activity_stream_item'] = $ds_field;

  return $export;
}

/**
 * Implements hook_ds_view_modes_info().
 */
function ogp_activity_stream_ds_view_modes_info() {
  $export = array();

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'activity_stream';
  $ds_view_mode->label = 'activity_stream';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['activity_stream'] = $ds_view_mode;

  return $export;
}
