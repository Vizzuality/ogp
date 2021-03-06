<?php
/**
 * @file
 * ogp_tools.bean.inc
 */

/**
 * Implements hook_bean_admin_ui_types().
 */
function ogp_tools_bean_admin_ui_types() {
  $export = array();

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'tool_links';
  $bean_type->label = 'Tool Links';
  $bean_type->options = '';
  $bean_type->description = '';
  $export['tool_links'] = $bean_type;

  return $export;
}
