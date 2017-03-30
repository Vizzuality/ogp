<?php
/**
 * @file
 * asia_pacific_regional_meeting_feature.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function asia_pacific_regional_meeting_feature_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'americas_pacific_regional_meeting_session_grid';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'field_collection_item';
  $view->human_name = 'americas_pacific_regional_meeting_session_grid';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Agenda';
  $handler->display->display_options['css_class'] = 'event_agenda_global_view';
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
  $handler->display->display_options['header']['area']['content'] = 'Day 1 - Tuesday 18th November';
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
  $handler->display->display_options['filters']['status']['group'] = 1;
  /* Filter criterion: Field collection item: Allowed Schedule Types (field_slot_types_allowed) */
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['id'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['table'] = 'field_data_field_slot_types_allowed';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['field'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['operator'] = '!=';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['value'] = 'bof_session';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['group'] = 1;
  /* Filter criterion: Content: Date and time -  start date (field_slot_datetime) */
  $handler->display->display_options['filters']['field_slot_datetime_value']['id'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['filters']['field_slot_datetime_value']['field'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value']['relationship'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['filters']['field_slot_datetime_value']['operator'] = 'between';
  $handler->display->display_options['filters']['field_slot_datetime_value']['value']['min'] = '2014-11-18 00:00';
  $handler->display->display_options['filters']['field_slot_datetime_value']['value']['max'] = '2014-11-18 23:59';
  $handler->display->display_options['filters']['field_slot_datetime_value']['value']['value'] = '2014-11-18 00:00';
  $handler->display->display_options['filters']['field_slot_datetime_value']['group'] = 1;
  $handler->display->display_options['filters']['field_slot_datetime_value']['granularity'] = 'minute';
  $handler->display->display_options['filters']['field_slot_datetime_value']['form_type'] = 'date_popup';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['path'] = 'get-involved/americas-regional-meeting/agenda';
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
  $handler->display->display_options['header']['area']['content'] = 'Day 2 - Wednesday 19th November';
  $handler->display->display_options['header']['area']['format'] = 'full_html';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
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
  /* Filter criterion: Content: Date and time -  start date (field_slot_datetime) */
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['id'] = 'field_slot_datetime_value_1';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['field'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['relationship'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['operator'] = 'between';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['value']['min'] = '2014-11-19 00:00';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['value']['max'] = '2014-11-19 23:59';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['value']['value'] = '2014-11-19 00:00';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['granularity'] = 'minute';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['form_type'] = 'date_popup';
  $handler->display->display_options['displays'] = array(
    'page' => 'page',
    'default' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';
  $export['americas_pacific_regional_meeting_session_grid'] = $view;

  $view = new view();
  $view->name = 'asia_pacific_regional_meeting_session_grid';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'field_collection_item';
  $view->human_name = 'asia_pacific_regional_meeting_session_grid';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Agenda';
  $handler->display->display_options['css_class'] = 'event_agenda_global_view';
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
  $handler->display->display_options['header']['area']['content'] = 'Day 1 - Tuesday 6th May';
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
  $handler->display->display_options['filters']['status']['group'] = 1;
  /* Filter criterion: Field collection item: Allowed Schedule Types (field_slot_types_allowed) */
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['id'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['table'] = 'field_data_field_slot_types_allowed';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['field'] = 'field_slot_types_allowed_value';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['operator'] = '!=';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['value'] = 'bof_session';
  $handler->display->display_options['filters']['field_slot_types_allowed_value']['group'] = 1;
  /* Filter criterion: Content: Date and time -  start date (field_slot_datetime) */
  $handler->display->display_options['filters']['field_slot_datetime_value']['id'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['filters']['field_slot_datetime_value']['field'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value']['relationship'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['filters']['field_slot_datetime_value']['operator'] = 'between';
  $handler->display->display_options['filters']['field_slot_datetime_value']['value']['min'] = '2014-05-05 18:00';
  $handler->display->display_options['filters']['field_slot_datetime_value']['value']['max'] = '2014-05-06 15:59';
  $handler->display->display_options['filters']['field_slot_datetime_value']['value']['value'] = '2014-05-06 00:00';
  $handler->display->display_options['filters']['field_slot_datetime_value']['group'] = 1;
  $handler->display->display_options['filters']['field_slot_datetime_value']['granularity'] = 'minute';
  $handler->display->display_options['filters']['field_slot_datetime_value']['form_type'] = 'date_popup';

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['defaults']['hide_admin_links'] = FALSE;
  $handler->display->display_options['path'] = 'get-involved/asia-pacific-regional-meeting/agenda';
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
  $handler->display->display_options['header']['area']['content'] = 'Day 2 - Wednesday 7th May';
  $handler->display->display_options['header']['area']['format'] = 'full_html';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
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
  /* Filter criterion: Content: Date and time -  start date (field_slot_datetime) */
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['id'] = 'field_slot_datetime_value_1';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['field'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['relationship'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['operator'] = 'between';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['value']['min'] = '2014-05-06 16:00';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['value']['max'] = '2014-05-07 23:59';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['value']['value'] = '2014-05-07 00:00';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['granularity'] = 'minute';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['form_type'] = 'date_popup';
  $handler->display->display_options['displays'] = array(
    'page' => 'page',
    'default' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';
  $export['asia_pacific_regional_meeting_session_grid'] = $view;

  $view = new view();
  $view->name = 'europe_pacific_regional_meeting_session_grid';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'field_collection_item';
  $view->human_name = 'europe_pacific_regional_meeting_session_grid';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Agenda';
  $handler->display->display_options['css_class'] = 'event_agenda_global_view';
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
  $handler->display->display_options['header']['area']['content'] = 'Day 1 - Thursday 8th May';
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
  $handler->display->display_options['filters']['field_slot_datetime_value']['value']['value'] = '2014-05-08';
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
  $handler->display->display_options['path'] = 'get-involved/europe-regional-meeting/agenda';
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
  $handler->display->display_options['header']['area']['content'] = 'Day 2 - Friday 9th May';
  $handler->display->display_options['header']['area']['format'] = 'full_html';
  $handler->display->display_options['defaults']['filter_groups'] = FALSE;
  $handler->display->display_options['defaults']['filters'] = FALSE;
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
  /* Filter criterion: Content: Date and time -  start date (field_slot_datetime) */
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['id'] = 'field_slot_datetime_value_1';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['table'] = 'field_data_field_slot_datetime';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['field'] = 'field_slot_datetime_value';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['relationship'] = 'field_slot_types_time_slot_target_id';
  $handler->display->display_options['filters']['field_slot_datetime_value_1']['value']['value'] = '2014-05-09';
  $handler->display->display_options['displays'] = array(
    'page' => 'page',
    'default' => 0,
  );
  $handler->display->display_options['attachment_position'] = 'after';
  $export['europe_pacific_regional_meeting_session_grid'] = $view;

  return $export;
}
