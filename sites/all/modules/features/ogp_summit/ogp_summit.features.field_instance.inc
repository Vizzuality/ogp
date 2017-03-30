<?php
/**
 * @file
 * ogp_summit.features.field_instance.inc
 */

/**
 * Implements hook_field_default_field_instances().
 */
function ogp_summit_field_default_field_instances() {
  $field_instances = array();

  // Exported field_instance: 'node-room-field_livestream_str'.
  $field_instances['node-room-field_livestream_str'] = array(
    'bundle' => 'room',
    'default_value' => NULL,
    'deleted' => 0,
    'description' => 'Use this field to add a string to be used to build a live streaming player block.',
    'display' => array(
      'default' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 6,
      ),
      'listing' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
      'teaser' => array(
        'label' => 'above',
        'settings' => array(),
        'type' => 'hidden',
        'weight' => 0,
      ),
    ),
    'ds_extras_field_template' => '',
    'entity_type' => 'node',
    'field_name' => 'field_livestream_str',
    'label' => 'Live stream room name string',
    'required' => 0,
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'text_processing' => 0,
      'user_register_form' => FALSE,
    ),
    'widget' => array(
      'active' => 1,
      'module' => 'text',
      'settings' => array(
        'size' => 60,
      ),
      'type' => 'text_textfield',
      'weight' => 41,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('Live stream room name string');
  t('Use this field to add a string to be used to build a live streaming player block.');

  return $field_instances;
}
