<?php

/**
 *  @file
 *  Extends the MediaReadOnlyStreamWrapper class to handle YouTube videos.
 */

/**
 *  Create an instance like this:
 *  $youtube = new MediaYouTubeStreamWrapper('youtube://v/[video-code]');
 */
class MediaYouTubeStreamWrapper extends MediaReadOnlyStreamWrapper {
  protected $base_url = 'http://www.youtube.com/watch';

  /**
   * Updates $base_url depending on whether the embed is a video or playlist.
   */
  function setBaseUrl($parameters) {
    if (isset($parameters['l'])) {
      if (!isset($parameters['v'])) {
        $this->base_url = 'http://youtube.com/playlist';
      }
      $parameters['list'] = $parameters['l'];
      unset($parameters['l']);
    }
    return $parameters;
  }
  /**
   * Returns a url in the format "http://www.youtube.com/watch?v=qsPQN4MiTeE".
   *
   * Overrides interpolateUrl() defined in MediaReadOnlyStreamWrapper.
   */
  function interpolateUrl() {
    if ($parameters = $this->get_parameters()) {
      $parameters = $this->setBaseUrl($parameters);
      return $this->base_url . '?' . http_build_query($parameters);
    }
  }

  static function getMimeType($uri, $mapping = NULL) {
    return 'video/youtube';
  }

  function getOriginalThumbnailPath() {
    $external_url = $this->getExternalUrl();
    $oembed_url = url('http://www.youtube.com/oembed', array('query' => array('url' => $external_url, 'format' => 'json')));
    $response = drupal_http_request($oembed_url);

    if (!isset($response->error)) {
      $data = drupal_json_decode($response->data);
      return $data['thumbnail_url'];
    }
    elseif ($response->code == 401) {
      throw new MediaInternetValidationException("Embedding has been disabled for this video.");
    }
    elseif ($response->code == 404) {
      return "http://s.ytimg.com/yts/img/image-hh-404-vflvCykRp.png";
    }
    elseif ($response->code != 200) {
      throw new MediaInternetValidationException("The YouTube video ID is invalid or the video was deleted.");
    }
    else {
      throw new Exception(t('Error Processing Request. (Error: %code, %error)', array('%code' => $response->code, '%error' => $response->error)));
    }
  }

  function getLocalThumbnailPath() {
    $parts = $this->get_parameters();
    $id = array_pop($parts);
    $local_path = file_default_scheme() . '://media-youtube/' . check_plain($id) . '.jpg';

    if (!file_exists($local_path)) {
      // getOriginalThumbnailPath throws an exception if there are any errors
      // when retrieving the original thumbnail from YouTube.
      try {
        $dirname = drupal_dirname($local_path);
        file_prepare_directory($dirname, FILE_CREATE_DIRECTORY | FILE_MODIFY_PERMISSIONS);
        $response = drupal_http_request($this->getOriginalThumbnailPath());

        if (!isset($response->error)) {
          file_unmanaged_save_data($response->data, $local_path, TRUE);
        }
        else {
          @copy($this->getOriginalThumbnailPath(), $local_path);
        }
      }
      catch (Exception $e) {
        // In the event of an endpoint error, use the mime type icon provided
        // by the Media module.
        $file = file_uri_to_object($this->uri);
        $icon_dir = variable_get('media_icon_base_directory', 'public://media-icons') . '/' . variable_get('media_icon_set', 'default');
        $local_path = file_icon_path($file, $icon_dir);
      }
    }

    return $local_path;
  }
}
