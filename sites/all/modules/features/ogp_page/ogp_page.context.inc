<?php
/**
 * @file
 * ogp_page.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function ogp_page_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'page_documents';
  $context->description = 'Page and Event nodes with file resources in a dataset';
  $context->tag = 'page';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'event' => 'event',
        'page' => 'page',
      ),
      'options' => array(
        'node_form' => '1',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-be9020110c2b80337a6d8b3fbfda8e1c' => array(
          'module' => 'views',
          'delta' => 'be9020110c2b80337a6d8b3fbfda8e1c',
          'region' => 'content_aside',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Page and Event nodes with file resources in a dataset');
  t('page');
  $export['page_documents'] = $context;

  return $export;
}
