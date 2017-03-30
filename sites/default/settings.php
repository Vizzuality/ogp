<?php
//$databases['default']['default'] = array(
//    'driver' => 'mysql',
//    'database' => 'ogp',
//    'username' => 'root',
//    'password' => 'root',
//    'host' => '127.0.0.1',
//    'port' => 3306,
//    'prefix' => '',
//);

$update_free_access = false;
$drupal_hash_salt = '';
ini_set('session.gc_probability', 1);
ini_set('session.gc_divisor', 100);
ini_set('session.gc_maxlifetime', 200000);
ini_set('session.cookie_lifetime', 2000000);

$conf['restful_skip_basic_auth'] = true;
$conf['404_fast_paths_exclude'] = '/\/(?:styles)\//';
$conf['404_fast_paths'] = '/\.(?:txt|png|gif|jpe?g|css|js|ico|swf|flv|cgi|bat|pl|dll|exe|asp)$/i';
$conf['404_fast_html'] = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN" "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL "@path" was not found on this server.</p></body></html>';

if (!defined('PANTHEON_ENVIRONMENT')) {
    $settings_local = DRUPAL_ROOT.'/'.conf_path().'/settings.local.php';
    if (file_exists($settings_local)) {
        include $settings_local;
    }
}
