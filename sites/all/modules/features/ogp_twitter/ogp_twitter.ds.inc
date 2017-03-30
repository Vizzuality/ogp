<?php
/**
 * @file
 * ogp_twitter.ds.inc
 */

/**
 * Implements hook_ds_field_settings_info().
 */
function ogp_twitter_ds_field_settings_info() {
  $export = array();

  $ds_fieldsetting = new stdClass();
  $ds_fieldsetting->api_version = 1;
  $ds_fieldsetting->id = 'node|tweet|activity_stream';
  $ds_fieldsetting->entity_type = 'node';
  $ds_fieldsetting->bundle = 'tweet';
  $ds_fieldsetting->view_mode = 'activity_stream';
  $ds_fieldsetting->settings = array(
    'activity_stream_item' => array(
      'weight' => '10',
      'label' => 'hidden',
      'format' => 'default',
    ),
  );
  $export['node|tweet|activity_stream'] = $ds_fieldsetting;

  return $export;
}

/**
 * Implements hook_ds_layout_settings_info().
 */
function ogp_twitter_ds_layout_settings_info() {
  $export = array();

  $ds_layout = new stdClass();
  $ds_layout->api_version = 1;
  $ds_layout->id = 'node|tweet|activity_stream';
  $ds_layout->entity_type = 'node';
  $ds_layout->bundle = 'tweet';
  $ds_layout->view_mode = 'activity_stream';
  $ds_layout->layout = 'ds_1col';
  $ds_layout->settings = array(
    'regions' => array(
      'ds_content' => array(
        0 => 'activity_stream_item',
      ),
    ),
    'fields' => array(
      'activity_stream_item' => 'ds_content',
    ),
    'classes' => array(),
    'wrappers' => array(
      'ds_content' => 'div',
    ),
    'layout_wrapper' => 'div',
    'layout_attributes' => '',
    'layout_attributes_merge' => 1,
  );
  $export['node|tweet|activity_stream'] = $ds_layout;

  return $export;
}
