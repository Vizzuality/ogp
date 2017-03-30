<?php

module_load_include('inc', 'tb_social_feed', 'generator/field_generator');
module_load_include('inc', 'tb_social_feed', 'generator/node_generator');

class TBSocialFeed {

  protected $configs;
  public static $USER_PAGE = 0;
  public static $FAN_PAGE = 1;

  public function setConfig($cfg) {
    $this->configs = $cfg;
  }

  public function getConfig() {
    return $this->configs;
  }

  public function getType() {
    return "All";
  }

  public function crawlPage($url) {
    if (function_exists('curl_init')) {
      $header[0] = 'Accept: text/xml,application/xml,application/xhtml+xml,';
      $header[0] .= 'text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5';
      $header[] = 'Cache-Control: max-age=0';
      $header[] = 'Connection: keep-alive';
      $header[] = 'Keep-Alive: 300';
      $header[] = 'Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7';
      $header[] = 'Accept-Language: en-us,en;q=0.5';
      $header[] = 'Pragma: ';

      $curl = curl_init();
      curl_setopt($curl, CURLOPT_URL, $url);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);

      // Call to the link via https.
      curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
      curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);

      curl_setopt($curl, CURLOPT_ENCODING, 'gzip,deflate');
      curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
      curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36');
      $content = curl_exec($curl);
      curl_close($curl);
    }
    else {
      $content = @file_get_contents($url);
    }
    return $content;
  }

  public function getAccessToken() {
    return NULL;
  }
  
  public function getContent() {
    return NULL;
  }

  public function parseData($content) {
    return NULL;
  }

  public function feed() {
    $db_contents = new Tb_Social_Feed_Contents();
    $nodes = array();
    set_time_limit(0);
    $results = $this->getContent();
    
    if (!is_array($results))
      return $nodes;

    foreach ($results as $row) {
      $existed = $db_contents->select(array(), array(
        'feed_id' => $row['feed_id'],
        'account' => $row['account'],
        'service' => $row['service']
      ));
      if ($existed) {
        if ($row['changed'] > $existed->changed) {
          $node = tb_social_feed_generate_node($row, $existed->node_id);
          $row_contents = array(
            'feed_id' => $row['feed_id'],
            'data' => serialize($row),
            'service' => $row['service'],
            'account' => $row['account'],
            'created' => $row['created'],
            'changed' => $row['changed'],
            'url' => $row['url'],
            'reference_url' => $row['reference_url'],
            'latest_feed' => time(),
            'node_id' => $node->nid,
          );
          db_update('tb_social_feed_contents')
                  ->fields($row_contents)
                  ->condition('id', $existed->id)
                  ->execute();
          $nodes[] = $node;
        }
      }
      else {
        $node = tb_social_feed_generate_node($row);
        $row_contents = array(
          'feed_id' => $row['feed_id'],
          'data' => serialize($row),
          'service' => $row['service'],
          'account' => $row['account'],
          'created' => $row['created'],
          'changed' => $row['changed'],
          'url' => $row['url'],
          'reference_url' => $row['reference_url'],
          'latest_feed' => time(),
          'node_id' => $node->nid,
        );
        db_insert('tb_social_feed_contents')->fields($row_contents)->execute();
        $nodes[] = $node;
      }
    }
    return $nodes;
  }
  
  /**
   * Create a settings form on configuration page.
   * 
   * @param stdClass $service
   * @param array $form
   * @return array
   */
  function createSettingsForm($service, &$form) {
    $name_service = $service->service;
    $form[$name_service . '_application'] = array(
      '#type' => 'fieldset',
      '#title' => t($name_service." Application"),
      '#description' => '<p>There is no application settings at the moment.</p><a target="_blank" class="form-submit btn-verify-account" href="'. base_path().'admin/structure/feed/tb_social_feed'.'?active-tab=edit-'.$service->service.'-wrapper'.'">Get Feed Now</a>',
    );
  }
  
  /**
   * Create form to get feed from pages.
   * 
   * @param type $service
   * @param type $form
   */
  function createServiceForm($service, &$form) {
    $db_accounts = new Tb_Social_Feed_Accounts();
    $form[$service->service . "_enable"] = array(
      '#type' => 'checkbox',
      '#title' => t("Enable"),
      '#value' => $service->enabled,
    );
    $settings_form = array(
      '#type' => 'container',
      '#states' => array(
        'visible' => array(
          "input[name='{$service->service}_enable']" => array(
            'checked' => TRUE,
          ),
        ),
      ),
    );
    $settings_form[$service->service . "_auto_feed"] = array(
      '#type' => 'checkbox',
      '#title' => t("Auto feed"),
      '#value' => $service->auto_feed,
      '#description' => 'Automatically feed items every configured time of the drupal cron. Click <a href="' . url('admin/config/system/cron') . '">here</a> to configure cron ',
    );
    $this->createFeedLimitForm($service, $settings_form);

    $accounts = $db_accounts->select(
      array(), array('service' => $service->service, 'deleted' => 0), array('weight' => 'ASC'), Tb_Social_Feed_Accounts::$RETURN_ARRAY
    );
    $accounts_form = array(
      '#type' => 'fieldset',
      '#collapsible' => TRUE,
      '#title' => t("Profile")
    );
    $count = count($accounts) ? count($accounts) : 1;
    $sub_form = array();
    for ($i = 0; $i < $count; $i++) {
      $account = isset($accounts[$i]) ? $accounts[$i] : new stdClass();
      $account->form_order = $i;
      $account->service = isset($account->service) ? $account->service : $service->service;
      $account->account_name = isset($account->account_name) ? $account->account_name : "";
      
      $this->createAccountForm($account, $sub_form);
      if ($sub_form) {
        $accounts_form[$service->service . "_account_wrapper_$i"] = $sub_form;
      }
    }

    if ($sub_form) {
      $account = new stdClass();
      $account->form_order = 0;
      $account->service = $service->service;
      $account->account_name = "";
      $this->createAccountForm($account, $sub_form);
      $settings_form[$service->service . "_accounts_wrapper"] = $accounts_form;
      $settings_form[$service->service . "_accounts_info"] = array('#type' => 'hidden', '#value' => "");
      $settings_form[$service->service . "_add_account_wrapper"] = array(
        '#type' => 'container',
        '#attributes' => array('class' => array('form-wrapper', 'tb-feed-add-account-wrapper')),
        'add-account-button' => array(
          '#markup' => '<div class="add-account-button-wrapper"><a href="javascript:void(0)" class="btn btn-add-account" onclick="Drupal.TBFeed.addAccount(\'' . $service->service . '\')">Add Account</a></div>',
        ),
        $service->service . '_account_wrapper' => $sub_form,
      );
    }

    $this->createAppForm($service, $settings_form);
    $form[$service->service . '_settings_wrapper'] = $settings_form;
  }

  function createFeedLimitForm($service, &$form) {
    $form[$service->service . "_feed_limit"] = array(
      '#type' => 'select',
      '#title' => t("Feed Limit"),
      '#options' => array(5=>'5',10=>'10',20=>'20',30=>'30'),
      '#default_value' => $service->feed_limit,
      '#description' => t('Number of feed items to retrieve from each fan page.'),
    );
  }

  function createAppForm($service, &$form) {
    
  }
  
  /**
   * Save settings social services.
   * 
   * @param type $values
   */
  function saveSettingForm($values) {
    
  }
  
  function extendedInfo($service, &$input, &$service_fields) {
    
  }

  function createAccountForm($account, &$form) {
    
  }

  function createAdminProfileForm($params, &$form, $user = NULL) {
    
  }

  public function rssToArray($tags, $array, $url) {
    $doc = new DOMdocument();
    @$doc->load($url);
    $rss_array = array();
    foreach ($tags as $tag) {
      if ($doc->getElementsByTagName($tag)) {
        foreach ($doc->getElementsByTagName($tag) AS $node) {
          $items = array();
          foreach ($array AS $key => $values) {
            $items[$key] = array();
            foreach ($values as $value) {
              if ($itemsCheck = $node->getElementsByTagName($value)) {
                for ($j = 0; $j < $itemsCheck->length; $j++) {
                  if (($attribute = $itemsCheck->item($j)->nodeValue) != "") {
                    $items[$key][] = $attribute;
                  }
                  elseif ($attribute = $itemsCheck->item($j)->getAttribute('term')) {
                    $items[$key][] = $attribute;
                  }
                  elseif ($itemsCheck->item($j)->getAttribute('rel') == 'alternate') {
                    $items[$key][] = $itemsCheck->item($j)->getAttribute('href');
                  }
                }
              }
            }
          }
          array_push($rss_array, $items);
        }
      }
    }
    return $rss_array;
  }

  /**
   * Return feed limit based on number of feeds & user-defined feed limit
   * @param $items array list of items
   * @return $limit number 
   */
  public function getFeedLimit($items) {
    $length = count($items);
    $limit = $this->configs['limit'];
    if ($limit == 0 || $limit > $length)
      $limit = $length;
    return $limit;
  }

  public function getFeedType() {
    return "SocialFeed";
  }

  public function getBundle() {
    return 'tb_social_feed';
  }

  public function getFeedTypes() {
    return array();
  }

  public static function getServicesDefault() {
    return array(
      'facebook' => array(
        'title' => 'Facebook',
        'type' => 'tb_social_feed',
        'class' => 'TBFacebookFeed',
        'inc' => 'includes/facebook',
        'enabled' => 0,
        'auto_feed' => 1,
        'feed_limit' => 10,
        'number_accounts' => 0,
      ),
      'twitter' => array(
        'title' => 'Twitter',
        'type' => 'tb_social_feed',
        'class' => 'TBTwitterFeed',
        'inc' => 'includes/twitter',
        'enabled' => 0,
        'auto_feed' => 1,
        'feed_limit' => 10,
        'number_accounts' => 0,
      ),
      'instagram' => array(
        'title' => 'Instagram',
        'type' => 'tb_social_feed',
        'class' => 'TBInstagramFeed',
        'inc' => 'includes/instagram',
        'enabled' => 0,
        'auto_feed' => 1,
        'feed_limit' => 10,
        'number_accounts' => 0,
      ),
      'flickr' => array(
        'title' => 'Flickr',
        'type' => 'tb_social_feed',
        'class' => 'TBFlickrFeed',
        'inc' => 'includes/flickr',
        'enabled' => 0,
        'auto_feed' => 1,
        'feed_limit' => 10,
        'number_accounts' => 0,
      ),
      'youtube' => array(
        'title' => 'Youtube',
        'type' => 'tb_social_feed',
        'class' => 'TBYoutubeFeed',
        'inc' => 'includes/youtube',
        'enabled' => 0,
        'auto_feed' => 1,
        'feed_limit' => 10,
        'number_accounts' => 0,
      ),
      'vimeo' => array(
        'title' => 'Vimeo',
        'type' => 'tb_social_feed',
        'class' => 'TBVimeoFeed',
        'inc' => 'includes/vimeo',
        'enabled' => 0,
        'auto_feed' => 1,
        'feed_limit' => 10,
        'number_accounts' => 0,
      ),
    );
  }

}
