<?php
/**
 * @file
 * ogp_topics.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function ogp_topics_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'topics';
  $context->description = 'Adds the facet blocks to the Topics search view';
  $context->tag = 'page';
  $context->conditions = array(
    'views' => array(
      'values' => array(
        'ogp_topics:page' => 'ogp_topics:page',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'ogp_topics-ogp_topics_hint1' => array(
          'module' => 'ogp_topics',
          'delta' => 'ogp_topics_hint1',
          'region' => 'highlighted',
          'weight' => '-10',
        ),
        'facetapi-AOCageCMWyLFiwQxXmMHPOfBaXZLtBUj' => array(
          'module' => 'facetapi',
          'delta' => 'AOCageCMWyLFiwQxXmMHPOfBaXZLtBUj',
          'region' => 'highlighted',
          'weight' => '-9',
        ),
        'facetapi-hgpfKHcnFK4kkcAT02ie13K5fYeRqEzY' => array(
          'module' => 'facetapi',
          'delta' => 'hgpfKHcnFK4kkcAT02ie13K5fYeRqEzY',
          'region' => 'highlighted',
          'weight' => '-8',
        ),
        'facetapi-Nsujf24Hittd75U6giPkh1Bc1MuR7UyV' => array(
          'module' => 'facetapi',
          'delta' => 'Nsujf24Hittd75U6giPkh1Bc1MuR7UyV',
          'region' => 'highlighted',
          'weight' => '-7',
        ),
        'ogp_topics-ogp_topics_hint2' => array(
          'module' => 'ogp_topics',
          'delta' => 'ogp_topics_hint2',
          'region' => 'highlighted',
          'weight' => '-6',
        ),
        'views--exp-ogp_topics-page' => array(
          'module' => 'views',
          'delta' => '-exp-ogp_topics-page',
          'region' => 'highlighted',
          'weight' => '-5',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Adds the facet blocks to the Topics search view');
  t('page');
  $export['topics'] = $context;

  return $export;
}
