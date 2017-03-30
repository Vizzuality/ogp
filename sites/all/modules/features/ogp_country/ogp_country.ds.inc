<?php
/**
 * @file
 * ogp_country.ds.inc
 */

/**
 * Implements hook_ds_view_modes_info().
 */
function ogp_country_ds_view_modes_info() {
  $export = array();

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'action_plan';
  $ds_view_mode->label = 'Action Plan';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['action_plan'] = $ds_view_mode;

  $ds_view_mode = new stdClass();
  $ds_view_mode->api_version = 1;
  $ds_view_mode->view_mode = 'country_overview';
  $ds_view_mode->label = 'Country Overview';
  $ds_view_mode->entities = array(
    'node' => 'node',
  );
  $export['country_overview'] = $ds_view_mode;

  return $export;
}
