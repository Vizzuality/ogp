<?php
/**
 * @file
 * ogp_self_assessment.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function ogp_self_assessment_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create self_assessment content'.
  $permissions['create self_assessment content'] = array(
    'name' => 'create self_assessment content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any self_assessment content'.
  $permissions['delete any self_assessment content'] = array(
    'name' => 'delete any self_assessment content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own self_assessment content'.
  $permissions['delete own self_assessment content'] = array(
    'name' => 'delete own self_assessment content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any self_assessment content'.
  $permissions['edit any self_assessment content'] = array(
    'name' => 'edit any self_assessment content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own self_assessment content'.
  $permissions['edit own self_assessment content'] = array(
    'name' => 'edit own self_assessment content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  return $permissions;
}
