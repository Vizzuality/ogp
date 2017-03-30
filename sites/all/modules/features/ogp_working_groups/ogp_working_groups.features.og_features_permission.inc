<?php
/**
 * @file
 * ogp_working_groups.features.og_features_permission.inc
 */

/**
 * Implements hook_og_features_default_permissions().
 */
function ogp_working_groups_og_features_default_permissions() {
  $permissions = array();

  // Exported og permission: 'node:working_group:add user'
  $permissions['node:working_group:add user'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:administer group'
  $permissions['node:working_group:administer group'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:administer og menu'
  $permissions['node:working_group:administer og menu'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:approve and deny subscription'
  $permissions['node:working_group:approve and deny subscription'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:create case_study content'
  $permissions['node:working_group:create case_study content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:create civic_society_org content'
  $permissions['node:working_group:create civic_society_org content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:create commitment content'
  $permissions['node:working_group:create commitment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:create irm_report content'
  $permissions['node:working_group:create irm_report content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:create link content'
  $permissions['node:working_group:create link content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:create news content'
  $permissions['node:working_group:create news content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:create room content'
  $permissions['node:working_group:create room content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:create schedule_item content'
  $permissions['node:working_group:create schedule_item content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:create self_assessment content'
  $permissions['node:working_group:create self_assessment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:create session content'
  $permissions['node:working_group:create session content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:create time_slot content'
  $permissions['node:working_group:create time_slot content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:create toolkit content'
  $permissions['node:working_group:create toolkit content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:create tweet content'
  $permissions['node:working_group:create tweet content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:create working_group_page content'
  $permissions['node:working_group:create working_group_page content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
    ),
  );

  // Exported og permission: 'node:working_group:delete any case_study content'
  $permissions['node:working_group:delete any case_study content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete any civic_society_org content'
  $permissions['node:working_group:delete any civic_society_org content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete any commitment content'
  $permissions['node:working_group:delete any commitment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete any irm_report content'
  $permissions['node:working_group:delete any irm_report content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete any link content'
  $permissions['node:working_group:delete any link content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete any news content'
  $permissions['node:working_group:delete any news content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete any room content'
  $permissions['node:working_group:delete any room content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete any schedule_item content'
  $permissions['node:working_group:delete any schedule_item content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete any self_assessment content'
  $permissions['node:working_group:delete any self_assessment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete any session content'
  $permissions['node:working_group:delete any session content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete any time_slot content'
  $permissions['node:working_group:delete any time_slot content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete any toolkit content'
  $permissions['node:working_group:delete any toolkit content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete any tweet content'
  $permissions['node:working_group:delete any tweet content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete any working_group_page content'
  $permissions['node:working_group:delete any working_group_page content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
    ),
  );

  // Exported og permission: 'node:working_group:delete own case_study content'
  $permissions['node:working_group:delete own case_study content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete own civic_society_org content'
  $permissions['node:working_group:delete own civic_society_org content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete own commitment content'
  $permissions['node:working_group:delete own commitment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete own irm_report content'
  $permissions['node:working_group:delete own irm_report content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete own link content'
  $permissions['node:working_group:delete own link content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete own news content'
  $permissions['node:working_group:delete own news content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete own room content'
  $permissions['node:working_group:delete own room content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete own schedule_item content'
  $permissions['node:working_group:delete own schedule_item content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete own self_assessment content'
  $permissions['node:working_group:delete own self_assessment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete own session content'
  $permissions['node:working_group:delete own session content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete own time_slot content'
  $permissions['node:working_group:delete own time_slot content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete own toolkit content'
  $permissions['node:working_group:delete own toolkit content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete own tweet content'
  $permissions['node:working_group:delete own tweet content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:delete own working_group_page content'
  $permissions['node:working_group:delete own working_group_page content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
    ),
  );

  // Exported og permission: 'node:working_group:manage members'
  $permissions['node:working_group:manage members'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:manage permissions'
  $permissions['node:working_group:manage permissions'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:manage roles'
  $permissions['node:working_group:manage roles'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:subscribe'
  $permissions['node:working_group:subscribe'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:subscribe without approval'
  $permissions['node:working_group:subscribe without approval'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:unsubscribe'
  $permissions['node:working_group:unsubscribe'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any case_study content'
  $permissions['node:working_group:update any case_study content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any civic_society_org content'
  $permissions['node:working_group:update any civic_society_org content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any commitment content'
  $permissions['node:working_group:update any commitment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any irm_report content'
  $permissions['node:working_group:update any irm_report content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any link content'
  $permissions['node:working_group:update any link content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any news content'
  $permissions['node:working_group:update any news content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any room content'
  $permissions['node:working_group:update any room content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any schedule_item content'
  $permissions['node:working_group:update any schedule_item content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any self_assessment content'
  $permissions['node:working_group:update any self_assessment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any session content'
  $permissions['node:working_group:update any session content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any time_slot content'
  $permissions['node:working_group:update any time_slot content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any toolkit content'
  $permissions['node:working_group:update any toolkit content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any tweet content'
  $permissions['node:working_group:update any tweet content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update any working_group_page content'
  $permissions['node:working_group:update any working_group_page content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
    ),
  );

  // Exported og permission: 'node:working_group:update body field'
  $permissions['node:working_group:update body field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_accepted field'
  $permissions['node:working_group:update field_accepted field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_activities field'
  $permissions['node:working_group:update field_activities field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_attachment field'
  $permissions['node:working_group:update field_attachment field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_authors field'
  $permissions['node:working_group:update field_authors field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_bio field'
  $permissions['node:working_group:update field_bio field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_byline field'
  $permissions['node:working_group:update field_byline field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_commitment_status field'
  $permissions['node:working_group:update field_commitment_status field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_contact_email field'
  $permissions['node:working_group:update field_contact_email field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_contact_name field'
  $permissions['node:working_group:update field_contact_name field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_contact_phone field'
  $permissions['node:working_group:update field_contact_phone field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_country field'
  $permissions['node:working_group:update field_country field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_country_ap_descripion field'
  $permissions['node:working_group:update field_country_ap_descripion field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_country_ap_pdf field'
  $permissions['node:working_group:update field_country_ap_pdf field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_country_ap_responsible field'
  $permissions['node:working_group:update field_country_ap_responsible field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_country_cover_photo field'
  $permissions['node:working_group:update field_country_cover_photo field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_country_ogp_website field'
  $permissions['node:working_group:update field_country_ogp_website field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_country_status field'
  $permissions['node:working_group:update field_country_status field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_country_twitter_account field'
  $permissions['node:working_group:update field_country_twitter_account field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_date field'
  $permissions['node:working_group:update field_date field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_description field'
  $permissions['node:working_group:update field_description field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_end_date field'
  $permissions['node:working_group:update field_end_date field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_experience field'
  $permissions['node:working_group:update field_experience field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_full_name field'
  $permissions['node:working_group:update field_full_name field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_job_title field'
  $permissions['node:working_group:update field_job_title field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_link field'
  $permissions['node:working_group:update field_link field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_livestream_str field'
  $permissions['node:working_group:update field_livestream_str field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_location field'
  $permissions['node:working_group:update field_location field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_measurement field'
  $permissions['node:working_group:update field_measurement field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_media field'
  $permissions['node:working_group:update field_media field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_member_since field'
  $permissions['node:working_group:update field_member_since field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_og_working_group field'
  $permissions['node:working_group:update field_og_working_group field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update field_partner_organizations field'
  $permissions['node:working_group:update field_partner_organizations field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_pdf_version field'
  $permissions['node:working_group:update field_pdf_version field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_people_reached field'
  $permissions['node:working_group:update field_people_reached field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_publication_date field'
  $permissions['node:working_group:update field_publication_date field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_publication_name field'
  $permissions['node:working_group:update field_publication_name field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_qa field'
  $permissions['node:working_group:update field_qa field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_resource_link field'
  $permissions['node:working_group:update field_resource_link field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_room_capacity field'
  $permissions['node:working_group:update field_room_capacity field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_room_photo field'
  $permissions['node:working_group:update field_room_photo field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_room_slots_types_allowed field'
  $permissions['node:working_group:update field_room_slots_types_allowed field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_session_timeslot field'
  $permissions['node:working_group:update field_session_timeslot field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_slides field'
  $permissions['node:working_group:update field_slides field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_slot_datetime field'
  $permissions['node:working_group:update field_slot_datetime field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_speakers field'
  $permissions['node:working_group:update field_speakers field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_start_date field'
  $permissions['node:working_group:update field_start_date field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_subtitle field'
  $permissions['node:working_group:update field_subtitle field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_summary field'
  $permissions['node:working_group:update field_summary field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_tags field'
  $permissions['node:working_group:update field_tags field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_topic field'
  $permissions['node:working_group:update field_topic field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_track field'
  $permissions['node:working_group:update field_track field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_twitter_account field'
  $permissions['node:working_group:update field_twitter_account field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_twitter_id field'
  $permissions['node:working_group:update field_twitter_id field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_twitter_text field'
  $permissions['node:working_group:update field_twitter_text field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update field_use_lead_point field'
  $permissions['node:working_group:update field_use_lead_point field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update group'
  $permissions['node:working_group:update group'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update group_group field'
  $permissions['node:working_group:update group_group field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update og_group_ref field'
  $permissions['node:working_group:update og_group_ref field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update og_user_node field'
  $permissions['node:working_group:update og_user_node field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:update own case_study content'
  $permissions['node:working_group:update own case_study content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update own civic_society_org content'
  $permissions['node:working_group:update own civic_society_org content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update own commitment content'
  $permissions['node:working_group:update own commitment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update own irm_report content'
  $permissions['node:working_group:update own irm_report content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update own link content'
  $permissions['node:working_group:update own link content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update own news content'
  $permissions['node:working_group:update own news content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update own room content'
  $permissions['node:working_group:update own room content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update own schedule_item content'
  $permissions['node:working_group:update own schedule_item content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update own self_assessment content'
  $permissions['node:working_group:update own self_assessment content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update own session content'
  $permissions['node:working_group:update own session content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update own time_slot content'
  $permissions['node:working_group:update own time_slot content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update own toolkit content'
  $permissions['node:working_group:update own toolkit content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update own tweet content'
  $permissions['node:working_group:update own tweet content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:update own working_group_page content'
  $permissions['node:working_group:update own working_group_page content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
    ),
  );

  // Exported og permission: 'node:working_group:update title_field field'
  $permissions['node:working_group:update title_field field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:working_group:view body field'
  $permissions['node:working_group:view body field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_accepted field'
  $permissions['node:working_group:view field_accepted field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_activities field'
  $permissions['node:working_group:view field_activities field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_attachment field'
  $permissions['node:working_group:view field_attachment field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_authors field'
  $permissions['node:working_group:view field_authors field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_bio field'
  $permissions['node:working_group:view field_bio field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_byline field'
  $permissions['node:working_group:view field_byline field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_commitment_status field'
  $permissions['node:working_group:view field_commitment_status field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_contact_email field'
  $permissions['node:working_group:view field_contact_email field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_contact_name field'
  $permissions['node:working_group:view field_contact_name field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_contact_phone field'
  $permissions['node:working_group:view field_contact_phone field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_country field'
  $permissions['node:working_group:view field_country field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_country_ap_descripion field'
  $permissions['node:working_group:view field_country_ap_descripion field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_country_ap_pdf field'
  $permissions['node:working_group:view field_country_ap_pdf field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_country_ap_responsible field'
  $permissions['node:working_group:view field_country_ap_responsible field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_country_cover_photo field'
  $permissions['node:working_group:view field_country_cover_photo field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_country_ogp_website field'
  $permissions['node:working_group:view field_country_ogp_website field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_country_status field'
  $permissions['node:working_group:view field_country_status field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_country_twitter_account field'
  $permissions['node:working_group:view field_country_twitter_account field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_date field'
  $permissions['node:working_group:view field_date field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_description field'
  $permissions['node:working_group:view field_description field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_end_date field'
  $permissions['node:working_group:view field_end_date field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_experience field'
  $permissions['node:working_group:view field_experience field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_full_name field'
  $permissions['node:working_group:view field_full_name field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_job_title field'
  $permissions['node:working_group:view field_job_title field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_link field'
  $permissions['node:working_group:view field_link field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_livestream_str field'
  $permissions['node:working_group:view field_livestream_str field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_location field'
  $permissions['node:working_group:view field_location field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_measurement field'
  $permissions['node:working_group:view field_measurement field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_media field'
  $permissions['node:working_group:view field_media field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_member_since field'
  $permissions['node:working_group:view field_member_since field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_og_working_group field'
  $permissions['node:working_group:view field_og_working_group field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:working_group:view field_partner_organizations field'
  $permissions['node:working_group:view field_partner_organizations field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_pdf_version field'
  $permissions['node:working_group:view field_pdf_version field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_people_reached field'
  $permissions['node:working_group:view field_people_reached field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_publication_date field'
  $permissions['node:working_group:view field_publication_date field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_publication_name field'
  $permissions['node:working_group:view field_publication_name field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_qa field'
  $permissions['node:working_group:view field_qa field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_resource_link field'
  $permissions['node:working_group:view field_resource_link field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_room_capacity field'
  $permissions['node:working_group:view field_room_capacity field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_room_photo field'
  $permissions['node:working_group:view field_room_photo field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_room_slots_types_allowed field'
  $permissions['node:working_group:view field_room_slots_types_allowed field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_session_timeslot field'
  $permissions['node:working_group:view field_session_timeslot field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_slides field'
  $permissions['node:working_group:view field_slides field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_slot_datetime field'
  $permissions['node:working_group:view field_slot_datetime field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_speakers field'
  $permissions['node:working_group:view field_speakers field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_start_date field'
  $permissions['node:working_group:view field_start_date field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_subtitle field'
  $permissions['node:working_group:view field_subtitle field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_summary field'
  $permissions['node:working_group:view field_summary field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_tags field'
  $permissions['node:working_group:view field_tags field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_topic field'
  $permissions['node:working_group:view field_topic field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_track field'
  $permissions['node:working_group:view field_track field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_twitter_account field'
  $permissions['node:working_group:view field_twitter_account field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_twitter_id field'
  $permissions['node:working_group:view field_twitter_id field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_twitter_text field'
  $permissions['node:working_group:view field_twitter_text field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view field_use_lead_point field'
  $permissions['node:working_group:view field_use_lead_point field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view group_group field'
  $permissions['node:working_group:view group_group field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view og_group_ref field'
  $permissions['node:working_group:view og_group_ref field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view og_user_node field'
  $permissions['node:working_group:view og_user_node field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:working_group:view title_field field'
  $permissions['node:working_group:view title_field field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  return $permissions;
}
