<?php
/**
 * @file
 * test_default.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function test_default_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'about';
  $context->description = 'About and similar sections, mostly of static pages.';
  $context->tag = 'About';
  $context->conditions = array(
    'menu' => array(
      'values' => array(
        'node/1000' => 'node/1000',
        'node/1001' => 'node/1001',
        'node/1002' => 'node/1002',
      ),
    ),
    'path' => array(
      'values' => array(
        'about/*' => 'about/*',
        'get-involved*' => 'get-involved*',
        'how-it-works*' => 'how-it-works*',
      ),
    ),
  );
  $context->reactions = array();
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('About');
  t('About and similar sections, mostly of static pages.');
  $export['about'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'about_landing';
  $context->description = '';
  $context->tag = 'About';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'about' => 'about',
      ),
    ),
  );
  $context->reactions = array();
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('About');
  $export['about_landing'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'awards';
  $context->description = '';
  $context->tag = '';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'awards' => 'awards',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'bean-splash-header---awards' => array(
          'module' => 'bean',
          'delta' => 'splash-header---awards',
          'region' => 'secondary_content',
          'weight' => '-10',
        ),
        'bean-priority-links---awards' => array(
          'module' => 'bean',
          'delta' => 'priority-links---awards',
          'region' => 'content',
          'weight' => '-10',
        ),
        'bean-priority-links---awards-regional' => array(
          'module' => 'bean',
          'delta' => 'priority-links---awards-regional',
          'region' => 'content',
          'weight' => '-9',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;
  $export['awards'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'civil-society-engagement';
  $context->description = '';
  $context->tag = '';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'how-it-works/civil-society-engagement' => 'how-it-works/civil-society-engagement',
        'how-it-works/civil-society-engagement/resources' => 'how-it-works/civil-society-engagement/resources',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'block-17' => array(
          'module' => 'block',
          'delta' => '17',
          'region' => 'sidebar_second',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;
  $export['civil-society-engagement'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'content-search';
  $context->description = 'search';
  $context->tag = '';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'content-search*' => 'content-search*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'facetapi-5K6xUsVIKUpfAyC0LKSF7mLSXqXsZgqI' => array(
          'module' => 'facetapi',
          'delta' => '5K6xUsVIKUpfAyC0LKSF7mLSXqXsZgqI',
          'region' => 'sidebar_second',
          'weight' => '-10',
        ),
        'views-content_search-block_1' => array(
          'module' => 'views',
          'delta' => 'content_search-block_1',
          'region' => 'content',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('search');
  $export['content-search'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'country_member_nodes';
  $context->description = 'Commitments and other group member node pages';
  $context->tag = 'country';
  $context->conditions = array(
    'context_og_condition_group_type' => array(
      'values' => array(
        'country_page' => 'country_page',
      ),
      'options' => array(
        'node_form' => 0,
      ),
    ),
    'node' => array(
      'values' => array(
        'case_study' => 'case_study',
        'commitment' => 'commitment',
        'irm_report' => 'irm_report',
        'self_assessment' => 'self_assessment',
      ),
      'options' => array(
        'node_form' => '1',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-ogp_activity_feed-block_1' => array(
          'module' => 'views',
          'delta' => 'ogp_activity_feed-block_1',
          'region' => 'sidebar_second',
          'weight' => '-10',
        ),
        'og_extras-node_links' => array(
          'module' => 'og_extras',
          'delta' => 'node_links',
          'region' => 'sidebar_second',
          'weight' => '-9',
        ),
      ),
    ),
  );
  $context->condition_mode = 1;

  // Translatables
  // Included for use with string extractors like potx.
  t('Commitments and other group member node pages');
  t('country');
  $export['country_member_nodes'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'front';
  $context->description = 'Front page';
  $context->tag = 'page';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        '<front>' => '<front>',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'bean-front-slideshow' => array(
          'module' => 'bean',
          'delta' => 'front-slideshow',
          'region' => 'secondary_content',
          'weight' => '-10',
        ),
        'bean-home-page-mexico-summit-promotio' => array(
          'module' => 'bean',
          'delta' => 'home-page-mexico-summit-promotio',
          'region' => 'content_top',
          'weight' => '-10',
        ),
        'block-7' => array(
          'module' => 'block',
          'delta' => '7',
          'region' => 'content_top',
          'weight' => '-9',
        ),
        'ogp_map-country_apc' => array(
          'module' => 'ogp_map',
          'delta' => 'country_apc',
          'region' => 'content_top',
          'weight' => '-8',
        ),
        'block-14' => array(
          'module' => 'block',
          'delta' => '14',
          'region' => 'content',
          'weight' => '-10',
        ),
        'block-20' => array(
          'module' => 'block',
          'delta' => '20',
          'region' => 'content',
          'weight' => '-9',
        ),
        'views-events-events_block_1' => array(
          'module' => 'views',
          'delta' => 'events-events_block_1',
          'region' => 'content',
          'weight' => '-7',
        ),
        'views-ogp_opengov_tweets-block_1' => array(
          'module' => 'views',
          'delta' => 'ogp_opengov_tweets-block_1',
          'region' => 'content',
          'weight' => '-6',
        ),
        'fb_likebox-0' => array(
          'module' => 'fb_likebox',
          'delta' => '0',
          'region' => 'content',
          'weight' => '-5',
        ),
        'ogp_activity_stream-ogp_rss' => array(
          'module' => 'ogp_activity_stream',
          'delta' => 'ogp_rss',
          'region' => 'content',
          'weight' => '-4',
        ),
        'block-1' => array(
          'module' => 'block',
          'delta' => '1',
          'region' => 'tertiary_content',
          'weight' => '-9',
        ),
        'block-2' => array(
          'module' => 'block',
          'delta' => '2',
          'region' => 'tertiary_content',
          'weight' => '-8',
        ),
        'block-3' => array(
          'module' => 'block',
          'delta' => '3',
          'region' => 'tertiary_content',
          'weight' => '-7',
        ),
        'block-4' => array(
          'module' => 'block',
          'delta' => '4',
          'region' => 'tertiary_content',
          'weight' => '-6',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Front page');
  t('page');
  $export['front'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'irm_landing';
  $context->description = '';
  $context->tag = '';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'explorer/landing' => 'explorer/landing',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'bean-explorer-landing' => array(
          'module' => 'bean',
          'delta' => 'explorer-landing',
          'region' => 'highlighted',
          'weight' => '-9',
        ),
        'block-15' => array(
          'module' => 'block',
          'delta' => '15',
          'region' => 'highlighted',
          'weight' => '-7',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;
  $export['irm_landing'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'issues';
  $context->description = 'Adds the facet blocks to the issues search view';
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
        'facetapi-hgpfKHcnFK4kkcAT02ie13K5fYeRqEzY' => array(
          'module' => 'facetapi',
          'delta' => 'hgpfKHcnFK4kkcAT02ie13K5fYeRqEzY',
          'region' => 'sidebar_first',
          'weight' => '-29',
        ),
        'facetapi-Nsujf24Hittd75U6giPkh1Bc1MuR7UyV' => array(
          'module' => 'facetapi',
          'delta' => 'Nsujf24Hittd75U6giPkh1Bc1MuR7UyV',
          'region' => 'sidebar_first',
          'weight' => '-28',
        ),
        'facetapi-AOCageCMWyLFiwQxXmMHPOfBaXZLtBUj' => array(
          'module' => 'facetapi',
          'delta' => 'AOCageCMWyLFiwQxXmMHPOfBaXZLtBUj',
          'region' => 'sidebar_first',
          'weight' => '-10',
        ),
        'views--exp-ogp_topics-page' => array(
          'module' => 'views',
          'delta' => '-exp-ogp_topics-page',
          'region' => 'highlighted',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Adds the facet blocks to the issues search view');
  t('page');
  $export['issues'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'latvia_progress';
  $context->description = '';
  $context->tag = 'progressreports';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'country/latvia/irm' => 'country/latvia/irm',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-irm_text_latvia-block' => array(
          'module' => 'views',
          'delta' => 'irm_text_latvia-block',
          'region' => 'content',
          'weight' => '-9',
        ),
        'block-18' => array(
          'module' => 'block',
          'delta' => '18',
          'region' => 'content_aside',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 1;

  // Translatables
  // Included for use with string extractors like potx.
  t('progressreports');
  $export['latvia_progress'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'news_events';
  $context->description = '';
  $context->tag = 'News and Events';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'news-and-events' => 'news-and-events',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'bean-splash-header---news' => array(
          'module' => 'bean',
          'delta' => 'splash-header---news',
          'region' => 'secondary_content',
          'weight' => '-9',
        ),
        'block-16' => array(
          'module' => 'block',
          'delta' => '16',
          'region' => 'secondary_content',
          'weight' => '-8',
        ),
        'bean-priority-links---news--events' => array(
          'module' => 'bean',
          'delta' => 'priority-links---news--events',
          'region' => 'leaderboard',
          'weight' => '-10',
        ),
        'views-news-news_block_1' => array(
          'module' => 'views',
          'delta' => 'news-news_block_1',
          'region' => 'content',
          'weight' => '-10',
        ),
        'ogp_activity_stream-ogp_rss' => array(
          'module' => 'ogp_activity_stream',
          'delta' => 'ogp_rss',
          'region' => 'content_aside',
          'weight' => '-10',
        ),
        'views-ogp_activity_feed-block_2' => array(
          'module' => 'views',
          'delta' => 'ogp_activity_feed-block_2',
          'region' => 'tertiary_content',
          'weight' => '-9',
        ),
      ),
    ),
    'theme_html' => array(
      'class' => 'shade-content',
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('News and Events');
  $export['news_events'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'ogp-sc-comms_right-rail';
  $context->description = '';
  $context->tag = '';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'ogp-steering-committee/communications' => 'ogp-steering-committee/communications',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'block-19' => array(
          'module' => 'block',
          'delta' => '19',
          'region' => 'sidebar_second',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;
  $export['ogp-sc-comms_right-rail'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'ogp_issues';
  $context->description = 'Adds the facet blocks to the issues search view';
  $context->tag = '';
  $context->conditions = array(
    'views' => array(
      'values' => array(
        'ogp_issues:page' => 'ogp_issues:page',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'facetapi-hgpfKHcnFK4kkcAT02ie13K5fYeRqEzY' => array(
          'module' => 'facetapi',
          'delta' => 'hgpfKHcnFK4kkcAT02ie13K5fYeRqEzY',
          'region' => 'sidebar_first',
          'weight' => '-10',
        ),
        'facetapi-Nsujf24Hittd75U6giPkh1Bc1MuR7UyV' => array(
          'module' => 'facetapi',
          'delta' => 'Nsujf24Hittd75U6giPkh1Bc1MuR7UyV',
          'region' => 'sidebar_first',
          'weight' => '-9',
        ),
        'facetapi-bEI7sfj0GE5kGkDqVUF1lL0c1U7dQXVq' => array(
          'module' => 'facetapi',
          'delta' => 'bEI7sfj0GE5kGkDqVUF1lL0c1U7dQXVq',
          'region' => 'sidebar_first',
          'weight' => '-8',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Adds the facet blocks to the issues search view');
  $export['ogp_issues'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'ogp_steering_committee';
  $context->description = '';
  $context->tag = '';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'ogp-steering-committee' => 'ogp-steering-committee',
        'ogp-steering-committee/*' => 'ogp-steering-committee/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-ogp_blog-block' => array(
          'module' => 'views',
          'delta' => 'ogp_blog-block',
          'region' => 'sidebar_second',
          'weight' => '-10',
        ),
        'block-19' => array(
          'module' => 'block',
          'delta' => '19',
          'region' => 'sidebar_second',
          'weight' => '-9',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;
  $export['ogp_steering_committee'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'sitewide';
  $context->description = '';
  $context->tag = 'sitewide';
  $context->conditions = array(
    'sitewide' => array(
      'values' => array(
        1 => 1,
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'superfish-1' => array(
          'module' => 'superfish',
          'delta' => '1',
          'region' => 'menu_bar',
          'weight' => '-10',
        ),
        'system-user-menu' => array(
          'module' => 'system',
          'delta' => 'user-menu',
          'region' => 'menu_bar',
          'weight' => '-9',
        ),
        'views-4a0df027e83066d7a567a3cd9c95f8a8' => array(
          'module' => 'views',
          'delta' => '4a0df027e83066d7a567a3cd9c95f8a8',
          'region' => 'menu_bar',
          'weight' => '-8',
        ),
        'block-6' => array(
          'module' => 'block',
          'delta' => '6',
          'region' => 'footer',
          'weight' => '-6',
        ),
        'block-10' => array(
          'module' => 'block',
          'delta' => '10',
          'region' => 'footer',
          'weight' => '-5',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('sitewide');
  $export['sitewide'] = $context;

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

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'summit_2015';
  $context->description = '';
  $context->tag = '';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'events*' => 'events*',
      ),
    ),
  );
  $context->reactions = array();
  $context->condition_mode = 0;
  $export['summit_2015'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'tools';
  $context->description = '';
  $context->tag = 'page';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/6648' => 'node/6648',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'bean-tools---develop-your-action-plan' => array(
          'module' => 'bean',
          'delta' => 'tools---develop-your-action-plan',
          'region' => 'content',
          'weight' => '-10',
        ),
        'bean-tools---learn-from-your-peers' => array(
          'module' => 'bean',
          'delta' => 'tools---learn-from-your-peers',
          'region' => 'content',
          'weight' => '-9',
        ),
        'bean-tools---track-progress-on-ogp' => array(
          'module' => 'bean',
          'delta' => 'tools---track-progress-on-ogp',
          'region' => 'content',
          'weight' => '-8',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('page');
  $export['tools'] = $context;

  return $export;
}
