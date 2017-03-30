<?php
/**
 * @file
 * ogp_search.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function ogp_search_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'search';
  $context->description = 'adds the search filter block';
  $context->tag = 'page';
  $context->conditions = array(
    'views' => array(
      'values' => array(
        'ogp_search' => 'ogp_search',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views--exp-ogp_search-page' => array(
          'module' => 'views',
          'delta' => '-exp-ogp_search-page',
          'region' => 'highlighted',
          'weight' => '-10',
          'title' => '',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('adds the search filter block');
  t('page');
  $export['search'] = $context;

  return $export;
}
