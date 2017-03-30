<?php
/**
 * @file
 * test_default.bean.inc
 */

/**
 * Implements hook_bean_admin_ui_types().
 */
function test_default_bean_admin_ui_types() {
  $export = array();

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'blogroll';
  $bean_type->label = 'Blogroll';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['blogroll'] = $bean_type;

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'header_image_title';
  $bean_type->label = 'Header image/title';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['header_image_title'] = $bean_type;

  return $export;
}
