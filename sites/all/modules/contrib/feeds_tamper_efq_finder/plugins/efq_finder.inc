<?php

$plugin = array(
  'form' => 'feeds_tamper_efq_finder_form',
  //   'validate' => 'MODULE_MY_PLUGIN_validate',
  'callback' => 'feeds_tamper_efq_finder_callback',
  'name' => 'Entity Field Query finder',
  'multi' => 'loop',
  'category' => 'Other',
);

function feeds_tamper_efq_finder_form($importer, $element_key, $settings) {
  $form = array();

  // Get some info on entities and bundles.
  $info = entity_get_info();
  $entities = $bundles = array();
  foreach ($info as $key => $data) {
    $entities[$key] = $data['label'];
    if (isset($data['bundles'])) {
      foreach ($data['bundles'] as $bundle => $bundle_info) {
        $bundles[$key][$bundle] = $bundle_info['label'];
      }
    }
  }

  $form['entity'] = array(
    '#type' => 'select',
    '#title' => t('Entity type'),
    '#options' => $entities,
    '#default_value' => $settings['entity'],
  );

  // Nice UI for bundles.
  foreach ($bundles as $entity => $ebundles) {
    $form[$entity . '_bundle'] = array(
      '#type' => 'select',
      '#title' => t('Bundle'),
      '#options' => $ebundles,
      '#default_value' => $settings[$entity . '_bundle'],
      '#states' => array(
        'visible' => array(
          ':input[name="settings[entity]"]' => array('value' => $entity),
        ),
      ),
    );
  }

  // @TODO: implement auto-complete (a fast one).
  $form['field'] = array(
    '#type' => 'textfield',
    '#title' => t('Field name/column to be searched.'),
    '#description' => t('Type the field name and optionally append a ":column" if you want to search on something else than the field "value"'),
    '#required' => TRUE,
    '#default_value' => $settings['field'],
  );

  return $form;
}

function feeds_tamper_efq_finder_callback($result, $item_key, $element_key, &$field, $settings) {
  $query = new EntityFieldQuery();

  // Entity and bundle are optional
  if (!empty($settings['entity'])) {
    $query->entityCondition('entity_type', $settings['entity']);
    if (!empty($settings[$settings['entity'] . '_bundle'])) {
      $query->entityCondition('bundle', $settings[$settings['entity'] . '_bundle']);
    }
  }

  // If column is not specified, defaults to "value".
  list($field_name, $column) = explode(':', $settings['field']);
  if (empty($column)) {
    $column = 'value';
  }

  // @TODO: Implement choice of behavior when multiple entities are found.
  // Currently we only use the first.
  $query->fieldCondition($field_name, $column, $field, '=');
  $query->range(0, 1);

  $result = $query->execute();
  $info = entity_get_info();
  if (!empty($settings['entity'])) {
    if (isset($result[$settings['entity']])) {
      $field = key($result[$settings['entity']]);
   }
  }
  else {
    $entity_type = key($result);
    $field = key($result[$entity_type]);
  }
}
