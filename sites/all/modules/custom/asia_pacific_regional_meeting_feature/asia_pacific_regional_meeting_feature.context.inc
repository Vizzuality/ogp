<?php
/**
 * @file
 * asia_pacific_regional_meeting_feature.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function asia_pacific_regional_meeting_feature_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'americas-mitting';
  $context->description = '';
  $context->tag = 'americas-mitting';
  $context->conditions = array(
    'menu' => array(
      'values' => array(
        'node/5612' => 'node/5612',
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
        'bean-americas-regional-meeting' => array(
          'module' => 'bean',
          'delta' => 'americas-regional-meeting',
          'region' => 'secondary_content',
          'weight' => '-9',
        ),
        'menu_block-11' => array(
          'module' => 'menu_block',
          'delta' => '11',
          'region' => 'secondary_content',
          'weight' => '-8',
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
  t('americas-mitting');
  $export['americas-mitting'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'americas-mitting_agenda';
  $context->description = '';
  $context->tag = 'americas-mitting';
  $context->conditions = array(
    'views' => array(
      'values' => array(
        'americas_pacific_regional_meeting_session_grid:page' => 'americas_pacific_regional_meeting_session_grid:page',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'bean-americas-regional-meeting' => array(
          'module' => 'bean',
          'delta' => 'americas-regional-meeting',
          'region' => 'secondary_content',
          'weight' => '-10',
        ),
        'menu_block-11' => array(
          'module' => 'menu_block',
          'delta' => '11',
          'region' => 'secondary_content',
          'weight' => '-7',
        ),
      ),
    ),
    'disable_context' => array(
      'disabled' => array(
        'about' => 'about',
        'americas-mitting' => 'americas-mitting',
        'asia-mitting' => 'asia-mitting',
        'europe-mitting' => 'europe-mitting',
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
  t('americas-mitting');
  $export['americas-mitting_agenda'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'americas-mitting_home';
  $context->description = '';
  $context->tag = 'americas-mitting';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/5612' => 'node/5612',
        'es/node/5612' => 'es/node/5612',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'block-11' => array(
          'module' => 'block',
          'delta' => '11',
          'region' => 'content',
          'weight' => '-9',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('americas-mitting');
  $export['americas-mitting_home'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'americas-mitting_media';
  $context->description = '';
  $context->tag = 'americas-mitting';
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
  t('americas-mitting');
  $export['americas-mitting_media'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'asia-mitting';
  $context->description = '';
  $context->tag = 'asia-mitting';
  $context->conditions = array(
    'menu' => array(
      'values' => array(
        'node/3734' => 'node/3734',
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
        'bean-asia-pacific-regional-meeting' => array(
          'module' => 'bean',
          'delta' => 'asia-pacific-regional-meeting',
          'region' => 'secondary_content',
          'weight' => '-10',
        ),
        'menu_block-9' => array(
          'module' => 'menu_block',
          'delta' => '9',
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
  t('asia-mitting');
  $export['asia-mitting'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'asia-mitting_agenda';
  $context->description = '';
  $context->tag = 'asia-mitting';
  $context->conditions = array(
    'views' => array(
      'values' => array(
        'asia_pacific_regional_meeting_session_grid:page' => 'asia_pacific_regional_meeting_session_grid:page',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'bean-asia-pacific-regional-meeting' => array(
          'module' => 'bean',
          'delta' => 'asia-pacific-regional-meeting',
          'region' => 'secondary_content',
          'weight' => '-9',
        ),
        'menu_block-9' => array(
          'module' => 'menu_block',
          'delta' => '9',
          'region' => 'secondary_content',
          'weight' => '-8',
        ),
      ),
    ),
    'disable_context' => array(
      'disabled' => array(
        'about' => 'about',
        'asia-mitting' => 'asia-mitting',
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
  t('asia-mitting');
  $export['asia-mitting_agenda'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'asia-mitting_home';
  $context->description = '';
  $context->tag = 'asia-mitting';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/3734' => 'node/3734',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'block-12' => array(
          'module' => 'block',
          'delta' => '12',
          'region' => 'content',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('asia-mitting');
  $export['asia-mitting_home'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'asia-mitting_media';
  $context->description = '';
  $context->tag = 'asia-mitting';
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
  t('asia-mitting');
  $export['asia-mitting_media'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'europe-mitting';
  $context->description = '';
  $context->tag = 'europe-mitting';
  $context->conditions = array(
    'menu' => array(
      'values' => array(
        'node/3742' => 'node/3742',
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
        'bean-europe-regional-meeting' => array(
          'module' => 'bean',
          'delta' => 'europe-regional-meeting',
          'region' => 'secondary_content',
          'weight' => '-10',
        ),
        'menu_block-10' => array(
          'module' => 'menu_block',
          'delta' => '10',
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
  t('europe-mitting');
  $export['europe-mitting'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'europe-mitting_agenda';
  $context->description = '';
  $context->tag = 'europe-mitting';
  $context->conditions = array(
    'views' => array(
      'values' => array(
        'europe_pacific_regional_meeting_session_grid:page' => 'europe_pacific_regional_meeting_session_grid:page',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'bean-europe-regional-meeting' => array(
          'module' => 'bean',
          'delta' => 'europe-regional-meeting',
          'region' => 'secondary_content',
          'weight' => '-10',
        ),
        'menu_block-10' => array(
          'module' => 'menu_block',
          'delta' => '10',
          'region' => 'secondary_content',
          'weight' => '-9',
        ),
      ),
    ),
    'disable_context' => array(
      'disabled' => array(
        'about' => 'about',
        'asia-mitting' => 'asia-mitting',
        'europe-mitting' => 'europe-mitting',
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
  t('europe-mitting');
  $export['europe-mitting_agenda'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'europe-mitting_home';
  $context->description = '';
  $context->tag = 'europe-mitting';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/3742' => 'node/3742',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'block-13' => array(
          'module' => 'block',
          'delta' => '13',
          'region' => 'content',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('europe-mitting');
  $export['europe-mitting_home'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'europe-mitting_media';
  $context->description = '';
  $context->tag = 'europe-mitting';
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
  t('europe-mitting');
  $export['europe-mitting_media'] = $context;

  return $export;
}
