<?php
/**
 * @file
 * ogp_summit.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function ogp_summit_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'summit_admin';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'field_collection_item';
  $view->human_name = 'summit_admin';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Summit Sessions';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['access']['perm'] = 'administer nodes';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['grouping'] = array(
    0 => array(
      'field' => 'field_slot_datetime',
      'rendered' => 1,
      'rendered_strip' => 0,
    ),
  );
  $handler->display->display_options['style_options']['columns'] = array(
    'title_1' => 'title_1',
    'title' => 'title',
    'field_slot_datetime' => 'field_slot_datetime',
    'field_speakers' => 'field_speakers',
    'field_track' => 'field_track',
    'sticky' => 'sticky',
    'type' => 'type',
    'edit_node' => 'edit_node',
    'delete_node' => 'edit_node',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'title_1' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_slot_datetime' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_speakers' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_track' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'sticky' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'type' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'edit_node' => array(
      'align' => '',
      'separator' => ' ',
      'empty_column' => 0,
    ),
    'delete_node' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Header: Global: Text area */
  $handler->display->display_options['header']['area']['id'] = 'area';
  $handler->display->display_options['header']['area']['table'] = 'views';
  $handler->display->display_options['header']['area']['field'] = 'area';
  $handler->display->display_options['header']['area']['empty'] = TRUE;
  $handler->display->display_options['header']['area']['content'] = 'Day 1 - Thursday 31st October';
  $handler->display->display_options['header']['area']['format'] = 'full_html';
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_session_timeslot_node']['id'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['relationships']['reverse_field_session_timeslot_node']['table'] = 'field_collection_item';
  $handler->display->display_options['relationships']['reverse_field_session_timeslot_node']['field'] = 'reverse_field_session_timeslot_node';
  /* Relationship: Field collection item: Entity with the Allowed Slot Types (field_room_slots_types_allowed) */
  $handler->display->display_options['relationships']['field_room_slots_types_allowed_node']['id'] = 'field_room_slots_types_allowed_node';
  $handler->display->display_options['relationships']['field_room_slots_types_allowed_node']['table'] = 'field_collection_item';
  $handler->display->display_options['relationships']['field_room_slots_types_allowed_node']['field'] = 'field_room_slots_types_allowed_node';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_slot_types_time_slot_target_id']['id'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['relationships']['field_slot_types_time_slot_target_id']['table'] = 'field_data_field_slot_types_time_slot';
  $handler->display->display_options['relationships']['field_slot_types_time_slot_target_id']['field'] = 'field_slot_types_time_slot_target_id';
  /* Field: Content revision: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node_revision';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'field_room_slots_types_allowed_node';
  $handler->display->display_options['fields']['title_1']['label'] = '';
  $handler->display->display_options['fields']['title_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title_1']['element_type'] = 'h3';
  $handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title_1']['element_default_classes'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['element_type'] = 'p';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
  /* Field: Content: Date and time */
  $handler->display->display_options['fields']['field_slot_datetime']['id'] = 'field_slot_datetime';
  $handler->display->display_options['fields']['field_slot_datetime']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['fields']['field_slot_datetime']['field'] = 'field_slot_datetime';
  $handler->display->display_options['fields']['field_slot_datetime']['relationship'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['fields']['field_slot_datetime']['label'] = '';
  $handler->display->display_options['fields']['field_slot_datetime']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_slot_datetime']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  /* Field: Content: Speaker(s) */
  $handler->display->display_options['fields']['field_speakers']['id'] = 'field_speakers';
  $handler->display->display_options['fields']['field_speakers']['table'] = 'field_data_field_speakers';
  $handler->display->display_options['fields']['field_speakers']['field'] = 'field_speakers';
  $handler->display->display_options['fields']['field_speakers']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['fields']['field_speakers']['element_type'] = 'span';
  $handler->display->display_options['fields']['field_speakers']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_speakers']['hide_empty'] = TRUE;
  $handler->display->display_options['fields']['field_speakers']['settings'] = array(
    'link' => 0,
  );
  $handler->display->display_options['fields']['field_speakers']['delta_offset'] = '0';
  /* Field: Content: Track */
  $handler->display->display_options['fields']['field_track']['id'] = 'field_track';
  $handler->display->display_options['fields']['field_track']['table'] = 'field_data_field_track';
  $handler->display->display_options['fields']['field_track']['field'] = 'field_track';
  $handler->display->display_options['fields']['field_track']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['fields']['field_track']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_track']['element_type'] = 'div';
  $handler->display->display_options['fields']['field_track']['element_class'] = '[field_track-value]';
  $handler->display->display_options['fields']['field_track']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_track']['hide_empty'] = TRUE;
  /* Field: Content: Sticky */
  $handler->display->display_options['fields']['sticky']['id'] = 'sticky';
  $handler->display->display_options['fields']['sticky']['table'] = 'node';
  $handler->display->display_options['fields']['sticky']['field'] = 'sticky';
  $handler->display->display_options['fields']['sticky']['relationship'] = 'field_room_slots_types_allowed_node';
  $handler->display->display_options['fields']['sticky']['exclude'] = TRUE;
  $handler->display->display_options['fields']['sticky']['not'] = 0;
  /* Field: Content: Type */
  $handler->display->display_options['fields']['type']['id'] = 'type';
  $handler->display->display_options['fields']['type']['table'] = 'node';
  $handler->display->display_options['fields']['type']['field'] = 'type';
  $handler->display->display_options['fields']['type']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['fields']['type']['label'] = '';
  $handler->display->display_options['fields']['type']['exclude'] = TRUE;
  $handler->display->display_options['fields']['type']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['type']['machine_name'] = TRUE;
  /* Field: Content: Edit link */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['fields']['edit_node']['label'] = 'Edit';
  /* Field: Content: Delete link */
  $handler->display->display_options['fields']['delete_node']['id'] = 'delete_node';
  $handler->display->display_options['fields']['delete_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['delete_node']['field'] = 'delete_node';
  $handler->display->display_options['fields']['delete_node']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['fields']['delete_node']['label'] = 'Delete';
  /* Sort criterion: Content: Date and time -  start date (field_slot_datetime) */
  $handler->display->display_options['sorts']['field_slot_datetime_value']['id'] = 'field_slot_datetime_value';
  $handler->display->display_options['sorts']['field_slot_datetime_value']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['sorts']['field_slot_datetime_value']['field'] = 'field_slot_datetime_value';
  $handler->display->display_options['sorts']['field_slot_datetime_value']['relationship'] = 'field_slot_types_time_slot_target_id';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['filters']['status']['value'] = '1';
  /* Filter criterion: Field collection item: Allowed Schedule Types (field_slot_types_allowed) */
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['id'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['table'] = 'field_data_field_slot_types_allowed';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['field'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['operator'] = '!=';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['value'] = 'bof_session';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['path'] = 'admin/content/summit';
  $handler->display->display_options['menu']['type'] = 'normal';
  $handler->display->display_options['menu']['title'] = 'Summit Sessions';
  $handler->display->display_options['menu']['weight'] = '-10';
  $handler->display->display_options['menu']['name'] = 'management';
  $handler->display->display_options['menu']['context'] = 0;
  $handler->display->display_options['menu']['context_only_inline'] = 0;
  $handler->display->display_options['tab_options']['type'] = 'normal';
  $handler->display->display_options['tab_options']['title'] = 'Sessions';
  $handler->display->display_options['tab_options']['weight'] = '0';
  $handler->display->display_options['tab_options']['name'] = 'main-menu';
  $export['summit_admin'] = $view;

  $view = new view();
  $view->name = 'summit_livestream';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'field_collection_item';
  $view->human_name = 'summit_livestream';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Live Streaming Schedule';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'list';
  $handler->display->display_options['style_options']['grouping'] = array(
    0 => array(
      'field' => 'field_slot_datetime',
      'rendered' => 1,
      'rendered_strip' => 0,
    ),
  );
  $handler->display->display_options['row_plugin'] = 'fields';
  /* Header: Global: Text area */
  $handler->display->display_options['header']['area']['id'] = 'area';
  $handler->display->display_options['header']['area']['table'] = 'views';
  $handler->display->display_options['header']['area']['field'] = 'area';
  $handler->display->display_options['header']['area']['empty'] = TRUE;
  $handler->display->display_options['header']['area']['content'] = '<p>All times provided in London/GMT time. Click on a session\'s name below to see its live video stream.</p>
<time datetime="2013-10-31">Day 1 - Thursday 31st October</time>';
  $handler->display->display_options['header']['area']['format'] = 'full_html';
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_session_timeslot_node']['id'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['relationships']['reverse_field_session_timeslot_node']['table'] = 'field_collection_item';
  $handler->display->display_options['relationships']['reverse_field_session_timeslot_node']['field'] = 'reverse_field_session_timeslot_node';
  /* Relationship: Field collection item: Entity with the Allowed Slot Types (field_room_slots_types_allowed) */
  $handler->display->display_options['relationships']['field_room_slots_types_allowed_node']['id'] = 'field_room_slots_types_allowed_node';
  $handler->display->display_options['relationships']['field_room_slots_types_allowed_node']['table'] = 'field_collection_item';
  $handler->display->display_options['relationships']['field_room_slots_types_allowed_node']['field'] = 'field_room_slots_types_allowed_node';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_slot_types_time_slot_target_id']['id'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['relationships']['field_slot_types_time_slot_target_id']['table'] = 'field_data_field_slot_types_time_slot';
  $handler->display->display_options['relationships']['field_slot_types_time_slot_target_id']['field'] = 'field_slot_types_time_slot_target_id';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['element_type'] = 'p';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
  /* Field: Content: Date and time */
  $handler->display->display_options['fields']['field_slot_datetime']['id'] = 'field_slot_datetime';
  $handler->display->display_options['fields']['field_slot_datetime']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['fields']['field_slot_datetime']['field'] = 'field_slot_datetime';
  $handler->display->display_options['fields']['field_slot_datetime']['relationship'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['fields']['field_slot_datetime']['label'] = '';
  $handler->display->display_options['fields']['field_slot_datetime']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_slot_datetime']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_slot_datetime']['settings'] = array(
    'format_type' => 'camp_schedule_session',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  /* Field: Content: Speaker(s) */
  $handler->display->display_options['fields']['field_speakers']['id'] = 'field_speakers';
  $handler->display->display_options['fields']['field_speakers']['table'] = 'field_data_field_speakers';
  $handler->display->display_options['fields']['field_speakers']['field'] = 'field_speakers';
  $handler->display->display_options['fields']['field_speakers']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['fields']['field_speakers']['element_type'] = 'span';
  $handler->display->display_options['fields']['field_speakers']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_speakers']['hide_empty'] = TRUE;
  $handler->display->display_options['fields']['field_speakers']['settings'] = array(
    'link' => 0,
  );
  $handler->display->display_options['fields']['field_speakers']['delta_offset'] = '0';
  /* Field: Content: Track */
  $handler->display->display_options['fields']['field_track']['id'] = 'field_track';
  $handler->display->display_options['fields']['field_track']['table'] = 'field_data_field_track';
  $handler->display->display_options['fields']['field_track']['field'] = 'field_track';
  $handler->display->display_options['fields']['field_track']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['fields']['field_track']['label'] = '';
  $handler->display->display_options['fields']['field_track']['exclude'] = TRUE;
  $handler->display->display_options['fields']['field_track']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_track']['element_type'] = 'div';
  $handler->display->display_options['fields']['field_track']['element_class'] = '[field_track-value]';
  $handler->display->display_options['fields']['field_track']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_track']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_track']['hide_empty'] = TRUE;
  /* Sort criterion: Content: Date and time -  start date (field_slot_datetime) */
  $handler->display->display_options['sorts']['field_slot_datetime_value']['id'] = 'field_slot_datetime_value';
  $handler->display->display_options['sorts']['field_slot_datetime_value']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['sorts']['field_slot_datetime_value']['field'] = 'field_slot_datetime_value';
  $handler->display->display_options['sorts']['field_slot_datetime_value']['relationship'] = 'field_slot_types_time_slot_target_id';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['filters']['status']['value'] = '1';
  /* Filter criterion: Content: Date and time -  start date (field_slot_datetime) */
  $handler->display->display_options['filters']['field_slot_datetime_value']['id'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['filters']['field_slot_datetime_value']['field'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value']['relationship'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['filters']['field_slot_datetime_value']['value']['value'] = '2013-10-31';
  $handler->display->display_options['filters']['field_slot_datetime_value']['form_type'] = 'date_popup';
  /* Filter criterion: Field collection item: Allowed Schedule Types (field_slot_types_allowed) */
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['id'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['table'] = 'field_data_field_slot_types_allowed';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['field'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['operator'] = '!=';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['value'] = 'bof_session';
  /* Filter criterion: Content: Live stream room name string (field_livestream_str) */
  $handler->display->display_options['filters']['field_livestream_str_value']['id'] = 'field_livestream_str_value';
  $handler->display->display_options['filters']['field_livestream_str_value']['table'] = 'field_data_field_livestream_str';
  $handler->display->display_options['filters']['field_livestream_str_value']['field'] = 'field_livestream_str_value';
  $handler->display->display_options['filters']['field_livestream_str_value']['relationship'] = 'field_room_slots_types_allowed_node';
  $handler->display->display_options['filters']['field_livestream_str_value']['operator'] = 'not empty';
  $handler->display->display_options['filters']['field_livestream_str_value']['value'] = 'x';

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block_1');

  /* Display: Attachment */
  $handler = $view->new_display('attachment', 'Attachment', 'attachment_1');
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['header'] = FALSE;
  /* Header: Global: Text area */
  $handler->display->display_options['header']['area']['id'] = 'area';
  $handler->display->display_options['header']['area']['table'] = 'views';
  $handler->display->display_options['header']['area']['field'] = 'area';
  $handler->display->display_options['header']['area']['empty'] = TRUE;
  $handler->display->display_options['header']['area']['content'] = '<time datetime="2013-11-01">Day 2 - Friday 1st November</time>';
  $handler->display->display_options['header']['area']['format'] = 'full_html';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['filters']['status']['value'] = '1';
  /* Filter criterion: Content: Date and time -  start date (field_slot_datetime) */
  $handler->display->display_options['filters']['field_slot_datetime_value']['id'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['filters']['field_slot_datetime_value']['field'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value']['relationship'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['filters']['field_slot_datetime_value']['operator'] = '>=';
  $handler->display->display_options['filters']['field_slot_datetime_value']['value']['value'] = '2013-11-01';
  $handler->display->display_options['filters']['field_slot_datetime_value']['granularity'] = 'hour';
  $handler->display->display_options['filters']['field_slot_datetime_value']['form_type'] = 'date_popup';
  /* Filter criterion: Field collection item: Allowed Schedule Types (field_slot_types_allowed) */
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['id'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['table'] = 'field_data_field_slot_types_allowed';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['field'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['operator'] = '!=';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['value'] = 'bof_session';
  /* Filter criterion: Content: Live stream room name string (field_livestream_str) */
  $handler->display->display_options['filters']['field_livestream_str_value']['id'] = 'field_livestream_str_value';
  $handler->display->display_options['filters']['field_livestream_str_value']['table'] = 'field_data_field_livestream_str';
  $handler->display->display_options['filters']['field_livestream_str_value']['field'] = 'field_livestream_str_value';
  $handler->display->display_options['filters']['field_livestream_str_value']['relationship'] = 'field_room_slots_types_allowed_node';
  $handler->display->display_options['filters']['field_livestream_str_value']['operator'] = 'not empty';
  $handler->display->display_options['displays'] = array(
    'block_1' => 'block_1',
    'default' => 0,
    'page' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';
  $export['summit_livestream'] = $view;

  $view = new view();
  $view->name = 'summit_session_grid';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'field_collection_item';
  $view->human_name = 'summit_session_grid';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Agenda';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'camp_schedule_grid';
  /* Header: Global: Text area */
  $handler->display->display_options['header']['area']['id'] = 'area';
  $handler->display->display_options['header']['area']['table'] = 'views';
  $handler->display->display_options['header']['area']['field'] = 'area';
  $handler->display->display_options['header']['area']['empty'] = TRUE;
  $handler->display->display_options['header']['area']['content'] = 'Day 1 - Thursday 31st October';
  $handler->display->display_options['header']['area']['format'] = 'full_html';
  /* Relationship: Entity Reference: Referencing entity */
  $handler->display->display_options['relationships']['reverse_field_session_timeslot_node']['id'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['relationships']['reverse_field_session_timeslot_node']['table'] = 'field_collection_item';
  $handler->display->display_options['relationships']['reverse_field_session_timeslot_node']['field'] = 'reverse_field_session_timeslot_node';
  /* Relationship: Field collection item: Entity with the Allowed Slot Types (field_room_slots_types_allowed) */
  $handler->display->display_options['relationships']['field_room_slots_types_allowed_node']['id'] = 'field_room_slots_types_allowed_node';
  $handler->display->display_options['relationships']['field_room_slots_types_allowed_node']['table'] = 'field_collection_item';
  $handler->display->display_options['relationships']['field_room_slots_types_allowed_node']['field'] = 'field_room_slots_types_allowed_node';
  /* Relationship: Entity Reference: Referenced Entity */
  $handler->display->display_options['relationships']['field_slot_types_time_slot_target_id']['id'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['relationships']['field_slot_types_time_slot_target_id']['table'] = 'field_data_field_slot_types_time_slot';
  $handler->display->display_options['relationships']['field_slot_types_time_slot_target_id']['field'] = 'field_slot_types_time_slot_target_id';
  /* Field: Content revision: Title */
  $handler->display->display_options['fields']['title_1']['id'] = 'title_1';
  $handler->display->display_options['fields']['title_1']['table'] = 'node_revision';
  $handler->display->display_options['fields']['title_1']['field'] = 'title';
  $handler->display->display_options['fields']['title_1']['relationship'] = 'field_room_slots_types_allowed_node';
  $handler->display->display_options['fields']['title_1']['label'] = '';
  $handler->display->display_options['fields']['title_1']['exclude'] = TRUE;
  $handler->display->display_options['fields']['title_1']['element_type'] = 'h3';
  $handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title_1']['element_default_classes'] = FALSE;
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['fields']['title']['label'] = '';
  $handler->display->display_options['fields']['title']['element_type'] = 'p';
  $handler->display->display_options['fields']['title']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['title']['element_default_classes'] = FALSE;
  /* Field: Content: Date and time */
  $handler->display->display_options['fields']['field_slot_datetime']['id'] = 'field_slot_datetime';
  $handler->display->display_options['fields']['field_slot_datetime']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['fields']['field_slot_datetime']['field'] = 'field_slot_datetime';
  $handler->display->display_options['fields']['field_slot_datetime']['relationship'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['fields']['field_slot_datetime']['label'] = '';
  $handler->display->display_options['fields']['field_slot_datetime']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_slot_datetime']['settings'] = array(
    'format_type' => 'camp_schedule_session',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  /* Field: Content: Speaker(s) */
  $handler->display->display_options['fields']['field_speakers']['id'] = 'field_speakers';
  $handler->display->display_options['fields']['field_speakers']['table'] = 'field_data_field_speakers';
  $handler->display->display_options['fields']['field_speakers']['field'] = 'field_speakers';
  $handler->display->display_options['fields']['field_speakers']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['fields']['field_speakers']['element_type'] = 'span';
  $handler->display->display_options['fields']['field_speakers']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_speakers']['hide_empty'] = TRUE;
  $handler->display->display_options['fields']['field_speakers']['settings'] = array(
    'link' => 0,
  );
  $handler->display->display_options['fields']['field_speakers']['delta_offset'] = '0';
  /* Field: Content: Track */
  $handler->display->display_options['fields']['field_track']['id'] = 'field_track';
  $handler->display->display_options['fields']['field_track']['table'] = 'field_data_field_track';
  $handler->display->display_options['fields']['field_track']['field'] = 'field_track';
  $handler->display->display_options['fields']['field_track']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['fields']['field_track']['alter']['alter_text'] = TRUE;
  $handler->display->display_options['fields']['field_track']['element_type'] = 'div';
  $handler->display->display_options['fields']['field_track']['element_class'] = '[field_track-value]';
  $handler->display->display_options['fields']['field_track']['element_default_classes'] = FALSE;
  $handler->display->display_options['fields']['field_track']['hide_empty'] = TRUE;
  /* Field: Content: Sticky */
  $handler->display->display_options['fields']['sticky']['id'] = 'sticky';
  $handler->display->display_options['fields']['sticky']['table'] = 'node';
  $handler->display->display_options['fields']['sticky']['field'] = 'sticky';
  $handler->display->display_options['fields']['sticky']['relationship'] = 'field_room_slots_types_allowed_node';
  $handler->display->display_options['fields']['sticky']['exclude'] = TRUE;
  $handler->display->display_options['fields']['sticky']['not'] = 0;
  /* Field: Content: Type */
  $handler->display->display_options['fields']['type']['id'] = 'type';
  $handler->display->display_options['fields']['type']['table'] = 'node';
  $handler->display->display_options['fields']['type']['field'] = 'type';
  $handler->display->display_options['fields']['type']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['fields']['type']['label'] = '';
  $handler->display->display_options['fields']['type']['exclude'] = TRUE;
  $handler->display->display_options['fields']['type']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['type']['machine_name'] = TRUE;
  /* Sort criterion: Content: Date and time -  start date (field_slot_datetime) */
  $handler->display->display_options['sorts']['field_slot_datetime_value']['id'] = 'field_slot_datetime_value';
  $handler->display->display_options['sorts']['field_slot_datetime_value']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['sorts']['field_slot_datetime_value']['field'] = 'field_slot_datetime_value';
  $handler->display->display_options['sorts']['field_slot_datetime_value']['relationship'] = 'field_slot_types_time_slot_target_id';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['filters']['status']['value'] = '1';
  /* Filter criterion: Content: Date and time -  start date (field_slot_datetime) */
  $handler->display->display_options['filters']['field_slot_datetime_value']['id'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['filters']['field_slot_datetime_value']['field'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value']['relationship'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['filters']['field_slot_datetime_value']['operator'] = '<';
  $handler->display->display_options['filters']['field_slot_datetime_value']['value']['value'] = '2013-11-01';
  $handler->display->display_options['filters']['field_slot_datetime_value']['form_type'] = 'date_popup';
  /* Filter criterion: Field collection item: Allowed Schedule Types (field_slot_types_allowed) */
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['id'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['table'] = 'field_data_field_slot_types_allowed';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['field'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['operator'] = '!=';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['value'] = 'bof_session';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['path'] = 'get-involved/london-summit-2013/agenda';
  $handler->display->display_options['menu']['type'] = 'normal';
  $handler->display->display_options['menu']['title'] = 'Agenda';
  $handler->display->display_options['menu']['weight'] = '-10';
  $handler->display->display_options['menu']['name'] = 'main-menu';
  $handler->display->display_options['menu']['context'] = 0;
  $handler->display->display_options['menu']['context_only_inline'] = 0;
  $handler->display->display_options['tab_options']['type'] = 'normal';
  $handler->display->display_options['tab_options']['title'] = 'Sessions';
  $handler->display->display_options['tab_options']['weight'] = '0';
  $handler->display->display_options['tab_options']['name'] = 'main-menu';

  /* Display: Attachment */
  $handler = $view->new_display('attachment', 'Attachment', 'attachment_1');
  $handler->display->display_options['pager']['type'] = 'none';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['defaults']['header'] = FALSE;
  /* Header: Global: Text area */
  $handler->display->display_options['header']['area']['id'] = 'area';
  $handler->display->display_options['header']['area']['table'] = 'views';
  $handler->display->display_options['header']['area']['field'] = 'area';
  $handler->display->display_options['header']['area']['empty'] = TRUE;
  $handler->display->display_options['header']['area']['content'] = 'Day 2 - Friday 1st November';
  $handler->display->display_options['header']['area']['format'] = 'full_html';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['relationship'] = 'reverse_field_session_timeslot_node';
  $handler->display->display_options['filters']['status']['value'] = '1';
  /* Filter criterion: Content: Date and time -  start date (field_slot_datetime) */
  $handler->display->display_options['filters']['field_slot_datetime_value']['id'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['filters']['field_slot_datetime_value']['field'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value']['relationship'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['filters']['field_slot_datetime_value']['operator'] = '>=';
  $handler->display->display_options['filters']['field_slot_datetime_value']['value']['value'] = '2013-11-01';
  $handler->display->display_options['filters']['field_slot_datetime_value']['granularity'] = 'hour';
  $handler->display->display_options['filters']['field_slot_datetime_value']['form_type'] = 'date_popup';
  /* Filter criterion: Field collection item: Allowed Schedule Types (field_slot_types_allowed) */
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['id'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['table'] = 'field_data_field_slot_types_allowed';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['field'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['operator'] = '!=';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['value'] = 'bof_session';
  $handler->display->display_options['displays'] = array(
    'page' => 'page',
    'default' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';
  $export['summit_session_grid'] = $view;

  return $export;
}
