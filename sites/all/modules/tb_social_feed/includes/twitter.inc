<?php

module_load_include('php', 'tb_social_feed', 'libraries/twitter/twitter');

class TBTwitterFeed extends TBSocialFeed {

  function __construct($cfg = NULL) {
    $this->configs = array(
      'account' => $cfg ? $cfg['account'] : 'themebrain',
      'limit' => ($cfg['feed_limit'] > 100) ? 100 : $cfg['feed_limit']
    );
  }

  function getType() {
    return "Twitter";
  }

  public function getTweets($user_name) {
    $contents = array();
    $tweets = new Twitter($user_name, $this->configs['limit']);
    if (!empty($tweets->tweet)) {
      foreach ($tweets->tweet as $tweet) {
        $entry = array(
          'title' => $tweet->user->name,
          'created' => strtotime($tweet->created_at),
          'changed' => strtotime($tweet->created_at),
          'body' => $tweet->text,
          'field_social_feed_type' => $this->getType(),
          'node_type' => $this->getBundle(),
          'feed_id' => $tweet->id_str,
          'url' => 'private',
          'field_reference_url' => 'https://twitter.com/' . $user_name . '/statuses/' . $tweet->id_str,
          'reference_url' => 'https://twitter.com/' . $user_name . '/statuses/' . $tweet->id_str,
          'service' => 'twitter',
          'account' => $this->configs['account']
        );
        if (!empty($tweet->entities->media[0]->media_url)) {
          $entry['field_image'] = $tweet->entities->media[0]->media_url;
        }
        $contents[] = $entry;
      }
    }
    return $contents;
  }

  public function twParseProfile($profile) {
    $pattern = '/twitter\.com\/(.*)/';
    preg_match_all($pattern, $profile, $matches);
    $info = array(
      'name' => '',
      'id' => '',
      'username' => ''
    );
    if (!empty($matches[1])) {
      $info['username'] = $matches[1][0];
    }
    return $info;
  }

  public function getContent() {
    $profile = $this->twParseProfile($this->configs['account']);
    $contents = $this->getTweets($profile['username']);
    return $contents;

    $endpoint = 'http://search.twitter.com/search.json?q=%s&rpp=%s';
    $fullurl = sprintf($endpoint, $this->configs['account'], $this->configs['limit']);
    $raw = file_get_contents($fullurl);
    $data = json_decode($raw);
    if (!isset($data->results)) {
      return FALSE;
    }
    $results = array();
    for ($i = 0; $i < count($data->results); $i++) {
      $row = $data->results[$i];
      $result = array();
      $result['title'] = $row->from_user_name;
      $result['created'] = $result['changed'] = strtotime($row->created_at);
      $result['body'] = $row->text;
      $result['field_social_feed_type'] = $this->getType();
      $result['node_type'] = $this->getBundle();
      $result['feed_id'] = $row->id_str;
      $result['url'] = $fullurl;
      $result['field_reference_url'] = $result['reference_url'] = 'https://twitter.com/' . $this->configs['account'] . '/statuses/' . $row->id_str;
      $result['service'] = 'twitter';
      $result['account'] = $this->configs['account'];
      $results[] = $result;
    }
    return $results;
  }

  function createAccountForm($account, &$form) {
    $form = array(
      '#type' => 'fieldset',
      '#title' => t("Profile"),
      '#description' => t('<span class="tb-social-feed-description">Example: <a href="https://twitter.com/themebrain" target="_blank">https://twitter.com/themebrain</a></span>')
    );
    $form[$account->service . '_feed_account_name[]'] = array(
      '#type' => 'hidden',
      '#size' => 8,
      '#title' => t("Account Name"),
      '#default_value' => isset($account->account_name) ? $account->account_name : ""
    );
    $form[$account->service . '_feed_account[]'] = array(
      '#type' => 'textfield',
      '#size' => 8,
      '#title' => t("Profile Url"),
      '#default_value' => isset($account->account) ? $account->account : "",
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

  function createFeedLimitForm($service, &$form) {
    $form[$service->service . "_feed_limit"] = array(
      '#type' => 'textfield',
      '#title' => t("Feed Limit"),
      '#value' => $service->feed_limit,
      '#description' => t('The valid number of feed items for Twitter should not be higher than 100.'),
    );
  }

}