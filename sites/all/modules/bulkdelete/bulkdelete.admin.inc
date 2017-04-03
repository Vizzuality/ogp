<?php
/*
 * @file
 * Administrative interface for the bulkdelete module.
 */

/**
 * Implements hook_form().
 *
 * @param array $form
 * @param array $form_state
 * @return array
 */
function bulkdelete_form($form, &$form_state) {
  $options = array();
  $types = node_type_get_types();
  ksort($types);
  foreach ($types as $key => $values) {
    $count = db_select('node')
      ->condition('type', $key)
      ->countQuery()
      ->execute()
      ->fetchField();

    if ($count > 0) {
      $options[$key] = "$values->name ($key) ($count)";
    }
  }
  $form['types'] = array(
    '#type'        => 'checkboxes',
    '#title'       => t('Content types for deletion'),
    '#options'     => $options,
    '#description' => t('All nodes of these types will be deleted using the batch API.'),
  );
  $form['quick'] = array(
    '#type'          => 'radios',
    '#title'         => t('API'),
    '#default_value' => 0,
    '#options'       => array(
      0 => t('Standard'),
      1 => t('Quick'),
    ),
    '#description'   => t('Please choose how to delete the nodes.'),
  );

  $form['standard_desc'] = array(
    '#type'   => 'item',
    '#markup' => t('<strong>Standard</strong> means we use node_delete() which is slower but reliable. <strong>Warning!</strong> You will get a watchdog message for every node that is deleted.'),
  );

  $form['submit'] = array(
    '#type'  => 'submit',
    '#value' => t('Delete'),
  );

  return $form;
}

/**
 * Implements hook_form_submit().
 *
 * Generates the batch actions array.
 * @param array $form
 * @param array $form_state
 */
function bulkdelete_form_submit($form, &$form_state) {

  $quick = $form_state['values']['quick'];

  // Process the form results.
  $types = array_filter($form_state['values']['types']);
  if (count($types) > 0) {
    $result = db_select('node')
      ->fields('node', array('nid'))
      ->condition('type', $types)
      ->execute()
      ->fetchAll();

    $operations = array();

    // Doing an empty operation at the beginning makes the "initialization"
    // phase go quickly.
    $operations[] = array('trim', array(''));

    $count = 1;
    $last_row = count($result);
    foreach ($result as $row) {
      $nids[] = $row->nid;
      if ($count % 20 === 0 || $count === $last_row) {
        $operations[] = array('node_delete_multiple', array($nids));
        $nids = array();
      }
      ++$count;
    }

    // Clear the cache once at the end.
    // How many operations are we going to do?
    $count_operations = count($operations);

    // Set up the Batch API
    $batch = array(
      'operations' => $operations,
      'finished'   => '_bulkdelete_batch_finished',
      'title'      => t('Deleting !count nodes in !count2 operations.', array(
        '!count'  => --$count,
        '!count2' => $count_operations
      )),
    );
    batch_set($batch);
    batch_process();
  }
}
