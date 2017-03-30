<?php
/**
 * @file
 * ogp_irm_report.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function ogp_irm_report_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_anonymous_irm_report';
  $strongarm->value = 0;
  $export['comment_anonymous_irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_mode_irm_report';
  $strongarm->value = 1;
  $export['comment_default_mode_irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_per_page_irm_report';
  $strongarm->value = '50';
  $export['comment_default_per_page_irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_form_location_irm_report';
  $strongarm->value = 1;
  $export['comment_form_location_irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_irm_report';
  $strongarm->value = '2';
  $export['comment_irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_preview_irm_report';
  $strongarm->value = '1';
  $export['comment_preview_irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_subject_field_irm_report';
  $strongarm->value = 1;
  $export['comment_subject_field_irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'disqus_nodetypes';
  $strongarm->value = array(
    'blog_post' => 'blog_post',
    'report_comments' => 'report_comments',
    'room' => 0,
    'schedule_item' => 0,
    'session' => 0,
    'time_slot' => 0,
    'case_study' => 0,
    'civic_society_org' => 0,
    'commitment' => 0,
    'country_page' => 0,
    'event' => 0,
    'expert' => 0,
    'irm_report' => 0,
    'link' => 0,
    'minutes' => 0,
    'news' => 0,
    'page' => 0,
    'self_assessment' => 0,
    'toolkit' => 0,
    'tweet' => 0,
    'webinar' => 0,
    'working_group' => 0,
    'working_group_page' => 0,
    'migrate_extras_media_example' => 0,
    'story' => 0,
    'webform' => 0,
  );
  $export['disqus_nodetypes'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__irm_report';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => FALSE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'diff_standard' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
      'activity_stream' => array(
        'custom_settings' => TRUE,
      ),
      'action_plan' => array(
        'custom_settings' => FALSE,
      ),
      'revision' => array(
        'custom_settings' => FALSE,
      ),
      'country_overview' => array(
        'custom_settings' => TRUE,
      ),
      'listing' => array(
        'custom_settings' => TRUE,
      ),
      'search_index' => array(
        'custom_settings' => FALSE,
      ),
      'search_result' => array(
        'custom_settings' => FALSE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(
        'metatags' => array(
          'weight' => '12',
        ),
        'title' => array(
          'weight' => '0',
        ),
        'path' => array(
          'weight' => '9',
        ),
        'redirect' => array(
          'weight' => '10',
        ),
        'workbench_access' => array(
          'weight' => '5',
        ),
        'language' => array(
          'weight' => '8',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'language_content_type_irm_report';
  $strongarm->value = '4';
  $export['language_content_type_irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_irm_report';
  $strongarm->value = array();
  $export['menu_options_irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_irm_report';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_irm_report';
  $strongarm->value = array(
    0 => 'status',
  );
  $export['node_options_irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_irm_report';
  $strongarm->value = '1';
  $export['node_preview_irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_irm_report';
  $strongarm->value = 0;
  $export['node_submitted_irm_report'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_irm_report_en_pattern';
  $strongarm->value = '';
  $export['pathauto_node_irm_report_en_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_irm_report_es_pattern';
  $strongarm->value = '';
  $export['pathauto_node_irm_report_es_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_irm_report_pattern';
  $strongarm->value = 'country/[node:og_group_ref]/progress-report/[node:title]';
  $export['pathauto_node_irm_report_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_irm_report_und_pattern';
  $strongarm->value = '';
  $export['pathauto_node_irm_report_und_pattern'] = $strongarm;

  return $export;
}
