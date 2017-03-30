<?php
/**
 * @file
 * ogp_country.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function ogp_country_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create country_page content'.
  $permissions['create country_page content'] = array(
    'name' => 'create country_page content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any country_page content'.
  $permissions['delete any country_page content'] = array(
    'name' => 'delete any country_page content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own country_page content'.
  $permissions['delete own country_page content'] = array(
    'name' => 'delete own country_page content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any country_page content'.
  $permissions['edit any country_page content'] = array(
    'name' => 'edit any country_page content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own country_page content'.
  $permissions['edit own country_page content'] = array(
    'name' => 'edit own country_page content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  return $permissions;
}
