<?php
/**
 * @file
 * Simple Storify Class.
 * More infor: http://storify.com/
 * This library has been inspired by the work of
 * Benjamin J. Balter( ben.balter.com | ben@balter.com )
 *
 * @since  1.0
 *
 * @author Pol Dell'Aiera ( drupol | drupol@about.me )
 */

namespace Storify\Main;

class Storify {

  public $storifyUrl = 'http://storify.com';
  public $createUrl = 'http://storify.com/create';

  public $callbackQueryArg = 'callback';
  public $permalinkQueryArg = 'storyPermalink';

  // Regex to parse Storify URLs.
  public $storifyUrlRegex = '#^http://(www\.)?storify.com/([A-Za-z0-9_]+)/([A-Z0-9-]+)(/)?$#i';

  // Embed URL, %1$s is username, %2$s is story slug.
  public $storifyEmbedUrl = 'http://storify.com/%1$s/%2$s.js?header=false&sharing=false&border=false';

  // Edit story URL, %1$s is username, %2$s is story slug.
  public $storifyEditUrl = 'http://storify.com/%1$s/%2$s/edit';

  // Story URL, %1$s is username, %2$s is story slug.
  public $storifyStoryUrl = 'http://storify.com/%1$s/%2$s';

  // URL to story's json data, %1$s is username, %2$s is story slug.
  public $storifyJsonUrl = 'http://api.storify.com/v1/stories/%1$s/%2$s';

  // URL to HTML version of the story.
  public $storifyMinimalUrl = 'http://storify.com/%1$s/%2$s/minimal';

  // What elements to retrieve when getting story metadata.
  public $storyMetadata = array('title', 'description', 'status', 'thumbnail', 'shortlink');

  private $user = NULL;
  private $slug = NULL;
  private $isValidated = FALSE;

  static $instance;

  /**
   * Class constructor.
   */
  function __construct($argument = NULL) {
    self::$instance = &$this;

    if ($argument != NULL) {
      $this->setStory($argument);
    }
  }

  /**
   * Set the story.
   *
   * @param array|string|object $argument
   *   The argument containing the story variables.
   */
  function setStory($argument) {
    $this->user = $user = NULL;
    $this->slug = $slug = NULL;
    $this->isValidated = FALSE;

    if (is_array($argument)) {
      $user = isset($argument['user']) ? $argument['user'] : NULL;
      $slug = isset($argument['slug']) ? $argument['slug'] : NULL;
    }

    if (is_object($argument)) {
      $user = isset($argument->user) ? $argument->user : NULL;
      $slug = isset($argument->slug) ? $argument->slug : NULL;
    }

    if (is_string($argument)) {
      if (preg_match($this->storifyUrlRegex, $argument, $matches)) {
        list($host, $user, $slug) = explode('/', str_replace('http://', '', $argument));
      }
    }

    if ($this->isValid($user, $slug)) {
      $this->user = $user;
      $this->slug = $slug;
    }
  }

  /**
   * Validate the user and slug.
   * Returns true if they are good, false if not.
   *
   * @param string $user
   *   The username.
   * @param string $slug
   *   The slug, title of the story in the url.
   *
   * @return bool
   *   True if the story is validated, false if not.
   */
  function isValid($user = NULL, $slug = NULL) {
    if ($this->isValidated) {
      return TRUE;
    }

    $user = (empty($user)) ? $this->user : $user;
    $slug = (empty($slug)) ? $this->slug : $slug;

    if (empty($user) || empty($slug)) {
      $this->isValidated = FALSE;
      return FALSE;
    }

    if (!preg_match($this->storifyUrlRegex, sprintf($this->storifyStoryUrl, $user, $slug), $matches)) {
      $this->isValidated = FALSE;
      return FALSE;
    }

    $result = json_decode($this->query(sprintf($this->storifyJsonUrl, $user, $slug)));

    if (!$this->isRequestOk($result)) {
      $this->isValidated = FALSE;
      return FALSE;
    }

    $this->isValidated = TRUE;
    return TRUE;
  }

  /**
   * Returns the story informations.
   *
   * @return bool|object
   *   Return false if failed or the Story data in an object.
   */
  function getStoryData() {
    if (!$this->isValid()) {
      return FALSE;
    }

    $result = json_decode($this->query($this->getUrl('json')));

    if ($this->isRequestOk($result)) {
      return $result->content;
    }

    return FALSE;
  }

  /**
   * Retrieves story metadata.
   *
   * @return bool|array
   *   Return false or the Story's metadata in an array.
   */
  function getStoryMetadata() {
    if (!$this->isValid()) {
      return FALSE;
    }

    if ($data = $this->getStoryData()) {
      $output = array();

      foreach ($this->storyMetadata as $meta) {
        $output[$meta] = (isset($data->$meta)) ? $data->$meta : NULL;
      }
      $output['user'] = $this->user;
      $output['slug'] = $this->slug;

      return $output;
    }

    return FALSE;
  }

  /**
   * Retrieves HTML version of story.
   *
   * @return bool|string
   *   Return false or the story's HTML.
   */
  function getStoryHtml() {
    if (!$this->isValid()) {
      return FALSE;
    }

    $result = $this->query($this->getUrl('minimal'));

    // We must find a way to check if the code == 200.
    if (!empty($result)) {
      return $result;
    }

    return FALSE;
  }

  /**
   * Returns the url.
   *
   * @return bool|string
   *   Return false or the URL.
   */
  function getUrl($type = 'story') {
    if (!$this->isValid()) {
      return FALSE;
    }

    $variable_fragment[] = 'storify';
    $variable_fragment[] = ucfirst(strtolower($type));
    $variable_fragment[] = 'Url';

    $variable = implode('', $variable_fragment);

    if (isset($this->$variable)) {
      return sprintf($this->$variable, $this->user, $this->slug);
    }
    return FALSE;
  }

  /**
   * Get the username of the story.
   *
   * @return false|string
   *   Return false or the username.
   */
  function getUser() {
    if (!$this->isValid()) {
      return FALSE;
    }

    return $this->user;
  }

  /**
   * Get the slug of the story.
   *
   * @return bool|string
   *   Return false or the slug.
   */
  function getSlug() {
    if (!$this->isValid()) {
      return FALSE;
    }

    return $this->slug;
  }

  /**
   * Performs an HTTP request.
   *
   * @param string $query
   *   The url to fetch.
   *
   * @return string
   *   The result.
   */
  function query($query) {
    $c = curl_init();
    curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($c, CURLOPT_URL, $query);
    $contents = curl_exec($c);
    curl_close($c);

    return $this->cache($contents, $query);
  }

  /**
   * Check if the object from the request has been
   * correctly fetched.
   *
   * @param object $object
   *   The request object.
   *
   * @return bool
   *   True if the request is successful, false if not.
   */
  function isRequestOk($object) {
    if (isset($object->code) && $object->code == 200) {
      return TRUE;
    }

    return FALSE;
  }

  /**
   * This function just returns the data.
   * You easily plug in a cache system.
   *
   * @param mixed $data
   *   The data to cache.
   * @param string $query
   *   The identifier.
   *
   * @return mixed
   *   Returns the data.
   */
  function cache($data, $query) {
    return $data;
  }
}
