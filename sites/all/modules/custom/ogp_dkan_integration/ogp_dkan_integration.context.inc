<?php
/**
 * @file
 * ogp_dkan_integration.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function ogp_dkan_integration_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'country_case_studies';
  $context->description = '';
  $context->tag = 'country';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/*/case-study' => 'node/*/case-study',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'ogp_dkan_integration-case_study_table' => array(
          'module' => 'ogp_dkan_integration',
          'delta' => 'case_study_table',
          'region' => 'content',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 1;

  // Translatables
  // Included for use with string extractors like potx.
  t('country');
  $export['country_case_studies'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'ogp_document_search';
  $context->description = 'OGP Document Search';
  $context->tag = 'search';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'browse' => 'browse',
        'browse/?*' => 'browse/?*',
        'browse?*' => 'browse?*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'facetapi-szP2NgXCNkPbnejF6vGJMf0gln6BiCtu' => array(
          'module' => 'facetapi',
          'delta' => 'szP2NgXCNkPbnejF6vGJMf0gln6BiCtu',
          'region' => 'sidebar_first',
          'weight' => '-10',
        ),
        'facetapi-5K6xUsVIKUpfAyC0LKSF7mLSXqXsZgqI' => array(
          'module' => 'facetapi',
          'delta' => '5K6xUsVIKUpfAyC0LKSF7mLSXqXsZgqI',
          'region' => 'sidebar_first',
          'weight' => '-9',
        ),
        'facetapi-tWo2FGhrJSXp1sLmNfh8OQ5oSSjke0sa' => array(
          'module' => 'facetapi',
          'delta' => 'tWo2FGhrJSXp1sLmNfh8OQ5oSSjke0sa',
          'region' => 'sidebar_first',
          'weight' => '-8',
        ),
        'facetapi-MZ5wcE5ZJ8p3n2mJZ0H5iw48vxzuSewu' => array(
          'module' => 'facetapi',
          'delta' => 'MZ5wcE5ZJ8p3n2mJZ0H5iw48vxzuSewu',
          'region' => 'sidebar_first',
          'weight' => '-7',
        ),
        'facetapi-TdXDIQZjr0sqAOQon3npKpyf1qVLuDGs' => array(
          'module' => 'facetapi',
          'delta' => 'TdXDIQZjr0sqAOQon3npKpyf1qVLuDGs',
          'region' => 'sidebar_first',
          'weight' => '-6',
        ),
        'facetapi-u4aNc9BVPgvuxegraAOFIU30dlNr6xQy' => array(
          'module' => 'facetapi',
          'delta' => 'u4aNc9BVPgvuxegraAOFIU30dlNr6xQy',
          'region' => 'sidebar_first',
          'weight' => '-5',
        ),
        'views-4a0df027e83066d7a567a3cd9c95f8a8' => array(
          'module' => 'views',
          'delta' => '4a0df027e83066d7a567a3cd9c95f8a8',
          'region' => 'content',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('OGP Document Search');
  t('search');
  $export['ogp_document_search'] = $context;

  return $export;
}
