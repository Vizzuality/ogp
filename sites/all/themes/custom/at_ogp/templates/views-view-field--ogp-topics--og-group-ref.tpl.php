<?php

/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */
$entity = $row->_entity_properties['entity object'];
if (!empty($entity->og_group_ref) && count($entity->og_group_ref[LANGUAGE_NONE] == 1)) {
  $fields = field_info_instances('node', 'country_page');
  $field_id = $fields['field_country']['field_id'];
  $ref = $entity->og_group_ref[LANGUAGE_NONE][0];
  $country = node_load($ref['target_id']);
  if (isset($country->field_country[LANGUAGE_NONE][0]['iso2'])) {
    $output = l($country->title, 'node/' . $country->nid, array('attributes' => array('class' => array('country-' . $country->field_country[LANGUAGE_NONE][0]['iso2']))));
  }
  else {
    $output = l($country->title, 'node/' . $country->nid);
  }
  // dpm($output);
}
else {
  $output = '<div class="country-all">' . t('International') . '</div>';
}
?>
<?php print $output; ?>
