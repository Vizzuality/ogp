<?php
/**
 * @file
 * ogp_permissions.features.user_role.inc
 */

/**
 * Implements hook_user_default_roles().
 */
function ogp_permissions_user_default_roles() {
  $roles = array();

  // Exported role: blogger.
  $roles['blogger'] = array(
    'name' => 'blogger',
    'weight' => 5,
  );

  // Exported role: staff.
  $roles['staff'] = array(
    'name' => 'staff',
    'weight' => 3,
  );

  // Exported role: staff contact.
  $roles['staff contact'] = array(
    'name' => 'staff contact',
    'weight' => 4,
  );

  return $roles;
}
