<?php
/**
 * @file
 * ogp_irm_report.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function ogp_irm_report_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create irm_report content'.
  $permissions['create irm_report content'] = array(
    'name' => 'create irm_report content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any irm_report content'.
  $permissions['delete any irm_report content'] = array(
    'name' => 'delete any irm_report content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own irm_report content'.
  $permissions['delete own irm_report content'] = array(
    'name' => 'delete own irm_report content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any irm_report content'.
  $permissions['edit any irm_report content'] = array(
    'name' => 'edit any irm_report content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit own irm_report content'.
  $permissions['edit own irm_report content'] = array(
    'name' => 'edit own irm_report content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  return $permissions;
}
