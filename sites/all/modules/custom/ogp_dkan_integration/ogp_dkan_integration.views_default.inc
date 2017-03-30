<?php
/**
 * @file
 * ogp_dkan_integration.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function ogp_dkan_integration_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'ogp_datasets';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'OGP Datasets';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'OGP Datasets';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['group_by'] = TRUE;
  $handler->display->display_options['access']['type'] = 'role';
  $handler->display->display_options['access']['role'] = array(
    3 => '3',
    7 => '7',
  );
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['reset_button'] = TRUE;
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '20';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'title' => 'title',
    'nid' => 'nid',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'title' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'nid' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Header: Global: Result summary */
  $handler->display->display_options['header']['result']['id'] = 'result';
  $handler->display->display_options['header']['result']['table'] = 'views';
  $handler->display->display_options['header']['result']['field'] = 'result';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_resources_target_id']['id'] = 'field_resources_target_id';
  $handler->display->display_options['relationships']['field_resources_target_id']['table'] = 'field_data_field_resources';
  $handler->display->display_options['relationships']['field_resources_target_id']['field'] = 'field_resources_target_id';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = 'Dataset';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: COUNT(Content: Nid) */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['relationship'] = 'field_resources_target_id';
  $handler->display->display_options['fields']['nid']['group_type'] = 'count';
  $handler->display->display_options['fields']['nid']['label'] = '# of Resources';
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
    'dataset' => 'dataset',
  );
  /* Filter criterion: Content: Resources (field_resources) */
  $handler->display->display_options['filters']['field_resources_target_id']['id'] = 'field_resources_target_id';
  $handler->display->display_options['filters']['field_resources_target_id']['table'] = 'field_data_field_resources';
  $handler->display->display_options['filters']['field_resources_target_id']['field'] = 'field_resources_target_id';
  $handler->display->display_options['filters']['field_resources_target_id']['operator'] = 'not empty';
  $handler->display->display_options['filters']['field_resources_target_id']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_resources_target_id']['expose']['operator_id'] = 'field_resources_target_id_op';
  $handler->display->display_options['filters']['field_resources_target_id']['expose']['label'] = 'Resources';
  $handler->display->display_options['filters']['field_resources_target_id']['expose']['use_operator'] = TRUE;
  $handler->display->display_options['filters']['field_resources_target_id']['expose']['operator'] = 'field_resources_target_id_op';
  $handler->display->display_options['filters']['field_resources_target_id']['expose']['identifier'] = 'field_resources_target_id';
  $handler->display->display_options['filters']['field_resources_target_id']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    7 => 0,
    8 => 0,
    5 => 0,
    6 => 0,
    4 => 0,
    9 => 0,
  );
  /* Filter criterion: Content: Title */
  $handler->display->display_options['filters']['title']['id'] = 'title';
  $handler->display->display_options['filters']['title']['table'] = 'node';
  $handler->display->display_options['filters']['title']['field'] = 'title';
  $handler->display->display_options['filters']['title']['operator'] = 'contains';
  $handler->display->display_options['filters']['title']['exposed'] = TRUE;
  $handler->display->display_options['filters']['title']['expose']['operator_id'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['label'] = 'Search by Title';
  $handler->display->display_options['filters']['title']['expose']['operator'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['identifier'] = 'title';
  $handler->display->display_options['filters']['title']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    7 => 0,
    8 => 0,
    5 => 0,
    6 => 0,
    4 => 0,
    9 => 0,
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/dkan/datasets';
  $export['ogp_datasets'] = $view;

  $view = new view();
  $view->name = 'ogp_datasets_entity_reference';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'ogp_datasets_entity_reference';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
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
    'dataset' => 'dataset',
  );

  /* Display: Entity Reference */
  $handler = $view->new_display('entityreference', 'Entity Reference', 'entityreference_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'entityreference_style';
  $handler->display->display_options['style_options']['search_fields'] = array(
    'title' => 'title',
  );
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entityreference_fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $export['ogp_datasets_entity_reference'] = $view;

  $view = new view();
  $view->name = 'ogp_dkan_country_action_plans';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'OGP DKAN Country Action Plans';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Country Action Plans';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '5';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Sort criterion: Content: Period (field_period:from) */
  $handler->display->display_options['sorts']['field_period_from']['id'] = 'field_period_from';
  $handler->display->display_options['sorts']['field_period_from']['table'] = 'field_data_field_period';
  $handler->display->display_options['sorts']['field_period_from']['field'] = 'field_period_from';
  $handler->display->display_options['sorts']['field_period_from']['order'] = 'DESC';
  /* Contextual filter: Content: Country (field_country_ref) */
  $handler->display->display_options['arguments']['field_country_ref_target_id']['id'] = 'field_country_ref_target_id';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['table'] = 'field_data_field_country_ref';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['field'] = 'field_country_ref_target_id';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['default_argument_type'] = 'og_context';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['summary_options']['items_per_page'] = '25';
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
    'dataset' => 'dataset',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['ogp_dkan_country_action_plans'] = $view;

  $view = new view();
  $view->name = 'ogp_dkan_country_documents';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'OGP DKAN Country Documents';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Country Documents';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '0';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['grouping'] = array(
    0 => array(
      'field' => 'field_country_ref',
      'rendered' => 0,
      'rendered_strip' => 1,
    ),
    1 => array(
      'field' => 'field_period',
      'rendered' => 0,
      'rendered_strip' => 0,
    ),
  );
  $handler->display->display_options['style_options']['columns'] = array(
    'title' => 'title',
    'field_ogp_document_type' => 'field_ogp_document_type',
    'field_upload' => 'field_upload',
    'field_country_ref' => 'field_country_ref',
    'field_period' => 'field_period',
    'field_publication_date' => 'field_publication_date',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'title' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_ogp_document_type' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_upload' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_country_ref' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_period' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_publication_date' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* No results behavior: Global: Text area */
  $handler->display->display_options['empty']['area']['id'] = 'area';
  $handler->display->display_options['empty']['area']['table'] = 'views';
  $handler->display->display_options['empty']['area']['field'] = 'area';
  $handler->display->display_options['empty']['area']['empty'] = TRUE;
  $handler->display->display_options['empty']['area']['content'] = 'No documents have been submitted at this time.';
  $handler->display->display_options['empty']['area']['format'] = 'filtered_html';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['id'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['table'] = 'field_data_field_dataset_ref';
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['field'] = 'field_dataset_ref_target_id';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: ogp_document_type */
  $handler->display->display_options['fields']['field_ogp_document_type']['id'] = 'field_ogp_document_type';
  $handler->display->display_options['fields']['field_ogp_document_type']['table'] = 'field_data_field_ogp_document_type';
  $handler->display->display_options['fields']['field_ogp_document_type']['field'] = 'field_ogp_document_type';
  $handler->display->display_options['fields']['field_ogp_document_type']['label'] = 'Document Type';
  $handler->display->display_options['fields']['field_ogp_document_type']['type'] = 'taxonomy_term_reference_plain';
  /* Field: Content: Upload */
  $handler->display->display_options['fields']['field_upload']['id'] = 'field_upload';
  $handler->display->display_options['fields']['field_upload']['table'] = 'field_data_field_upload';
  $handler->display->display_options['fields']['field_upload']['field'] = 'field_upload';
  $handler->display->display_options['fields']['field_upload']['label'] = '';
  $handler->display->display_options['fields']['field_upload']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_upload']['alter']['text'] = '[title]';
  $handler->display->display_options['fields']['field_upload']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_upload']['alter']['path'] = '[field_upload]';
  $handler->display->display_options['fields']['field_upload']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_upload']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_upload']['type'] = 'recline_url_formatter';
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country_ref']['id'] = 'field_country_ref';
  $handler->display->display_options['fields']['field_country_ref']['table'] = 'field_data_field_country_ref';
  $handler->display->display_options['fields']['field_country_ref']['field'] = 'field_country_ref';
  $handler->display->display_options['fields']['field_country_ref']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['fields']['field_country_ref']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_country_ref']['settings'] = array(
    'link' => 0,
  );
  $handler->display->display_options['fields']['field_country_ref']['delta_offset'] = '0';
  /* Field: Content: Period */
  $handler->display->display_options['fields']['field_period']['id'] = 'field_period';
  $handler->display->display_options['fields']['field_period']['table'] = 'field_data_field_period';
  $handler->display->display_options['fields']['field_period']['field'] = 'field_period';
  $handler->display->display_options['fields']['field_period']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['fields']['field_period']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_period']['click_sort_column'] = 'from';
  $handler->display->display_options['fields']['field_period']['type'] = 'range_integer_sprintf';
  $handler->display->display_options['fields']['field_period']['settings'] = array(
    'format_string' => '%d',
    'range_separator' => '-',
    'range_combine' => 0,
    'from_prefix_suffix' => 1,
    'to_prefix_suffix' => 1,
    'field_prefix_suffix' => 1,
  );
  /* Field: Content: Publication Date */
  $handler->display->display_options['fields']['field_publication_date']['id'] = 'field_publication_date';
  $handler->display->display_options['fields']['field_publication_date']['table'] = 'field_data_field_publication_date';
  $handler->display->display_options['fields']['field_publication_date']['field'] = 'field_publication_date';
  $handler->display->display_options['fields']['field_publication_date']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_publication_date']['type'] = 'date_plain';
  $handler->display->display_options['fields']['field_publication_date']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['fields']['nid']['label'] = '';
  $handler->display->display_options['fields']['nid']['element_label_colon'] = FALSE;
  /* Field: Content: Body */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['fields']['body']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Country (field_country_ref) */
  $handler->display->display_options['sorts']['field_country_ref_target_id']['id'] = 'field_country_ref_target_id';
  $handler->display->display_options['sorts']['field_country_ref_target_id']['table'] = 'field_data_field_country_ref';
  $handler->display->display_options['sorts']['field_country_ref_target_id']['field'] = 'field_country_ref_target_id';
  $handler->display->display_options['sorts']['field_country_ref_target_id']['relationship'] = 'field_dataset_ref_target_id';
  /* Sort criterion: Content: ogp_document_type (field_ogp_document_type) */
  $handler->display->display_options['sorts']['field_ogp_document_type_tid']['id'] = 'field_ogp_document_type_tid';
  $handler->display->display_options['sorts']['field_ogp_document_type_tid']['table'] = 'field_data_field_ogp_document_type';
  $handler->display->display_options['sorts']['field_ogp_document_type_tid']['field'] = 'field_ogp_document_type_tid';
  /* Sort criterion: Content: Period (field_period:from) */
  $handler->display->display_options['sorts']['field_period_from']['id'] = 'field_period_from';
  $handler->display->display_options['sorts']['field_period_from']['table'] = 'field_data_field_period';
  $handler->display->display_options['sorts']['field_period_from']['field'] = 'field_period_from';
  $handler->display->display_options['sorts']['field_period_from']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['sorts']['field_period_from']['order'] = 'DESC';
  /* Sort criterion: Content: Updated date */
  $handler->display->display_options['sorts']['changed']['id'] = 'changed';
  $handler->display->display_options['sorts']['changed']['table'] = 'node';
  $handler->display->display_options['sorts']['changed']['field'] = 'changed';
  $handler->display->display_options['sorts']['changed']['order'] = 'DESC';
  /* Contextual filter: Content: Country (field_country_ref) */
  $handler->display->display_options['arguments']['field_country_ref_target_id']['id'] = 'field_country_ref_target_id';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['table'] = 'field_data_field_country_ref';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['field'] = 'field_country_ref_target_id';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['default_argument_type'] = 'og_context';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['summary_options']['items_per_page'] = '25';
  /* Contextual filter: Content: Dataset (field_dataset_ref) */
  $handler->display->display_options['arguments']['field_dataset_ref_target_id']['id'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['arguments']['field_dataset_ref_target_id']['table'] = 'field_data_field_dataset_ref';
  $handler->display->display_options['arguments']['field_dataset_ref_target_id']['field'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['arguments']['field_dataset_ref_target_id']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_dataset_ref_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_dataset_ref_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_dataset_ref_target_id']['summary_options']['items_per_page'] = '25';
  /* Contextual filter: Content: ogp_document_type (field_ogp_document_type) */
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['id'] = 'field_ogp_document_type_tid';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['table'] = 'field_data_field_ogp_document_type';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['field'] = 'field_ogp_document_type_tid';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['summary_options']['items_per_page'] = '25';
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
    'resource' => 'resource',
  );
  /* Filter criterion: Content: Country (field_country_ref) */
  $handler->display->display_options['filters']['field_country_ref_target_id']['id'] = 'field_country_ref_target_id';
  $handler->display->display_options['filters']['field_country_ref_target_id']['table'] = 'field_data_field_country_ref';
  $handler->display->display_options['filters']['field_country_ref_target_id']['field'] = 'field_country_ref_target_id';
  $handler->display->display_options['filters']['field_country_ref_target_id']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['filters']['field_country_ref_target_id']['operator'] = 'not empty';
  /* Filter criterion: Content: Period (field_period:from) */
  $handler->display->display_options['filters']['field_period_from']['id'] = 'field_period_from';
  $handler->display->display_options['filters']['field_period_from']['table'] = 'field_data_field_period';
  $handler->display->display_options['filters']['field_period_from']['field'] = 'field_period_from';
  $handler->display->display_options['filters']['field_period_from']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['filters']['field_period_from']['operator'] = 'not empty';
  /* Filter criterion: Content: Period (field_period:to) */
  $handler->display->display_options['filters']['field_period_to']['id'] = 'field_period_to';
  $handler->display->display_options['filters']['field_period_to']['table'] = 'field_data_field_period';
  $handler->display->display_options['filters']['field_period_to']['field'] = 'field_period_to';
  $handler->display->display_options['filters']['field_period_to']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['filters']['field_period_to']['operator'] = 'not empty';

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['ogp_dkan_country_documents'] = $view;

  $view = new view();
  $view->name = 'ogp_dkan_irm_page_report_comments_by_country';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'OGP DKAN IRM Page Report Comments by Country';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'OGP DKAN IRM Page Report Comments by Country';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '0';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_report_ref_target_id']['id'] = 'field_report_ref_target_id';
  $handler->display->display_options['relationships']['field_report_ref_target_id']['table'] = 'field_data_field_report_ref';
  $handler->display->display_options['relationships']['field_report_ref_target_id']['field'] = 'field_report_ref_target_id';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['id'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['table'] = 'field_data_field_dataset_ref';
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['field'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['relationship'] = 'field_report_ref_target_id';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_country_ref_target_id']['id'] = 'field_country_ref_target_id';
  $handler->display->display_options['relationships']['field_country_ref_target_id']['table'] = 'field_data_field_country_ref';
  $handler->display->display_options['relationships']['field_country_ref_target_id']['field'] = 'field_country_ref_target_id';
  $handler->display->display_options['relationships']['field_country_ref_target_id']['relationship'] = 'field_dataset_ref_target_id';
  /* Relationship: Content: Country (field_country) */
  $handler->display->display_options['relationships']['field_country_iso2']['id'] = 'field_country_iso2';
  $handler->display->display_options['relationships']['field_country_iso2']['table'] = 'field_data_field_country';
  $handler->display->display_options['relationships']['field_country_iso2']['field'] = 'field_country_iso2';
  $handler->display->display_options['relationships']['field_country_iso2']['relationship'] = 'field_country_ref_target_id';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'field_country_ref_target_id';
  $handler->display->display_options['fields']['title_1']['label'] = 'Country';
  $handler->display->display_options['fields']['title_1']['link_to_node'] = FALSE;
  /* Field: Content: Period */
  $handler->display->display_options['fields']['field_period']['id'] = 'field_period';
  $handler->display->display_options['fields']['field_period']['table'] = 'field_data_field_period';
  $handler->display->display_options['fields']['field_period']['field'] = 'field_period';
  $handler->display->display_options['fields']['field_period']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['fields']['field_period']['click_sort_column'] = 'from';
  $handler->display->display_options['fields']['field_period']['type'] = 'range_integer_sprintf';
  $handler->display->display_options['fields']['field_period']['settings'] = array(
    'format_string' => '%d',
    'range_separator' => '-',
    'range_combine' => 0,
    'from_prefix_suffix' => 1,
    'to_prefix_suffix' => 1,
    'field_prefix_suffix' => 1,
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Nid */
  $handler->display->display_options['fields']['nid']['id'] = 'nid';
  $handler->display->display_options['fields']['nid']['table'] = 'node';
  $handler->display->display_options['fields']['nid']['field'] = 'nid';
  $handler->display->display_options['fields']['nid']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['fields']['nid']['label'] = 'Action Plan NID';
  /* Field: Countries: ISO2 */
  $handler->display->display_options['fields']['iso2']['id'] = 'iso2';
  $handler->display->display_options['fields']['iso2']['table'] = 'countries_country';
  $handler->display->display_options['fields']['iso2']['field'] = 'iso2';
  $handler->display->display_options['fields']['iso2']['relationship'] = 'field_country_iso2';
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  $handler->display->display_options['sorts']['title']['relationship'] = 'field_country_ref_target_id';
  /* Sort criterion: Content: Period (field_period:from) */
  $handler->display->display_options['sorts']['field_period_from']['id'] = 'field_period_from';
  $handler->display->display_options['sorts']['field_period_from']['table'] = 'field_data_field_period';
  $handler->display->display_options['sorts']['field_period_from']['field'] = 'field_period_from';
  $handler->display->display_options['sorts']['field_period_from']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['sorts']['field_period_from']['order'] = 'DESC';
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
    'report_comments' => 'report_comments',
  );
  /* Filter criterion: Content: Report (field_report_ref) */
  $handler->display->display_options['filters']['field_report_ref_target_id']['id'] = 'field_report_ref_target_id';
  $handler->display->display_options['filters']['field_report_ref_target_id']['table'] = 'field_data_field_report_ref';
  $handler->display->display_options['filters']['field_report_ref_target_id']['field'] = 'field_report_ref_target_id';
  $handler->display->display_options['filters']['field_report_ref_target_id']['operator'] = 'not empty';

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['ogp_dkan_irm_page_report_comments_by_country'] = $view;

  $view = new view();
  $view->name = 'ogp_dkan_irm_page_reports_by_country';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'OGP DKAN IRM Page reports by Country';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'OGP ';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '0';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['id'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['table'] = 'field_data_field_dataset_ref';
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['field'] = 'field_dataset_ref_target_id';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_country_ref_target_id']['id'] = 'field_country_ref_target_id';
  $handler->display->display_options['relationships']['field_country_ref_target_id']['table'] = 'field_data_field_country_ref';
  $handler->display->display_options['relationships']['field_country_ref_target_id']['field'] = 'field_country_ref_target_id';
  $handler->display->display_options['relationships']['field_country_ref_target_id']['relationship'] = 'field_dataset_ref_target_id';
  /* Relationship: Content: Country (field_country) */
  $handler->display->display_options['relationships']['field_country_iso2']['id'] = 'field_country_iso2';
  $handler->display->display_options['relationships']['field_country_iso2']['table'] = 'field_data_field_country';
  $handler->display->display_options['relationships']['field_country_iso2']['field'] = 'field_country_iso2';
  $handler->display->display_options['relationships']['field_country_iso2']['relationship'] = 'field_country_ref_target_id';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_2']['id'] = 'title_2';
  $handler->display->display_options['fields']['title_2']['table'] = 'node';
  $handler->display->display_options['fields']['title_2']['field'] = 'title';
  $handler->display->display_options['fields']['title_2']['relationship'] = 'field_country_ref_target_id';
  $handler->display->display_options['fields']['title_2']['label'] = 'Country';
  $handler->display->display_options['fields']['title_2']['link_to_node'] = FALSE;
  /* Field: Content: Period */
  $handler->display->display_options['fields']['field_period']['id'] = 'field_period';
  $handler->display->display_options['fields']['field_period']['table'] = 'field_data_field_period';
  $handler->display->display_options['fields']['field_period']['field'] = 'field_period';
  $handler->display->display_options['fields']['field_period']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['fields']['field_period']['click_sort_column'] = 'from';
  $handler->display->display_options['fields']['field_period']['type'] = 'range_integer_sprintf';
  $handler->display->display_options['fields']['field_period']['settings'] = array(
    'format_string' => '%d',
    'range_separator' => '-',
    'range_combine' => 0,
    'from_prefix_suffix' => 1,
    'to_prefix_suffix' => 1,
    'field_prefix_suffix' => 1,
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: ogp_document_tags */
  $handler->display->display_options['fields']['field_ogp_document_tags']['id'] = 'field_ogp_document_tags';
  $handler->display->display_options['fields']['field_ogp_document_tags']['table'] = 'field_data_field_ogp_document_tags';
  $handler->display->display_options['fields']['field_ogp_document_tags']['field'] = 'field_ogp_document_tags';
  $handler->display->display_options['fields']['field_ogp_document_tags']['label'] = 'Tags';
  $handler->display->display_options['fields']['field_ogp_document_tags']['delta_offset'] = '0';
  /* Field: Content: Upload */
  $handler->display->display_options['fields']['field_upload']['id'] = 'field_upload';
  $handler->display->display_options['fields']['field_upload']['table'] = 'field_data_field_upload';
  $handler->display->display_options['fields']['field_upload']['field'] = 'field_upload';
  $handler->display->display_options['fields']['field_upload']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_upload']['type'] = 'recline_url_formatter';
  /* Field: Countries: ISO2 */
  $handler->display->display_options['fields']['iso2']['id'] = 'iso2';
  $handler->display->display_options['fields']['iso2']['table'] = 'countries_country';
  $handler->display->display_options['fields']['iso2']['field'] = 'iso2';
  $handler->display->display_options['fields']['iso2']['relationship'] = 'field_country_iso2';
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  $handler->display->display_options['sorts']['title']['relationship'] = 'field_country_ref_target_id';
  /* Sort criterion: Content: Period (field_period:from) */
  $handler->display->display_options['sorts']['field_period_from']['id'] = 'field_period_from';
  $handler->display->display_options['sorts']['field_period_from']['table'] = 'field_data_field_period';
  $handler->display->display_options['sorts']['field_period_from']['field'] = 'field_period_from';
  $handler->display->display_options['sorts']['field_period_from']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['sorts']['field_period_from']['order'] = 'DESC';
  /* Contextual filter: Content: ogp_document_type (field_ogp_document_type) */
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['id'] = 'field_ogp_document_type_tid';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['table'] = 'field_data_field_ogp_document_type';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['field'] = 'field_ogp_document_type_tid';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['summary_options']['items_per_page'] = '25';
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
    'resource' => 'resource',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['ogp_dkan_irm_page_reports_by_country'] = $view;

  $view = new view();
  $view->name = 'ogp_dkan_page_referenced_documents';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'OGP DKAN Page referenced documents';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Documents';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['id'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['table'] = 'field_data_field_dataset_ref';
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['field'] = 'field_dataset_ref_target_id';
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_page_documents_node']['id'] = 'reverse_field_page_documents_node';
  $handler->display->display_options['relationships']['reverse_field_page_documents_node']['table'] = 'node';
  $handler->display->display_options['relationships']['reverse_field_page_documents_node']['field'] = 'reverse_field_page_documents_node';
  $handler->display->display_options['relationships']['reverse_field_page_documents_node']['relationship'] = 'field_dataset_ref_target_id';
  /* Field: Content: Upload */
  $handler->display->display_options['fields']['field_upload']['id'] = 'field_upload';
  $handler->display->display_options['fields']['field_upload']['table'] = 'field_data_field_upload';
  $handler->display->display_options['fields']['field_upload']['field'] = 'field_upload';
  $handler->display->display_options['fields']['field_upload']['label'] = '';
  $handler->display->display_options['fields']['field_upload']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_upload']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_upload']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_upload']['type'] = 'recline_url_formatter';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['path'] = '[field_upload]';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['relationship'] = 'reverse_field_page_documents_node';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'raw';
  $handler->display->display_options['arguments']['nid']['default_argument_options']['index'] = '1';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
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
    'resource' => 'resource',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['ogp_dkan_page_referenced_documents'] = $view;

  $view = new view();
  $view->name = 'ogp_dkan_report_reference';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'OGP DKAN IRM Report Reference';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'OGP DKAN Report Reference';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '5';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['id'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['table'] = 'field_data_field_dataset_ref';
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['field'] = 'field_dataset_ref_target_id';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['fields']['title_1']['label'] = '';
  $handler->display->display_options['fields']['title_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title_1']['link_to_node'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['text'] = '[title] <small><strong>([title_1])</strong></small>';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: ogp_document_type (field_ogp_document_type) */
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['id'] = 'field_ogp_document_type_tid';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['table'] = 'field_data_field_ogp_document_type';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['field'] = 'field_ogp_document_type_tid';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_ogp_document_type_tid']['summary_options']['items_per_page'] = '25';
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
    'resource' => 'resource',
  );

  /* Display: Entity Reference */
  $handler = $view->new_display('entityreference', 'Entity Reference', 'entityreference_1');
  $handler->display->display_options['defaults']['title'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'entityreference_style';
  $handler->display->display_options['style_options']['search_fields'] = array(
    'title' => 'title',
    'title_1' => 'title_1',
  );
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'entityreference_fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;
  $export['ogp_dkan_report_reference'] = $view;

  $view = new view();
  $view->name = 'ogp_dkan_resources_search';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'search_api_index_ogp_documents';
  $view->human_name = 'OGP + DKAN Search';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'OGP Search';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['exposed_form']['options']['submit_button'] = 'Search';
  $handler->display->display_options['exposed_form']['options']['reset_button'] = TRUE;
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '10';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* No results behavior: Global: Text area */
  $handler->display->display_options['empty']['area']['id'] = 'area';
  $handler->display->display_options['empty']['area']['table'] = 'views';
  $handler->display->display_options['empty']['area']['field'] = 'area';
  $handler->display->display_options['empty']['area']['empty'] = TRUE;
  $handler->display->display_options['empty']['area']['content'] = 'Sorry. Nothing matched your search term.';
  $handler->display->display_options['empty']['area']['format'] = 'filtered_html';
  /* Relationship: Indexed Node: Authors */
  $handler->display->display_options['relationships']['field_blog_authors']['id'] = 'field_blog_authors';
  $handler->display->display_options['relationships']['field_blog_authors']['table'] = 'search_api_index_ogp_documents';
  $handler->display->display_options['relationships']['field_blog_authors']['field'] = 'field_blog_authors';
  /* Field: Indexed Node: Content type */
  $handler->display->display_options['fields']['type']['id'] = 'type';
  $handler->display->display_options['fields']['type']['table'] = 'search_api_index_ogp_documents';
  $handler->display->display_options['fields']['type']['field'] = 'type';
  $handler->display->display_options['fields']['type']['label'] = '';
  $handler->display->display_options['fields']['type']['exclude'] = TRUE;
  $handler->display->display_options['fields']['type']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['type']['link_to_entity'] = 0;
  $handler->display->display_options['fields']['type']['format_name'] = 1;
  /* Field: Indexed Node: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'search_api_index_ogp_documents';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['text'] = '[title] <small>[type]</small>';
  $handler->display->display_options['fields']['title']['element_type'] = 'h3';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_entity'] = 1;
  /* Field: Dataset » Country: Title (indexed) */
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_title']['id'] = 'field_dataset_ref_field_country_ref_title';
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_title']['table'] = 'search_api_index_ogp_documents';
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_title']['field'] = 'field_dataset_ref_field_country_ref_title';
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_title']['label'] = '';
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_title']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_title']['alter']['text'] = '<p>Belongs to [field_dataset_ref_field_period] [field_dataset_ref_field_country_ref_title] Action Plan</p>';
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_title']['link_to_entity'] = 0;
  /* Field: Dataset » Country: Country (indexed) */
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_field_country']['id'] = 'field_dataset_ref_field_country_ref_field_country';
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_field_country']['table'] = 'search_api_index_ogp_documents';
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_field_country']['field'] = 'field_dataset_ref_field_country_ref_field_country';
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_field_country']['label'] = '';
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_field_country']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_field_country']['link_to_entity'] = 0;
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_field_country']['display'] = 'view';
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_field_country']['view_mode'] = 'full';
  $handler->display->display_options['fields']['field_dataset_ref_field_country_ref_field_country']['bypass_access'] = 0;
  /* Field: Indexed Node: The main body text */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'search_api_index_ogp_documents';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['label'] = '';
  $handler->display->display_options['fields']['body']['alter']['strip_tags'] = TRUE;
  $handler->display->display_options['fields']['body']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['body']['type'] = 'text_summary_or_trimmed';
  $handler->display->display_options['fields']['body']['settings'] = array(
    'trim_length' => '200',
  );
  /* Field: Indexed Node: Authors */
  $handler->display->display_options['fields']['field_blog_authors']['id'] = 'field_blog_authors';
  $handler->display->display_options['fields']['field_blog_authors']['table'] = 'search_api_index_ogp_documents';
  $handler->display->display_options['fields']['field_blog_authors']['field'] = 'field_blog_authors';
  $handler->display->display_options['fields']['field_blog_authors']['label'] = '';
  $handler->display->display_options['fields']['field_blog_authors']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_blog_authors']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_blog_authors']['link_to_entity'] = 1;
  $handler->display->display_options['fields']['field_blog_authors']['view_mode'] = 'full';
  $handler->display->display_options['fields']['field_blog_authors']['bypass_access'] = 0;
  /* Filter criterion: Search: Fulltext search */
  $handler->display->display_options['filters']['search_api_views_fulltext']['id'] = 'search_api_views_fulltext';
  $handler->display->display_options['filters']['search_api_views_fulltext']['table'] = 'search_api_index_ogp_documents';
  $handler->display->display_options['filters']['search_api_views_fulltext']['field'] = 'search_api_views_fulltext';
  $handler->display->display_options['filters']['search_api_views_fulltext']['operator'] = 'OR';
  $handler->display->display_options['filters']['search_api_views_fulltext']['exposed'] = TRUE;
  $handler->display->display_options['filters']['search_api_views_fulltext']['expose']['operator_id'] = 'search_api_views_fulltext_op';
  $handler->display->display_options['filters']['search_api_views_fulltext']['expose']['label'] = 'Search';
  $handler->display->display_options['filters']['search_api_views_fulltext']['expose']['operator'] = 'search_api_views_fulltext_op';
  $handler->display->display_options['filters']['search_api_views_fulltext']['expose']['identifier'] = 'search_api_views_fulltext';
  $handler->display->display_options['filters']['search_api_views_fulltext']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    7 => 0,
    8 => 0,
    5 => 0,
    6 => 0,
    4 => 0,
    9 => 0,
  );
  $handler->display->display_options['filters']['search_api_views_fulltext']['mode'] = 'filter';
  /* Filter criterion: Indexed Node: Status */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'search_api_index_ogp_documents';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = array(
    1 => '1',
  );
  /* Filter criterion: Indexed Node: Content type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'search_api_index_ogp_documents';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'blog_post' => 'blog_post',
    'commitment' => 'commitment',
    'country_page' => 'country_page',
    'event' => 'event',
    'page' => 'page',
    'resource' => 'resource',
    'working_group' => 'working_group',
    'working_group_page' => 'working_group_page',
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['exposed_block'] = TRUE;
  $handler->display->display_options['path'] = 'browse';
  $export['ogp_dkan_resources_search'] = $view;

  return $export;
}
