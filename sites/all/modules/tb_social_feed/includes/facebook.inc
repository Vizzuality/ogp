<?php

class TBFacebookFeed extends TBSocialFeed {
  const SERVICE = 'facebook';
  // Use graph API from facebook version 2.4
  const URL_API = 'https://graph.facebook.com/v2.4';

  public static $HAS_IMAGE = 1;

  function __construct($configs = NULL) {
    $this->configs = $configs;
  }

  public function getType() {
    return "Facebook";
  }
  
  public function getContentFromPage() {
    // Get posts which is published from fanpage.
    $fbData = $this->fbGraph($this->configs['account'], $this->getAccessToken(), false, array('name', 'posts.limit(' . $this->configs['feed_limit'] . '){attachments}'));
    $results = array(); 
    $posts = $fbData['posts'];
    if (!empty($posts['data'])) {
      foreach ($posts['data'] as $post) {
        $data = $post['attachments']['data'][0];
        $results[] = array(
          'feed_id' => $post['id'],
          'account' => $this->configs['account'],
          'service' => self::SERVICE,
          'title' => isset($data['title']) ? $data['title'] : t('No title'),
          'field_image' => isset($data['subattachments']['data'][0]) ? $data['subattachments']['data'][0]['media']['image']['src'] : (isset($data['media']['image']['src']) ? $data['media']['image']['src'] : ''),
          'body' => '[ ' . $fbData['name'] .' ]<br/>' . (isset($data['description']) ? $data['description'] : ''),
          'feed_type' => $this->getFeedType(),
          'field_social_feed_type' => $this->getType(),
          'node_type' => $this->getBundle(),
          'url' => '',
          'created' => time(),
          'changed' => 0,
          'field_reference_url' => 'https://facebook.com/' . $post['id'],
          'reference_url' => 'https://facebook.com/' . $post['id']
        );
      }
    }
    return $results;
  }

  public function createAppForm($service, &$form) {
    //Create fan page form.
    $fan_pages = array();
    $this->createFanPageForm($service, $fan_pages);
    if (!empty($fan_pages)) {
      $form[$service->service . 'fan_pages'] = $fan_pages;
    }
  }
  
  /**
   * Get content from facebook.
   */
  public function getContent() { 
    return $this->checkAccessTokenIsValid() ? $this->getContentFromPage() : NULL;
  }

  /**
   * Get settings of service.
   * 
   * @param type $values
   */
  public function getSettingsForm() {
    $db_account_service = new Tb_Social_Feed_Account_Services();
    $condition['service'] = self::SERVICE;
    // When cron is executed, the current user is anonymous.
    if ($GLOBALS['user']->uid) {
      $condition['uid'] = $GLOBALS['user']->uid;
    }
    return $db_account_service->select(array('data', 'access_token'), $condition);
  }

  /**
   * Create a settings form on configuration page.
   * 
   * @param stdClass $service
   * @param array $form
   */
  public function createSettingsForm($service, &$form) {
    $name_service = $service->service;
    $data = $this->getSettingsForm();
    if (isset($data->data)) {
      $result = unserialize($data->data);
    }
    $form[$name_service . '_application'] = array(
      '#type' => 'fieldset',
      '#title' => t($service->service . " Application"),
      '#weight' => -1,
    );
    $form[$name_service . '_application'][$name_service . '_app_id'] = array(
      '#type' => 'textfield',
      '#title' => t('App ID'),
      '#description' => t('Please fill app id of your facebook application.'),
      '#size' => 8,
      '#default_value' => isset($result['app_id']) ? $result['app_id'] : '',
    );
    $form[$name_service . '_application'][$name_service . '_app_secret'] = array(
      '#type' => 'textfield',
      '#title' => t('App Secret'),
      '#description' => t('Please fill app secret of your facebook application.'),
      '#size' => 8,
      '#default_value' => isset($result['app_secret']) ? $result['app_secret'] : '',
    );
    $form[$name_service . '_application']['facebook_instructions'] = array(
      '#markup' => t('<b>Notes</b>:<br/> If you don\'t have any application. Please visit <a href="https://developers.facebook.com/">Facebook Developer Page</a> to create one.<br/>'),
    );
    if(isset($result['app_id']) && isset($result['app_secret'])){
      $form[$name_service . '_application']['facebook_getfeednow'] = array(
        '#markup' => t('<br/><a target="_blank" class="form-submit btn-verify-account" href="'. base_path().'admin/structure/feed/tb_social_feed'.'?active-tab=edit-'.$service->service.'-wrapper'.'">Get Feed Now</a>'),
      );
    }    
  }

  public function createServiceForm($service, &$form) {
    // Require user input app_id and app_secret.
    if ($this->getAccessToken()) {
      parent::createServiceForm($service, $form);
    }
    else {
      $form[$service->service . "_enable"] = array(
        '#type' => 'checkbox',
        '#title' => t("Enable"),
        '#value' => $service->enabled,
        '#disabled' => TRUE,
        '#description' => t('To enable and get feeds, please link to <a href="' . url('admin/config/feed/tb_social_feed') . '"> This </a> and input your app id and app secret.')
      );
    }
  }

  public function createFanPageForm($params, &$form) {
    $db_accounts = new Tb_Social_Feed_Accounts();
    $pages = $db_accounts->select(array(), array(
      'service' => $params->service,
      'deleted' => 0,
      'type' => self::$FAN_PAGE
    ), array(), Tb_Social_Feed_Accounts::$RETURN_ARRAY);
    //Setting feeds
    $form = array(
      '#type' => 'fieldset',
      '#title' => t("Fan pages"),
      '#collapsible' => TRUE,
      '#description' => '<span class="tb-social-feed-description">Example: <a href="http://www.facebook.com/themebrain" target="_blank">http://www.facebook.com/themebrain</a></span>',
    );
    $fan_page = array(
      '#type' => 'textfield',
      '#size' => 8,
      '#title' => t("Page profile"),
      '#default_value' => "",
      '#description' => '<a href="javascript:void(0)" class="btn btn-delete-account" onclick="Drupal.TBFeed.deleteAccount(this)">' . t('Delete') . '</a>',
      '#attributes' => array('name' => array('facebook_fan_pages[]'))
    );
    if (!empty($pages) && $access_token = $this->getAccessToken()) {
      $index = 0;
      foreach ($pages as $page) {
        $result = $this->fbGraph($page->account, $access_token, '',array('link', 'name'));
        $fan_page['#default_value'] = isset($result['link']) ? $result['link'] : '';
        $form[$params->service . "_fan_pages_$index"] = $fan_page;
        $index++;
      }
    }
    else {
      $form[$params->service . '_fan_pages[]'] = $fan_page;
    }
    $form[$params->service . '_admin_add_fan_page'] = array(
      '#type' => 'container'
    );
    $form[$params->service . '_admin_add_fan_page']['page_profile'] = array(
      '#markup' => '<div class="add-account-button-wrapper"><a href="javascript:void(0)" class="btn btn-add-account" onclick="Drupal.TBFeedFacebook.addPageProfile(\'' . $params->service . '\', this)">Add page</a></div>',
    );
    $form[$params->service . '_fan_page_template'] = array(
      '#type' => 'container',
      '#attributes' => array('style' => array('display:none;'))
    );
    $fan_page['#default_value'] = NULL;
    $form[$params->service . '_fan_page_template']['fb-page-proflie'] = $fan_page;
  }

  /**
   * Using graph API from facebook to get feeds.
   * 
   * @param string $id
   * @param string $access_token
   * @param string $api
   * @param array $fields
   * @return array
   */
  public function fbGraph($id, $access_token, $api = NULL, $fields = array(), $limit = NULL) {
    set_time_limit(60);
    if ($api) {
      $link = self::URL_API . '/' . $id . "/$api" . '?access_token=' . $access_token . '&fields=';
    } 
    else {
      $link = self::URL_API . '/' . $id . '?access_token=' . $access_token . '&fields=';
    }
    foreach ($fields as $idx => $field) {
      $link .= $field . ((count($fields) == $idx + 1) ? ''  : ',');
    }
    $link .= ($limit !== NULL && is_numeric($limit)) ? "&limit=$limit" : '';
    return drupal_json_decode($this->crawlPage($link));
  }

  /**
   * @param type $service
   * @param type $input
   * @param type $service_fields
   */
  public function extendedInfo($service, &$input, &$service_fields) {
    //Feed type
    if (isset($input[$service->service . '_admin_feed_type'])) {
      $service_fields['feed_type'] = intval($input[$service->service . '_admin_feed_type']);
    }
    //Optional settings
    $service_fields['feed_has_image'] = isset($input[$service->service . '_admin_feed_has_image']) ? $input[$service->service . '_admin_feed_has_image'] : 0;
    
    $accounts = array(
      'feed_account' => array(),
      'feed_account_name' => array(),
      'type' => array()
    );
    if (!empty($input['facebook_fan_pages']) && ($access_token = $this->checkAccessTokenIsValid())) {
      foreach ($input['facebook_fan_pages'] as $page) {
        if ($page) {
          $id = $this->parsePageProfile($page);
          $info = $this->fbGraph($id, $access_token);
          if (isset($info['id'])) {
            $accounts['feed_account'][] = $info['id'];
            $accounts['feed_account_name'][] = $info['name'];
            $accounts['type'][] = self::$FAN_PAGE;
          }
        }
      }
    }
    $input[$service->service . '_feed_account'] = $accounts['feed_account'];
    $input[$service->service . '_feed_current_account'] = $accounts['feed_account'];
    $input[$service->service . '_feed_account_name'] = $accounts['feed_account_name'];
    $input[$service->service . '_type'] = $accounts['type'];
  }

  /**
   * Get name of fanpage.
   * 
   * @param type $page
   * @return type
   */
  public function parsePageProfile($page) {
    $pattern = '/www\.facebook\.com\/(.*)/';
    preg_match_all($pattern, $page, $matches);
    return !empty($matches[1]) ? $matches[1][0] : NULL;
  }
  
  /**
   * Check access token is exist in database.
   * 
   * @return int
   */
  public function getAccessToken() {
    $settings = $this->getSettingsForm();
    return !empty($settings->access_token) ? $settings->access_token : '';
  }

  /**
   * Check access token is valid.
   * 
   * @return integer
   */
  public function checkAccessTokenIsValid() {
    if (!($access_token = $this->getAccessToken())) {
      drupal_set_message(t('Access token is not exist in facebook service.'), 'error');
    }
    else {
      $data = $this->fbGraph('themebrain', $access_token);
      if (isset($data['error'])) {
        drupal_set_message(t("@code: @message", array(
          '@code' => $data['error']['code'],
          '@message' => $data['error']['message']
                )), 'error');
      }
      else {
        return $access_token;
      }
    }
    return FALSE;
  }

  /**
   * Save settings of services and access_token. We use app id and app secret.
   * 
   * @param type $values
   */
  public function saveSettingForm($values) {
    if ($values[self::SERVICE . '_app_id'] || $values[self::SERVICE . '_app_secret']) {
      global $user;
      $data = array(
        'app_id' => $values[self::SERVICE . '_app_id'],
        'app_secret' => $values[self::SERVICE . '_app_secret']
      );
      // To add access_token into DB. We must ensure that user input both app_id and app_secret.
      $access_token = $values[self::SERVICE . '_app_id'] && $values[self::SERVICE . '_app_secret'] ?
              $values[self::SERVICE . '_app_id'] . '|' . $values[self::SERVICE . '_app_secret'] : '';

      $db_account_service = new Tb_Social_Feed_Account_Services();
      $has_service = $db_account_service->select(array('id'), array('service' => self::SERVICE));
      if ($has_service) {
        // Update accounts in service.
        $success = $db_account_service->update(
                array('data' => serialize($data), 'access_token' => $access_token), array('uid' => $user->uid, 'service' => self::SERVICE)
        );
      }
      else {
        // Create a new account in service.
        $success = $db_account_service->insert(array(
          'uid' => $user->uid,
          'service' => self::SERVICE,
          'data' => serialize($data),
          'access_token' => $access_token,
        ));
      }
      if ($success) {
        drupal_set_message(t('Save settings of @service sucessfully', array('@service' => self::SERVICE)));
      }
    }
  }

}
