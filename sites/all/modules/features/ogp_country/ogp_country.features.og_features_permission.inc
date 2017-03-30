<?php
/**
 * @file
 * ogp_country.features.og_features_permission.inc
 */

/**
 * Implements hook_og_features_default_permissions().
 */
function ogp_country_og_features_default_permissions() {
  $permissions = array();

  // Exported og permission: 'node:country_page:add user'
  $permissions['node:country_page:add user'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:administer group'
  $permissions['node:country_page:administer group'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:administer og menu'
  $permissions['node:country_page:administer og menu'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:approve and deny subscription'
  $permissions['node:country_page:approve and deny subscription'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:create case_study content'
  $permissions['node:country_page:create case_study content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:create link content'
  $permissions['node:country_page:create link content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:create news content'
  $permissions['node:country_page:create news content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:create tweet content'
  $permissions['node:country_page:create tweet content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:delete any case_study content'
  $permissions['node:country_page:delete any case_study content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:delete any link content'
  $permissions['node:country_page:delete any link content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:delete any news content'
  $permissions['node:country_page:delete any news content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:delete any tweet content'
  $permissions['node:country_page:delete any tweet content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:delete own case_study content'
  $permissions['node:country_page:delete own case_study content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:delete own link content'
  $permissions['node:country_page:delete own link content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:delete own news content'
  $permissions['node:country_page:delete own news content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:delete own tweet content'
  $permissions['node:country_page:delete own tweet content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:manage members'
  $permissions['node:country_page:manage members'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:manage permissions'
  $permissions['node:country_page:manage permissions'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:manage roles'
  $permissions['node:country_page:manage roles'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:subscribe'
  $permissions['node:country_page:subscribe'] = array(
    'roles' => array(
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:subscribe without approval'
  $permissions['node:country_page:subscribe without approval'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:unsubscribe'
  $permissions['node:country_page:unsubscribe'] = array(
    'roles' => array(
      'member' => 'member',
    ),
  );

  // Exported og permission: 'node:country_page:update any case_study content'
  $permissions['node:country_page:update any case_study content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update any link content'
  $permissions['node:country_page:update any link content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update any news content'
  $permissions['node:country_page:update any news content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update any tweet content'
  $permissions['node:country_page:update any tweet content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update body field'
  $permissions['node:country_page:update body field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:update field_activities field'
  $permissions['node:country_page:update field_activities field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_attachment field'
  $permissions['node:country_page:update field_attachment field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_authors field'
  $permissions['node:country_page:update field_authors field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_bio field'
  $permissions['node:country_page:update field_bio field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_byline field'
  $permissions['node:country_page:update field_byline field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_commitment_status field'
  $permissions['node:country_page:update field_commitment_status field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_contact_email field'
  $permissions['node:country_page:update field_contact_email field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_contact_name field'
  $permissions['node:country_page:update field_contact_name field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_contact_phone field'
  $permissions['node:country_page:update field_contact_phone field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_country field'
  $permissions['node:country_page:update field_country field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_country_ap_descripion field'
  $permissions['node:country_page:update field_country_ap_descripion field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_country_ap_pdf field'
  $permissions['node:country_page:update field_country_ap_pdf field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_country_ap_responsible field'
  $permissions['node:country_page:update field_country_ap_responsible field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_country_cover_photo field'
  $permissions['node:country_page:update field_country_cover_photo field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_country_ogp_website field'
  $permissions['node:country_page:update field_country_ogp_website field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_country_status field'
  $permissions['node:country_page:update field_country_status field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_country_twitter_account field'
  $permissions['node:country_page:update field_country_twitter_account field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_description field'
  $permissions['node:country_page:update field_description field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_end_date field'
  $permissions['node:country_page:update field_end_date field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update field_full_name field'
  $permissions['node:country_page:update field_full_name field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_job_title field'
  $permissions['node:country_page:update field_job_title field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_link field'
  $permissions['node:country_page:update field_link field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_measurement field'
  $permissions['node:country_page:update field_measurement field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_media field'
  $permissions['node:country_page:update field_media field'] = array(
    'roles' => array(
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:update field_member_since field'
  $permissions['node:country_page:update field_member_since field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_partner_organizations field'
  $permissions['node:country_page:update field_partner_organizations field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_pdf_version field'
  $permissions['node:country_page:update field_pdf_version field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_people_reached field'
  $permissions['node:country_page:update field_people_reached field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_publication_date field'
  $permissions['node:country_page:update field_publication_date field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_publication_name field'
  $permissions['node:country_page:update field_publication_name field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_qa field'
  $permissions['node:country_page:update field_qa field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_resource_link field'
  $permissions['node:country_page:update field_resource_link field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_start_date field'
  $permissions['node:country_page:update field_start_date field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update field_summary field'
  $permissions['node:country_page:update field_summary field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_tags field'
  $permissions['node:country_page:update field_tags field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_topic field'
  $permissions['node:country_page:update field_topic field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_twitter_account field'
  $permissions['node:country_page:update field_twitter_account field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_twitter_id field'
  $permissions['node:country_page:update field_twitter_id field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_twitter_text field'
  $permissions['node:country_page:update field_twitter_text field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update field_use_lead_point field'
  $permissions['node:country_page:update field_use_lead_point field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update group'
  $permissions['node:country_page:update group'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update group_group field'
  $permissions['node:country_page:update group_group field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update og_group_ref field'
  $permissions['node:country_page:update og_group_ref field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update og_user_node field'
  $permissions['node:country_page:update og_user_node field'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update own case_study content'
  $permissions['node:country_page:update own case_study content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update own link content'
  $permissions['node:country_page:update own link content'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:update own news content'
  $permissions['node:country_page:update own news content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:update own tweet content'
  $permissions['node:country_page:update own tweet content'] = array(
    'roles' => array(),
  );

  // Exported og permission: 'node:country_page:view body field'
  $permissions['node:country_page:view body field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_activities field'
  $permissions['node:country_page:view field_activities field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_attachment field'
  $permissions['node:country_page:view field_attachment field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_authors field'
  $permissions['node:country_page:view field_authors field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_bio field'
  $permissions['node:country_page:view field_bio field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_byline field'
  $permissions['node:country_page:view field_byline field'] = array(
    'roles' => array(
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_commitment_status field'
  $permissions['node:country_page:view field_commitment_status field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_contact_email field'
  $permissions['node:country_page:view field_contact_email field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_contact_name field'
  $permissions['node:country_page:view field_contact_name field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_contact_phone field'
  $permissions['node:country_page:view field_contact_phone field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_country field'
  $permissions['node:country_page:view field_country field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_country_ap_descripion field'
  $permissions['node:country_page:view field_country_ap_descripion field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_country_ap_pdf field'
  $permissions['node:country_page:view field_country_ap_pdf field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_country_ap_responsible field'
  $permissions['node:country_page:view field_country_ap_responsible field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_country_cover_photo field'
  $permissions['node:country_page:view field_country_cover_photo field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_country_ogp_website field'
  $permissions['node:country_page:view field_country_ogp_website field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_country_status field'
  $permissions['node:country_page:view field_country_status field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_country_twitter_account field'
  $permissions['node:country_page:view field_country_twitter_account field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_description field'
  $permissions['node:country_page:view field_description field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_end_date field'
  $permissions['node:country_page:view field_end_date field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_full_name field'
  $permissions['node:country_page:view field_full_name field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_job_title field'
  $permissions['node:country_page:view field_job_title field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_link field'
  $permissions['node:country_page:view field_link field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_measurement field'
  $permissions['node:country_page:view field_measurement field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_media field'
  $permissions['node:country_page:view field_media field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_member_since field'
  $permissions['node:country_page:view field_member_since field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_name_of_the_button field'
  $permissions['node:country_page:view field_name_of_the_button field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_partner_organizations field'
  $permissions['node:country_page:view field_partner_organizations field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_pdf_national field'
  $permissions['node:country_page:view field_pdf_national field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_pdf_version field'
  $permissions['node:country_page:view field_pdf_version field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_people_reached field'
  $permissions['node:country_page:view field_people_reached field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_publication_date field'
  $permissions['node:country_page:view field_publication_date field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_publication_name field'
  $permissions['node:country_page:view field_publication_name field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_qa field'
  $permissions['node:country_page:view field_qa field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_report_comments_page field'
  $permissions['node:country_page:view field_report_comments_page field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_resource_link field'
  $permissions['node:country_page:view field_resource_link field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_start_date field'
  $permissions['node:country_page:view field_start_date field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_summary field'
  $permissions['node:country_page:view field_summary field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_tags field'
  $permissions['node:country_page:view field_tags field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_topic field'
  $permissions['node:country_page:view field_topic field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_twitter_account field'
  $permissions['node:country_page:view field_twitter_account field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_twitter_id field'
  $permissions['node:country_page:view field_twitter_id field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_twitter_text field'
  $permissions['node:country_page:view field_twitter_text field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view field_use_lead_point field'
  $permissions['node:country_page:view field_use_lead_point field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
    ),
  );

  // Exported og permission: 'node:country_page:view group_group field'
  $permissions['node:country_page:view group_group field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view og_group_ref field'
  $permissions['node:country_page:view og_group_ref field'] = array(
    'roles' => array(
      'administrator member' => 'administrator member',
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view og_user_node field'
  $permissions['node:country_page:view og_user_node field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  // Exported og permission: 'node:country_page:view title_field field'
  $permissions['node:country_page:view title_field field'] = array(
    'roles' => array(
      'member' => 'member',
      'non-member' => 'non-member',
    ),
  );

  return $permissions;
}
