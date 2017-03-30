<?php
/**
 * @file
 * ogp_sitewide.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function ogp_sitewide_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: flexslider_optionset
  $overrides["flexslider_optionset.default.options|slideshowSpeed"] = 3500;

 return $overrides;
}
