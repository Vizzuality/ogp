<?php
  $cookie_title_story = 'title_story';
  $cookie_content_story = 'content_story';
  $cookie_country_story = 'country_story';

  global $user;
  $node = new stdClass();
  $node->title = $_COOKIE[$cookie_title_story];
  $node->type = "blog_post";
  node_object_prepare($node); // Sets some defaults. Invokes hook_prepare() and hook_node_prepare().
  $node->language = LANGUAGE_NONE; // Or e.g. 'en' if locale is enabled
  $node->body[$node->language][0]['value']   = $_COOKIE[$cookie_content_story];
  $node->field_country_ref['und'][0]['target_id'] = [$_COOKIE[$cookie_country_story]];
  $node->uid = $user->uid;
  $node->status = 0; //(1 or 0): published or not
  $node->promote = 0; //(1 or 0): promoted to front page
  $node->comment = 2; // 0 = comments disabled, 1 = read only, 2 = read/write
  $node = node_submit($node); // Prepare node for saving
  node_save($node);
?>
