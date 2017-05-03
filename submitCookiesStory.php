<?php
  $title = $_POST['title'];
  $content = $_POST['content'];

  $cookie_title_story = 'title_story';
  $cookie_content_story = 'content_story';

  $cookie_value_title_story = $title;
  $cookie_value_content_story =  $content;

  setcookie($cookie_title_story, $cookie_value_title_story, time() + (86400 * 30), '/');
  setcookie($cookie_content_story, $cookie_value_content_story, time() + (86400 * 30), '/');
?>
