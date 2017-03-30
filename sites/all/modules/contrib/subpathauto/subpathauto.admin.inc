<?php

/**
 * @file
 * Admin page callbacks for the subpathauto module.
 */

/**
 * Form builder; Configure the sub-path URL alias settings.
 *
 * @ingroup forms
 * @see system_settings_form()
 */
function subpathauto_settings_form($form, &$form_state) {
  $form['subpathauto_depth'] = array(
    '#type' => 'select',
    '#title' => t('Maximum depth of sub-paths to alias'),
    '#options' => array_merge(array(0 => t('Disabled')), range(1, MENU_MAX_DEPTH - 1)),
    '#default_value' => variable_get('subpathauto_depth', 1),
    '#description' => t('Increasing this value may decrease performance.'),
  );

  $form['subpathauto_ignore_admin'] = array(
    '#type' => 'checkbox',
    '#title' => t('Skip administration paths from sub-path processing.'),
    '#default_value' => variable_get('subpathauto_ignore_admin', 1),
  );

  $out_description = t("Specify pages by using their internal drupal paths. Enter one path per line. The '*' character is a wildcard. Example paths are %node-edit for the node edit page and %node-revisions for the node revisions page.", array('%node-edit' => 'node/*/edit', '%node-revisions' => 'node/*/revisions'));
  $in_description = t("Specify pages by using their aliased paths. Enter one path per line. The '*' character is a wildcard. Example paths are %node-edit for the node edit page and %node-revisions for the node revisions page.", array('%node-edit' => 'content/node-title/edit', '%node-revisions' => 'content/node-title/revisions'));

  $form['filter'] = array(
    '#type' => 'fieldset',
    '#title' => t('URL filtering'),
    '#description' => t('For more control over when subpathauto applies subpath aliasing, you can use these whitelist and blacklist filters to include or exclude paths in/from the rewrite process.'),
  );

  $form['filter']['outbound'] = array(
    '#type' => 'fieldset',
    '#title' => t('Outbound subpath filters'),
    '#description' => t('The outbound filter controls which links to internal drupal paths are aliased. The blacklist takes precedence will be applied first followed by the whitelist.'),
  );

  $form['filter']['outbound']['subpathauto_outbound_whitelist'] = array(
    '#type' => 'textarea',
    '#title' => t('Whitelist'),
    '#default_value' => variable_get('subpathauto_outbound_whitelist', ''),
    '#description' => $out_description,
  );

  $form['filter']['outbound']['subpathauto_outbound_blacklist'] = array(
    '#type' => 'textarea',
    '#title' => t('Blacklist'),
    '#default_value' => variable_get('subpathauto_outbound_blacklist', ''),
    '#description' => $out_description,
  );

  $inbound_whitelist = variable_get('subpathauto_inbound_whitelist', '');
  $inbound_blacklist = variable_get('subpathauto_inbound_blacklist', '');

  $form['filter']['inbound'] = array(
    '#type' => 'fieldset',
    '#title' => t('Inbound subpath filters'),
    '#description' => t('The inbound filter controls which aliases should be converted to internal drupal paths. The main reason for using filters here is to improve performance by avoiding lookups on every path. Being overzealous here could cause many 404 errors on your site if its not allowed to process valid subpaths. The blacklist takes precedence and will be applied first followed by the whitelist.'),
    '#collapsible' => TRUE,
    '#collapsed' => empty($inbound_whitelist) && empty($inbound_blacklist),
  );

  $form['filter']['inbound']['subpathauto_inbound_whitelist'] = array(
    '#type' => 'textarea',
    '#title' => t('Whitelist'),
    '#default_value' => $inbound_whitelist,
    '#description' => $in_description,
  );

  $form['filter']['inbound']['subpathauto_inbound_blacklist'] = array(
    '#type' => 'textarea',
    '#title' => t('Blacklist'),
    '#default_value' => $inbound_blacklist,
    '#description' => $in_description,
  );

  return system_settings_form($form);
}
