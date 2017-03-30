<?php
/**
 * @file
 * ogp_irm_report.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function ogp_irm_report_taxonomy_default_vocabularies() {
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
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
  );
}
