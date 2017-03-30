<?php
/**
 * @file
 * ogp_permissions.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function ogp_permissions_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: user_permission
  $overrides["user_permission.access administration menu.roles|0"]["DELETED"] = TRUE;
  $overrides["user_permission.access administration menu.roles|1"]["DELETED"] = TRUE;
  $overrides["user_permission.access administration menu.roles|administrator"] = 'administrator';
  $overrides["user_permission.access administration menu.roles|content editor"] = 'content editor';
  $overrides["user_permission.access content.roles|0"]["DELETED"] = TRUE;
  $overrides["user_permission.access content.roles|1"]["DELETED"] = TRUE;
  $overrides["user_permission.access content.roles|2"]["DELETED"] = TRUE;
  $overrides["user_permission.access content.roles|administrator"] = 'administrator';
  $overrides["user_permission.access content.roles|anonymous user"] = 'anonymous user';
  $overrides["user_permission.access content.roles|authenticated user"] = 'authenticated user';
  $overrides["user_permission.access dashboard.roles|0"]["DELETED"] = TRUE;
  $overrides["user_permission.access dashboard.roles|administrator"] = 'administrator';
  $overrides["user_permission.access toolbar.roles|administrator"]["DELETED"] = TRUE;
  $overrides["user_permission.access toolbar.roles|blogger"]["DELETED"] = TRUE;
  $overrides["user_permission.administer comments.roles"] = array();

 return $overrides;
}
