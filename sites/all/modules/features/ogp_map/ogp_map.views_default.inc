<?php
/**
 * @file
 * ogp_map.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function ogp_map_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'ogp_countries';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'OGP Countries';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Participating Countries';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'responsive_grid';
  $handler->display->display_options['style_options']['columns'] = '6';
  $handler->display->display_options['style_options']['alignment'] = 'vertical';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Field: Title */
  $handler->display->display_options['fields']['title_field']['id'] = 'title_field';
  $handler->display->display_options['fields']['title_field']['table'] = 'field_data_title_field';
  $handler->display->display_options['fields']['title_field']['field'] = 'title_field';
  $handler->display->display_options['fields']['title_field']['label'] = '';
  $handler->display->display_options['fields']['title_field']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title_field']['link_to_entity'] = 1;
  /* Sort criterion: Content revision: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node_revision';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'country_page' => 'country_page',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page_1');
  $handler->display->display_options['path'] = 'countries';
  $handler->display->display_options['menu']['type'] = 'normal';
  $handler->display->display_options['menu']['title'] = 'Countries';
  $handler->display->display_options['menu']['weight'] = '0';
  $handler->display->display_options['menu']['name'] = 'main-menu';
  $handler->display->display_options['menu']['context'] = 0;
  $handler->display->display_options['menu']['context_only_inline'] = 0;
  $export['ogp_countries'] = $view;

  $view = new view();
  $view->name = 'ogp_map_admin';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Administer map';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Administer map';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['access']['perm'] = 'administer nodes';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Header: Global: Unfiltered text */
  $handler->display->display_options['header']['area_text_custom']['id'] = 'area_text_custom';
  $handler->display->display_options['header']['area_text_custom']['table'] = 'views';
  $handler->display->display_options['header']['area_text_custom']['field'] = 'area_text_custom';
  $handler->display->display_options['header']['area_text_custom']['empty'] = TRUE;
  $handler->display->display_options['header']['area_text_custom']['content'] = '<h2>Steering Committee</h2>
<p><a href="/node/add/ogp-steering-committee">Add new</a></p>';
  /* Field: Content: Edit link */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['label'] = '';
  $handler->display->display_options['fields']['edit_node']['exclude'] = TRUE;
  $handler->display->display_options['fields']['edit_node']['element_label_colon'] = FALSE;
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_ogp_sc_country']['id'] = 'field_ogp_sc_country';
  $handler->display->display_options['fields']['field_ogp_sc_country']['table'] = 'field_data_field_ogp_sc_country';
  $handler->display->display_options['fields']['field_ogp_sc_country']['field'] = 'field_ogp_sc_country';
  $handler->display->display_options['fields']['field_ogp_sc_country']['label'] = '';
  $handler->display->display_options['fields']['field_ogp_sc_country']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_ogp_sc_country']['alter']['text'] = '[field_ogp_sc_country] - [edit_node]';
  $handler->display->display_options['fields']['field_ogp_sc_country']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_ogp_sc_country']['settings'] = array(
    'link' => 0,
  );
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'ogp_steering_committee' => 'ogp_steering_committee',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/content/ogp-map';
  $handler->display->display_options['menu']['type'] = 'normal';
  $handler->display->display_options['menu']['title'] = 'Administer map';
  $handler->display->display_options['menu']['weight'] = '0';
  $handler->display->display_options['menu']['name'] = 'management';
  $handler->display->display_options['menu']['context'] = 0;
  $handler->display->display_options['menu']['context_only_inline'] = 0;

  /* Display: Attachment */
  $handler = $view->new_display('attachment', 'Attachment', 'attachment_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['title'] = 'Action Plan Cycles ';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '0';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['header'] = FALSE;
  /* Header: Global: Unfiltered text */
  $handler->display->display_options['header']['area_text_custom']['id'] = 'area_text_custom';
  $handler->display->display_options['header']['area_text_custom']['table'] = 'views';
  $handler->display->display_options['header']['area_text_custom']['field'] = 'area_text_custom';
  $handler->display->display_options['header']['area_text_custom']['empty'] = TRUE;
  $handler->display->display_options['header']['area_text_custom']['content'] = '<h2>Action Plan Cycles</h2>
<p><a href="/node/add/ogp-action-plan-cycles">Add new</a></p>';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Edit link */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['label'] = '';
  $handler->display->display_options['fields']['edit_node']['exclude'] = TRUE;
  $handler->display->display_options['fields']['edit_node']['element_label_colon'] = FALSE;
  /* Field: Content: Number of action plans developed */
  $handler->display->display_options['fields']['field_apc_ap_developed']['id'] = 'field_apc_ap_developed';
  $handler->display->display_options['fields']['field_apc_ap_developed']['table'] = 'field_data_field_apc_ap_developed';
  $handler->display->display_options['fields']['field_apc_ap_developed']['field'] = 'field_apc_ap_developed';
  $handler->display->display_options['fields']['field_apc_ap_developed']['label'] = '';
  $handler->display->display_options['fields']['field_apc_ap_developed']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_apc_ap_developed']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_apc_ap_developed']['empty'] = '0';
  $handler->display->display_options['fields']['field_apc_ap_developed']['hide_alter_empty'] = FALSE;
  $handler->display->display_options['fields']['field_apc_ap_developed']['type'] = 'number_unformatted';
  $handler->display->display_options['fields']['field_apc_ap_developed']['settings'] = array(
    'thousand_separator' => '',
    'prefix_suffix' => 0,
  );
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_ogp_sc_country']['id'] = 'field_ogp_sc_country';
  $handler->display->display_options['fields']['field_ogp_sc_country']['table'] = 'field_data_field_ogp_sc_country';
  $handler->display->display_options['fields']['field_ogp_sc_country']['field'] = 'field_ogp_sc_country';
  $handler->display->display_options['fields']['field_ogp_sc_country']['label'] = '';
  $handler->display->display_options['fields']['field_ogp_sc_country']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_ogp_sc_country']['alter']['text'] = '[field_ogp_sc_country]: [field_apc_ap_developed] - [edit_node]';
  $handler->display->display_options['fields']['field_ogp_sc_country']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_ogp_sc_country']['settings'] = array(
    'link' => 0,
  );
  $handler->display->display_options['defaults']['sorts'] = FALSE;
  /* Sort criterion: Content: Number of action plans developed (field_apc_ap_developed) */
  $handler->display->display_options['sorts']['field_apc_ap_developed_value']['id'] = 'field_apc_ap_developed_value';
  $handler->display->display_options['sorts']['field_apc_ap_developed_value']['table'] = 'field_data_field_apc_ap_developed';
  $handler->display->display_options['sorts']['field_apc_ap_developed_value']['field'] = 'field_apc_ap_developed_value';
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'ogp_action_plan_cycles' => 'ogp_action_plan_cycles',
  );
  $handler->display->display_options['displays'] = array(
    'page' => 'page',
    'default' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';
  $export['ogp_map_admin'] = $view;

  $view = new view();
  $view->name = 'ogp_map_countries';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'OGP Map Countries';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['query']['options']['disable_sql_rewrite'] = TRUE;
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country']['id'] = 'field_country';
  $handler->display->display_options['fields']['field_country']['table'] = 'field_data_field_country';
  $handler->display->display_options['fields']['field_country']['field'] = 'field_country';
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country_1']['id'] = 'field_country_1';
  $handler->display->display_options['fields']['field_country_1']['table'] = 'field_data_field_country';
  $handler->display->display_options['fields']['field_country_1']['field'] = 'field_country';
  $handler->display->display_options['fields']['field_country_1']['label'] = 'Country iso2';
  $handler->display->display_options['fields']['field_country_1']['type'] = 'country_alpha_2';
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country_2']['id'] = 'field_country_2';
  $handler->display->display_options['fields']['field_country_2']['table'] = 'field_data_field_country';
  $handler->display->display_options['fields']['field_country_2']['field'] = 'field_country';
  $handler->display->display_options['fields']['field_country_2']['label'] = 'Country official';
  $handler->display->display_options['fields']['field_country_2']['type'] = 'country_official';
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  /* Field: Content: Member since */
  $handler->display->display_options['fields']['field_member_since']['id'] = 'field_member_since';
  $handler->display->display_options['fields']['field_member_since']['table'] = 'field_data_field_member_since';
  $handler->display->display_options['fields']['field_member_since']['field'] = 'field_member_since';
  $handler->display->display_options['fields']['field_member_since']['type'] = 'date_plain';
  $handler->display->display_options['fields']['field_member_since']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'country_page' => 'country_page',
  );

  /* Display: Steering Committee */
  $handler = $view->new_display('block', 'Steering Committee', 'block_1');
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_ogp_sc_country_node']['id'] = 'reverse_field_ogp_sc_country_node';
  $handler->display->display_options['relationships']['reverse_field_ogp_sc_country_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_ogp_sc_country_node']['field'] = 'reverse_field_ogp_sc_country_node';
  $handler->display->display_options['relationships']['reverse_field_ogp_sc_country_node']['label'] = 'ogp_sc_country';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country']['id'] = 'field_country';
  $handler->display->display_options['fields']['field_country']['table'] = 'field_data_field_country';
  $handler->display->display_options['fields']['field_country']['field'] = 'field_country';
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country_1']['id'] = 'field_country_1';
  $handler->display->display_options['fields']['field_country_1']['table'] = 'field_data_field_country';
  $handler->display->display_options['fields']['field_country_1']['field'] = 'field_country';
  $handler->display->display_options['fields']['field_country_1']['label'] = 'Country iso2';
  $handler->display->display_options['fields']['field_country_1']['type'] = 'country_alpha_2';
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country_2']['id'] = 'field_country_2';
  $handler->display->display_options['fields']['field_country_2']['table'] = 'field_data_field_country';
  $handler->display->display_options['fields']['field_country_2']['field'] = 'field_country';
  $handler->display->display_options['fields']['field_country_2']['label'] = 'Country official';
  $handler->display->display_options['fields']['field_country_2']['type'] = 'country_official';
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  /* Field: Content: Member since */
  $handler->display->display_options['fields']['field_member_since']['id'] = 'field_member_since';
  $handler->display->display_options['fields']['field_member_since']['table'] = 'field_data_field_member_since';
  $handler->display->display_options['fields']['field_member_since']['field'] = 'field_member_since';
  $handler->display->display_options['fields']['field_member_since']['type'] = 'date_plain';
  $handler->display->display_options['fields']['field_member_since']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_ogp_sc_country']['id'] = 'field_ogp_sc_country';
  $handler->display->display_options['fields']['field_ogp_sc_country']['table'] = 'field_data_field_ogp_sc_country';
  $handler->display->display_options['fields']['field_ogp_sc_country']['field'] = 'field_ogp_sc_country';
  $handler->display->display_options['fields']['field_ogp_sc_country']['relationship'] = 'reverse_field_ogp_sc_country_node';
  $handler->display->display_options['fields']['field_ogp_sc_country']['label'] = 'Steering Committee';
  $handler->display->display_options['fields']['field_ogp_sc_country']['alter']['text'] = '1';
  $handler->display->display_options['fields']['field_ogp_sc_country']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_ogp_sc_country']['empty'] = '0';
  $handler->display->display_options['fields']['field_ogp_sc_country']['hide_alter_empty'] = FALSE;
  $handler->display->display_options['fields']['field_ogp_sc_country']['type'] = 'entityreference_entity_id';
  $handler->display->display_options['fields']['field_ogp_sc_country']['settings'] = array(
    'link' => 0,
  );
  /* Field: Content: Type */
  $handler->display->display_options['fields']['type']['id'] = 'type';
  $handler->display->display_options['fields']['type']['table'] = 'node';
  $handler->display->display_options['fields']['type']['field'] = 'type';
  $handler->display->display_options['fields']['type']['relationship'] = 'reverse_field_ogp_sc_country_node';

  /* Display: Action Plan Cycles */
  $handler = $view->new_display('block', 'Action Plan Cycles', 'block_2');
  $handler->display->display_options['defaults']['relationships'] = FALSE;
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_ogp_sc_country_node']['id'] = 'reverse_field_ogp_sc_country_node';
  $handler->display->display_options['relationships']['reverse_field_ogp_sc_country_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_ogp_sc_country_node']['field'] = 'reverse_field_ogp_sc_country_node';
  $handler->display->display_options['relationships']['reverse_field_ogp_sc_country_node']['label'] = 'ogp_sc_country';
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country']['id'] = 'field_country';
  $handler->display->display_options['fields']['field_country']['table'] = 'field_data_field_country';
  $handler->display->display_options['fields']['field_country']['field'] = 'field_country';
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country_1']['id'] = 'field_country_1';
  $handler->display->display_options['fields']['field_country_1']['table'] = 'field_data_field_country';
  $handler->display->display_options['fields']['field_country_1']['field'] = 'field_country';
  $handler->display->display_options['fields']['field_country_1']['label'] = 'Country iso2';
  $handler->display->display_options['fields']['field_country_1']['type'] = 'country_alpha_2';
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country_2']['id'] = 'field_country_2';
  $handler->display->display_options['fields']['field_country_2']['table'] = 'field_data_field_country';
  $handler->display->display_options['fields']['field_country_2']['field'] = 'field_country';
  $handler->display->display_options['fields']['field_country_2']['label'] = 'Country official';
  $handler->display->display_options['fields']['field_country_2']['type'] = 'country_official';
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  /* Field: Content: Member since */
  $handler->display->display_options['fields']['field_member_since']['id'] = 'field_member_since';
  $handler->display->display_options['fields']['field_member_since']['table'] = 'field_data_field_member_since';
  $handler->display->display_options['fields']['field_member_since']['field'] = 'field_member_since';
  $handler->display->display_options['fields']['field_member_since']['type'] = 'date_plain';
  $handler->display->display_options['fields']['field_member_since']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  /* Field: Content: Number of action plans developed */
  $handler->display->display_options['fields']['field_apc_ap_developed']['id'] = 'field_apc_ap_developed';
  $handler->display->display_options['fields']['field_apc_ap_developed']['table'] = 'field_data_field_apc_ap_developed';
  $handler->display->display_options['fields']['field_apc_ap_developed']['field'] = 'field_apc_ap_developed';
  $handler->display->display_options['fields']['field_apc_ap_developed']['relationship'] = 'reverse_field_ogp_sc_country_node';
  $handler->display->display_options['fields']['field_apc_ap_developed']['empty'] = '0';
  $handler->display->display_options['fields']['field_apc_ap_developed']['type'] = 'number_unformatted';
  $handler->display->display_options['fields']['field_apc_ap_developed']['settings'] = array(
    'thousand_separator' => '',
    'prefix_suffix' => 0,
  );
  /* Field: Content: Type */
  $handler->display->display_options['fields']['type']['id'] = 'type';
  $handler->display->display_options['fields']['type']['table'] = 'node';
  $handler->display->display_options['fields']['type']['field'] = 'type';
  $handler->display->display_options['fields']['type']['relationship'] = 'reverse_field_ogp_sc_country_node';
  $export['ogp_map_countries'] = $view;

  return $export;
}
