<?php
/**
 * @file
 * ogp_summit.features.fe_block_boxes.inc
 */

/**
 * Implements hook_default_fe_block_boxes().
 */
function ogp_summit_default_fe_block_boxes() {
  $export = array();

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Flickr Stream';
  $fe_block_boxes->format = 'full_html';
  $fe_block_boxes->machine_name = 'flickr';
  $fe_block_boxes->body = '<p><iframe align="center" frameborder="0" height="290" scrolling="no" src="http://www.flickr.com/slideShow/index.gne?group_id=&user_id=76276598@N08&set_id=&text" width="290"></iframe></p>
';

  $export['flickr'] = $fe_block_boxes;

  return $export;
}
