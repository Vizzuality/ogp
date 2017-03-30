<?php
/**
 * @file
 * ogp_irm_report.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function ogp_irm_report_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'irm_page';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'IRM Page';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Download Reports';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['style_plugin'] = 'responsive_grid';
  $handler->display->display_options['style_options']['columns'] = '2';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* No results behavior: Global: Text area */
  $handler->display->display_options['empty']['area']['id'] = 'area';
  $handler->display->display_options['empty']['area']['table'] = 'views';
  $handler->display->display_options['empty']['area']['field'] = 'area';
  $handler->display->display_options['empty']['area']['empty'] = TRUE;
  $handler->display->display_options['empty']['area']['content'] = 'No Progress Reports available at this time.';
  $handler->display->display_options['empty']['area']['format'] = 'filtered_html';
  /* Relationship: OG membership: OG membership from Node */
  $handler->display->display_options['relationships']['og_membership_rel']['id'] = 'og_membership_rel';
  $handler->display->display_options['relationships']['og_membership_rel']['table'] = 'node';
  $handler->display->display_options['relationships']['og_membership_rel']['field'] = 'og_membership_rel';
  /* Relationship: OG membership: Group Node from OG membership */
  $handler->display->display_options['relationships']['og_membership_related_node_group']['id'] = 'og_membership_related_node_group';
  $handler->display->display_options['relationships']['og_membership_related_node_group']['table'] = 'og_membership';
  $handler->display->display_options['relationships']['og_membership_related_node_group']['field'] = 'og_membership_related_node_group';
  $handler->display->display_options['relationships']['og_membership_related_node_group']['relationship'] = 'og_membership_rel';
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country']['id'] = 'field_country';
  $handler->display->display_options['fields']['field_country']['table'] = 'field_data_field_country';
  $handler->display->display_options['fields']['field_country']['field'] = 'field_country';
  $handler->display->display_options['fields']['field_country']['relationship'] = 'og_membership_related_node_group';
  $handler->display->display_options['fields']['field_country']['label'] = '';
  $handler->display->display_options['fields']['field_country']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_country']['element_type'] = 'span';
  $handler->display->display_options['fields']['field_country']['element_label_type'] = 'span';
  $handler->display->display_options['fields']['field_country']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_country']['type'] = 'country_alpha_2';
  /* Field: Content: Country */
  $handler->display->display_options['fields']['og_group_ref']['id'] = 'og_group_ref';
  $handler->display->display_options['fields']['og_group_ref']['table'] = 'og_membership';
  $handler->display->display_options['fields']['og_group_ref']['field'] = 'og_group_ref';
  $handler->display->display_options['fields']['og_group_ref']['label'] = '';
  $handler->display->display_options['fields']['og_group_ref']['element_class'] = 'country-[field_country]';
  $handler->display->display_options['fields']['og_group_ref']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['og_group_ref']['settings'] = array(
    'link' => 1,
  );
  $handler->display->display_options['fields']['og_group_ref']['delta_offset'] = '0';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
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
    'irm_report' => 'irm_report',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block_1');

  /* Display: Page (with Page Title) */
  $handler = $view->new_display('page_with_page_title', 'Page (with Page Title)', 'page_with_page_title_1');
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country']['id'] = 'field_country';
  $handler->display->display_options['fields']['field_country']['table'] = 'field_data_field_country';
  $handler->display->display_options['fields']['field_country']['field'] = 'field_country';
  $handler->display->display_options['fields']['field_country']['relationship'] = 'og_membership_related_node_group';
  $handler->display->display_options['fields']['field_country']['label'] = '';
  $handler->display->display_options['fields']['field_country']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_country']['element_type'] = 'span';
  $handler->display->display_options['fields']['field_country']['element_label_type'] = 'span';
  $handler->display->display_options['fields']['field_country']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_country']['type'] = 'country_alpha_2';
  /* Field: Content: Country */
  $handler->display->display_options['fields']['og_group_ref']['id'] = 'og_group_ref';
  $handler->display->display_options['fields']['og_group_ref']['table'] = 'og_membership';
  $handler->display->display_options['fields']['og_group_ref']['field'] = 'og_group_ref';
  $handler->display->display_options['fields']['og_group_ref']['label'] = '';
  $handler->display->display_options['fields']['og_group_ref']['element_class'] = 'country-[field_country]';
  $handler->display->display_options['fields']['og_group_ref']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['og_group_ref']['settings'] = array(
    'link' => 1,
  );
  $handler->display->display_options['fields']['og_group_ref']['delta_offset'] = '0';
  /* Field: Content: PDF Version */
  $handler->display->display_options['fields']['field_pdf_version']['id'] = 'field_pdf_version';
  $handler->display->display_options['fields']['field_pdf_version']['table'] = 'field_data_field_pdf_version';
  $handler->display->display_options['fields']['field_pdf_version']['field'] = 'field_pdf_version';
  $handler->display->display_options['fields']['field_pdf_version']['label'] = '';
  $handler->display->display_options['fields']['field_pdf_version']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_pdf_version']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_pdf_version']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_pdf_version']['type'] = 'file_url_plain';
  $handler->display->display_options['fields']['field_pdf_version']['settings'] = array(
    'text' => '[file:name]',
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['text'] = 'Report';
  $handler->display->display_options['fields']['title']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['path'] = '[field_pdf_version]';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Name of the Button */
  $handler->display->display_options['fields']['field_name_of_the_button']['id'] = 'field_name_of_the_button';
  $handler->display->display_options['fields']['field_name_of_the_button']['table'] = 'field_data_field_name_of_the_button';
  $handler->display->display_options['fields']['field_name_of_the_button']['field'] = 'field_name_of_the_button';
  $handler->display->display_options['fields']['field_name_of_the_button']['label'] = '';
  $handler->display->display_options['fields']['field_name_of_the_button']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_name_of_the_button']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_name_of_the_button']['empty'] = 'Report';
  $handler->display->display_options['fields']['field_name_of_the_button']['type'] = 'text_plain';
  /* Field: Content: Progress Report in National Language */
  $handler->display->display_options['fields']['field_pdf_national']['id'] = 'field_pdf_national';
  $handler->display->display_options['fields']['field_pdf_national']['table'] = 'field_data_field_pdf_national';
  $handler->display->display_options['fields']['field_pdf_national']['field'] = 'field_pdf_national';
  $handler->display->display_options['fields']['field_pdf_national']['label'] = '';
  $handler->display->display_options['fields']['field_pdf_national']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_pdf_national']['alter']['text'] = '[field_name_of_the_button]';
  $handler->display->display_options['fields']['field_pdf_national']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_pdf_national']['alter']['path'] = '[field_pdf_national] ';
  $handler->display->display_options['fields']['field_pdf_national']['alter']['absolute'] = TRUE;
  $handler->display->display_options['fields']['field_pdf_national']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_pdf_national']['empty'] = '&nbsp;';
  $handler->display->display_options['fields']['field_pdf_national']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_pdf_national']['type'] = 'file_url_plain';
  $handler->display->display_options['fields']['field_pdf_national']['settings'] = array(
    'text' => 'Download [file:name]',
  );
  /* Field: Content: Progress Report in National Language Comments Page */
  $handler->display->display_options['fields']['field_report_comments_page']['id'] = 'field_report_comments_page';
  $handler->display->display_options['fields']['field_report_comments_page']['table'] = 'field_data_field_report_comments_page';
  $handler->display->display_options['fields']['field_report_comments_page']['field'] = 'field_report_comments_page';
  $handler->display->display_options['fields']['field_report_comments_page']['label'] = '';
  $handler->display->display_options['fields']['field_report_comments_page']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_report_comments_page']['alter']['text'] = 'Comment';
  $handler->display->display_options['fields']['field_report_comments_page']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_report_comments_page']['alter']['path'] = 'node/[field_report_comments_page-target_id]';
  $handler->display->display_options['fields']['field_report_comments_page']['alter']['absolute'] = TRUE;
  $handler->display->display_options['fields']['field_report_comments_page']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_report_comments_page']['empty'] = '&nbsp;';
  $handler->display->display_options['fields']['field_report_comments_page']['settings'] = array(
    'link' => 0,
  );
  $handler->display->display_options['path'] = 'independent-reporting-mechanism';
  $handler->display->display_options['menu']['type'] = 'normal';
  $handler->display->display_options['menu']['title'] = 'Independent Reporting Mechanism';
  $handler->display->display_options['menu']['weight'] = '0';
  $handler->display->display_options['menu']['name'] = 'main-menu';
  $handler->display->display_options['menu']['context'] = 0;
  $handler->display->display_options['menu']['context_only_inline'] = 0;
  $handler->display->display_options['page_title_pattern'] = 'Independent Reporting Mechanism';
  $export['irm_page'] = $view;

  $view = new view();
  $view->name = 'irm_reports_legacy';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'IRM Reports (legacy)';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Download Reports';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['style_plugin'] = 'responsive_grid';
  $handler->display->display_options['style_options']['columns'] = '2';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* No results behavior: Global: Text area */
  $handler->display->display_options['empty']['area']['id'] = 'area';
  $handler->display->display_options['empty']['area']['table'] = 'views';
  $handler->display->display_options['empty']['area']['field'] = 'area';
  $handler->display->display_options['empty']['area']['empty'] = TRUE;
  $handler->display->display_options['empty']['area']['content'] = 'No Progress Reports available at this time.';
  $handler->display->display_options['empty']['area']['format'] = 'filtered_html';
  /* Relationship: OG membership: OG membership from Node */
  $handler->display->display_options['relationships']['og_membership_rel']['id'] = 'og_membership_rel';
  $handler->display->display_options['relationships']['og_membership_rel']['table'] = 'node';
  $handler->display->display_options['relationships']['og_membership_rel']['field'] = 'og_membership_rel';
  /* Relationship: OG membership: Group Node from OG membership */
  $handler->display->display_options['relationships']['og_membership_related_node_group']['id'] = 'og_membership_related_node_group';
  $handler->display->display_options['relationships']['og_membership_related_node_group']['table'] = 'og_membership';
  $handler->display->display_options['relationships']['og_membership_related_node_group']['field'] = 'og_membership_related_node_group';
  $handler->display->display_options['relationships']['og_membership_related_node_group']['relationship'] = 'og_membership_rel';
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country']['id'] = 'field_country';
  $handler->display->display_options['fields']['field_country']['table'] = 'field_data_field_country';
  $handler->display->display_options['fields']['field_country']['field'] = 'field_country';
  $handler->display->display_options['fields']['field_country']['relationship'] = 'og_membership_related_node_group';
  $handler->display->display_options['fields']['field_country']['label'] = '';
  $handler->display->display_options['fields']['field_country']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_country']['element_type'] = 'span';
  $handler->display->display_options['fields']['field_country']['element_label_type'] = 'span';
  $handler->display->display_options['fields']['field_country']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_country']['type'] = 'country_alpha_2';
  /* Field: Content: Country */
  $handler->display->display_options['fields']['og_group_ref']['id'] = 'og_group_ref';
  $handler->display->display_options['fields']['og_group_ref']['table'] = 'og_membership';
  $handler->display->display_options['fields']['og_group_ref']['field'] = 'og_group_ref';
  $handler->display->display_options['fields']['og_group_ref']['label'] = '';
  $handler->display->display_options['fields']['og_group_ref']['element_class'] = 'country-[field_country]';
  $handler->display->display_options['fields']['og_group_ref']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['og_group_ref']['settings'] = array(
    'link' => 1,
  );
  $handler->display->display_options['fields']['og_group_ref']['delta_offset'] = '0';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
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
    'irm_report' => 'irm_report',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block_1');

  /* Display: Report Block */
  $handler = $view->new_display('block', 'Report Block', 'block_2');
  $handler->display->display_options['defaults']['fields'] = FALSE;
  /* Field: Content: Country */
  $handler->display->display_options['fields']['field_country']['id'] = 'field_country';
  $handler->display->display_options['fields']['field_country']['table'] = 'field_data_field_country';
  $handler->display->display_options['fields']['field_country']['field'] = 'field_country';
  $handler->display->display_options['fields']['field_country']['relationship'] = 'og_membership_related_node_group';
  $handler->display->display_options['fields']['field_country']['label'] = '';
  $handler->display->display_options['fields']['field_country']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_country']['element_type'] = 'span';
  $handler->display->display_options['fields']['field_country']['element_label_type'] = 'span';
  $handler->display->display_options['fields']['field_country']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_country']['type'] = 'country_alpha_2';
  /* Field: Content: Country */
  $handler->display->display_options['fields']['og_group_ref']['id'] = 'og_group_ref';
  $handler->display->display_options['fields']['og_group_ref']['table'] = 'og_membership';
  $handler->display->display_options['fields']['og_group_ref']['field'] = 'og_group_ref';
  $handler->display->display_options['fields']['og_group_ref']['label'] = '';
  $handler->display->display_options['fields']['og_group_ref']['element_class'] = 'country-[field_country]';
  $handler->display->display_options['fields']['og_group_ref']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['og_group_ref']['settings'] = array(
    'link' => 1,
  );
  $handler->display->display_options['fields']['og_group_ref']['delta_offset'] = '0';
  /* Field: Content: PDF Version */
  $handler->display->display_options['fields']['field_pdf_version']['id'] = 'field_pdf_version';
  $handler->display->display_options['fields']['field_pdf_version']['table'] = 'field_data_field_pdf_version';
  $handler->display->display_options['fields']['field_pdf_version']['field'] = 'field_pdf_version';
  $handler->display->display_options['fields']['field_pdf_version']['label'] = '';
  $handler->display->display_options['fields']['field_pdf_version']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_pdf_version']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_pdf_version']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_pdf_version']['type'] = 'file_url_plain';
  $handler->display->display_options['fields']['field_pdf_version']['settings'] = array(
    'text' => '[file:name]',
  );
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['text'] = 'Report';
  $handler->display->display_options['fields']['title']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['path'] = '[field_pdf_version]';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Name of the Button */
  $handler->display->display_options['fields']['field_name_of_the_button']['id'] = 'field_name_of_the_button';
  $handler->display->display_options['fields']['field_name_of_the_button']['table'] = 'field_data_field_name_of_the_button';
  $handler->display->display_options['fields']['field_name_of_the_button']['field'] = 'field_name_of_the_button';
  $handler->display->display_options['fields']['field_name_of_the_button']['label'] = '';
  $handler->display->display_options['fields']['field_name_of_the_button']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_name_of_the_button']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_name_of_the_button']['empty'] = 'Report';
  $handler->display->display_options['fields']['field_name_of_the_button']['type'] = 'text_plain';
  /* Field: Content: Progress Report in National Language */
  $handler->display->display_options['fields']['field_pdf_national']['id'] = 'field_pdf_national';
  $handler->display->display_options['fields']['field_pdf_national']['table'] = 'field_data_field_pdf_national';
  $handler->display->display_options['fields']['field_pdf_national']['field'] = 'field_pdf_national';
  $handler->display->display_options['fields']['field_pdf_national']['label'] = '';
  $handler->display->display_options['fields']['field_pdf_national']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_pdf_national']['alter']['text'] = '[field_name_of_the_button]';
  $handler->display->display_options['fields']['field_pdf_national']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_pdf_national']['alter']['path'] = '[field_pdf_national] ';
  $handler->display->display_options['fields']['field_pdf_national']['alter']['absolute'] = TRUE;
  $handler->display->display_options['fields']['field_pdf_national']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_pdf_national']['empty'] = '&nbsp;';
  $handler->display->display_options['fields']['field_pdf_national']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_pdf_national']['type'] = 'file_url_plain';
  $handler->display->display_options['fields']['field_pdf_national']['settings'] = array(
    'text' => 'Download [file:name]',
  );
  /* Field: Content: Progress Report in National Language Comments Page */
  $handler->display->display_options['fields']['field_report_comments_page']['id'] = 'field_report_comments_page';
  $handler->display->display_options['fields']['field_report_comments_page']['table'] = 'field_data_field_report_comments_page';
  $handler->display->display_options['fields']['field_report_comments_page']['field'] = 'field_report_comments_page';
  $handler->display->display_options['fields']['field_report_comments_page']['label'] = '';
  $handler->display->display_options['fields']['field_report_comments_page']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_report_comments_page']['alter']['text'] = 'Comment';
  $handler->display->display_options['fields']['field_report_comments_page']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['field_report_comments_page']['alter']['path'] = 'node/[field_report_comments_page-target_id]';
  $handler->display->display_options['fields']['field_report_comments_page']['alter']['absolute'] = TRUE;
  $handler->display->display_options['fields']['field_report_comments_page']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_report_comments_page']['empty'] = '&nbsp;';
  $handler->display->display_options['fields']['field_report_comments_page']['settings'] = array(
    'link' => 0,
  );
  $export['irm_reports_legacy'] = $view;

  return $export;
}
