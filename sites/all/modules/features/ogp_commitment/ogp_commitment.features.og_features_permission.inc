<?php
/**
 * @file
 * ogp_commitment.features.og_features_permission.inc
 */

/**
 * Implements hook_og_features_default_permissions().
 */
function ogp_commitment_og_features_default_permissions() {
  $permissions = array();

  // Exported og permission: 'node:country_page:create commitment content'
  $permissions['node:country_page:create commitment content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:delete any commitment content'
  $permissions['node:country_page:delete any commitment content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:delete own commitment content'
  $permissions['node:country_page:delete own commitment content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update any commitment content'
  $permissions['node:country_page:update any commitment content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update own commitment content'
  $permissions['node:country_page:update own commitment content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  return $permissions;
}
