<?php
/**
 * @file
 * ogp_twitter.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function ogp_twitter_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'access block refresh content'.
  $permissions['access block refresh content'] = array(
    'name' => 'access block refresh content',
    'roles' => array(
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'block_refresh',
  );

  return $permissions;
}
