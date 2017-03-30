<?php
/**
 * @file
 * ogp_country.features.og_features_role.inc
 */

/**
 * Implements hook_og_features_default_roles().
 */
function ogp_country_og_features_default_roles() {
  $roles = array();

  // Exported OG Role: 'node:country_page:country contact'.
  $roles['node:country_page:country contact'] = array(
    'gid' => 0,
    'group_type' => 'node',
    'group_bundle' => 'country_page',
    'name' => 'country contact',
  );

  return $roles;
}
