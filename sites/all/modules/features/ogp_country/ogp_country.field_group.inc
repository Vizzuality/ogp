<?php
/**
 * @file
 * ogp_country.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function ogp_country_field_group_info() {
  $field_groups = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_country_action_plan|node|country_page|form';
  $field_group->group_name = 'group_country_action_plan';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'country_page';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Action plans',
    'weight' => '14',
    'children' => array(
      0 => 'field_country_ap_descripion',
      1 => 'field_country_ap_pdf',
      2 => 'field_country_ap_responsible',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'label' => 'Action plans',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => '',
        'description' => '',
      ),
      'formatter' => 'collapsible',
    ),
  );
  $field_groups['group_country_action_plan|node|country_page|form'] = $field_group;

  // Translatables
  // Included for use with string extractors like potx.
  t('Action plans');

  return $field_groups;
}
