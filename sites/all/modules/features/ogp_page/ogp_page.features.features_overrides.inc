<?php
/**
 * @file
 * ogp_page.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function ogp_page_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: field_base
  $overrides["field_base.body.field_permissions"] = array(
    'type' => 0,
  );
  $overrides["field_base.body.settings|entity_translation_sync"] = FALSE;
  $overrides["field_base.body.settings|field_permissions"] = array(
    'create' => 'create',
    'edit' => 0,
    'edit own' => 'edit own',
    'view' => 'view',
    'view own' => 0,
  );
  $overrides["field_base.body.settings|max_length"] = '';

 return $overrides;
}
