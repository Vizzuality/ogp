<?php
/**
 * @file
 * ogp_topics.features.fe_block_settings.inc
 */

/**
 * Implements hook_default_fe_block_settings().
 */
function ogp_topics_default_fe_block_settings() {
  $export = array();

  $export['version'] = '2.0';

  $export['facetapi-AOCageCMWyLFiwQxXmMHPOfBaXZLtBUj'] = array(
    'cache' => -1,
    'css_class' => '',
    'custom' => 0,
    'delta' => 'AOCageCMWyLFiwQxXmMHPOfBaXZLtBUj',
    'i18n_block_language' => array(),
    'i18n_mode' => 0,
    'module' => 'facetapi',
    'node_types' => array(),
    'pages' => '',
    'roles' => array(),
    'themes' => array(
      'at_ogp' => array(
        'region' => '',
        'status' => 0,
        'theme' => 'at_ogp',
        'weight' => 0,
      ),
    ),
    'title' => 'Topics',
    'visibility' => 0,
  );

  $export['facetapi-Nsujf24Hittd75U6giPkh1Bc1MuR7UyV'] = array(
    'cache' => -1,
    'css_class' => '',
    'custom' => 0,
    'delta' => 'Nsujf24Hittd75U6giPkh1Bc1MuR7UyV',
    'i18n_block_language' => array(),
    'i18n_mode' => 1,
    'module' => 'facetapi',
    'node_types' => array(),
    'pages' => '',
    'roles' => array(),
    'themes' => array(
      'at_ogp' => array(
        'region' => '',
        'status' => 0,
        'theme' => 'at_ogp',
        'weight' => 0,
      ),
    ),
    'title' => 'Country',
    'visibility' => 0,
  );

  $export['facetapi-bEI7sfj0GE5kGkDqVUF1lL0c1U7dQXVq'] = array(
    'cache' => -1,
    'css_class' => '',
    'custom' => 0,
    'delta' => 'bEI7sfj0GE5kGkDqVUF1lL0c1U7dQXVq',
    'i18n_block_language' => array(),
    'i18n_mode' => 0,
    'module' => 'facetapi',
    'node_types' => array(),
    'pages' => '',
    'roles' => array(),
    'themes' => array(
      'at_ogp' => array(
        'region' => '',
        'status' => 0,
        'theme' => 'at_ogp',
        'weight' => 0,
      ),
    ),
    'title' => 'Tag',
    'visibility' => 0,
  );

  $export['facetapi-hgpfKHcnFK4kkcAT02ie13K5fYeRqEzY'] = array(
    'cache' => -1,
    'css_class' => '',
    'custom' => 0,
    'delta' => 'hgpfKHcnFK4kkcAT02ie13K5fYeRqEzY',
    'i18n_block_language' => array(),
    'i18n_mode' => 1,
    'module' => 'facetapi',
    'node_types' => array(),
    'pages' => '',
    'roles' => array(),
    'themes' => array(
      'at_ogp' => array(
        'region' => '',
        'status' => 0,
        'theme' => 'at_ogp',
        'weight' => 0,
      ),
    ),
    'title' => 'Resource Type',
    'visibility' => 0,
  );

  return $export;
}
