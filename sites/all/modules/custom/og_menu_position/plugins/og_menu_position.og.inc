<?php
/**
 * @file
 * Provides the OG rule plugin for the Menu Position module.
 */

/**
 * Checks if this is a node that is a member of a specific group.
 */
function og_menu_position_menu_position_condition_og($variables) {
  if ($variables['context']['entity_type'] == 'node' && og_is_group_content_type('node', $variables['context']['bundle_name'])) {
    // Grab the variables stored statically in the rule.
    $gid = $variables['group'];

    // $node is dynamically added and may not exist.
    $node = isset($variables['context']['node']) ? $variables['context']['node'] : NULL;

    if ($node && is_object($node)) {
      // Get node's associated groups.
      $groups = og_get_entity_groups('node', $node);
      if (!empty($groups['node'])) {
        $gids = $groups['node'];
        // If the group ID matches one of this node's groups, return TRUE.
        return ($gid && in_array($gid, $gids)) ? TRUE : FALSE;
      }
    }
  }
  return FALSE;
}

/**
 * Adds form elements for the OG plugin to the rule configuration form.
 */
function og_menu_position_menu_position_rule_og_form(&$form, &$form_state) {
  // If this is an existing rule, load the variables stored in the rule for this plugin.
  $variables = !empty($form_state['#menu-position-rule']['conditions']['og']) ? $form_state['#menu-position-rule']['conditions']['og'] : array();

  $gids = og_get_all_group('node');
  $nodes = node_load_multiple($gids);
  $groups = array();
  foreach ($nodes as $gid => $group) {
    $groups[$gid] = $group->title;
  }
  // To ensure that the plugin's form elements are placed inside vertical tabs,
  // all elements should be placed inside a collapsed fieldset inside the
  // $form['conditions'] array.
  if (!empty($groups)) {
    $groups[0] = '- NONE SELECTED -';
    asort($groups);
    $form['conditions']['og'] = array(
      '#type' => 'fieldset',
      '#title' => t('Organic groups'),
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
      '#attached' => array(
        // Ensures a proper summary is added to its vertical tab.
        'js' => array(
          'vertical-tabs' => drupal_get_path('module', 'og_menu_position') . '/plugins/og_menu_position.og.js'
        ),
      ),
    );
    $form['conditions']['og']['group'] = array(
      '#type' => 'select',
      '#title' => t('Group'),
      '#options' => $groups,
      '#default_value' => !empty($variables['group']) ? $variables['group'] : 0,
      '#description' => t('Apply this rule only on content associated with this group.'),
      '#weight' => -20,
    );

    // Add a submit handler.
    $form['#submit'][] = 'og_menu_position_menu_position_rule_og_form_submit';
  }
}

/**
 * Prepares the plugin's variables to be stored in the rule.
 */
function og_menu_position_menu_position_rule_og_form_submit(&$form, &$form_state) {
  if (!empty($form_state['values']['group']) && $form_state['values']['group'] != 0) {
    $variables = array(
      'group' => $form_state['values']['group'],
    );
    $form_state['values']['conditions']['og'] = $variables;
  }
}
