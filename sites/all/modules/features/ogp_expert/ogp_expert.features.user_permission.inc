<?php
/**
 * @file
 * ogp_expert.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function ogp_expert_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create expert content'.
  $permissions['create expert content'] = array(
    'name' => 'create expert content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete any expert content'.
  $permissions['delete any expert content'] = array(
    'name' => 'delete any expert content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete own expert content'.
  $permissions['delete own expert content'] = array(
    'name' => 'delete own expert content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit any expert content'.
  $permissions['edit any expert content'] = array(
    'name' => 'edit any expert content',
    'roles' => array(),
    'module' => 'node',
  );

  return $permissions;
}
