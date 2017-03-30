<?php
/**
 * @file
 * ogp_civic_society_org.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function ogp_civic_society_org_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create civic_society_org content'.
  $permissions['create civic_society_org content'] = array(
    'name' => 'create civic_society_org content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete any civic_society_org content'.
  $permissions['delete any civic_society_org content'] = array(
    'name' => 'delete any civic_society_org content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete own civic_society_org content'.
  $permissions['delete own civic_society_org content'] = array(
    'name' => 'delete own civic_society_org content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit any civic_society_org content'.
  $permissions['edit any civic_society_org content'] = array(
    'name' => 'edit any civic_society_org content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit own civic_society_org content'.
  $permissions['edit own civic_society_org content'] = array(
    'name' => 'edit own civic_society_org content',
    'roles' => array(),
    'module' => 'node',
  );

  return $permissions;
}
