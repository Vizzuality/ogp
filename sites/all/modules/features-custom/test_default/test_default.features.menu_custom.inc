<?php
/**
 * @file
 * test_default.features.menu_custom.inc
 */

/**
 * Implements hook_menu_default_menu_custom().
 */
function test_default_menu_default_menu_custom() {
  $menus = array();

  // Exported menu: devel.
  $menus['devel'] = array(
    'menu_name' => 'devel',
    'title' => 'Development',
    'description' => 'Development link',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: management.
  $menus['management'] = array(
    'menu_name' => 'management',
    'title' => 'Management',
    'description' => 'The <em>Management</em> menu contains links for administrative tasks.',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-footer-menu.
  $menus['menu-footer-menu'] = array(
    'menu_name' => 'menu-footer-menu',
    'title' => 'Footer menu',
    'description' => '',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-menu-navigation.
  $menus['menu-menu-navigation'] = array(
    'menu_name' => 'menu-menu-navigation',
    'title' => 'Menu Navigation',
    'description' => 'Menu navigation',
    'language' => 'und',
    'i18n_mode' => 5,
  );
  // Exported menu: menu-menu-ogp.
  $menus['menu-menu-ogp'] = array(
    'menu_name' => 'menu-menu-ogp',
    'title' => 'menu_ogp',
    'description' => 'Menu OGP',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-menu-quick-links.
  $menus['menu-menu-quick-links'] = array(
    'menu_name' => 'menu-menu-quick-links',
    'title' => 'Quick links - Authenticated',
    'description' => 'Utility links that display on every page of the site, such as "Your account" and "Your schedule"',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-menuogp.
  $menus['menu-menuogp'] = array(
    'menu_name' => 'menu-menuogp',
    'title' => 'Menu OGP',
    'description' => 'New OGP menu for all the pages.',
    'language' => 'und',
    'i18n_mode' => 5,
  );
  // Exported menu: menu-og-285.
  $menus['menu-og-285'] = array(
    'menu_name' => 'menu-og-285',
    'title' => 'Romania',
    'description' => 'OG Menu for Romania',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-og-293.
  $menus['menu-og-293'] = array(
    'menu_name' => 'menu-og-293',
    'title' => 'Mexico',
    'description' => 'OG Menu for Mexico',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-og-3698.
  $menus['menu-og-3698'] = array(
    'menu_name' => 'menu-og-3698',
    'title' => 'Fiscal Openness Working Group ',
    'description' => 'OG Menu for Fiscal Openness Working Group ',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-og-5486.
  $menus['menu-og-5486'] = array(
    'menu_name' => 'menu-og-5486',
    'title' => 'Open Data Working Group',
    'description' => 'OG Menu for Open Data Working Group',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-og-5717.
  $menus['menu-og-5717'] = array(
    'menu_name' => 'menu-og-5717',
    'title' => 'Openness in Natural Resources Working Group',
    'description' => 'OG Menu for Openness in Natural Resources Working Group',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-og-5758.
  $menus['menu-og-5758'] = array(
    'menu_name' => 'menu-og-5758',
    'title' => 'Fiscal Openness Working Group',
    'description' => 'OG Menu for Fiscal Openness Working Group',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-og-5889.
  $menus['menu-og-5889'] = array(
    'menu_name' => 'menu-og-5889',
    'title' => 'Access to Information Working Group',
    'description' => 'OG Menu for Access to Information Working Group',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-og-6622.
  $menus['menu-og-6622'] = array(
    'menu_name' => 'menu-og-6622',
    'title' => 'OGP Steering Committee',
    'description' => 'OG Menu for OGP Steering Committee',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-og-8424.
  $menus['menu-og-8424'] = array(
    'menu_name' => 'menu-og-8424',
    'title' => 'Civil Society Engagement (new)',
    'description' => 'OG Menu for Civil Society Engagement (new)',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: menu-og-9232.
  $menus['menu-og-9232'] = array(
    'menu_name' => 'menu-og-9232',
    'title' => 'Anti-Corruption',
    'description' => 'OG Menu for Anti-Corruption',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: navigation.
  $menus['navigation'] = array(
    'menu_name' => 'navigation',
    'title' => 'Navigation',
    'description' => 'The <em>Navigation</em> menu contains links intended for site visitors. Links are added to the <em>Navigation</em> menu automatically by some modules.',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Exported menu: user-menu.
  $menus['user-menu'] = array(
    'menu_name' => 'user-menu',
    'title' => 'User menu',
    'description' => 'The <em>User</em> menu contains links related to the user\'s account, as well as the \'Log out\' link.',
    'language' => 'und',
    'i18n_mode' => 0,
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('Access to Information Working Group');
  t('Anti-Corruption');
  t('Civil Society Engagement (new)');
  t('Development');
  t('Development link');
  t('Fiscal Openness Working Group');
  t('Fiscal Openness Working Group ');
  t('Footer menu');
  t('Management');
  t('Menu Navigation');
  t('Menu OGP');
  t('Menu navigation');
  t('Mexico');
  t('Navigation');
  t('New OGP menu for all the pages.');
  t('OG Menu for Access to Information Working Group');
  t('OG Menu for Anti-Corruption');
  t('OG Menu for Civil Society Engagement (new)');
  t('OG Menu for Fiscal Openness Working Group');
  t('OG Menu for Fiscal Openness Working Group ');
  t('OG Menu for Mexico');
  t('OG Menu for OGP Steering Committee');
  t('OG Menu for Open Data Working Group');
  t('OG Menu for Openness in Natural Resources Working Group');
  t('OG Menu for Romania');
  t('OGP Steering Committee');
  t('Open Data Working Group');
  t('Openness in Natural Resources Working Group');
  t('Quick links - Authenticated');
  t('Romania');
  t('The <em>Management</em> menu contains links for administrative tasks.');
  t('The <em>Navigation</em> menu contains links intended for site visitors. Links are added to the <em>Navigation</em> menu automatically by some modules.');
  t('The <em>User</em> menu contains links related to the user\'s account, as well as the \'Log out\' link.');
  t('User menu');
  t('Utility links that display on every page of the site, such as "Your account" and "Your schedule"');
  t('menu_ogp');

  return $menus;
}
