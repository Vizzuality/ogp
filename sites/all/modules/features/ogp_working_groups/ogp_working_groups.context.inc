<?php
/**
 * @file
 * ogp_working_groups.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function ogp_working_groups_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'working_group';
  $context->description = '';
  $context->tag = '';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'working_group' => 'working_group',
        'working_group_page' => 'working_group_page',
      ),
      'options' => array(
        'node_form' => '0',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'views-working_groups-block' => array(
          'module' => 'views',
          'delta' => 'working_groups-block',
          'region' => 'sidebar_second',
          'weight' => '-10',
        ),
        'ogp_working_groups-wg-header' => array(
          'module' => 'ogp_working_groups',
          'delta' => 'wg-header',
          'region' => 'secondary_content',
          'weight' => '-10',
        ),
        'ogp_working_groups-wg-menu' => array(
          'module' => 'ogp_working_groups',
          'delta' => 'wg-menu',
          'region' => 'secondary_content',
          'weight' => '-9',
        ),
        'system-main' => array(
          'module' => 'system',
          'delta' => 'main',
          'region' => 'content',
          'weight' => '-10',
        ),
        'ogp_working_groups-page-add' => array(
          'module' => 'ogp_working_groups',
          'delta' => 'page-add',
          'region' => 'content',
          'weight' => '-9',
        ),
        'views-be9020110c2b80337a6d8b3fbfda8e1c' => array(
          'module' => 'views',
          'delta' => 'be9020110c2b80337a6d8b3fbfda8e1c',
          'region' => 'content_aside',
          'weight' => '-9',
        ),
      ),
    ),
    'disable_context' => array(
      'disabled' => array(
        'about' => 'about',
      ),
    ),
  );
  $context->condition_mode = 0;
  $export['working_group'] = $context;

  return $export;
}
