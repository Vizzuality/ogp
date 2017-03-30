<?php
/**
 * @file
 * ogp_commitment.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function ogp_commitment_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create commitment content'.
  $permissions['create commitment content'] = array(
    'name' => 'create commitment content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any commitment content'.
  $permissions['delete any commitment content'] = array(
    'name' => 'delete any commitment content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own commitment content'.
  $permissions['delete own commitment content'] = array(
    'name' => 'delete own commitment content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any commitment content'.
  $permissions['edit any commitment content'] = array(
    'name' => 'edit any commitment content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own commitment content'.
  $permissions['edit own commitment content'] = array(
    'name' => 'edit own commitment content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'enter commitment revision log entry'.
  $permissions['enter commitment revision log entry'] = array(
    'name' => 'enter commitment revision log entry',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  // Exported permission: 'override commitment authored by option'.
  $permissions['override commitment authored by option'] = array(
    'name' => 'override commitment authored by option',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  // Exported permission: 'override commitment authored on option'.
  $permissions['override commitment authored on option'] = array(
    'name' => 'override commitment authored on option',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  // Exported permission: 'override commitment promote to front page option'.
  $permissions['override commitment promote to front page option'] = array(
    'name' => 'override commitment promote to front page option',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  // Exported permission: 'override commitment published option'.
  $permissions['override commitment published option'] = array(
    'name' => 'override commitment published option',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  // Exported permission: 'override commitment revision option'.
  $permissions['override commitment revision option'] = array(
    'name' => 'override commitment revision option',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  // Exported permission: 'override commitment sticky option'.
  $permissions['override commitment sticky option'] = array(
    'name' => 'override commitment sticky option',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  return $permissions;
}
