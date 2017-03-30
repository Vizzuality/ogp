<?php

class TBVimeoFeed extends TBSocialFeed {

  function __construct($cfg = NULL) {
    $this->configs = $cfg;
    $this->configs['request'] = 'all_videos';
    $this->configs['output'] = 'json';
    $this->configs['limit'] = $cfg['feed_limit'];
  }

  function getType() {
    return 'Vimeo';
  }

  public function getContent() {
    $endpoint = 'http://vimeo.com/api/v2/%s/%s.%s';
    $fullurl = sprintf($endpoint, $this->configs['account'], $this->configs['request'], $this->configs['output']);
    $raw = file_get_contents($fullurl);
    $data = json_decode($raw);
    $results = array();
    $limit = $this->getFeedLimit($data);
    for ($i = 0; $i < $limit; $i++) {
      $row = $data[$i];
      $result = array();
      $result['title'] = $row->title;
      $result['body'] = $row->description;
      $result['field_vimeo'] = $row->url;
      $result['created'] = $result['changed'] = strtotime($row->upload_date);
      $result['feed_id'] = $row->id;
      $result['field_reference_url'] = $result['reference_url'] = 'http://vimeo.com/' . $row->id;
      $result['url'] = $fullurl;
      $result['service'] = 'vimeo';
      $result['account'] = $this->configs['account'];
      $result['field_social_feed_type'] = $this->getType();
      $result['node_type'] = $this->getBundle();
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
      '#title' => t("Vimeo Username"),
      '#default_value' => isset($account->account) ? $account->account : "",
      '#description' => t('Enter your vimeo username. Ex: mashable, colefilm, etc. Click <a href="http://vimeo.com/mashable">here</a> to see a sample link.'),
      '#attributes' => array('class' => array('account')),
    );
    $form[$account->service . '_feed_current_account[]'] = array(
      '#type' => 'hidden',
      '#value' => isset($account->account) ? $account->account : ""
    );
    $form[$account->service . '_feed_account_verify'] = array(
      '#markup' => '<a href="javascript:void(0)" class="form-submit btn-verify-account" onclick="Drupal.TBFeed.verifyVimeoAccount(\'http://vimeo.com/api/v2/\', this)">' . t('Check feed') . '</a><br/>',
    );
    $form[$account->service . '_feed_account_delete'] = array(
      '#markup' => '<a href="javascript:void(0)" class="btn btn-delete-account" onclick="Drupal.TBFeed.deleteAccount(this)">' . t('Delete') . '</a>',
    );
  }

}