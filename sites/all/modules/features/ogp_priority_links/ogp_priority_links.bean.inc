<?php
/**
 * @file
 * ogp_priority_links.bean.inc
 */

/**
 * Implements hook_bean_admin_ui_types().
 */
function ogp_priority_links_bean_admin_ui_types() {
  $export = array();

  $bean_type = new stdClass();
  $bean_type->disabled = FALSE; /* Edit this to true to make a default bean_type disabled initially */
  $bean_type->api_version = 5;
  $bean_type->name = 'priority_links';
  $bean_type->label = 'Priority Links';
  $bean_type->options = '';
  $bean_type->description = 'Create a list of 4 links to featured content';
  $export['priority_links'] = $bean_type;

  return $export;
}
