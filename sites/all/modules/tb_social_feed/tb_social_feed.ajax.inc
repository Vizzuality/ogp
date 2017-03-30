<?php
function tb_social_feed_get_faccbok_account() {
    $db_accounts = new Tb_Social_Feed_Accounts();
    $facebook = new TBFacebookFeed();
    $account = $db_accounts->select(array('account', 'feed_type'), array(
        'account'   =>  $facebook->fbGetUserId(),
        'service'   =>  'facebook'
    ), array(), Tb_Social_Feed_Accounts::$RETURN_ARRAY);
    if (!empty($account)) {
        drupal_json_output($account[0]);
    } else {
        drupal_json_output(array());
    }
    drupal_exit();   
}