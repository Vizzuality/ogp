<?php

function tb_social_feed_text_generate($field_value, $object, $field, $instance, $bundle) {
  $object_field = array();
  $object_field['value'] = $field_value;
  $object_field['format'] = 'full_html';
  return $object_field;
}

function tb_social_feed_image_generate($url, $object, $field, $instance, $bundle) {
  set_time_limit(300);
  $filename = 'tb_social_feed_img_' . time();
  $extension = 'png';
  $object_field = array();
  $path = tb_social_feed_download_image($url, $extension);
  if ($path) {
    $source = new stdClass();
    $source->uri = $path;
    $source->uid = 1;
    $source->filemime = 'image/' . pathinfo($path, PATHINFO_EXTENSION);
    $destination_dir = $field['settings']['uri_scheme'] . '://' . $instance['settings']['file_directory'];
    file_prepare_directory($destination_dir, FILE_CREATE_DIRECTORY);
    $counter = 0;
    $destination = $destination_dir . '/' . $filename . "." . $extension;
    $realpath = drupal_realpath($destination);
    while (file_exists($realpath)) {
      $counter++;
      $destination = $destination_dir . '/' . $filename . ($counter ? "_" . $counter : "") . "." . $extension;
      $realpath = drupal_realpath($destination);
    }
    $source->filename = $filename . ($counter ? "_" . $counter : "") . "." . $extension;
    $file = file_move($source, $destination, FILE_CREATE_DIRECTORY);
  }
  else {
    return NULL;
  }

  $object_field['fid'] = $file->fid;
  $object_field['alt'] = '';
  $object_field['title'] = '';
  return $object_field;
}

function tb_social_feed_download_image($url, $extension) {
  if (function_exists('curl_init')) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    // Call to the link via https.
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.5) Gecko/20041107 Firefox/1.0');
    $content = curl_exec($curl);
    curl_close($curl);
  }
  else {
    $content = @file_get_contents($url);
  }
  
  $tmp_file = drupal_tempnam('temporary://', 'imagefield' . $extension);
  if ($tmp_file && $content) {
    file_put_contents(drupal_realpath($tmp_file), $content) ;
  }
  return isset($tmp_file) ? $tmp_file : NULL;
}

function tb_social_feed_taxonomy_generate($field_value, $object, $field, $instance, $bundle) {
  $field_value = trim($field_value);
  $tid = db_query('SELECT tid FROM {taxonomy_term_data} WHERE name = :name', array(':name' => $field_value))->fetchField();
  return $tid === FALSE ? NULL : array('tid' => (int) $tid);
}

function tb_social_feed_file_generate($field_value, $object, $field, $instance, $bundle) {
  return array('');
}

function tb_social_feed_number_generate($field_value, $object, $field, $instance, $bundle) {
  return array(is_numeric($field_value) ? $field_value : 0);
}

function tb_social_feed_date_generate($field_value, $object, $field, $instance, $bundle) {
  return array('value' => date('Y-m-d H:i:s', strtotime($field_value)));
}

function tb_social_feed_link_generate($field_value, $object, $field, $instance, $bundle) {
  return array(
    'url' => $field_value,
    'title' => '',
    'attributes' => array()
  );
}

function tb_social_feed_youtube_generate($field_value, $object, $field, $instance, $bundle) {
  $data = explode('=', $field_value);
  return array(
    'input' => $field_value,
    'video_id' => $data[count($data) - 1]
  );
}
