<?php
/**
 * @file
 * ogp_summit.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function ogp_summit_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'summit-2013';
  $context->description = '';
  $context->tag = 'summit';
  $context->conditions = array(
    'menu' => array(
      'values' => array(
        'node/1341' => 'node/1341',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-ogp_opengov_tweets-block_1' => array(
          'module' => 'views',
          'delta' => 'ogp_opengov_tweets-block_1',
          'region' => 'sidebar_second',
          'weight' => '-9',
        ),
        'fb_likebox-0' => array(
          'module' => 'fb_likebox',
          'delta' => '0',
          'region' => 'sidebar_second',
          'weight' => '-7',
        ),
        'bean-london-2013' => array(
          'module' => 'bean',
          'delta' => 'london-2013',
          'region' => 'secondary_content',
          'weight' => '-10',
        ),
        'menu_block-1' => array(
          'module' => 'menu_block',
          'delta' => '1',
          'region' => 'secondary_content',
          'weight' => '-9',
        ),
      ),
    ),
    'disable_context' => array(
      'disabled' => array(
        'about' => 'about',
      ),
    ),
    'theme_html' => array(
      'class' => 'summit-2013',
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('summit');
  $export['summit-2013'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'summit-2013_agenda';
  $context->description = '';
  $context->tag = 'summit';
  $context->conditions = array(
    'views' => array(
      'values' => array(
        'summit_session_grid:page' => 'summit_session_grid:page',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'bean-london-2013' => array(
          'module' => 'bean',
          'delta' => 'london-2013',
          'region' => 'secondary_content',
          'weight' => '-10',
        ),
        'menu_block-1' => array(
          'module' => 'menu_block',
          'delta' => '1',
          'region' => 'secondary_content',
          'weight' => '-9',
        ),
      ),
    ),
    'disable_context' => array(
      'disabled' => array(
        'about' => 'about',
        'summit-2013' => 'summit-2013',
      ),
    ),
    'theme_html' => array(
      'class' => 'summit-2013',
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('summit');
  $export['summit-2013_agenda'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'summit-2013_home';
  $context->description = '';
  $context->tag = 'summit';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/1341' => 'node/1341',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'block-5' => array(
          'module' => 'block',
          'delta' => '5',
          'region' => 'content',
          'weight' => '-9',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('summit');
  $export['summit-2013_home'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'summit-2013_media';
  $context->description = '';
  $context->tag = 'summit';
  $context->conditions = array(
    'menu' => array(
      'values' => array(
        'node/2857' => 'node/2857',
      ),
    ),
  );
  $context->reactions = array();
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('summit');
  $export['summit-2013_media'] = $context;

  return $export;
}
