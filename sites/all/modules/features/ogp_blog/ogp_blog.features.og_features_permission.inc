<?php
/**
 * @file
 * ogp_blog.features.og_features_permission.inc
 */

/**
 * Implements hook_og_features_default_permissions().
 */
function ogp_blog_og_features_default_permissions() {
  $permissions = array();

  // Exported og permission: 'node:country_page:create blog_post content'
  $permissions['node:country_page:create blog_post content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:delete any blog_post content'
  $permissions['node:country_page:delete any blog_post content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:delete own blog_post content'
  $permissions['node:country_page:delete own blog_post content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update any blog_post content'
  $permissions['node:country_page:update any blog_post content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update own blog_post content'
  $permissions['node:country_page:update own blog_post content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  return $permissions;
}
