<?php
/**
 * @file
 * ogp_irm_report.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function ogp_irm_report_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'irm_page';
  $context->description = 'view-page';
  $context->tag = '';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'independent-reporting-mechanism' => 'independent-reporting-mechanism',
      ),
    ),
    'views' => array(
      'values' => array(
        'irm_page' => 'irm_page',
        'list_node_page_titles' => 'list_node_page_titles',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'bean-irm-introduction' => array(
          'module' => 'bean',
          'delta' => 'irm-introduction',
          'region' => 'highlighted',
          'weight' => '-10',
        ),
        'block-8' => array(
          'module' => 'block',
          'delta' => '8',
          'region' => 'highlighted',
          'weight' => '-9',
        ),
      ),
    ),
    'disable_context' => array(
      'disabled' => array(
        'about' => 'about',
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('view-page');
  $export['irm_page'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'irm_reports';
  $context->description = 'irm & irm/irm-reports';
  $context->tag = '';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'irm' => 'irm',
        'irm/irm-reports' => 'irm/irm-reports',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'bean-tools---irm' => array(
          'module' => 'bean',
          'delta' => 'tools---irm',
          'region' => 'content',
          'weight' => '-10',
        ),
        'ogp_dkan_integration-irm_reports_by_country' => array(
          'module' => 'ogp_dkan_integration',
          'delta' => 'irm_reports_by_country',
          'region' => 'tertiary_content',
          'weight' => '-8',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('irm & irm/irm-reports');
  $export['irm_reports'] = $context;

  return $export;
}
