<?php
/**
 * @file
 * ogp_twitter.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function ogp_twitter_filter_default_formats() {
  $formats = array();

  // Exported format: Tweet.
  $formats['tweet'] = array(
    'format' => 'tweet',
    'name' => 'Tweet',
    'cache' => 1,
    'status' => 1,
    'weight' => -6,
    'filters' => array(
      'filter_html_escape' => array(
        'weight' => -10,
        'status' => 1,
        'settings' => array(),
      ),
      'filter_url' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(
          'filter_url_length' => 72,
        ),
      ),
      'twitter_hashtag' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(),
      ),
      'twitter_links' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(),
      ),
      'twitter_username' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(),
      ),
    ),
  );

  return $formats;
}
