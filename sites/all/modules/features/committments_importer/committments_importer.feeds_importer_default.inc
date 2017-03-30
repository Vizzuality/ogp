<?php
/**
 * @file
 * committments_importer.feeds_importer_default.inc
 */

/**
 * Implements hook_feeds_importer_default().
 */
function committments_importer_feeds_importer_default() {
  $export = array();

  $feeds_importer = new stdClass();
  $feeds_importer->disabled = FALSE; /* Edit this to true to make a default feeds_importer disabled initially */
  $feeds_importer->api_version = 1;
  $feeds_importer->id = 'committments_importer';
  $feeds_importer->config = array(
    'name' => 'Committments importer',
    'description' => 'Imports committment data from CSV',
    'fetcher' => array(
      'plugin_key' => 'FeedsFileFetcher',
      'config' => array(
        'allowed_extensions' => 'txt csv tsv xml opml',
        'direct' => FALSE,
        'directory' => 'private://feeds',
        'allowed_schemes' => array(
          0 => 'public',
          1 => 'private',
        ),
      ),
    ),
    'parser' => array(
      'plugin_key' => 'FeedsCSVParser',
      'config' => array(
        'delimiter' => ',',
        'no_headers' => 0,
      ),
    ),
    'processor' => array(
      'plugin_key' => 'FeedsNodeProcessor',
      'config' => array(
        'expire' => '-1',
        'author' => 0,
        'authorize' => 1,
        'mappings' => array(
          0 => array(
            'source' => 'Node ID',
            'target' => 'guid',
            'unique' => 1,
          ),
          1 => array(
            'source' => 'Commitment Title',
            'target' => 'title_field',
            'unique' => FALSE,
          ),
          2 => array(
            'source' => 'Country',
            'target' => 'entityreference:og_group_ref',
            'unique' => FALSE,
          ),
          3 => array(
            'source' => 'Commitment Description',
            'target' => 'field_description',
            'unique' => FALSE,
          ),
          4 => array(
            'source' => 'Commitment Activity',
            'target' => 'field_activities',
            'unique' => FALSE,
          ),
          5 => array(
            'source' => 'Start Date',
            'target' => 'field_start_date:start',
            'unique' => FALSE,
          ),
          6 => array(
            'source' => 'End Date',
            'target' => 'field_end_date:start',
            'unique' => FALSE,
          ),
          7 => array(
            'source' => 'Implementing Organization',
            'target' => 'field_partner_organizations',
            'unique' => FALSE,
          ),
          8 => array(
            'source' => 'Activity Focus Area Tags',
            'target' => 'field_topic',
            'unique' => FALSE,
          ),
          9 => array(
            'source' => 'Contact name',
            'target' => 'field_contact_name',
            'unique' => FALSE,
          ),
          10 => array(
            'source' => 'Contact Email',
            'target' => 'field_contact_email',
            'unique' => FALSE,
          ),
          11 => array(
            'source' => 'Commitment Status',
            'target' => 'field_commitment_status',
            'unique' => FALSE,
          ),
          12 => array(
            'source' => 'Language',
            'target' => 'language',
            'unique' => FALSE,
          ),
        ),
        'update_existing' => '2',
        'input_format' => 'plain_text',
        'skip_hash_check' => 0,
        'bundle' => 'commitment',
      ),
    ),
    'content_type' => '',
    'update' => 0,
    'import_period' => '-1',
    'expire_period' => 3600,
    'import_on_create' => 1,
    'process_in_background' => 0,
  );
  $export['committments_importer'] = $feeds_importer;

  return $export;
}
