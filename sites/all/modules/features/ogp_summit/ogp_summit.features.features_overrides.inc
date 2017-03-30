<?php
/**
 * @file
 * ogp_summit.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function ogp_summit_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: field
  $overrides["field.node-schedule_item-field_accepted.field_config|settings|entity_translation_sync"] = FALSE;
  $overrides["field.node-schedule_item-field_accepted.field_instance|display|default|module"]["DELETED"] = TRUE;
  $overrides["field.node-schedule_item-field_accepted.field_instance|display|default|type"] = 'hidden';
  $overrides["field.node-schedule_item-field_session_timeslot.field_config|settings|entity_translation_sync"] = FALSE;
  $overrides["field.node-schedule_item-field_session_timeslot.field_instance|display|default|label"] = 'hidden';
  $overrides["field.node-schedule_item-field_session_timeslot.field_instance|display|default|settings"] = array(
    'links' => 1,
    'view_mode' => 'full',
  );
  $overrides["field.node-schedule_item-field_session_timeslot.field_instance|display|default|type"] = 'entityreference_entity_view';
  $overrides["field.node-schedule_item-field_session_timeslot.field_instance|display|default|weight"] = 0;
  $overrides["field.node-schedule_item-field_session_timeslot.field_instance|settings|entity_translation_sync"] = FALSE;
  $overrides["field.node-schedule_item-field_session_timeslot.field_instance|widget|settings"]["DELETED"] = TRUE;
  $overrides["field.node-schedule_item-og_group_ref.field_instance|display|default|module"]["DELETED"] = TRUE;
  $overrides["field.node-schedule_item-og_group_ref.field_instance|display|default|type"] = 'hidden';
  $overrides["field.node-schedule_item-og_group_ref.field_instance|display|default|weight"] = 3;
  $overrides["field.node-schedule_item-og_group_ref.field_instance|settings|entity_translation_sync"] = FALSE;
  $overrides["field.node-session-body.field_instance|display"] = array(
    'default' => array(
      'label' => 'hidden',
      'module' => 'text',
      'settings' => array(),
      'type' => 'text_default',
      'weight' => 0,
    ),
  );
  $overrides["field.node-session-field_accepted.field_instance|display|default|module"]["DELETED"] = TRUE;
  $overrides["field.node-session-field_accepted.field_instance|display|default|type"] = 'hidden';
  $overrides["field.node-session-field_experience.field_config|cardinality"] = -1;
  $overrides["field.node-session-field_experience.field_config|foreign keys|tid"] = array(
    'columns' => array(
      'tid' => 'tid',
    ),
    'table' => 'taxonomy_term_data',
  );
  $overrides["field.node-session-field_experience.field_config|indexes"] = array(
    'tid' => array(
      0 => 'tid',
    ),
  );
  $overrides["field.node-session-field_experience.field_config|module"] = 'taxonomy';
  $overrides["field.node-session-field_experience.field_config|settings|allowed_values_function"]["DELETED"] = TRUE;
  $overrides["field.node-session-field_experience.field_config|settings|allowed_values|0"] = array(
    'parent' => 0,
    'vocabulary' => 'experience',
  );
  $overrides["field.node-session-field_experience.field_config|settings|allowed_values|advanced"]["DELETED"] = TRUE;
  $overrides["field.node-session-field_experience.field_config|settings|allowed_values|beginner"]["DELETED"] = TRUE;
  $overrides["field.node-session-field_experience.field_config|settings|allowed_values|intermediate"]["DELETED"] = TRUE;
  $overrides["field.node-session-field_experience.field_config|settings|entity_translation_sync"] = FALSE;
  $overrides["field.node-session-field_experience.field_config|settings|field_permissions"]["DELETED"] = TRUE;
  $overrides["field.node-session-field_experience.field_config|settings|options_list_callback"] = 'i18n_taxonomy_allowed_values';
  $overrides["field.node-session-field_experience.field_config|translatable"] = 0;
  $overrides["field.node-session-field_experience.field_config|type"] = 'taxonomy_term_reference';
  $overrides["field.node-session-field_experience.field_instance|display|default|module"]["DELETED"] = TRUE;
  $overrides["field.node-session-field_experience.field_instance|display|default|type"] = 'hidden';
  $overrides["field.node-session-field_session_timeslot.field_instance|display|default|label"] = 'hidden';
  $overrides["field.node-session-field_session_timeslot.field_instance|display|default|module"]["DELETED"] = TRUE;
  $overrides["field.node-session-field_session_timeslot.field_instance|display|default|settings"] = array();
  $overrides["field.node-session-field_session_timeslot.field_instance|display|default|type"] = 'hidden';
  $overrides["field.node-session-field_session_timeslot.field_instance|display|default|weight"] = 4;
  $overrides["field.node-session-field_session_timeslot.field_instance|widget|settings"]["DELETED"] = TRUE;
  $overrides["field.node-session-field_slides.field_instance|display|default|label"] = 'inline';
  $overrides["field.node-session-field_slides.field_instance|display|default|weight"] = 1;
  $overrides["field.node-session-field_slides.field_instance|settings|entity_translation_sync"] = FALSE;
  $overrides["field.node-session-field_speakers.field_config|settings|entity_translation_sync"] = FALSE;
  $overrides["field.node-session-field_speakers.field_config|settings|handler_settings|sort"]["DELETED"] = TRUE;
  $overrides["field.node-session-field_speakers.field_instance|default_value_function"] = '';
  $overrides["field.node-session-field_speakers.field_instance|display"] = array(
    'default' => array(
      'label' => 'inline',
      'module' => 'entityreference',
      'settings' => array(
        'link' => 0,
      ),
      'type' => 'entityreference_label',
      'weight' => 2,
    ),
  );
  $overrides["field.node-session-field_speakers.field_instance|ds_extras_field_template"] = '';
  $overrides["field.node-session-field_speakers.field_instance|required"] = 0;
  $overrides["field.node-session-field_track.field_config|settings|allowed_values|Empowering Citizens"] = 'Empowering Citizens';
  $overrides["field.node-session-field_track.field_config|settings|allowed_values|Fiscal Transparency"] = 'Fiscal Transparency';
  $overrides["field.node-session-field_track.field_config|settings|allowed_values|Government Integrity"] = 'Government Integrity';
  $overrides["field.node-session-field_track.field_config|settings|allowed_values|Natural Resource Transparency"] = 'Natural Resource Transparency';
  $overrides["field.node-session-field_track.field_config|settings|allowed_values|Open Data"] = 'Open Data';
  $overrides["field.node-session-field_track.field_config|settings|allowed_values|Track 1"]["DELETED"] = TRUE;
  $overrides["field.node-session-field_track.field_config|settings|allowed_values|Track 2"]["DELETED"] = TRUE;
  $overrides["field.node-session-field_track.field_config|settings|allowed_values|Track 3"]["DELETED"] = TRUE;
  $overrides["field.node-session-field_track.field_config|settings|entity_translation_sync"] = FALSE;
  $overrides["field.node-session-field_track.field_instance|display|default|label"] = 'hidden';
  $overrides["field.node-session-field_track.field_instance|display|default|weight"] = 3;
  $overrides["field.node-session-field_track.field_instance|ds_extras_field_template"] = '';
  $overrides["field.node-session-og_group_ref.field_instance|display|default|module"]["DELETED"] = TRUE;
  $overrides["field.node-session-og_group_ref.field_instance|display|default|type"] = 'hidden';
  $overrides["field.node-session-og_group_ref.field_instance|display|default|weight"] = 5;
  $overrides["field.node-time_slot-field_slot_datetime.field_config|settings|cache_count"] = 4;
  $overrides["field.node-time_slot-field_slot_datetime.field_config|settings|cache_enabled"] = 0;
  $overrides["field.node-time_slot-field_slot_datetime.field_config|settings|entity_translation_sync"] = FALSE;
  $overrides["field.node-time_slot-field_slot_datetime.field_config|settings|granularity|second"] = 0;
  $overrides["field.node-time_slot-field_slot_datetime.field_config|settings|repeat"]["DELETED"] = TRUE;
  $overrides["field.node-time_slot-field_slot_datetime.field_config|settings|tz_handling"] = 'date';
  $overrides["field.node-time_slot-field_slot_datetime.field_config|translatable"] = 0;
  $overrides["field.node-time_slot-field_slot_datetime.field_instance|display|default|settings|show_repeat_rule"]["DELETED"] = TRUE;
  $overrides["field.node-time_slot-field_slot_datetime.field_instance|display|default|weight"] = 3;
  $overrides["field.node-time_slot-field_slot_datetime.field_instance|ds_extras_field_template"] = '';
  $overrides["field.node-time_slot-field_slot_datetime.field_instance|settings|default_format"]["DELETED"] = TRUE;
  $overrides["field.node-time_slot-field_slot_datetime.field_instance|settings|default_value2"] = 'same';
  $overrides["field.node-time_slot-field_slot_datetime.field_instance|settings|entity_translation_sync"] = FALSE;
  $overrides["field.node-time_slot-field_slot_datetime.field_instance|widget|settings|display_all_day"]["DELETED"] = TRUE;
  $overrides["field.node-time_slot-field_slot_datetime.field_instance|widget|settings|increment"] = 15;
  $overrides["field.node-time_slot-field_slot_datetime.field_instance|widget|settings|input_format"] = 'm/d/Y - g:i:sa';
  $overrides["field.node-time_slot-field_slot_datetime.field_instance|widget|settings|repeat_collapsed"]["DELETED"] = TRUE;
  $overrides["field.node-time_slot-field_slot_datetime.field_instance|widget|type"] = 'date_popup';
  $overrides["field.node-time_slot-field_slot_datetime.field_instance|widget|weight"] = 0;

  // Exported overrides for: variable
  $overrides["variable.comment_session.value"] = 1;
  $overrides["variable.field_bundle_settings_node__schedule_item.value|view_modes|full"] = array(
    'custom_settings' => FALSE,
  );
  $overrides["variable.field_bundle_settings_node__schedule_item.value|view_modes|teaser"] = array(
    'custom_settings' => TRUE,
  );
  $overrides["variable.field_bundle_settings_node__session.value|view_modes"]["DELETED"] = TRUE;
  $overrides["variable.node_options_session.value"]["DELETED"] = TRUE;
  $overrides["variable.node_submitted_session.value"] = 0;

  // Exported overrides for: views_view
  $overrides["views_view.camp_session_grid.display|default|display_options|filters|field_slot_datetime_value|value|max"] = 2;
  $overrides["views_view.camp_session_grid.display|default|display_options|filters|field_slot_datetime_value|value|min"] = 2;
  $overrides["views_view.camp_session_grid.display|default|display_options|filters|field_slot_datetime_value|value|type"] = 2;
  $overrides["views_view.camp_session_grid.display|default|display_options|filters|field_slot_datetime_value|value|value"] = 2;

 return $overrides;
}
