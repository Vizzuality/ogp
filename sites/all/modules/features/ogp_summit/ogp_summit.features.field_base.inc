<?php
/**
 * @file
 * ogp_summit.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function ogp_summit_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_livestream_str'.
  $field_bases['field_livestream_str'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_livestream_str',
    'field_permissions' => array(
      'type' => 0,
    ),
    'indexes' => array(
      'format' => array(
        0 => 'format',
      ),
    ),
    'locked' => 0,
    'module' => 'text',
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'max_length' => 24,
    ),
    'translatable' => 0,
    'type' => 'text',
  );

  return $field_bases;
}
