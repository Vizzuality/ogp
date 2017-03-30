<?php
/**
 * @file
 * ogp_case_study.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function ogp_case_study_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_qa'
  $field_bases['field_qa'] = array(
    'active' => 1,
    'cardinality' => -1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_qa',
    'foreign keys' => array(),
    'indexes' => array(),
    'locked' => 0,
    'module' => 'field_collection',
    'settings' => array(
      'entity_translation_sync' => FALSE,
      'hide_blank_items' => 1,
      'path' => '',
    ),
    'translatable' => 1,
    'type' => 'field_collection',
  );

  return $field_bases;
}
