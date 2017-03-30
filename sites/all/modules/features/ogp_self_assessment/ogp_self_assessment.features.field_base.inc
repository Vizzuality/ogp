<?php
/**
 * @file
 * ogp_self_assessment.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function ogp_self_assessment_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_pdf_version'.
  $field_bases['field_pdf_version'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_pdf_version',
    'indexes' => array(
      'fid' => array(
        0 => 'fid',
      ),
    ),
    'locked' => 0,
    'module' => 'file',
    'settings' => array(
      'display_default' => 0,
      'display_field' => 0,
      'entity_translation_sync' => array(
        0 => 'fid',
      ),
      'uri_scheme' => 'public',
    ),
    'translatable' => 0,
    'type' => 'file',
  );

  return $field_bases;
}
