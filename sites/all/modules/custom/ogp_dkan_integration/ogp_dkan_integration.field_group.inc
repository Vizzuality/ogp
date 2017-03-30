<?php
/**
 * @file
 * ogp_dkan_integration.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function ogp_dkan_integration_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_ogp|node|dataset|form';
  $field_group->group_name = 'group_ogp';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'dataset';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'OGP',
    'weight' => '46',
    'children' => array(
      0 => 'field_country_ref',
      1 => 'field_period',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-ogp field-group-fieldset',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_ogp|node|dataset|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_ogp|node|resource|form';
  $field_group->group_name = 'group_ogp';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'resource';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'OGP',
    'weight' => '43',
    'children' => array(
      0 => 'field_ogp_document_type',
      1 => 'field_ogp_document_tags',
    ),
    'format_type' => 'fieldset',
    'format_settings' => array(
      'formatter' => 'collapsible',
      'instance_settings' => array(
        'description' => '',
        'classes' => 'group-ogp field-group-fieldset',
        'required_fields' => 1,
      ),
    ),
  );
  $export['group_ogp|node|resource|form'] = $field_group;

  return $export;
}
