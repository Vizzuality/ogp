<?php

class MenutrailbypathMenuHelper {
  protected $language;

  /**
   * MenutrailbypathMenuHelper constructor.
   *
   * @param $language
   */
  public function __construct($language) {
    $this->language = $language;
  }

  /**
   * Find link items matching the given link_paths in (almost) all menus
   *
   * @param $link_paths
   * @return array
   */
  public function getMenuLinksByPaths(array $link_paths) {
    if (empty($link_paths)) {
      return array();
    }

    $query =  db_select('menu_links', 'ml')
      ->fields('ml')
      ->condition('link_path', $link_paths, 'IN')
      ->condition('hidden', 0) // Only consider normal, visible menu links.
      ->orderBy('depth')
      ->orderBy('weight')
      ->orderBy('mlid');

    if (module_exists('i18n_menu')) {
      $query->condition('language', array(LANGUAGE_NONE, $this->language->language), 'IN');
    }
    $results = $query->execute();
    return ($results instanceof DatabaseStatementInterface) ? $this->translateMenuLinkTitles($results->fetchAll()) : array();
  }

  /**
   * Get menu_links for a given menu_name
   *
   * @param $menu_name
   * @return array
   */
  public function getMenuLinks($menu_name) {
    $query = db_select('menu_links', 'ml')
      ->fields('ml')
      ->condition('menu_name', $menu_name, '=') // Do not touch admin menu.
      ->condition('hidden', 0) // Only consider normal, visible menu links.
      ->orderBy('depth')
      ->orderBy('weight')
      ->orderBy('mlid');

    if (module_exists('i18n_menu')) {
      $query->condition('language', array(LANGUAGE_NONE, $this->language->language), 'IN');
    }
    $results = $query->execute();
    return ($results instanceof DatabaseStatementInterface) ? $this->translateMenuLinkTitles($results->fetchAll()) : array();
  }

  /**
   * translateMenuLinkTitles
   *
   * @param array $menu_links
   * @return array
   */
  protected function translateMenuLinkTitles(array $menu_links) {
    foreach ($menu_links as $k => $menu_link) {
      if (module_exists('i18n_menu')) {
        $menu_link->link_title = _i18n_menu_link_title((array) $menu_link, $this->language->language);
      }
    }
    return $menu_links;
  }

  /**
   * Sort menu_links by the menu preference order, see menu_set_active_menu_names()
   * Stable sorting based on https://github.com/vanderlee/PHP-stable-sort-functions
   *
   * @param array $menu_links
   */
  public function sortMenuLinksByMenuPreference(array &$menu_links) {
    $menu_preference     = array_flip(menu_get_active_menu_names());
    $menu_preference_max = count($menu_preference);

    $index = 0;
    foreach ($menu_links as &$item) {
      if (!isset($menu_preference[$item->menu_name])) {
        $menu_preference[$item->menu_name] = $menu_preference_max;
      }
      $item = array($index++, $item);
    }
    $usort_result = usort($menu_links, function($a, $b) use ($menu_preference) {
      $result = ($menu_preference[$a[1]->menu_name] == $menu_preference[$b[1]->menu_name]) ? 0 : (($menu_preference[$a[1]->menu_name] < $menu_preference[$b[1]->menu_name]) ? -1 : 1);
      return ($result == 0) ? ($a[0] - $b[0]) : $result;
    });
    foreach ($menu_links as &$item) {
      $item = $item[1];
    }
    return $usort_result;
  }
}