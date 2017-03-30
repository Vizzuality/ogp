<?php
/**
 * @file
 * test_default.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function test_default_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "bean_admin_ui" && $api == "bean") {
    return array("version" => "5");
  }
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function test_default_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function test_default_node_info() {
  $items = array(
    'civic_society_org' => array(
      'name' => t('Civic Society Organization'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'expert' => array(
      'name' => t('Expert'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'migrate_extras_media_example' => array(
      'name' => t('Migrate Extras Media Example'),
      'base' => 'node_content',
      'description' => t('Content type for testing Migrate Extras support for the Media module.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'minutes' => array(
      'name' => t('Meeting minutes'),
      'base' => 'node_content',
      'description' => t('Minutes from OGP meetings.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'news_and_events' => array(
      'name' => t('News and Events'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'room' => array(
      'name' => t('Room'),
      'base' => 'node_content',
      'description' => t('Rooms provide a location for each session.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => t('What type of space is this? How is the seating arranged? Are there any other information to be shared?'),
    ),
    'schedule_item' => array(
      'name' => t('Schedule Item'),
      'base' => 'node_content',
      'description' => t('Use schedule items for content you wish to have in the schedule but not be part of any session submission workflows. Examples include scheduling lunch or breaks.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'session' => array(
      'name' => t('Session'),
      'base' => 'node_content',
      'description' => t('Use this content type to propose sessions at the event. Users can vote on proposed sessions and add sessions to their individual session agendas.'),
      'has_title' => '1',
      'title_label' => t('Session Title'),
      'help' => '',
    ),
    'story' => array(
      'name' => t('Story'),
      'base' => 'node_content',
      'description' => t('Stories are written by your staff and appear in the News section.  Similar to a blog post.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'time_slot' => array(
      'name' => t('Time slot'),
      'base' => 'node_content',
      'description' => t('Use time slots to define when sessions will occur.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'toolkit' => array(
      'name' => t('Toolkit'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'tweet' => array(
      'name' => t('Tweet'),
      'base' => 'node_content',
      'description' => t('A tweet imported from a cron twitter search looking for #OGP or #OpenGovPartnership'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'webform' => array(
      'name' => t('Webform'),
      'base' => 'node_content',
      'description' => t('Create a new form or questionnaire accessible to users. Submission results and statistics are recorded and accessible to privileged users.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'webinar' => array(
      'name' => t('Webinar'),
      'base' => 'node_content',
      'description' => t('Webinars appear in the Issues section'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'working_group' => array(
      'name' => t('Working Group'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Name'),
      'help' => '',
    ),
    'working_group_page' => array(
      'name' => t('Working Group Page'),
      'base' => 'node_content',
      'description' => t('Just like a regular "page" node, but belongs to a particular working group.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
