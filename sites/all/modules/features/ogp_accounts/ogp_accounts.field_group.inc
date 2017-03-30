<?php
/**
 * @file
 * ogp_accounts.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function ogp_accounts_field_group_info() {
  $field_groups = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_contact|user|user|form';
  $field_group->group_name = 'group_contact';
  $field_group->entity_type = 'user';
  $field_group->bundle = 'user';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Contact Information',
    'weight' => '2',
    'children' => array(
      0 => 'field_job_title',
      1 => 'field_full_name',
      2 => 'field_contact_email',
      3 => 'field_contact_phone',
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
  $field_groups['group_contact|user|user|form'] = $field_group;

  // Translatables
  // Included for use with string extractors like potx.
  t('Contact Information');

  return $field_groups;
}
