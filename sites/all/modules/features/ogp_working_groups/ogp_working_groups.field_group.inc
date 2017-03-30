<?php
/**
 * @file
 * ogp_working_groups.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function ogp_working_groups_field_group_info() {
  $field_groups = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_wgp_menu|node|working_group_page|form';
  $field_group->group_name = 'group_wgp_menu';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'working_group_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Working Group menu',
    'weight' => '10',
    'children' => array(
      0 => 'field_wgp_in_menu',
      1 => 'field_wgp_menu_delta',
      2 => 'field_wgp_menu_title',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => '',
        'required_fields' => 1,
      ),
    ),
  );
  $field_groups['group_wgp_menu|node|working_group_page|form'] = $field_group;

  // Translatables
  // Included for use with string extractors like potx.
  t('Working Group menu');

  return $field_groups;
}
