<?php
/**
 * @file
 * asia_pacific_regional_meeting_feature.features.fe_block_boxes.inc
 */

/**
 * Implements hook_default_fe_block_boxes().
 */
function asia_pacific_regional_meeting_feature_default_fe_block_boxes() {
  $export = array();

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page video block (america)';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'front_video_america';
  $fe_block_boxes->body = '<p>.</p>
';

  $export['front_video_america'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page video block (asia)';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'front_video_asia';
  $fe_block_boxes->body = '&nbsp;';

  $export['front_video_asia'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page video block (europe)';
  $fe_block_boxes->format = 'full_html';
  $fe_block_boxes->machine_name = 'front_video_europe';
  $fe_block_boxes->body = '<p>&nbsp;</p>
';

  $export['front_video_europe'] = $fe_block_boxes;

  return $export;
}
