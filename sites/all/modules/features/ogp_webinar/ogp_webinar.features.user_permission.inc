<?php
/**
 * @file
 * ogp_webinar.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function ogp_webinar_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create webinar content'.
  $permissions['create webinar content'] = array(
    'name' => 'create webinar content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete any webinar content'.
  $permissions['delete any webinar content'] = array(
    'name' => 'delete any webinar content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'delete own webinar content'.
  $permissions['delete own webinar content'] = array(
    'name' => 'delete own webinar content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit any webinar content'.
  $permissions['edit any webinar content'] = array(
    'name' => 'edit any webinar content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: 'edit own webinar content'.
  $permissions['edit own webinar content'] = array(
    'name' => 'edit own webinar content',
    'roles' => array(),
    'module' => 'node',
  );

  return $permissions;
}
