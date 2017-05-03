<?php
  $title = $_POST['title'];
  $content = $_POST['content'];
  $country = $_POST['country'];
  $topic = $_POST['topic'];

  $cookie_title_story = 'title_story';
  $cookie_content_story = 'content_story';
  $cookie_country_story = 'country_story';
  $cookie_topic_story = 'topic_story';

  $cookie_value_title_story = $title;
  $cookie_value_content_story =  $content;
  $cookie_value_country_story =  $country;
  $cookie_value_topic_story =  $topic;

  setcookie($cookie_title_story, $cookie_value_title_story, time() + (86400 * 30), '/');
  setcookie($cookie_content_story, $cookie_value_content_story, time() + (86400 * 30), '/');
  setcookie($cookie_country_story, $cookie_value_country_story, time() + (86400 * 30), '/');
  setcookie($cookie_topic_story, $cookie_value_topic_story, time() + (86400 * 30), '/');
?>
