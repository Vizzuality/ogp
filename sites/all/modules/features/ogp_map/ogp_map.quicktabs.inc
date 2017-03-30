<?php
/**
 * @file
 * ogp_map.quicktabs.inc
 */

/**
 * Implements hook_quicktabs_default_quicktabs().
 */
function ogp_map_quicktabs_default_quicktabs() {
  $export = array();

  $quicktabs = new stdClass();
  $quicktabs->disabled = FALSE; /* Edit this to true to make a default quicktabs disabled initially */
  $quicktabs->api_version = 1;
  $quicktabs->machine_name = 'front_page_maps';
  $quicktabs->ajax = 1;
  $quicktabs->hide_empty_tabs = FALSE;
  $quicktabs->default_tab = 1;
  $quicktabs->title = 'Front page maps';
  $quicktabs->tabs = array(
    0 => array(
      'bid' => 'ogp_map_delta_country_map',
      'hide_title' => 1,
      'title' => 'Participating Countries',
      'weight' => '-100',
      'type' => 'block',
    ),
    1 => array(
      'bid' => 'ogp_map_delta_country_apc',
      'hide_title' => 1,
      'title' => 'Action Plan Cycles',
      'weight' => '-99',
      'type' => 'block',
    ),
    2 => array(
      'bid' => 'ogp_map_delta_country_sc',
      'hide_title' => 1,
      'title' => 'Steering Committee',
      'weight' => '-97',
      'type' => 'block',
    ),
  );
  $quicktabs->renderer = 'quicktabs';
  $quicktabs->style = 'Zen';
  $quicktabs->options = array();

  // Translatables
  // Included for use with string extractors like potx.
  t('Action Plan Cycles');
  t('Front page maps');
  t('Participating Countries');
  t('Steering Committee');

  $export['front_page_maps'] = $quicktabs;

  return $export;
}
