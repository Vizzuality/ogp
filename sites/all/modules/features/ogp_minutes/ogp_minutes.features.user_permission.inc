<?php
/**
 * @file
 * ogp_minutes.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function ogp_minutes_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create minutes content'.
  $permissions['create minutes content'] = array(
    'name' => 'create minutes content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete any minutes content'.
  $permissions['delete any minutes content'] = array(
    'name' => 'delete any minutes content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete own minutes content'.
  $permissions['delete own minutes content'] = array(
    'name' => 'delete own minutes content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit any minutes content'.
  $permissions['edit any minutes content'] = array(
    'name' => 'edit any minutes content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit own minutes content'.
  $permissions['edit own minutes content'] = array(
    'name' => 'edit own minutes content',
    'roles' => array(),
    'module' => 'node',
  );

  return $permissions;
}
