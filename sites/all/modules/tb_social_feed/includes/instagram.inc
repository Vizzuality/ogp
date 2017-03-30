<?php

class TBInstagramFeed extends TBSocialFeed {
  // Client_id and Slient_secret are get from instagram with tb_apps account.
  const SERVICE = 'instagram';
  const URL_GET_ACCESS_TOKEN = 'https://api.instagram.com/oauth/access_token';

  public function __construct($cfg = NULL) {
    $this->configs = array(
      'account' => $cfg ? $cfg['account'] : 'mashable',
      'limit' => $cfg['feed_limit']
    );
  }

  public function getType() {
    return "Instagram";
  }

  public function getContent() {
    if (function_exists('curl_init')) {
      $access_token = $this->checkAccessTokenIsVaid();
      if ($access_token) {
        if (!is_array($access_token)) {
          $data = $this->searchUserInstagram($this->configs['account'], $access_token);
          if ($data) {
            $url = "https://api.instagram.com/v1/users/{$data['id']}/media/recent?count={$this->configs['limit']}&access_token={$access_token}";
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
            curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36');
            $result = drupal_json_decode(curl_exec($curl));
            if (isset($result['meta']['code']) && $result['meta']['code'] == 200 && !empty($result['data'])) {
              $posts = array();
              foreach ($result['data'] as $post) {
                $posts[] = array(
                  'feed_id' => $post['id'],
                  'account' => $post['user']['username'],
                  'service' => 'instagram',
                  'title' => $post['user']['full_name'], 
                  'body' => utf8_encode($post['caption']['text']),
                  'created' => $post['created_time'],
                  'changed' => $post['created_time'],
                  'feed_type' => $this->getFeedType(),
                  'field_social_feed_type' => $this->getType(),
                  'node_type' => $this->getBundle(),
                  'url' => '',
                  'reference_url' => $post['link'],
                  'field_reference_url' => $post['link'],
                  'field_image' => isset($post['images']['standard_resolution']['url']) ? $post['images']['standard_resolution']['url'] : ''
                );
              }
            }
          }
        }
        else {
          drupal_set_message($this->detectErrorAccessToken($access_token), 'error');
        }
      }
    } else {
      drupal_set_message(t('you have not enabled cURL extension on your server'), 'error');
    }
    return isset($posts) ? $posts : '';
  }
  
  /**
   * Check access token is invalid. It will return access_token if it's valid.
   * 
   * And return array if we have errors.
   * 
   */
  public function checkAccessTokenIsVaid() {
    if (function_exists('curl_init')) {
      if ($access_token = $this->getAccessToken()) {
        $url = "https://api.instagram.com/v1/users/self/feed?access_token={$access_token}";
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36');
        $result = drupal_json_decode(curl_exec($curl));
        if (isset($result['meta']['code']) && $result['meta']['code'] == 200) {
          return $access_token;
        }
        elseif (isset($result['meta'])) {
          return $result['meta'];
        }
      }
    }
    else {
      drupal_set_message(t('you have not enabled cURL extension on your server'), 'error');
    }
    return '';
  }
  
  /**
   * Save settings social services.
   * 
   * @param type $values
   */
  public function saveSettingForm($values) {
    if ($values[self::SERVICE . '_app_client_id'] ||
        $values[self::SERVICE . '_app_client_secret']) {
      
      global $user;
      $data = array(
        'client_id' => $values[self::SERVICE . '_app_client_id'],
        'client_secret' => $values[self::SERVICE . '_app_client_secret']
      );
      $db_account_service = new Tb_Social_Feed_Account_Services();
      $has_service = $db_account_service->select(array('id'), array('service' => self::SERVICE));
      if ($has_service) {
        // Update accounts in service.
        $success = $db_account_service->update(
          array('data' => serialize($data)),
          array('uid' => $user->uid, 'service' => self::SERVICE)
        );
      } else {
        // Create a new account in service.
        $success = $db_account_service->insert(array(
          'uid' => $user->uid,
          'service' => self::SERVICE,
          'data' => serialize($data),
        ));
      }
      if ($success) {
        drupal_set_message(t('Save settings of @service sucessfully', array('@service' => self::SERVICE)));
      }
    }
  }
  
  /**
   * Get settings social services.
   * 
   * @param type $values
   */
  public function getSettingForm() {
    $db_account_service = new Tb_Social_Feed_Account_Services();
    return $db_account_service->select(array('data'), array(
      'uid' => $GLOBALS['user']->uid,
      'service' => self::SERVICE,
    ));
  }
  
  /**
   * Create a settings form on configuration page.
   * 
   * @param stdClass $service
   * @param array $form
   */
  public function createSettingsForm($service, &$form) {
    $name_service = $service->service;
    $data = $this->getSettingForm();
    if (isset($data->data)) {
      $result = unserialize($data->data);
    }
    $form[$name_service . '_application'] = array(
      '#type' => 'fieldset',
      '#title' => t($service->service." Application"),
      '#weight' => -1,
    );
    $form_app = $form[$name_service . '_application'];
    $form_app[$name_service . '_app_client_id'] = array(
      '#type' => 'textfield',
      '#title' => t('Client ID'),
      '#description' => t('Please fill client id of your Instagram application.'),
      '#size' => 8,
      '#default_value' => isset($result['client_id']) ? $result['client_id'] : '',
    );
    $form_app[$name_service . '_app_client_secret'] = array(
      '#type' => 'textfield',
      '#title' => t('Client Secret'),
      '#description' => t('Please fill client secret of your Instagram application.'),
      '#size' => 8,
      '#default_value' => isset($result['client_secret']) ? $result['client_secret'] : '',
    );
//    $form_app[$name_service . '_app_redirect_uri'] = array(
//      '#type' => 'textfield',
//      '#title' => t('Redirect URI'),
//      '#description' => t('This URI is used to get access_token from instagram service.'),
//      '#default_value' => $GLOBALS['base_url'] . '/admin/tb_social_feed/instagram/verify',
//      '#disabled' => TRUE,
//    );
    $account_service = $this->getAccountService();
    $exist_client_id = isset($account_service['client_id']) && $account_service['client_id'];
    $exist_client_secret = isset($account_service['client_secret']) && $account_service['client_secret'];
    if ($exist_client_id && $exist_client_secret) {
      $access_token = $this->checkAccessTokenIsVaid();
      $form_app[$name_service . '_verify_status'] = array(
        '#type' => 'textfield',
        '#size' => 11,
        '#disabled' => TRUE,
        '#title' => t('Authentication Status'),
        '#attributes' => array(
          'class' => array('unauthorized','authentication-status'),
        ),
        '#default_value' => t('Unauthenticated'),
        '#description'=>'The app need to be authorized with an Instagram account before using'
      );
      if ($access_token) {
        if (is_array($access_token)) {
          // We have error while authenticating
          $string = $this->detectErrorAccessToken($access_token);
          drupal_set_message($string, 'error');
        }
        else {
          // Access_token is valdid.
          $form_app[$name_service . '_verify_status']['#attributes']['class'] = array('authorized','authentication-status');
          $form_app[$name_service . '_verify_status']['#default_value'] = t('Authenticated');
          $form_app[$name_service . '_verify_status']['#description'] = t('<p>Your Instagram account is authorized with TB Social Feed Application successfully. The app is ready to get feed</p>');
          $form_app[$name_service . '_get_feed']['#markup'] = t('<a class="form-submit btn-verify-account" href="' . base_path().'admin/structure/feed/tb_social_feed'.'?active-tab=edit-'.$service->service.'-wrapper'.'" target="_blank"> Get Feed Now </a>');
        }
      }
      else {
        $url = $GLOBALS['base_url'] . url('admin/tb_social_feed/instagram/verify');
        $form_app[$name_service . '_verify_status']['#field_suffix'] = '<a class="form-submit btn-verify-account" href="https://api.instagram.com/oauth/authorize/?client_id=' . $data['client_id'] . '&redirect_uri=' . $url . '&response_type=code"> Verify It Now </a>';
        drupal_set_message('Instagram: ' . 'The app need to be authorized with an Instagram account before using', 'error');
      }
    }
    else {
      $string = "<h6>Notes:</h6>";
      $string .= "<div class='social-report'>";
      $string .= "TB Social Feed get Instagram feed via an application. ";
      $string .= "You must create an account and an application on Instagram ";
      $string .= "to get client_id and client_secret first. <br />";
      $string .= "If you have an account on Instagram, please visit ";
      $string .= "<a href='http://instagram.com/developer/clients/manage/'>http://instagram.com/developer/clients/manage/</a> to create an application.";
      $string .= '<br/>Please use following information when creating your Instagram application.';
      $string .= "<ul>";
      $string .= "<li><strong>Website URL</strong>: ".$GLOBALS['base_url']."</li>";
      $string .= "<li><strong>Redirect URI</strong>: ".$GLOBALS['base_url'].'/admin/tb_social_feed/instagram/verify'."</li>";
      $string .= "</ul>";
      $string .= "</div>";
      $form_app[$name_service . '_verify_user_account'] = array(
        '#markup' => '<div class="report-status">' . t($string) . '</div>',
      );
    }
    $form[$name_service . '_application'] = $form_app;
  }
  
  /**
   * Create form to get feeds from the instagram service.
   * 
   * @param stdClass $account
   * @param array $form
   */
  public function createAccountForm($account, &$form) {
    $form = array(
      '#type' => 'fieldset',
      '#title' => t("Account")
    );
    $form[$account->service . '_feed_account_name[]'] = array(
      '#type' => 'hidden',
      '#size' => 8,
      '#default_value' => isset($account->account_name) ? $account->account_name : ""
    );
    $form[$account->service . '_feed_account[]'] = array(
      '#type' => 'textfield',
      '#size' => 8,
      '#title' => t("User"),
      '#default_value' => isset($account->account) ? $account->account : "",
      '#description' => t("Enter your search keyword. Ex: mashable"),
      '#attributes' => array('class' => array('account')),
    );
    $form[$account->service . '_feed_current_account[]'] = array(
      '#type' => 'hidden',
      '#value' => isset($account->account) ? $account->account : ""
    );
    $form[$account->service . '_feed_account_delete'] = array(
      '#markup' => '<a href="javascript:void(0)" class="btn btn-delete-account" onclick="Drupal.TBFeed.deleteAccount(this)">' . t('Delete') . '</a>',
    );
  }

  public function createServiceForm($service, &$form) {
    $enabled = $this->checkAccessTokenIsVaid();
    if ($enabled && !is_array($enabled)) {
      parent::createServiceForm($service, $form);
    }
    else {
      $form[$service->service . "_enable"] = array(
        '#type' => 'checkbox',
        '#title' => t("Enable"),
        '#value' => $service->enabled,
        '#disabled' => TRUE
      );
      $form[$service->service . "_authenticate"] = array(
        '#markup' => t('You need to authenticated your account before you get feeds. To Configurate your account, please link to <a href="'. url('admin/config/feed/tb_social_feed') .'"> This </a>')
      );
    }
  }
  
  public function extendedInfo($service, &$input, &$service_fields) {
    if (!empty($input['instagram_feed_account'])) {
      $accounts = array(
        'feed_account' => array(),
        'feed_account_name' => array(),
      );
      $access_token = $this->checkAccessTokenIsVaid();
      $access_token_valid = FALSE;
      // Check access_token is valid.
      if ($access_token) {
        if (!is_array($access_token)) {
          $access_token_valid = TRUE;
        } else {
          drupal_set_message($this->detectErrorAccessToken($access_token), 'error');
        }
      }
      foreach ($input['instagram_feed_account'] as $username) {
        if ($username) {
          if ($access_token_valid) {
            $account = $this->searchUserInstagram($username, $access_token);
            if ($account == 0) {
              drupal_set_message(t("@user is not found", array('@user' => $username)), 'error');
            }
          }
          $accounts['feed_account'][] = $username;
          $accounts['feed_account_name'][] = isset($account['full_name']) ? $account['full_name'] : '';
        }
      }
      $input[$service->service . '_feed_account'] = $accounts['feed_account'];
      $input[$service->service . '_feed_current_account'] = $accounts['feed_account'];
      $input[$service->service . '_feed_account_name'] = $accounts['feed_account_name'];
    }
  }

  /**
   * Verify instagram account.
   * 
   * @param type $code
   * @return string
   */
  public function verifyAccount($code) {
    if ($code) {
      if ($data = $this->getAccountService()) {
        if (function_exists('curl_init')) {
          $url = self::URL_GET_ACCESS_TOKEN;
          $curl = curl_init();
          curl_setopt($curl, CURLOPT_URL, $url);
          curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
          curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
          curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
          curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
          curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36');
          curl_setopt($curl, CURLOPT_POSTFIELDS, array(
            'client_id' => $data['client_id'],
            'client_secret' => $data['client_secret'],
            'grant_type' => 'authorization_code',
            'redirect_uri' => $GLOBALS['base_url'] . url('admin/tb_social_feed/instagram/verify'),
            'code' => $code,
          ));
          $content = drupal_json_decode(curl_exec($curl));
          curl_close($curl);
          if (isset($content['error_message'])) {
            $error = "We have a error while authenticating. @error";
            drupal_set_message(t($error, array('@error' => $content['error_message'])), 'error');
            watchdog('tb_social_feed', $error, array('@error' => $content['error_message']), WATCHDOG_ERROR);
          }
          elseif (isset($content['access_token'])) {
            // Save access_token and the information user into DB.
            $db_account = new Tb_Social_Feed_Account_Services();
            $num_row = $db_account->update(array('access_token' => $content['access_token']), array('service' => self::SERVICE));
            if ($num_row) {
              $message = t('Your account is authenticated successfully');
              $status = 'status';
            } 
            else {
              $message = t('Your account is authenticated unsuccessfully');
              $status = 'error';
            }
            drupal_set_message($message, $status);
          }
        }
        else {
          drupal_set_message(t('you have not enabled cURL extension on your server'), 'error');
        }
      }
    }
    else {
      drupal_set_message(t('The code can\'t be empty'), 'error');
    }
  }

  /**
   * Get client_id and client_secret of the current user.
   * 
   * @return string
   */
  public function getAccountService() {
    $db_accounts = new Tb_Social_Feed_Account_Services();
    $result = $db_accounts->select(array('data'), array('service' => self::SERVICE));
    if ($result && $data = unserialize($result->data)) {
      if (!isset($data['client_id'], $data['client_secret'])) {
        drupal_set_message(t('Please input your account on @service', array('@service' => self::SERVICE)), 'error');
        watchdog('tb_social_feed:Instagram', 'Please input your account on @service', array('@service' => self::SERVICE), WATCHDOG_ERROR);
        return '';
      }
    }
    return isset($data) ? $data : '';
  }
  
  /**
   * Get access_token from account user.
   * 
   * @return string
   */
  public function getAccessToken() {
    $db_accounts = new Tb_Social_Feed_Account_Services();
    $result = $db_accounts->select(array('access_token'), array('service' => self::SERVICE));
    return !empty($result->access_token) ? $result->access_token : '';
  }
  
  /**
   * check type of error when we check access_token.
   */
  public function detectErrorAccessToken($errors) {
    $error_message = '';
    switch ($errors['error_type']) {
      // Access_token is expired.
      case 'OAuthAccessTokenError';
        $error_message = t('Your access token is invalid, you must reset access_token by clicking <a href =' . url('admin/tb_social_feed/instagram/verify') . '> HERE </a>', 'error');
        break;
      
      case 'OAuthParameterException':
        $error_message = t('@message Please check it again', array('@message' => $errors['error_message']));
        break;
      
      // have a problem which caused by account on instagram (ex: deleted).
      case 'OAuthClientException':
        $error_message = t('Maybe your client is changed or deleted. So we will delete your current access_token. Please check your client on instagram. re-insert your client_id and client_secret. After that verify to get access_token.');
        $db_account_service = new Tb_Social_Feed_Account_Services();
        $db_account_service->update(
          array('access_token' => ''),
          array('uid' => $GLOBALS['user']->uid, 'service' => self::SERVICE)
        );
        break;
      
      default:
        $error_message = t('We have a unexception error');
        break;
    };
    return $error_message;
  }
  
  /**
   * Search user on Instargram.
   * 
   * @param string $username Name of User.
   */
  public function searchUserInstagram($username, $access_token) {
    if (function_exists('curl_init')) {
      $url = "https://api.instagram.com/v1/users/search?q={$username}&count=1&access_token={$access_token}";
      $curl = curl_init();
      curl_setopt($curl, CURLOPT_URL, $url);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
      curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
      curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
      curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36');
      $result = drupal_json_decode(curl_exec($curl));
      curl_close($curl);
      if (isset($result['meta']['code'])) {        
        return ($result['meta']['code'] == 200 && isset($result['data'][0])) ? $result['data'][0] : $result['meta']['code'];
      } else {
        // Maybe problem is caused by network.
        drupal_set_message(t('Please check in your network'), 'error');
      }
    }
    else {
      drupal_set_message(t('you have not enabled cURL extension on your server'), 'error');
    }
    return '';
  } 
}
