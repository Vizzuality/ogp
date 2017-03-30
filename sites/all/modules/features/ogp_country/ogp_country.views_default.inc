<?php
/**
 * @file
 * ogp_country.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function ogp_country_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'action_plan_on_country_page';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Action plan on Country page';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['css_class'] = 'action_plan_country_page_view';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '5';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_type'] = 'h3';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: PDF File */
  $handler->display->display_options['fields']['field_country_ap_pdf']['id'] = 'field_country_ap_pdf';
  $handler->display->display_options['fields']['field_country_ap_pdf']['table'] = 'field_data_field_country_ap_pdf';
  $handler->display->display_options['fields']['field_country_ap_pdf']['field'] = 'field_country_ap_pdf';
  $handler->display->display_options['fields']['field_country_ap_pdf']['label'] = '';
  $handler->display->display_options['fields']['field_country_ap_pdf']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_country_ap_pdf']['click_sort_column'] = 'fid';
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Country (field_country_ref) */
  $handler->display->display_options['arguments']['field_country_ref_target_id']['id'] = 'field_country_ref_target_id';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['table'] = 'field_data_field_country_ref';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['field'] = 'field_country_ref_target_id';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['default_argument_type'] = 'node';
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
  $handler->display->display_options['filters']['type']['relationship'] = 'field_country_ref_target_id';
  $handler->display->display_options['filters']['type']['value'] = array(
    'action_plan' => 'action_plan',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['action_plan_on_country_page'] = $view;

  $view = new view();
  $view->name = 'country_blog_content';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Country Blog content';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Recent Blog Entries';
  $handler->display->display_options['use_more'] = TRUE;
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['use_more_text'] = 'more blog posts';
  $handler->display->display_options['link_display'] = 'custom_url';
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '3';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['path'] = '[field_link]';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  /* Field: Content: Post date */
  $handler->display->display_options['fields']['created']['id'] = 'created';
  $handler->display->display_options['fields']['created']['table'] = 'node';
  $handler->display->display_options['fields']['created']['field'] = 'created';
  $handler->display->display_options['fields']['created']['label'] = 'Posted';
  $handler->display->display_options['fields']['created']['element_type'] = 'span';
  $handler->display->display_options['fields']['created']['element_label_type'] = 'span';
  $handler->display->display_options['fields']['created']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['created']['date_format'] = 'medium';
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Country (field_country_ref) */
  $handler->display->display_options['arguments']['field_country_ref_target_id']['id'] = 'field_country_ref_target_id';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['table'] = 'field_data_field_country_ref';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['field'] = 'field_country_ref_target_id';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['title_enable'] = TRUE;
  $handler->display->display_options['arguments']['field_country_ref_target_id']['title'] = 'Latest %1 Blog Posts';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['default_argument_type'] = 'og_context';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['field_country_ref_target_id']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['field_country_ref_target_id']['validate_options']['types'] = array(
    'country_page' => 'country_page',
  );
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
    'blog_post' => 'blog_post',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $handler->display->display_options['link_url'] = 'blog';
  $export['country_blog_content'] = $view;

  $view = new view();
  $view->name = 'country_civil_society_orgs';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Country Civil Society Orgs';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Civil Society Organizations';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Field: Link */
  $handler->display->display_options['fields']['field_link']['id'] = 'field_link';
  $handler->display->display_options['fields']['field_link']['table'] = 'field_data_field_link';
  $handler->display->display_options['fields']['field_link']['field'] = 'field_link';
  $handler->display->display_options['fields']['field_link']['label'] = '';
  $handler->display->display_options['fields']['field_link']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_link']['click_sort_column'] = 'url';
  $handler->display->display_options['fields']['field_link']['type'] = 'link_plain';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['path'] = '[field_link]';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['link_to_node'] = FALSE;
  /* Field: Content: Body */
  $handler->display->display_options['fields']['body']['id'] = 'body';
  $handler->display->display_options['fields']['body']['table'] = 'field_data_body';
  $handler->display->display_options['fields']['body']['field'] = 'body';
  $handler->display->display_options['fields']['body']['label'] = '';
  $handler->display->display_options['fields']['body']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Country (og_group_ref) */
  $handler->display->display_options['arguments']['og_group_ref_target_id']['id'] = 'og_group_ref_target_id';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['table'] = 'og_membership';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['field'] = 'og_group_ref_target_id';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['default_argument_type'] = 'og_context';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['summary_options']['items_per_page'] = '25';
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
    'civic_society_org' => 'civic_society_org',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['country_civil_society_orgs'] = $view;

  $view = new view();
  $view->name = 'country_commitment_categories';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'taxonomy_term_data';
  $view->human_name = 'Country Commitment Categories';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Commitments on';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['query']['options']['distinct'] = TRUE;
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['style_options']['row_class'] = 'tid-[tid]';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Taxonomy term: Content using Topics */
  $handler->display->display_options['relationships']['reverse_field_topic_node']['id'] = 'reverse_field_topic_node';
  $handler->display->display_options['relationships']['reverse_field_topic_node']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['relationships']['reverse_field_topic_node']['field'] = 'reverse_field_topic_node';
  /* Field: Taxonomy term: Term ID */
  $handler->display->display_options['fields']['tid']['id'] = 'tid';
  $handler->display->display_options['fields']['tid']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['fields']['tid']['field'] = 'tid';
  $handler->display->display_options['fields']['tid']['label'] = '';
  $handler->display->display_options['fields']['tid']['exclude'] = TRUE;
  $handler->display->display_options['fields']['tid']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['tid']['separator'] = '';
  /* Field: Taxonomy term: Name (translated) */
  $handler->display->display_options['fields']['name_i18n']['id'] = 'name_i18n';
  $handler->display->display_options['fields']['name_i18n']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['fields']['name_i18n']['field'] = 'name_i18n';
  $handler->display->display_options['fields']['name_i18n']['label'] = '';
  $handler->display->display_options['fields']['name_i18n']['element_label_colon'] = FALSE;
  /* Sort criterion: Taxonomy term: Name */
  $handler->display->display_options['sorts']['name']['id'] = 'name';
  $handler->display->display_options['sorts']['name']['table'] = 'taxonomy_term_data';
  $handler->display->display_options['sorts']['name']['field'] = 'name';
  /* Contextual filter: Content: Country (og_group_ref) */
  $handler->display->display_options['arguments']['og_group_ref_target_id']['id'] = 'og_group_ref_target_id';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['table'] = 'og_membership';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['field'] = 'og_group_ref_target_id';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['relationship'] = 'reverse_field_topic_node';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['default_argument_type'] = 'og_context';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['summary_options']['items_per_page'] = '25';
  /* Filter criterion: Taxonomy vocabulary: Machine name */
  $handler->display->display_options['filters']['machine_name']['id'] = 'machine_name';
  $handler->display->display_options['filters']['machine_name']['table'] = 'taxonomy_vocabulary';
  $handler->display->display_options['filters']['machine_name']['field'] = 'machine_name';
  $handler->display->display_options['filters']['machine_name']['value'] = array(
    'topics' => 'topics',
  );
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['relationship'] = 'reverse_field_topic_node';
  $handler->display->display_options['filters']['type']['value'] = array(
    'commitment' => 'commitment',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['country_commitment_categories'] = $view;

  $view = new view();
  $view->name = 'country_header';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Country Header';
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
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['style_plugin'] = 'flexslider';
  $handler->display->display_options['style_options']['optionset'] = 'no_pager';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: Cover Photo */
  $handler->display->display_options['fields']['field_country_cover_photo']['id'] = 'field_country_cover_photo';
  $handler->display->display_options['fields']['field_country_cover_photo']['table'] = 'field_data_field_country_cover_photo';
  $handler->display->display_options['fields']['field_country_cover_photo']['field'] = 'field_country_cover_photo';
  $handler->display->display_options['fields']['field_country_cover_photo']['label'] = '';
  $handler->display->display_options['fields']['field_country_cover_photo']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_country_cover_photo']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_country_cover_photo']['settings'] = array(
    'image_style' => 'country_banner',
    'image_link' => '',
  );
  /* Field: Field: Title */
  $handler->display->display_options['fields']['title_field']['id'] = 'title_field';
  $handler->display->display_options['fields']['title_field']['table'] = 'field_data_title_field';
  $handler->display->display_options['fields']['title_field']['field'] = 'title_field';
  $handler->display->display_options['fields']['title_field']['label'] = '';
  $handler->display->display_options['fields']['title_field']['element_type'] = 'h1';
  $handler->display->display_options['fields']['title_field']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title_field']['element_wrapper_class'] = 'views-field-field-country';
  $handler->display->display_options['fields']['title_field']['link_to_entity'] = 0;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Nid */
  $handler->display->display_options['arguments']['nid']['id'] = 'nid';
  $handler->display->display_options['arguments']['nid']['table'] = 'node';
  $handler->display->display_options['arguments']['nid']['field'] = 'nid';
  $handler->display->display_options['arguments']['nid']['default_action'] = 'default';
  $handler->display->display_options['arguments']['nid']['default_argument_type'] = 'og_context';
  $handler->display->display_options['arguments']['nid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['nid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['nid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['nid']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['nid']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['nid']['validate_options']['types'] = array(
    'country_page' => 'country_page',
  );
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

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['country_header'] = $view;

  $view = new view();
  $view->name = 'country_links';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Country Links';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Links';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Field: Link */
  $handler->display->display_options['fields']['field_link']['id'] = 'field_link';
  $handler->display->display_options['fields']['field_link']['table'] = 'field_data_field_link';
  $handler->display->display_options['fields']['field_link']['field'] = 'field_link';
  $handler->display->display_options['fields']['field_link']['label'] = '';
  $handler->display->display_options['fields']['field_link']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_link']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_link']['click_sort_column'] = 'url';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['alter']['make_link'] = TRUE;
  $handler->display->display_options['fields']['title']['alter']['path'] = '[field_link]';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  /* Sort criterion: Content: Post date */
  $handler->display->display_options['sorts']['created']['id'] = 'created';
  $handler->display->display_options['sorts']['created']['table'] = 'node';
  $handler->display->display_options['sorts']['created']['field'] = 'created';
  $handler->display->display_options['sorts']['created']['order'] = 'DESC';
  /* Contextual filter: Content: Country (og_group_ref) */
  $handler->display->display_options['arguments']['og_group_ref_target_id']['id'] = 'og_group_ref_target_id';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['table'] = 'og_membership';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['field'] = 'og_group_ref_target_id';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['default_action'] = 'default';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['default_argument_type'] = 'og_context';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['og_group_ref_target_id']['summary_options']['items_per_page'] = '25';
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
    'link' => 'link',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['country_links'] = $view;

  $view = new view();
  $view->name = 'ogp_country_contact';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'og_membership';
  $view->human_name = 'OGP Country Contact';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Contact';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '20';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: OG membership: User from OG membership */
  $handler->display->display_options['relationships']['og_membership_related_user']['id'] = 'og_membership_related_user';
  $handler->display->display_options['relationships']['og_membership_related_user']['table'] = 'og_membership';
  $handler->display->display_options['relationships']['og_membership_related_user']['field'] = 'og_membership_related_user';
  /* Relationship: OG membership: OG Roles from membership */
  $handler->display->display_options['relationships']['og_users_roles']['id'] = 'og_users_roles';
  $handler->display->display_options['relationships']['og_users_roles']['table'] = 'og_membership';
  $handler->display->display_options['relationships']['og_users_roles']['field'] = 'og_users_roles';
  /* Field: User: Picture */
  $handler->display->display_options['fields']['picture']['id'] = 'picture';
  $handler->display->display_options['fields']['picture']['table'] = 'users';
  $handler->display->display_options['fields']['picture']['field'] = 'picture';
  $handler->display->display_options['fields']['picture']['relationship'] = 'og_membership_related_user';
  $handler->display->display_options['fields']['picture']['label'] = '';
  $handler->display->display_options['fields']['picture']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['picture']['hide_empty'] = TRUE;
  /* Field: User: Full Name */
  $handler->display->display_options['fields']['field_full_name']['id'] = 'field_full_name';
  $handler->display->display_options['fields']['field_full_name']['table'] = 'field_data_field_full_name';
  $handler->display->display_options['fields']['field_full_name']['field'] = 'field_full_name';
  $handler->display->display_options['fields']['field_full_name']['relationship'] = 'og_membership_related_user';
  $handler->display->display_options['fields']['field_full_name']['label'] = '';
  $handler->display->display_options['fields']['field_full_name']['element_label_colon'] = FALSE;
  /* Field: Field: Job Title */
  $handler->display->display_options['fields']['field_job_title']['id'] = 'field_job_title';
  $handler->display->display_options['fields']['field_job_title']['table'] = 'field_data_field_job_title';
  $handler->display->display_options['fields']['field_job_title']['field'] = 'field_job_title';
  $handler->display->display_options['fields']['field_job_title']['relationship'] = 'og_membership_related_user';
  $handler->display->display_options['fields']['field_job_title']['element_type'] = 'span';
  $handler->display->display_options['fields']['field_job_title']['element_label_type'] = 'span';
  $handler->display->display_options['fields']['field_job_title']['hide_empty'] = TRUE;
  /* Field: User: Bio */
  $handler->display->display_options['fields']['field_bio']['id'] = 'field_bio';
  $handler->display->display_options['fields']['field_bio']['table'] = 'field_data_field_bio';
  $handler->display->display_options['fields']['field_bio']['field'] = 'field_bio';
  $handler->display->display_options['fields']['field_bio']['relationship'] = 'og_membership_related_user';
  $handler->display->display_options['fields']['field_bio']['label'] = '';
  $handler->display->display_options['fields']['field_bio']['element_label_colon'] = FALSE;
  /* Contextual filter: OG membership: Group ID */
  $handler->display->display_options['arguments']['gid']['id'] = 'gid';
  $handler->display->display_options['arguments']['gid']['table'] = 'og_membership';
  $handler->display->display_options['arguments']['gid']['field'] = 'gid';
  $handler->display->display_options['arguments']['gid']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['gid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['gid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['gid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['gid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['gid']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['gid']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['gid']['validate_options']['types'] = array(
    'country_page' => 'country_page',
  );
  /* Filter criterion: OG user roles: Role Name */
  $handler->display->display_options['filters']['name']['id'] = 'name';
  $handler->display->display_options['filters']['name']['table'] = 'og_role';
  $handler->display->display_options['filters']['name']['field'] = 'name';
  $handler->display->display_options['filters']['name']['relationship'] = 'og_users_roles';
  $handler->display->display_options['filters']['name']['value'] = array(
    'country contact' => 'country contact',
  );
  /* Filter criterion: User: The user ID */
  $handler->display->display_options['filters']['uid_raw']['id'] = 'uid_raw';
  $handler->display->display_options['filters']['uid_raw']['table'] = 'users';
  $handler->display->display_options['filters']['uid_raw']['field'] = 'uid_raw';
  $handler->display->display_options['filters']['uid_raw']['relationship'] = 'og_membership_related_user';
  $handler->display->display_options['filters']['uid_raw']['operator'] = '>';
  $handler->display->display_options['filters']['uid_raw']['value']['value'] = '0';
  $handler->display->display_options['filters']['uid_raw']['expose']['operator_id'] = 'uid_raw_op';
  $handler->display->display_options['filters']['uid_raw']['expose']['label'] = 'The user ID';
  $handler->display->display_options['filters']['uid_raw']['expose']['operator'] = 'uid_raw_op';
  $handler->display->display_options['filters']['uid_raw']['expose']['identifier'] = 'uid_raw';
  $handler->display->display_options['filters']['uid_raw']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
  );

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'node/%/contact';
  $export['ogp_country_contact'] = $view;

  $view = new view();
  $view->name = 'ogp_country_overview';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'OGP Country Overview';
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
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '1';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Field: Content: OGP Website */
  $handler->display->display_options['fields']['field_country_ogp_website']['id'] = 'field_country_ogp_website';
  $handler->display->display_options['fields']['field_country_ogp_website']['table'] = 'field_data_field_country_ogp_website';
  $handler->display->display_options['fields']['field_country_ogp_website']['field'] = 'field_country_ogp_website';
  $handler->display->display_options['fields']['field_country_ogp_website']['label'] = '';
  $handler->display->display_options['fields']['field_country_ogp_website']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_country_ogp_website']['click_sort_column'] = 'url';
  $handler->display->display_options['fields']['field_country_ogp_website']['type'] = 'link_domain';
  $handler->display->display_options['fields']['field_country_ogp_website']['settings'] = array(
    'strip_www' => 0,
  );
  /* Field: Content: Post date */
  $handler->display->display_options['fields']['created']['id'] = 'created';
  $handler->display->display_options['fields']['created']['table'] = 'node';
  $handler->display->display_options['fields']['created']['field'] = 'created';
  $handler->display->display_options['fields']['created']['label'] = '';
  $handler->display->display_options['fields']['created']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['created']['alter']['text'] = 'Member since [created]';
  $handler->display->display_options['fields']['created']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['created']['date_format'] = 'short';
  /* Field: Content: PDF File */
  $handler->display->display_options['fields']['field_country_ap_pdf']['id'] = 'field_country_ap_pdf';
  $handler->display->display_options['fields']['field_country_ap_pdf']['table'] = 'field_data_field_country_ap_pdf';
  $handler->display->display_options['fields']['field_country_ap_pdf']['field'] = 'field_country_ap_pdf';
  $handler->display->display_options['fields']['field_country_ap_pdf']['label'] = '';
  $handler->display->display_options['fields']['field_country_ap_pdf']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_country_ap_pdf']['click_sort_column'] = 'fid';
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

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $export['ogp_country_overview'] = $view;

  $view = new view();
  $view->name = 'ogp_country_staff';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'og_membership';
  $view->human_name = 'OGP Country Staff';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Other Staff Members';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '20';
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: OG membership: User from OG membership */
  $handler->display->display_options['relationships']['og_membership_related_user']['id'] = 'og_membership_related_user';
  $handler->display->display_options['relationships']['og_membership_related_user']['table'] = 'og_membership';
  $handler->display->display_options['relationships']['og_membership_related_user']['field'] = 'og_membership_related_user';
  /* Relationship: OG membership: OG Roles from membership */
  $handler->display->display_options['relationships']['og_users_roles']['id'] = 'og_users_roles';
  $handler->display->display_options['relationships']['og_users_roles']['table'] = 'og_membership';
  $handler->display->display_options['relationships']['og_users_roles']['field'] = 'og_users_roles';
  /* Field: User: Full Name */
  $handler->display->display_options['fields']['field_full_name']['id'] = 'field_full_name';
  $handler->display->display_options['fields']['field_full_name']['table'] = 'field_data_field_full_name';
  $handler->display->display_options['fields']['field_full_name']['field'] = 'field_full_name';
  $handler->display->display_options['fields']['field_full_name']['relationship'] = 'og_membership_related_user';
  $handler->display->display_options['fields']['field_full_name']['label'] = '';
  $handler->display->display_options['fields']['field_full_name']['element_label_colon'] = FALSE;
  /* Field: Field: Job Title */
  $handler->display->display_options['fields']['field_job_title']['id'] = 'field_job_title';
  $handler->display->display_options['fields']['field_job_title']['table'] = 'field_data_field_job_title';
  $handler->display->display_options['fields']['field_job_title']['field'] = 'field_job_title';
  $handler->display->display_options['fields']['field_job_title']['relationship'] = 'og_membership_related_user';
  $handler->display->display_options['fields']['field_job_title']['element_type'] = 'span';
  $handler->display->display_options['fields']['field_job_title']['element_label_type'] = 'span';
  $handler->display->display_options['fields']['field_job_title']['hide_empty'] = TRUE;
  /* Contextual filter: OG membership: Group ID */
  $handler->display->display_options['arguments']['gid']['id'] = 'gid';
  $handler->display->display_options['arguments']['gid']['table'] = 'og_membership';
  $handler->display->display_options['arguments']['gid']['field'] = 'gid';
  $handler->display->display_options['arguments']['gid']['default_action'] = 'not found';
  $handler->display->display_options['arguments']['gid']['default_argument_type'] = 'fixed';
  $handler->display->display_options['arguments']['gid']['summary']['number_of_records'] = '0';
  $handler->display->display_options['arguments']['gid']['summary']['format'] = 'default_summary';
  $handler->display->display_options['arguments']['gid']['summary_options']['items_per_page'] = '25';
  $handler->display->display_options['arguments']['gid']['specify_validation'] = TRUE;
  $handler->display->display_options['arguments']['gid']['validate']['type'] = 'node';
  $handler->display->display_options['arguments']['gid']['validate_options']['types'] = array(
    'country_page' => 'country_page',
  );
  /* Filter criterion: OG user roles: Role Name */
  $handler->display->display_options['filters']['name']['id'] = 'name';
  $handler->display->display_options['filters']['name']['table'] = 'og_role';
  $handler->display->display_options['filters']['name']['field'] = 'name';
  $handler->display->display_options['filters']['name']['relationship'] = 'og_users_roles';
  $handler->display->display_options['filters']['name']['value'] = array(
    'administrator member' => 'administrator member',
  );
  /* Filter criterion: User: The user ID */
  $handler->display->display_options['filters']['uid_raw']['id'] = 'uid_raw';
  $handler->display->display_options['filters']['uid_raw']['table'] = 'users';
  $handler->display->display_options['filters']['uid_raw']['field'] = 'uid_raw';
  $handler->display->display_options['filters']['uid_raw']['relationship'] = 'og_membership_related_user';
  $handler->display->display_options['filters']['uid_raw']['operator'] = '>';
  $handler->display->display_options['filters']['uid_raw']['value']['value'] = '0';
  $handler->display->display_options['filters']['uid_raw']['expose']['operator_id'] = 'uid_raw_op';
  $handler->display->display_options['filters']['uid_raw']['expose']['label'] = 'The user ID';
  $handler->display->display_options['filters']['uid_raw']['expose']['operator'] = 'uid_raw_op';
  $handler->display->display_options['filters']['uid_raw']['expose']['identifier'] = 'uid_raw';
  $handler->display->display_options['filters']['uid_raw']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
    5 => 0,
  );
  /* Filter criterion: OG user roles: Role Name */
  $handler->display->display_options['filters']['name_1']['id'] = 'name_1';
  $handler->display->display_options['filters']['name_1']['table'] = 'og_role';
  $handler->display->display_options['filters']['name_1']['field'] = 'name';
  $handler->display->display_options['filters']['name_1']['relationship'] = 'og_users_roles';
  $handler->display->display_options['filters']['name_1']['operator'] = 'not';
  $handler->display->display_options['filters']['name_1']['value'] = array(
    'country contact' => 'country contact',
  );

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block_1');
  $export['ogp_country_staff'] = $view;

  $view = new view();
  $view->name = 'ogp_dkan_country_report_documents';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'OGP DKAN Country Report Documents';
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
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '0';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'responsive_grid';
  $handler->display->display_options['style_options']['columns'] = '2';
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['id'] = 'field_dataset_ref_target_id';
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['table'] = 'field_data_field_dataset_ref';
  $handler->display->display_options['relationships']['field_dataset_ref_target_id']['field'] = 'field_dataset_ref_target_id';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
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
  $handler->display->display_options['fields']['field_upload']['label'] = 'Download URL';
  $handler->display->display_options['fields']['field_upload']['click_sort_column'] = 'fid';
  $handler->display->display_options['fields']['field_upload']['type'] = 'recline_link_formatter';
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
  $export['ogp_dkan_country_report_documents'] = $view;

  return $export;
}
