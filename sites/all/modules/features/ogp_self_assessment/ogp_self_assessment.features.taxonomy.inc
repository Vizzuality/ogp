<?php
/**
 * @file
 * ogp_self_assessment.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function ogp_self_assessment_taxonomy_default_vocabularies() {
  return array(
    'tag' => array(
      'name' => 'Tags',
      'machine_name' => 'tag',
      'description' => 'Freeform taxonomy added to many content types',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
      'language' => 'und',
      'i18n_mode' => 0,
    ),
  );
}
