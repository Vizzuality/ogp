<?php
/**
 * @file
 * ogp_blog.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function ogp_blog_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create blog_post content'.
  $permissions['create blog_post content'] = array(
    'name' => 'create blog_post content',
    'roles' => array(
      'administrator' => 'administrator',
      'blogger' => 'blogger',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete any blog_post content'.
  $permissions['delete any blog_post content'] = array(
    'name' => 'delete any blog_post content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete own blog_post content'.
  $permissions['delete own blog_post content'] = array(
    'name' => 'delete own blog_post content',
    'roles' => array(
      'administrator' => 'administrator',
      'blogger' => 'blogger',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'delete terms in blog_category'.
  $permissions['delete terms in blog_category'] = array(
    'name' => 'delete terms in blog_category',
    'roles' => array(),
    'module' => 'taxonomy',
  );

  // Exported permission: 'edit any blog_post content'.
  $permissions['edit any blog_post content'] = array(
    'name' => 'edit any blog_post content',
    'roles' => array(
      'administrator' => 'administrator',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit any blogroll bean'.
  $permissions['edit any blogroll bean'] = array(
    'name' => 'edit any blogroll bean',
    'roles' => array(
      'administrator' => 'administrator',
      'staff' => 'staff',
    ),
    'module' => 'bean',
  );

  // Exported permission: 'edit own blog_post content'.
  $permissions['edit own blog_post content'] = array(
    'name' => 'edit own blog_post content',
    'roles' => array(
      'administrator' => 'administrator',
      'blogger' => 'blogger',
      'content editor' => 'content editor',
    ),
    'module' => 'node',
  );

  // Exported permission: 'edit terms in blog_category'.
  $permissions['edit terms in blog_category'] = array(
    'name' => 'edit terms in blog_category',
    'roles' => array(),
    'module' => 'taxonomy',
  );

  // Exported permission: 'enter blog_post revision log entry'.
  $permissions['enter blog_post revision log entry'] = array(
    'name' => 'enter blog_post revision log entry',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  // Exported permission: 'override blog_post authored by option'.
  $permissions['override blog_post authored by option'] = array(
    'name' => 'override blog_post authored by option',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  // Exported permission: 'override blog_post authored on option'.
  $permissions['override blog_post authored on option'] = array(
    'name' => 'override blog_post authored on option',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  // Exported permission: 'override blog_post promote to front page option'.
  $permissions['override blog_post promote to front page option'] = array(
    'name' => 'override blog_post promote to front page option',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  // Exported permission: 'override blog_post published option'.
  $permissions['override blog_post published option'] = array(
    'name' => 'override blog_post published option',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  // Exported permission: 'override blog_post revision option'.
  $permissions['override blog_post revision option'] = array(
    'name' => 'override blog_post revision option',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  // Exported permission: 'override blog_post sticky option'.
  $permissions['override blog_post sticky option'] = array(
    'name' => 'override blog_post sticky option',
    'roles' => array(),
    'module' => 'override_node_options',
  );

  // Exported permission: 'view any blogroll bean'.
  $permissions['view any blogroll bean'] = array(
    'name' => 'view any blogroll bean',
    'roles' => array(
      'anonymous user' => 'anonymous user',
    ),
    'module' => 'bean',
  );

  return $permissions;
}
