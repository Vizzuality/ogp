<?php

class TBYoutubeFeed extends TBSocialFeed {

  function __construct($cfg = NULL) {
    $this->configs = $cfg;
    $this->configs['max_results'] = ($cfg['feed_limit'] > 50) ? 50 : $cfg['feed_limit'];
    $this->configs['alt'] = 'json';
  }

  function getType() {
    return "Youtube";
  }

  public function getContent() {
    $endpoint = 'http://gdata.youtube.com/feeds/api/videos?q=%s&v=2&max-results=%s&alt=%s';
    $fullurl = sprintf($endpoint, $this->configs['account'], $this->configs['max_results'], $this->configs['alt']);
    $raw = file_get_contents($fullurl);
    $data = json_decode($raw);
    if (!isset($data->feed) || !isset($data->feed->entry)) {
      return FALSE;
    }
    $results = array();
    $list = $data->feed->entry;
    for ($i = 0; $i < count($list); $i++) {
      $row = $list[$i];
      $result = array();
      $temp = get_object_vars($row->title);
      $result['title'] = $temp['$t'];
      $temp = get_object_vars($row->id);
      $temp = explode(':', $temp['$t']);
      $video_id = $temp[count($temp) - 1];
      $result['field_youtube'] = $result['field_reference_url'] = $result['reference_url'] = 'http://www.youtube.com/watch?v=' . $video_id;
      $result['changed'] = get_object_vars($row->updated);
      $result['changed'] = strtotime($result['changed']['$t']);
      $result['created'] = get_object_vars($row->published);
      $result['created'] = strtotime($result['created']['$t']);
      $temp = get_object_vars($row);
      $temp = get_object_vars($temp['media$group']);
      $temp = get_object_vars($temp['media$description']);
      $result['body'] = $temp['$t'];
      $result['field_social_feed_type'] = $this->getType();
      $result['node_type'] = $this->getBundle();
      $result['feed_id'] = $video_id;
      $result['url'] = $fullurl;
      $result['service'] = 'youtube';
      $result['account'] = $this->configs['account'];
      $results[] = $result;
    }
    return $results;
  }

  function createAccountForm($account, &$form) {
    $form = array(
      '#type' => 'fieldset',
      '#title' => t("Account")
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
      '#title' => t("Youtube Username"),
      '#default_value' => isset($account->account) ? $account->account : "",
      '#description' => t("Enter your Youtube username. Ex: boyceavenue, linkinparktv, etc."),
      '#attributes' => array('class' => array('account')),
    );
    $form[$account->service . '_feed_current_account[]'] = array(
      '#type' => 'hidden',
      '#value' => isset($account->account) ? $account->account : ""
    );
    $form[$account->service . '_feed_account_verify'] = array(
      '#markup' => '<a href="javascript:void(0)" class="form-submit btn-verify-account" onclick="Drupal.TBFeed.verifyAccount(\'http://gdata.youtube.com/feeds/api/videos?q=\', this)">' . t('Check feed') . '</a><br/>',
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
      '#description' => t('The valid number of feed items for Youtube should not be higher than 50.'),
    );
  }

}
