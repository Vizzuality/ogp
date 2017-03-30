<?php
/**
 * @file
 * committments_importer.feeds_tamper_default.inc
 */

/**
 * Implements hook_feeds_tamper_default().
 */
function committments_importer_feeds_tamper_default() {
  $export = array();

  $feeds_tamper = new stdClass();
  $feeds_tamper->disabled = FALSE; /* Edit this to true to make a default feeds_tamper disabled initially */
  $feeds_tamper->api_version = 2;
  $feeds_tamper->id = 'committments_importer-activity_focus_area_tags-explode';
  $feeds_tamper->importer = 'committments_importer';
  $feeds_tamper->source = 'Activity Focus Area Tags';
  $feeds_tamper->plugin_id = 'explode';
  $feeds_tamper->settings = array(
    'separator' => '|',
    'limit' => '',
    'real_separator' => '|',
  );
  $feeds_tamper->weight = 0;
  $feeds_tamper->description = 'Explode';
  $export['committments_importer-activity_focus_area_tags-explode'] = $feeds_tamper;

  $feeds_tamper = new stdClass();
  $feeds_tamper->disabled = FALSE; /* Edit this to true to make a default feeds_tamper disabled initially */
  $feeds_tamper->api_version = 2;
  $feeds_tamper->id = 'committments_importer-commitment_activity-explode';
  $feeds_tamper->importer = 'committments_importer';
  $feeds_tamper->source = 'Commitment Activity';
  $feeds_tamper->plugin_id = 'explode';
  $feeds_tamper->settings = array(
    'separator' => '|',
    'limit' => '',
    'real_separator' => '|',
  );
  $feeds_tamper->weight = 0;
  $feeds_tamper->description = 'Explode';
  $export['committments_importer-commitment_activity-explode'] = $feeds_tamper;

  $feeds_tamper = new stdClass();
  $feeds_tamper->disabled = FALSE; /* Edit this to true to make a default feeds_tamper disabled initially */
  $feeds_tamper->api_version = 2;
  $feeds_tamper->id = 'committments_importer-commitment_status-completed';
  $feeds_tamper->importer = 'committments_importer';
  $feeds_tamper->source = 'Commitment Status';
  $feeds_tamper->plugin_id = 'find_replace';
  $feeds_tamper->settings = array(
    'find' => 'Completed',
    'replace' => '1',
    'case_sensitive' => 0,
    'word_boundaries' => 0,
    'whole' => 0,
    'regex' => FALSE,
    'func' => 'str_ireplace',
  );
  $feeds_tamper->weight = 2;
  $feeds_tamper->description = 'Completed';
  $export['committments_importer-commitment_status-completed'] = $feeds_tamper;

  $feeds_tamper = new stdClass();
  $feeds_tamper->disabled = FALSE; /* Edit this to true to make a default feeds_tamper disabled initially */
  $feeds_tamper->api_version = 2;
  $feeds_tamper->id = 'committments_importer-commitment_status-find_replace';
  $feeds_tamper->importer = 'committments_importer';
  $feeds_tamper->source = 'Commitment Status';
  $feeds_tamper->plugin_id = 'find_replace';
  $feeds_tamper->settings = array(
    'find' => 'In Progress',
    'replace' => '2',
    'case_sensitive' => 0,
    'word_boundaries' => 0,
    'whole' => 0,
    'regex' => FALSE,
    'func' => 'str_ireplace',
  );
  $feeds_tamper->weight = 0;
  $feeds_tamper->description = 'In Progress';
  $export['committments_importer-commitment_status-find_replace'] = $feeds_tamper;

  $feeds_tamper = new stdClass();
  $feeds_tamper->disabled = FALSE; /* Edit this to true to make a default feeds_tamper disabled initially */
  $feeds_tamper->api_version = 2;
  $feeds_tamper->id = 'committments_importer-commitment_status-not_yet_begun';
  $feeds_tamper->importer = 'committments_importer';
  $feeds_tamper->source = 'Commitment Status';
  $feeds_tamper->plugin_id = 'find_replace';
  $feeds_tamper->settings = array(
    'find' => 'Not yet begun',
    'replace' => '0',
    'case_sensitive' => 0,
    'word_boundaries' => 0,
    'whole' => 0,
    'regex' => FALSE,
    'func' => 'str_ireplace',
  );
  $feeds_tamper->weight = 1;
  $feeds_tamper->description = 'Not Yet Begun';
  $export['committments_importer-commitment_status-not_yet_begun'] = $feeds_tamper;

  $feeds_tamper = new stdClass();
  $feeds_tamper->disabled = FALSE; /* Edit this to true to make a default feeds_tamper disabled initially */
  $feeds_tamper->api_version = 2;
  $feeds_tamper->id = 'committments_importer-country-country_to_code';
  $feeds_tamper->importer = 'committments_importer';
  $feeds_tamper->source = 'Country';
  $feeds_tamper->plugin_id = 'country_to_code';
  $feeds_tamper->settings = array();
  $feeds_tamper->weight = 1;
  $feeds_tamper->description = 'Convert country to ISO code';
  $export['committments_importer-country-country_to_code'] = $feeds_tamper;

  $feeds_tamper = new stdClass();
  $feeds_tamper->disabled = FALSE; /* Edit this to true to make a default feeds_tamper disabled initially */
  $feeds_tamper->api_version = 2;
  $feeds_tamper->id = 'committments_importer-country-efq_finder';
  $feeds_tamper->importer = 'committments_importer';
  $feeds_tamper->source = 'Country';
  $feeds_tamper->plugin_id = 'efq_finder';
  $feeds_tamper->settings = array(
    'entity' => 'node',
    'node_bundle' => 'country_page',
    'taxonomy_term_bundle' => 'tag',
    'comment_bundle' => 'comment_node_blog_post',
    'bean_bundle' => 'beanslide',
    'country_bundle' => 'country',
    'field_collection_item_bundle' => 'field_slide_content',
    'i18n_translation_bundle' => 'menu_link',
    'og_membership_type_bundle' => 'og_membership_type',
    'og_membership_bundle' => 'og_membership_type_default',
    'search_api_server_bundle' => 'search_api_server',
    'search_api_index_bundle' => 'search_api_index',
    'file_bundle' => 'image',
    'taxonomy_vocabulary_bundle' => 'taxonomy_vocabulary',
    'user_bundle' => 'user',
    'field' => 'field_country:iso2',
  );
  $feeds_tamper->weight = 2;
  $feeds_tamper->description = 'Entity Field Query finder';
  $export['committments_importer-country-efq_finder'] = $feeds_tamper;

  $feeds_tamper = new stdClass();
  $feeds_tamper->disabled = FALSE; /* Edit this to true to make a default feeds_tamper disabled initially */
  $feeds_tamper->api_version = 2;
  $feeds_tamper->id = 'committments_importer-implementing_organization-explode';
  $feeds_tamper->importer = 'committments_importer';
  $feeds_tamper->source = 'Implementing Organization';
  $feeds_tamper->plugin_id = 'explode';
  $feeds_tamper->settings = array(
    'separator' => '|',
    'limit' => '',
    'real_separator' => '|',
  );
  $feeds_tamper->weight = 0;
  $feeds_tamper->description = 'Explode';
  $export['committments_importer-implementing_organization-explode'] = $feeds_tamper;

  return $export;
}
