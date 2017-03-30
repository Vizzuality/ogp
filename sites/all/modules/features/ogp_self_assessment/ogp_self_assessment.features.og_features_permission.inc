<?php
/**
 * @file
 * ogp_self_assessment.features.og_features_permission.inc
 */

/**
 * Implements hook_og_features_default_permissions().
 */
function ogp_self_assessment_og_features_default_permissions() {
  $permissions = array();

  // Exported og permission: 'node:country_page:create self_assessment content'
  $permissions['node:country_page:create self_assessment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:delete any self_assessment content'
  $permissions['node:country_page:delete any self_assessment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:delete own self_assessment content'
  $permissions['node:country_page:delete own self_assessment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update any self_assessment content'
  $permissions['node:country_page:update any self_assessment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update own self_assessment content'
  $permissions['node:country_page:update own self_assessment content'] = array(
    'roles' => array(),
  );

  return $permissions;
}
