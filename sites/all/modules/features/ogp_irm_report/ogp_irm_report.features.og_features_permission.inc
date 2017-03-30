<?php
/**
 * @file
 * ogp_irm_report.features.og_features_permission.inc
 */

/**
 * Implements hook_og_features_default_permissions().
 */
function ogp_irm_report_og_features_default_permissions() {
  $permissions = array();

  // Exported og permission: 'node:country_page:create irm_report content'
  $permissions['node:country_page:create irm_report content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:delete any irm_report content'
  $permissions['node:country_page:delete any irm_report content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:delete own irm_report content'
  $permissions['node:country_page:delete own irm_report content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update any irm_report content'
  $permissions['node:country_page:update any irm_report content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update own irm_report content'
  $permissions['node:country_page:update own irm_report content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  return $permissions;
}
