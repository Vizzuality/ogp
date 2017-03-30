<?php
/**
 * @file
 * ogp_toolkit.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function ogp_toolkit_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create toolkit content'.
  $permissions['create toolkit content'] = array(
    'name' => 'create toolkit content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete any toolkit content'.
  $permissions['delete any toolkit content'] = array(
    'name' => 'delete any toolkit content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete own toolkit content'.
  $permissions['delete own toolkit content'] = array(
    'name' => 'delete own toolkit content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit any toolkit content'.
  $permissions['edit any toolkit content'] = array(
    'name' => 'edit any toolkit content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit own toolkit content'.
  $permissions['edit own toolkit content'] = array(
    'name' => 'edit own toolkit content',
    'roles' => array(),
    'module' => 'node',
  );

  return $permissions;
}
