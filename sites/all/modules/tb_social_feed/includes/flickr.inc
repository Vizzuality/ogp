<?php

class TBFlickrFeed extends TBSocialFeed {

  function __construct($cfg = NULL) {
    $this->configs = array(
      'account' => $cfg ? $cfg['account'] : '58736703@N00',
      'format' => 'php_serial',
      'limit' => $cfg['feed_limit']
    );
  }

  function getType() {
    return "Flickr";
  }

  public function getContent() {
    $url = "http://api.flickr.com/services/feeds/photos_public.gne?format=%s&id=%s";
    $url = sprintf($url, $this->configs['format'], $this->configs['account']);
    $content = $this->crawlPage($url);
    $data = unserialize($content);
    if (!isset($data['items'])) {
      return FALSE;
    }
    $results = array();
    $items = $data['items'];
    $limit = $this->getFeedLimit($items);
    for ($i = 0; $i < $limit; $i++) {
      $row = $items[$i];
      $result = array();
      $result['title'] = $row['title'];
      preg_match_all("'<p>(.*?)</p>'si", $row['description'], $match);
      $result['body'] = isset($match[0][2]) ? ($match[0][0] . $match[0][2]) : $match[0][0];
      $result['field_image'] = $row['l_url'];
      $result['feed_id'] = $result['reference_url'] = $result['field_reference_url'] = $row['url'];
      $result['field_social_feed_type'] = $this->getType();
      $result['node_type'] = $this->getBundle();
      $result['created'] = $result['changed'] = strtotime($row['date_taken']);
      $result['url'] = $url;
      $result['service'] = 'flickr';
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
      '#type' => 'textfield',
      '#size' => 8,
      '#title' => t("Account Name"),
      '#default_value' => isset($account->account_name) ? $account->account_name : ""
    );
    $form[$account->service . '_feed_account[]'] = array(
      '#type' => 'textfield',
      '#size' => 8,
      '#title' => t("Flickr ID"),
      '#default_value' => isset($account->account) ? $account->account : "",
      '#description' => t("Click <a href='http://idgettr.com/' target='_blank'>here</a> to find your Flickr ID"),
      '#attributes' => array('class' => array('account')),
    );
    $form[$account->service . '_feed_current_account[]'] = array(
      '#type' => 'hidden',
      '#value' => isset($account->account) ? $account->account : ""
    );
    $form[$account->service . '_feed_account_verify'] = array(
      '#markup' => '<a href="javascript:void(0)" class="form-submit btn-verify-account" onclick="Drupal.TBFeed.verifyAccount(\'http://api.flickr.com/services/feeds/photos_public.gne?format=rss20&id=\', this)">' . t('Check feed') . '</a><br/>',
    );
    $form[$account->service . '_feed_account_delete'] = array(
      '#markup' => '<a href="javascript:void(0)" class="btn btn-delete-account" onclick="Drupal.TBFeed.deleteAccount(this)">' . t('Delete') . '</a>',
    );
  }

}
