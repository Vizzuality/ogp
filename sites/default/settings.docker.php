<?php
$databases['default']['default'] = array(
  'driver' => 'mysql',
  'database' => $_ENV["MYSQL_DATABASE"],
  'username' => $_ENV["MYSQL_USER"],
  'password' => $_ENV["MYSQL_ROOT_PASSWORD"],
  'host' => $_ENV["MYSQL_PORT_3306_TCP_ADDR"],
  'prefix' => '',
);

$update_free_access = FALSE;
$drupal_hash_salt = '';
ini_set('session.gc_probability', 1);
ini_set('session.gc_divisor', 100);
ini_set('session.gc_maxlifetime', 200000);
ini_set('session.cookie_lifetime', 2000000);

$conf['404_fast_paths_exclude'] = '/\/(?:styles)\//';
$conf['404_fast_paths'] = '/\.(?:txt|png|gif|jpe?g|css|js|ico|swf|flv|cgi|bat|pl|dll|exe|asp)$/i';
$conf['404_fast_html'] = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN" "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL "@path" was not found on this server.</p></body></html>';

// Require WWW and remove blog.
if (isset($_SERVER['PANTHEON_ENVIRONMENT']) &&
  $_SERVER['PANTHEON_ENVIRONMENT'] === 'live') {
  if ($_SERVER['HTTP_HOST'] == 'opengovpartnership.org' ||
      $_SERVER['HTTP_HOST'] == 'blog.opengovpartnership.org') {
    header('HTTP/1.0 301 Moved Permanently');
    header('Location: http://www.opengovpartnership.org'. $_SERVER['REQUEST_URI']);
    exit();
  }
}
else {
  $settings_local = DRUPAL_ROOT . '/' . conf_path() . '/settings.local.php';
  if (file_exists($settings_local)) {
    include $settings_local;
  }
}
