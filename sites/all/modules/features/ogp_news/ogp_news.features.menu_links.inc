<?php
/**
 * @file
 * ogp_news.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function ogp_news_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: main-menu:about/news
  $menu_links['main-menu:about/news'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'about/news',
    'router_path' => 'about/news',
    'link_title' => 'News',
    'options' => array(),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'language' => 'und',
    'customized' => 1,
  );
  // Exported menu link: navigation:node/add/news
  $menu_links['navigation:node/add/news'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/news',
    'router_path' => 'node/add/news',
    'link_title' => 'News',
    'options' => array(
      'attributes' => array(
        'title' => 'Press coverage of OGP',
      ),
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'language' => 'und',
    'customized' => 0,
    'parent_path' => 'node/add',
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('News');


  return $menu_links;
}
