<?php
/**
 * @file
 * ogp_map.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function ogp_map_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'country_list';
  $context->description = 'Countries list';
  $context->tag = 'country';
  $context->conditions = array(
    'views' => array(
      'values' => array(
        'ogp_countries:page_1' => 'ogp_countries:page_1',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'block-7' => array(
          'module' => 'block',
          'delta' => '7',
          'region' => 'content',
          'weight' => '-10',
        ),
        'ogp_map-country_apc' => array(
          'module' => 'ogp_map',
          'delta' => 'country_apc',
          'region' => 'content',
          'weight' => '-9',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Countries list');
  t('country');
  $export['country_list'] = $context;

  return $export;
}
