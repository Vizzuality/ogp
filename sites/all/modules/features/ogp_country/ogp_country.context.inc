<?php
/**
 * @file
 * ogp_country.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function ogp_country_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'country_actionplan';
  $context->description = '';
  $context->tag = 'country';
  $context->conditions = array(
    'context_og_condition_group_type' => array(
      'values' => array(
        'country_page' => 'country_page',
      ),
      'options' => array(
        'node_form' => 1,
      ),
    ),
    'path' => array(
      'values' => array(
        'node/*/action-plan' => 'node/*/action-plan',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'ogp_dkan_integration-action_plan_table' => array(
          'module' => 'ogp_dkan_integration',
          'delta' => 'action_plan_table',
          'region' => 'content',
          'weight' => '0',
        ),
        'views-ogp_commitments-block' => array(
          'module' => 'views',
          'delta' => 'ogp_commitments-block',
          'region' => 'content_aside',
          'weight' => '-9',
        ),
      ),
    ),
  );
  $context->condition_mode = 1;

  // Translatables
  // Included for use with string extractors like potx.
  t('country');

  $export['country_actionplan'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'country_selfassessment';
  $context->description = '';
  $context->tag = 'country';
  $context->conditions = array(
    'context_og_condition_group_type' => array(
      'values' => array(
        'country_page' => 'country_page',
      ),
      'options' => array(
        'node_form' => 1,
      ),
    ),
    'path' => array(
      'values' => array(
        'node/*/assessment' => 'node/*/assessment',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'ogp_dkan_integration-self_assessment_table' => array(
          'module' => 'ogp_dkan_integration',
          'delta' => 'self_assessment_table',
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

  $export['country_selfassessment'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'country_irm';
  $context->description = '';
  $context->tag = 'country';
  $context->conditions = array(
    'context_og_condition_group_type' => array(
      'values' => array(
        'country_page' => 'country_page',
      ),
      'options' => array(
        'node_form' => 1,
      ),
    ),
    'path' => array(
      'values' => array(
        'node/*/irm' => 'node/*/irm',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'ogp_dkan_integration-irm_report_table' => array(
          'module' => 'ogp_dkan_integration',
          'delta' => 'irm_report_table',
          'region' => 'content',
          'weight' => '-9',
        ),
      ),
    ),
  );
  $context->condition_mode = 1;

  // Translatables
  // Included for use with string extractors like potx.
  t('country');

  $export['country_irm'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'country_contact';
  $context->description = 'Country Contact Page';
  $context->tag = 'country';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        'node/*/contact' => 'node/*/contact',
      ),
    ),
    'views' => array(
      'values' => array(
        'ogp_country_contact:page' => 'ogp_country_contact:page',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-ogp_country_staff-block_1' => array(
          'module' => 'views',
          'delta' => 'ogp_country_staff-block_1',
          'region' => 'sidebar_second',
          'weight' => '-10',
          'title' => '',
        ),
        'views-c67ac7f11821ca8044211a8daf1e9807' => array(
          'module' => 'views',
          'delta' => 'c67ac7f11821ca8044211a8daf1e9807',
          'region' => 'sidebar_second',
          'weight' => '-9',
          'title' => '',
        ),
        'views-country_links-block' => array(
          'module' => 'views',
          'delta' => 'country_links-block',
          'region' => 'sidebar_second',
          'weight' => '-8',
          'title' => '',
        ),
        'og_extras-node_links' => array(
          'module' => 'og_extras',
          'delta' => 'node_links',
          'region' => 'sidebar_second',
          'weight' => '1',
          'title' => '',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Country Contact Page');
  t('country');


  $export['country_contact'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'country_interior';
  $context->description = 'All country pages EXCEPT overview page';
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
    'path' => array(
      'values' => array(
        'node/*/*' => 'node/*/*',
        'country/*/progress-report/*' => 'country/*/progress-report/*',
        '~node/*/group' => '~node/*/group',
        '~node/*/display' => '~node/*/display',
        '~node/*/devel' => '~node/*/devel',
        '~node/*/edit' => '~node/*/edit',
        '~node/*/revisions' => '~node/*/revisions',
        '~node/*/contact' => '~node/*/contact',
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
  t('All country pages EXCEPT overview page');
  t('country');
  $export['country_interior'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'country_overview';
  $context->description = 'Country Overview page';
  $context->tag = 'country';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'country_page' => 'country_page',
      ),
      'options' => array(
        'node_form' => '0',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'ogp_country-overview' => array(
          'module' => 'ogp_country',
          'delta' => 'overview',
          'region' => 'sidebar_second',
          'weight' => '-10',
        ),
        'views-ef62ad50c9cf51f742d6778835e0782e' => array(
          'module' => 'views',
          'delta' => 'ef62ad50c9cf51f742d6778835e0782e',
          'region' => 'sidebar_second',
          'weight' => '-9',
        ),
        'views-country_blog_content-block' => array(
          'module' => 'views',
          'delta' => 'country_blog_content-block',
          'region' => 'sidebar_second',
          'weight' => '-8',
        ),
        'og_extras-node_links' => array(
          'module' => 'og_extras',
          'delta' => 'node_links',
          'region' => 'sidebar_second',
          'weight' => '-7',
        ),
        'views-ogp_activity_feed-block' => array(
          'module' => 'views',
          'delta' => 'ogp_activity_feed-block',
          'region' => 'content_aside',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Country Overview page');
  t('country');
  $export['country_overview'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'country_pages';
  $context->description = 'All country pages.';
  $context->tag = 'country';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'case_study' => 'case_study',
        'civic_society_org' => 'civic_society_org',
        'commitment' => 'commitment',
        'country_page' => 'country_page',
        'irm_report' => 'irm_report',
        'news' => 'news',
        'report_comments' => 'report_comments',
        'self_assessment' => 'self_assessment',
      ),
      'options' => array(
        'node_form' => '0',
      ),
    ),
    'path' => array(
      'values' => array(
        'node/*/action-plan' => 'node/*/action-plan',
        'node/*/assessment' => 'node/*/assessment',
        'node/*/irm' => 'node/*/irm',
        'node/*/case-study' => 'node/*/case-study',
        'node/*/contact' => 'node/*/contact',
        'country/*' => 'country/*',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-country_header-block' => array(
          'module' => 'views',
          'delta' => 'country_header-block',
          'region' => 'secondary_content',
          'weight' => '-10',
        ),
        'ogp_country-nav' => array(
          'module' => 'ogp_country',
          'delta' => 'nav',
          'region' => 'secondary_content',
          'weight' => '-9',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('All country pages.');
  t('country');
  $export['country_pages'] = $context;

  return $export;
}
