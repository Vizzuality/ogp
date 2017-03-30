<?php

/**
 * Implements hook_field_info_alter().
 */
function ogp_dkan_integration_field_info_alter(&$info) {
  $candidates = array(
    'range_integer' => 'decimal',
    'range_decimal' => 'decimal',
    'range_float' => 'decimal',
  );
  // Add a setting to all field types.
  foreach ($candidates as $key => $type) {
    $info[$key]['property_type'] = $type;
  }
}

/**
 * Implements hook_facet_items_alter().
 */
function ogp_dkan_integration_facet_items_alter(&$build, &$settings) {
  $country_fields = array(
    'field_dataset_ref:field_country_ref:field_country',
    'search_api_combined_1'
  );
  if (in_array($settings->facet, $country_fields)) {
    foreach ($build as $key => $item) {
      $country = country_load($item["#markup"]);
      $build[$key]["#markup"] = '<span class="flag ' . $country->iso2 . '">' . $country->name . '</span>';
      $build[$key]["#html"] = TRUE;
    }
  }
  if ($settings->facet == 'type') {
    foreach ($build as $key => $item) {
      switch ($item['#markup']) {
        case 'Resource':
          $build[$key]['#markup'] = 'Document';
          break;
      }
    }
  }
}
