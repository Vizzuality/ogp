<?php
/**
 * @file
 * test_default.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function test_default_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: main-menu_about-the-iep:node/6686.
  $menu_links['main-menu_about-the-iep:node/6686'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6686',
    'router_path' => 'node/%',
    'link_title' => 'About the IEP',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_about-the-iep:node/6686',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_about:node/6636',
  );
  // Exported menu link: main-menu_about-the-irm:node/2757.
  $menu_links['main-menu_about-the-irm:node/2757'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2757',
    'router_path' => 'node/%',
    'link_title' => 'About the IRM',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_about-the-irm:node/2757',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_about:node/6636',
  );
  // Exported menu link: main-menu_about:node/2653.
  $menu_links['main-menu_about:node/2653'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2653',
    'router_path' => 'node/%',
    'link_title' => 'About',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_about:node/2653',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_blog:blog',
  );
  // Exported menu link: main-menu_about:node/6636.
  $menu_links['main-menu_about:node/6636'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6636',
    'router_path' => 'node/%',
    'link_title' => 'About',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_about:node/6636',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_access-to-information-working-group:node/5889.
  $menu_links['main-menu_access-to-information-working-group:node/5889'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5889',
    'router_path' => 'node/%',
    'link_title' => 'Access to Information Working Group',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_access-to-information-working-group:node/5889',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_ogp-working-groups:node/2729',
  );
  // Exported menu link: main-menu_acerca-de:node/1002.
  $menu_links['main-menu_acerca-de:node/1002'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1002',
    'router_path' => 'node/%',
    'link_title' => 'Acerca de...',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_acerca-de:node/1002',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -39,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_acerca-del-irm:node/2757.
  $menu_links['main-menu_acerca-del-irm:node/2757'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2757',
    'router_path' => 'node/%',
    'link_title' => 'Acerca del IRM',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_acerca-del-irm:node/2757',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_acerca-de:node/1002',
  );
  // Exported menu link: main-menu_agenda-items-america-menu-position-rule:menu-position/7.
  $menu_links['main-menu_agenda-items-america-menu-position-rule:menu-position/7'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'menu-position/7',
    'router_path' => 'menu-position/%',
    'link_title' => 'Agenda Items (America) (menu position rule)',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(
        'class' => array(
          0 => 'menu-position-link',
        ),
      ),
      'identifier' => 'main-menu_agenda-items-america-menu-position-rule:menu-position/7',
    ),
    'module' => 'menu_position',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'main-menu_agenda:get-involved/americas-regional-meeting/agenda',
  );
  // Exported menu link: main-menu_agenda-items-asia-menu-position-rule:menu-position/5.
  $menu_links['main-menu_agenda-items-asia-menu-position-rule:menu-position/5'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'menu-position/5',
    'router_path' => 'menu-position/%',
    'link_title' => 'Agenda Items (Asia) (menu position rule)',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(
        'class' => array(
          0 => 'menu-position-link',
        ),
      ),
      'identifier' => 'main-menu_agenda-items-asia-menu-position-rule:menu-position/5',
    ),
    'module' => 'menu_position',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_agenda:get-involved/asia-pacific-regional-meeting/agenda',
  );
  // Exported menu link: main-menu_agenda-items-europe-menu-position-rule:menu-position/6.
  $menu_links['main-menu_agenda-items-europe-menu-position-rule:menu-position/6'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'menu-position/6',
    'router_path' => 'menu-position/%',
    'link_title' => 'Agenda Items (Europe) (menu position rule)',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(
        'class' => array(
          0 => 'menu-position-link',
        ),
      ),
      'identifier' => 'main-menu_agenda-items-europe-menu-position-rule:menu-position/6',
    ),
    'module' => 'menu_position',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'main-menu_agenda:get-involved/europe-regional-meeting/agenda',
  );
  // Exported menu link: main-menu_agenda:get-involved/americas-regional-meeting/agenda.
  $menu_links['main-menu_agenda:get-involved/americas-regional-meeting/agenda'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'get-involved/americas-regional-meeting/agenda',
    'router_path' => 'get-involved/americas-regional-meeting/agenda',
    'link_title' => 'Agenda',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_agenda:get-involved/americas-regional-meeting/agenda',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_americas-regional-meeting:node/5612',
  );
  // Exported menu link: main-menu_agenda:get-involved/asia-pacific-regional-meeting/agenda.
  $menu_links['main-menu_agenda:get-involved/asia-pacific-regional-meeting/agenda'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'get-involved/asia-pacific-regional-meeting/agenda',
    'router_path' => 'get-involved/asia-pacific-regional-meeting/agenda',
    'link_title' => 'Agenda',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_agenda:get-involved/asia-pacific-regional-meeting/agenda',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -37,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_agenda:get-involved/europe-regional-meeting/agenda.
  $menu_links['main-menu_agenda:get-involved/europe-regional-meeting/agenda'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'get-involved/europe-regional-meeting/agenda',
    'router_path' => 'get-involved/europe-regional-meeting/agenda',
    'link_title' => 'Agenda',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_agenda:get-involved/europe-regional-meeting/agenda',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_europe-regional-meeting:node/3742',
  );
  // Exported menu link: main-menu_agenda:node/3735.
  $menu_links['main-menu_agenda:node/3735'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3735',
    'router_path' => 'node/%',
    'link_title' => 'Agenda',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_agenda:node/3735',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_asia-pacific-regional-meeting:node/3734',
  );
  // Exported menu link: main-menu_americas-regional-meeting:node/5612.
  $menu_links['main-menu_americas-regional-meeting:node/5612'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5612',
    'router_path' => 'node/%',
    'link_title' => 'Americas Regional Meeting',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_americas-regional-meeting:node/5612',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -31,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_annual-reports:node/8656.
  $menu_links['main-menu_annual-reports:node/8656'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/8656',
    'router_path' => 'node/%',
    'link_title' => 'Annual Reports',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_annual-reports:node/8656',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 50,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_news-and-events:node/6590',
  );
  // Exported menu link: main-menu_artculos-de-gobierno:node/1329.
  $menu_links['main-menu_artculos-de-gobierno:node/1329'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1329',
    'router_path' => 'node/%',
    'link_title' => 'Artículos de Gobierno',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_artculos-de-gobierno:node/1329',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_acerca-de:node/1002',
  );
  // Exported menu link: main-menu_articles-of-governance:node/1329.
  $menu_links['main-menu_articles-of-governance:node/1329'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1329',
    'router_path' => 'node/%',
    'link_title' => 'Articles of Governance',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_articles-of-governance:node/1329',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -39,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_asia-pacific-regional-meeting:node/3734.
  $menu_links['main-menu_asia-pacific-regional-meeting:node/3734'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3734',
    'router_path' => 'node/%',
    'link_title' => 'Asia Pacific Regional Meeting',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_asia-pacific-regional-meeting:node/3734',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -35,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_awards:node/6633.
  $menu_links['main-menu_awards:node/6633'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6633',
    'router_path' => 'node/%',
    'link_title' => 'Awards',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'identifier' => 'main-menu_awards:node/6633',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -43,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_blog-authors:blog/bloggers.
  $menu_links['main-menu_blog-authors:blog/bloggers'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'blog/bloggers',
    'router_path' => 'blog/bloggers',
    'link_title' => 'Blog Authors',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'identifier' => 'main-menu_blog-authors:blog/bloggers',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_news-and-events:node/6590',
  );
  // Exported menu link: main-menu_blog:blog.
  $menu_links['main-menu_blog:blog'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'blog',
    'router_path' => 'blog',
    'link_title' => 'Blog',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_blog:blog',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_news-and-events:node/6590',
  );
  // Exported menu link: main-menu_blog:news and events.
  $menu_links['main-menu_blog:news and events'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'news and events',
    'router_path' => 'news and events',
    'link_title' => 'Blog',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_blog:news and events',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -23,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_calendars-and-deadlines:node/5784.
  $menu_links['main-menu_calendars-and-deadlines:node/5784'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5784',
    'router_path' => 'node/%',
    'link_title' => 'Calendars and Deadlines',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_calendars-and-deadlines:node/5784',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -43,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_civil-society-engagement:node/8424.
  $menu_links['main-menu_civil-society-engagement:node/8424'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/8424',
    'router_path' => 'node/%',
    'link_title' => 'Civil Society Engagement',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_civil-society-engagement:node/8424',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_civil-society:node/8424.
  $menu_links['main-menu_civil-society:node/8424'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/8424',
    'router_path' => 'node/%',
    'link_title' => 'Civil Society',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'identifier' => 'main-menu_civil-society:node/8424',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_cmo-funciona-ogp:node/1001.
  $menu_links['main-menu_cmo-funciona-ogp:node/1001'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1001',
    'router_path' => 'node/%',
    'link_title' => 'Cómo Funciona OGP',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_cmo-funciona-ogp:node/1001',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -40,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_cmo-incorporarse:node/1337.
  $menu_links['main-menu_cmo-incorporarse:node/1337'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1337',
    'router_path' => 'node/%',
    'link_title' => 'Cómo incorporarse',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_cmo-incorporarse:node/1337',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_cmo-funciona-ogp:node/1001',
  );
  // Exported menu link: main-menu_contact--faq:node/3738.
  $menu_links['main-menu_contact--faq:node/3738'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3738',
    'router_path' => 'node/%',
    'link_title' => 'Contact & FAQ',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_contact--faq:node/3738',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -43,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_asia-pacific-regional-meeting:node/3734',
  );
  // Exported menu link: main-menu_contact-ogp:node/2752.
  $menu_links['main-menu_contact-ogp:node/2752'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2752',
    'router_path' => 'node/%',
    'link_title' => 'Contact OGP',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_contact-ogp:node/2752',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_contact:node/3746.
  $menu_links['main-menu_contact:node/3746'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3746',
    'router_path' => 'node/%',
    'link_title' => 'Contact',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_contact:node/3746',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -43,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_europe-regional-meeting:node/3742',
  );
  // Exported menu link: main-menu_contctanos:node/2752.
  $menu_links['main-menu_contctanos:node/2752'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2752',
    'router_path' => 'node/%',
    'link_title' => 'Contáctanos',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_contctanos:node/2752',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_involcrate:node/1000',
  );
  // Exported menu link: main-menu_cronograma-y-fechas-lmite:node/1356.
  $menu_links['main-menu_cronograma-y-fechas-lmite:node/1356'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1356',
    'router_path' => 'node/%',
    'link_title' => 'Cronograma y fechas límite',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_cronograma-y-fechas-lmite:node/1356',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_cmo-funciona-ogp:node/1001',
  );
  // Exported menu link: main-menu_cso-day:node/1347.
  $menu_links['main-menu_cso-day:node/1347'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1347',
    'router_path' => 'node/%',
    'link_title' => 'CSO Day',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_cso-day:node/1347',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -43,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_london-summit-2013:node/1341',
  );
  // Exported menu link: main-menu_cso-day:node/3737.
  $menu_links['main-menu_cso-day:node/3737'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3737',
    'router_path' => 'node/%',
    'link_title' => 'CSO Day',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_cso-day:node/3737',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_asia-pacific-regional-meeting:node/3734',
  );
  // Exported menu link: main-menu_cso-day:node/3744.
  $menu_links['main-menu_cso-day:node/3744'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3744',
    'router_path' => 'node/%',
    'link_title' => 'CSO Day',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_cso-day:node/3744',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_europe-regional-meeting:node/3742',
  );
  // Exported menu link: main-menu_cso-day:node/5615.
  $menu_links['main-menu_cso-day:node/5615'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5615',
    'router_path' => 'node/%',
    'link_title' => 'CSO Day',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_cso-day:node/5615',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -44,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_americas-regional-meeting:node/5612',
  );
  // Exported menu link: main-menu_cumbre-londres-2013:node/1341.
  $menu_links['main-menu_cumbre-londres-2013:node/1341'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1341',
    'router_path' => 'node/%',
    'link_title' => 'Cumbre Londres 2013',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'identifier' => 'main-menu_cumbre-londres-2013:node/1341',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_involcrate:node/1000',
  );
  // Exported menu link: main-menu_declaracin-de-gobierno-abierto:node/2727.
  $menu_links['main-menu_declaracin-de-gobierno-abierto:node/2727'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2727',
    'router_path' => 'node/%',
    'link_title' => 'Declaración de Gobierno Abierto',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_declaracin-de-gobierno-abierto:node/2727',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_acerca-de:node/1002',
  );
  // Exported menu link: main-menu_develop-a-national-action-plan:node/1339.
  $menu_links['main-menu_develop-a-national-action-plan:node/1339'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1339',
    'router_path' => 'node/%',
    'link_title' => 'Develop a National Action Plan',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_develop-a-national-action-plan:node/1339',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_disclaimer:node/2654.
  $menu_links['main-menu_disclaimer:node/2654'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2654',
    'router_path' => 'node/%',
    'link_title' => 'Disclaimer',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_disclaimer:node/2654',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_blog:blog',
  );
  // Exported menu link: main-menu_el-boletn:node/8505.
  $menu_links['main-menu_el-boletn:node/8505'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/8505',
    'router_path' => 'node/%',
    'link_title' => 'El Boletín',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_el-boletn:node/8505',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 50,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_news-and-events:node/6590',
  );
  // Exported menu link: main-menu_elegibilidad:node/1338.
  $menu_links['main-menu_elegibilidad:node/1338'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1338',
    'router_path' => 'node/%',
    'link_title' => 'Elegibilidad',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_elegibilidad:node/1338',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_cmo-incorporarse:node/1337',
  );
  // Exported menu link: main-menu_eligibility-criteria:node/1338.
  $menu_links['main-menu_eligibility-criteria:node/1338'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1338',
    'router_path' => 'node/%',
    'link_title' => 'Eligibility Criteria',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_eligibility-criteria:node/1338',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_envanos-informacin-sobre-la-alianza:node/2748.
  $menu_links['main-menu_envanos-informacin-sobre-la-alianza:node/2748'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2748',
    'router_path' => 'node/%',
    'link_title' => 'Envíanos información sobre la Alianza',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_envanos-informacin-sobre-la-alianza:node/2748',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_involcrate:node/1000',
  );
  // Exported menu link: main-menu_europe-regional-meeting:node/3742.
  $menu_links['main-menu_europe-regional-meeting:node/3742'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3742',
    'router_path' => 'node/%',
    'link_title' => 'Europe Regional Meeting',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_europe-regional-meeting:node/3742',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -32,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_events-es-menu-position-rule:menu-position/3.
  $menu_links['main-menu_events-es-menu-position-rule:menu-position/3'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'menu-position/3',
    'router_path' => 'menu-position/%',
    'link_title' => 'Events ES (menu position rule)',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(
        'class' => array(
          0 => 'menu-position-link',
        ),
      ),
      'identifier' => 'main-menu_events-es-menu-position-rule:menu-position/3',
    ),
    'module' => 'menu_position',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'main-menu_involcrate:node/1000',
  );
  // Exported menu link: main-menu_faqs:node/1333.
  $menu_links['main-menu_faqs:node/1333'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1333',
    'router_path' => 'node/%',
    'link_title' => 'FAQs',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_faqs:node/1333',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -36,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_festival:node/2768.
  $menu_links['main-menu_festival:node/2768'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2768',
    'router_path' => 'node/%',
    'link_title' => 'Festival',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_festival:node/2768',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_london-summit-2013:node/1341',
  );
  // Exported menu link: main-menu_festival:node/3747.
  $menu_links['main-menu_festival:node/3747'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3747',
    'router_path' => 'node/%',
    'link_title' => 'Festival',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_festival:node/3747',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_europe-regional-meeting:node/3742',
  );
  // Exported menu link: main-menu_finances-and-budget:node/1330.
  $menu_links['main-menu_finances-and-budget:node/1330'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1330',
    'router_path' => 'node/%',
    'link_title' => 'Finances and Budget',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_finances-and-budget:node/1330',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_fiscal-openness-working-group:node/5758.
  $menu_links['main-menu_fiscal-openness-working-group:node/5758'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5758',
    'router_path' => 'node/%',
    'link_title' => 'Fiscal Openness Working Group',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_fiscal-openness-working-group:node/5758',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_ogp-working-groups:node/2729',
  );
  // Exported menu link: main-menu_gazette:node/8501.
  $menu_links['main-menu_gazette:node/8501'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/8501',
    'router_path' => 'node/%',
    'link_title' => 'Gazette',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_gazette:node/8501',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 49,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_news-and-events:node/6590',
  );
  // Exported menu link: main-menu_get-involved:node/1000.
  $menu_links['main-menu_get-involved:node/1000'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1000',
    'router_path' => 'node/%',
    'link_title' => 'Get Involved',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_get-involved:node/1000',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_governance--information-disclosure:node/6599.
  $menu_links['main-menu_governance--information-disclosure:node/6599'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6599',
    'router_path' => 'node/%',
    'link_title' => 'Governance & Information Disclosure',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_governance--information-disclosure:node/6599',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_government:node/6601.
  $menu_links['main-menu_government:node/6601'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6601',
    'router_path' => 'node/%',
    'link_title' => 'Government',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_government:node/6601',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_groups:groups.
  $menu_links['main-menu_groups:groups'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'groups',
    'router_path' => 'groups',
    'link_title' => 'Groups',
    'options' => array(
      'identifier' => 'main-menu_groups:groups',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -25,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_grupos-de-trabajo-temticos:node/2729.
  $menu_links['main-menu_grupos-de-trabajo-temticos:node/2729'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2729',
    'router_path' => 'node/%',
    'link_title' => 'Grupos de Trabajo Temáticos',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_grupos-de-trabajo-temticos:node/2729',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_involcrate:node/1000',
  );
  // Exported menu link: main-menu_home:node/1341.
  $menu_links['main-menu_home:node/1341'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1341',
    'router_path' => 'node/%',
    'link_title' => 'Home',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'identifier' => 'main-menu_home:node/1341',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_london-summit-2013:node/1341',
  );
  // Exported menu link: main-menu_home:node/3742.
  $menu_links['main-menu_home:node/3742'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3742',
    'router_path' => 'node/%',
    'link_title' => 'Home',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'identifier' => 'main-menu_home:node/3742',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_europe-regional-meeting:node/3742',
  );
  // Exported menu link: main-menu_home:node/5612.
  $menu_links['main-menu_home:node/5612'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5612',
    'router_path' => 'node/%',
    'link_title' => 'Home',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'identifier' => 'main-menu_home:node/5612',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_americas-regional-meeting:node/5612',
  );
  // Exported menu link: main-menu_how-to-join:node/1337.
  $menu_links['main-menu_how-to-join:node/1337'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1337',
    'router_path' => 'node/%',
    'link_title' => 'How To Join',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_how-to-join:node/1337',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -41,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_information-disclosure:node/1331.
  $menu_links['main-menu_information-disclosure:node/1331'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1331',
    'router_path' => 'node/%',
    'link_title' => 'Information Disclosure',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_information-disclosure:node/1331',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -37,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_involcrate:node/1000.
  $menu_links['main-menu_involcrate:node/1000'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1000',
    'router_path' => 'node/%',
    'link_title' => 'Involúcrate',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_involcrate:node/1000',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -28,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_irm-staff:node/6613.
  $menu_links['main-menu_irm-staff:node/6613'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6613',
    'router_path' => 'node/%',
    'link_title' => 'IRM Staff',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_irm-staff:node/6613',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_about:node/6636',
  );
  // Exported menu link: main-menu_log-in:user/login.
  $menu_links['main-menu_log-in:user/login'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'user/login',
    'router_path' => 'user/login',
    'link_title' => 'Log In',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'identifier' => 'main-menu_log-in:user/login',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -27,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_log-out:user/logout.
  $menu_links['main-menu_log-out:user/logout'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'user/logout',
    'router_path' => 'user/logout',
    'link_title' => 'Log Out',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'identifier' => 'main-menu_log-out:user/logout',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -26,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_logistics:node/1346.
  $menu_links['main-menu_logistics:node/1346'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1346',
    'router_path' => 'node/%',
    'link_title' => 'Logistics',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_logistics:node/1346',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -44,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_london-summit-2013:node/1341',
  );
  // Exported menu link: main-menu_logistics:node/3736.
  $menu_links['main-menu_logistics:node/3736'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3736',
    'router_path' => 'node/%',
    'link_title' => 'Logistics',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_logistics:node/3736',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_asia-pacific-regional-meeting:node/3734',
  );
  // Exported menu link: main-menu_logistics:node/3745.
  $menu_links['main-menu_logistics:node/3745'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3745',
    'router_path' => 'node/%',
    'link_title' => 'Logistics',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_logistics:node/3745',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_europe-regional-meeting:node/3742',
  );
  // Exported menu link: main-menu_logistics:node/5614.
  $menu_links['main-menu_logistics:node/5614'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5614',
    'router_path' => 'node/%',
    'link_title' => 'Logistics',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_logistics:node/5614',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_americas-regional-meeting:node/5612',
  );
  // Exported menu link: main-menu_london-summit-2013:node/1341.
  $menu_links['main-menu_london-summit-2013:node/1341'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1341',
    'router_path' => 'node/%',
    'link_title' => 'London Summit 2013',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_london-summit-2013:node/1341',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -33,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_media:node/2857.
  $menu_links['main-menu_media:node/2857'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2857',
    'router_path' => 'node/%',
    'link_title' => 'Media',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_media:node/2857',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_london-summit-2013:node/1341',
  );
  // Exported menu link: main-menu_media:node/3755.
  $menu_links['main-menu_media:node/3755'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3755',
    'router_path' => 'node/%',
    'link_title' => 'Media',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_media:node/3755',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_asia-pacific-regional-meeting:node/3734',
  );
  // Exported menu link: main-menu_media:node/5616.
  $menu_links['main-menu_media:node/5616'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5616',
    'router_path' => 'node/%',
    'link_title' => 'Media',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_media:node/5616',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -43,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_americas-regional-meeting:node/5612',
  );
  // Exported menu link: main-menu_misin-y-objetivos:node/2726.
  $menu_links['main-menu_misin-y-objetivos:node/2726'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2726',
    'router_path' => 'node/%',
    'link_title' => 'Misión y Objetivos',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_misin-y-objetivos:node/2726',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_acerca-de:node/1002',
  );
  // Exported menu link: main-menu_mission-and-strategy:node/2726.
  $menu_links['main-menu_mission-and-strategy:node/2726'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2726',
    'router_path' => 'node/%',
    'link_title' => 'Mission and Strategy',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_mission-and-strategy:node/2726',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_multilateral-organizations:node/6603.
  $menu_links['main-menu_multilateral-organizations:node/6603'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6603',
    'router_path' => 'node/%',
    'link_title' => 'Multilateral Organizations',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_multilateral-organizations:node/6603',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_news-and-events:node/6590.
  $menu_links['main-menu_news-and-events:node/6590'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6590',
    'router_path' => 'node/%',
    'link_title' => 'News and Events',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_news-and-events:node/6590',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -44,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_news:news.
  $menu_links['main-menu_news:news'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'news',
    'router_path' => 'news',
    'link_title' => 'News',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_news:news',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_news-and-events:node/6590',
  );
  // Exported menu link: main-menu_newsletter:node/5451.
  $menu_links['main-menu_newsletter:node/5451'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5451',
    'router_path' => 'node/%',
    'link_title' => 'Newsletter',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_newsletter:node/5451',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_news-and-events:node/6590',
  );
  // Exported menu link: main-menu_ogp-ambassadors:node/6611.
  $menu_links['main-menu_ogp-ambassadors:node/6611'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6611',
    'router_path' => 'node/%',
    'link_title' => 'OGP Ambassadors',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_ogp-ambassadors:node/6611',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -44,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_ogp-explorer:node/6637.
  $menu_links['main-menu_ogp-explorer:node/6637'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6637',
    'router_path' => 'node/%',
    'link_title' => 'OGP Explorer',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_ogp-explorer:node/6637',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_about:node/6636',
  );
  // Exported menu link: main-menu_ogp-irm-database-12:node/6639.
  $menu_links['main-menu_ogp-irm-database-12:node/6639'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6639',
    'router_path' => 'node/%',
    'link_title' => 'OGP IRM Database (1&2)',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_ogp-irm-database-12:node/6639',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_about:node/6636',
  );
  // Exported menu link: main-menu_ogp-logo--branding-guidelines:node/5909.
  $menu_links['main-menu_ogp-logo--branding-guidelines:node/5909'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5909',
    'router_path' => 'node/%',
    'link_title' => 'OGP Logo & Branding Guidelines',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_ogp-logo--branding-guidelines:node/5909',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -44,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_ogp-research-agenda:node/5721.
  $menu_links['main-menu_ogp-research-agenda:node/5721'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5721',
    'router_path' => 'node/%',
    'link_title' => 'OGP Research Agenda',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_ogp-research-agenda:node/5721',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -29,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_ogp-support-unit-staff:node/1322.
  $menu_links['main-menu_ogp-support-unit-staff:node/1322'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1322',
    'router_path' => 'node/%',
    'link_title' => 'OGP Support Unit Staff',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_ogp-support-unit-staff:node/1322',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_ogp-working-groups:node/2729.
  $menu_links['main-menu_ogp-working-groups:node/2729'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2729',
    'router_path' => 'node/%',
    'link_title' => 'OGP Working Groups',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_ogp-working-groups:node/2729',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_open-government-declaration:node/2727.
  $menu_links['main-menu_open-government-declaration:node/2727'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2727',
    'router_path' => 'node/%',
    'link_title' => 'Open Government Declaration',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_open-government-declaration:node/2727',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_pases:countries.
  $menu_links['main-menu_pases:countries'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'countries',
    'router_path' => 'countries',
    'link_title' => 'Países',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'identifier' => 'main-menu_pases:countries',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -42,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_past-events:past-events.
  $menu_links['main-menu_past-events:past-events'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'past-events',
    'router_path' => 'past-events',
    'link_title' => 'Past Events',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_past-events:past-events',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 10,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_news-and-events:node/6590',
  );
  // Exported menu link: main-menu_preguntas-frecuentes:node/1333.
  $menu_links['main-menu_preguntas-frecuentes:node/1333'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1333',
    'router_path' => 'node/%',
    'link_title' => 'Preguntas Frecuentes',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_preguntas-frecuentes:node/1333',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -42,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_acerca-de:node/1002',
  );
  // Exported menu link: main-menu_press-releases:press-releases.
  $menu_links['main-menu_press-releases:press-releases'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'press-releases',
    'router_path' => 'press-releases',
    'link_title' => 'Press Releases',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_press-releases:press-releases',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_news-and-events:node/6590',
  );
  // Exported menu link: main-menu_presupuesto:node/1330.
  $menu_links['main-menu_presupuesto:node/1330'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1330',
    'router_path' => 'node/%',
    'link_title' => 'Presupuesto',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_presupuesto:node/1330',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_acerca-de:node/1002',
  );
  // Exported menu link: main-menu_qu-hacemos:node/1323.
  $menu_links['main-menu_qu-hacemos:node/1323'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1323',
    'router_path' => 'node/%',
    'link_title' => 'Qué Hacemos',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_qu-hacemos:node/1323',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_unidad-de-apoyo-de-ogp:node/1322',
  );
  // Exported menu link: main-menu_recent-irm-reports:node/6638.
  $menu_links['main-menu_recent-irm-reports:node/6638'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6638',
    'router_path' => 'node/%',
    'link_title' => 'Recent IRM Reports',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_recent-irm-reports:node/6638',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_about:node/6636',
  );
  // Exported menu link: main-menu_recursos:topics.
  $menu_links['main-menu_recursos:topics'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'topics',
    'router_path' => 'topics',
    'link_title' => 'Recursos',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'identifier' => 'main-menu_recursos:topics',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -41,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_registration:node/5613.
  $menu_links['main-menu_registration:node/5613'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5613',
    'router_path' => 'node/%',
    'link_title' => 'Registration',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_registration:node/5613',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_americas-regional-meeting:node/5612',
  );
  // Exported menu link: main-menu_requirements:node/1355.
  $menu_links['main-menu_requirements:node/1355'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1355',
    'router_path' => 'node/%',
    'link_title' => 'Requirements',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_requirements:node/1355',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -44,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_requisitos:node/1355.
  $menu_links['main-menu_requisitos:node/1355'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1355',
    'router_path' => 'node/%',
    'link_title' => 'Requisitos',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_requisitos:node/1355',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_cmo-funciona-ogp:node/1001',
  );
  // Exported menu link: main-menu_resources:countries.
  $menu_links['main-menu_resources:countries'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'countries',
    'router_path' => 'countries',
    'link_title' => 'Resources',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'alter' => TRUE,
      'identifier' => 'main-menu_resources:countries',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_resources:topics.
  $menu_links['main-menu_resources:topics'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'topics',
    'router_path' => 'topics',
    'link_title' => 'Resources',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_resources:topics',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -20,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_response-policy:node/5852.
  $menu_links['main-menu_response-policy:node/5852'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5852',
    'router_path' => 'node/%',
    'link_title' => 'Response Policy',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_response-policy:node/5852',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_self-assessment-process:node/6597.
  $menu_links['main-menu_self-assessment-process:node/6597'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6597',
    'router_path' => 'node/%',
    'link_title' => 'Self-Assessment Process',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_self-assessment-process:node/6597',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_sories:stories.
  $menu_links['main-menu_sories:stories'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'stories',
    'router_path' => 'stories',
    'link_title' => 'Sories',
    'options' => array(
      'identifier' => 'main-menu_sories:stories',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_speakers:node/1343.
  $menu_links['main-menu_speakers:node/1343'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1343',
    'router_path' => 'node/%',
    'link_title' => 'Speakers',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_speakers:node/1343',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_london-summit-2013:node/1341',
  );
  // Exported menu link: main-menu_speakers:node/3743.
  $menu_links['main-menu_speakers:node/3743'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3743',
    'router_path' => 'node/%',
    'link_title' => 'Speakers',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_speakers:node/3743',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_europe-regional-meeting:node/3742',
  );
  // Exported menu link: main-menu_steering-committee:node/6622.
  $menu_links['main-menu_steering-committee:node/6622'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6622',
    'router_path' => 'node/%',
    'link_title' => 'Steering Committee',
    'options' => array(
      'attributes' => array(),
      'alter' => TRUE,
      'identifier' => 'main-menu_steering-committee:node/6622',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_submit-a-resource:node/2748.
  $menu_links['main-menu_submit-a-resource:node/2748'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2748',
    'router_path' => 'node/%',
    'link_title' => 'Submit a Resource',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_submit-a-resource:node/2748',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -34,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_subnational-government-pilot-program:node/8348.
  $menu_links['main-menu_subnational-government-pilot-program:node/8348'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/8348',
    'router_path' => 'node/%',
    'link_title' => 'Subnational Government Pilot Program',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_subnational-government-pilot-program:node/8348',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -42,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_tools:node/6648.
  $menu_links['main-menu_tools:node/6648'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/6648',
    'router_path' => 'node/%',
    'link_title' => 'Tools',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_tools:node/6648',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_trabaja-con-nosotros:node/2750.
  $menu_links['main-menu_trabaja-con-nosotros:node/2750'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2750',
    'router_path' => 'node/%',
    'link_title' => 'Trabaja con nosotros',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_trabaja-con-nosotros:node/2750',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_involcrate:node/1000',
  );
  // Exported menu link: main-menu_transparencia:node/1331.
  $menu_links['main-menu_transparencia:node/1331'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1331',
    'router_path' => 'node/%',
    'link_title' => 'Transparencia',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_transparencia:node/1331',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -43,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_acerca-de:node/1002',
  );
  // Exported menu link: main-menu_unidad-de-apoyo-de-ogp:node/1322.
  $menu_links['main-menu_unidad-de-apoyo-de-ogp:node/1322'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1322',
    'router_path' => 'node/%',
    'link_title' => 'Unidad de Apoyo de OGP',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_unidad-de-apoyo-de-ogp:node/1322',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'language' => 'es',
    'menu_links_customized' => 1,
    'parent_identifier' => 'main-menu_acerca-de:node/1002',
  );
  // Exported menu link: main-menu_use-the-opengov-guide:node/3685.
  $menu_links['main-menu_use-the-opengov-guide:node/3685'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/3685',
    'router_path' => 'node/%',
    'link_title' => 'Use the OpenGov Guide',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_use-the-opengov-guide:node/3685',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -38,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_webinars:node/5816.
  $menu_links['main-menu_webinars:node/5816'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/5816',
    'router_path' => 'node/%',
    'link_title' => 'Webinars',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_webinars:node/5816',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -30,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_what-we-do:node/1323.
  $menu_links['main-menu_what-we-do:node/1323'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/1323',
    'router_path' => 'node/%',
    'link_title' => 'What We Do',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'main-menu_what-we-do:node/1323',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -43,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: main-menu_work-with-us:node/2750.
  $menu_links['main-menu_work-with-us:node/2750'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2750',
    'router_path' => 'node/%',
    'link_title' => 'Work With Us',
    'options' => array(
      'alter' => TRUE,
      'attributes' => array(),
      'identifier' => 'main-menu_work-with-us:node/2750',
    ),
    'module' => 'menu',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 46,
    'customized' => 1,
    'language' => 'en',
    'menu_links_customized' => 1,
  );
  // Exported menu link: management_:admin/config/group/permissions/node/event.
  $menu_links['management_:admin/config/group/permissions/node/event'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/group/permissions/node/event',
    'router_path' => 'admin/config/group/permissions/node/event',
    'link_title' => '',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure Organic groups group type permissions.',
      ),
      'identifier' => 'management_:admin/config/group/permissions/node/event',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_og-permissions-overview:admin/config/group/permissions',
  );
  // Exported menu link: management_:admin/config/group/roles/node/event.
  $menu_links['management_:admin/config/group/roles/node/event'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/group/roles/node/event',
    'router_path' => 'admin/config/group/roles/node/event',
    'link_title' => '',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure Organic groups group type roles.',
      ),
      'identifier' => 'management_:admin/config/group/roles/node/event',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_og-roles-overview:admin/config/group/roles',
  );
  // Exported menu link: management_account-settings:admin/config/people/accounts.
  $menu_links['management_account-settings:admin/config/people/accounts'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/people/accounts',
    'router_path' => 'admin/config/people/accounts',
    'link_title' => 'Account settings',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure default behavior of users, including registration requirements, e-mails, fields, and user pictures.',
      ),
      'identifier' => 'management_account-settings:admin/config/people/accounts',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -10,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_people:admin/config/people',
  );
  // Exported menu link: management_actions:admin/config/system/actions.
  $menu_links['management_actions:admin/config/system/actions'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/system/actions',
    'router_path' => 'admin/config/system/actions',
    'link_title' => 'Actions',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage the actions defined for your site.',
      ),
      'identifier' => 'management_actions:admin/config/system/actions',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_system:admin/config/system',
  );
  // Exported menu link: management_administer-map:admin/content/ogp-map.
  $menu_links['management_administer-map:admin/content/ogp-map'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/content/ogp-map',
    'router_path' => 'admin/content/ogp-map',
    'link_title' => 'Administer map',
    'options' => array(
      'identifier' => 'management_administer-map:admin/content/ogp-map',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content:admin/content',
  );
  // Exported menu link: management_administer-resources:admin/content/ogp_resources.
  $menu_links['management_administer-resources:admin/content/ogp_resources'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/content/ogp_resources',
    'router_path' => 'admin/content/ogp_resources',
    'link_title' => 'Administer resources',
    'options' => array(
      'attributes' => array(
        'title' => 'Administer Resurces (was Topics) Rage.',
      ),
      'identifier' => 'management_administer-resources:admin/content/ogp_resources',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content:admin/content',
  );
  // Exported menu link: management_administration-menu:admin/config/administration/admin_menu.
  $menu_links['management_administration-menu:admin/config/administration/admin_menu'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/administration/admin_menu',
    'router_path' => 'admin/config/administration/admin_menu',
    'link_title' => 'Administration menu',
    'options' => array(
      'attributes' => array(
        'title' => 'Adjust administration menu settings.',
      ),
      'identifier' => 'management_administration-menu:admin/config/administration/admin_menu',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin/config/administration',
  );
  // Exported menu link: management_administration:admin.
  $menu_links['management_administration:admin'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin',
    'router_path' => 'admin',
    'link_title' => 'Administration',
    'options' => array(
      'identifier' => 'management_administration:admin',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 9,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: management_administration:admin/config/administration.
  $menu_links['management_administration:admin/config/administration'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/administration',
    'router_path' => 'admin/config/administration',
    'link_title' => 'Administration',
    'options' => array(
      'attributes' => array(
        'title' => 'Administration tools.',
      ),
      'identifier' => 'management_administration:admin/config/administration',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_advanced-help:admin/advanced_help.
  $menu_links['management_advanced-help:admin/advanced_help'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/advanced_help',
    'router_path' => 'admin/advanced_help',
    'link_title' => 'Advanced help',
    'options' => array(
      'identifier' => 'management_advanced-help:admin/advanced_help',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 9,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin',
  );
  // Exported menu link: management_appearance:admin/appearance.
  $menu_links['management_appearance:admin/appearance'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/appearance',
    'router_path' => 'admin/appearance',
    'link_title' => 'Appearance',
    'options' => array(
      'attributes' => array(
        'title' => 'Select and configure your themes.',
      ),
      'identifier' => 'management_appearance:admin/appearance',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -6,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin',
  );
  // Exported menu link: management_available-updates:admin/reports/updates.
  $menu_links['management_available-updates:admin/reports/updates'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/reports/updates',
    'router_path' => 'admin/reports/updates',
    'link_title' => 'Available updates',
    'options' => array(
      'attributes' => array(
        'title' => 'Get a status report about available updates for your installed modules and themes.',
      ),
      'identifier' => 'management_available-updates:admin/reports/updates',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_reports:admin/reports',
  );
  // Exported menu link: management_beautytips:admin/config/user-interface/beautytips.
  $menu_links['management_beautytips:admin/config/user-interface/beautytips'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/user-interface/beautytips',
    'router_path' => 'admin/config/user-interface/beautytips',
    'link_title' => 'BeautyTips',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure settings related to the Beautytips module.',
      ),
      'identifier' => 'management_beautytips:admin/config/user-interface/beautytips',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_user-interface:admin/config/user-interface',
  );
  // Exported menu link: management_block-types:admin/structure/block-types.
  $menu_links['management_block-types:admin/structure/block-types'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/block-types',
    'router_path' => 'admin/structure/block-types',
    'link_title' => 'Block types',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage block types, including fields, settings, etc.',
      ),
      'identifier' => 'management_block-types:admin/structure/block-types',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_blocks:admin/content/blocks.
  $menu_links['management_blocks:admin/content/blocks'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/content/blocks',
    'router_path' => 'admin/content/blocks',
    'link_title' => 'Blocks',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage blocks used on your site.',
      ),
      'identifier' => 'management_blocks:admin/content/blocks',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content:admin/content',
  );
  // Exported menu link: management_blocks:admin/structure/block.
  $menu_links['management_blocks:admin/structure/block'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/block',
    'router_path' => 'admin/structure/block',
    'link_title' => 'Blocks',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure what block content appears in your site\'s sidebars and other regions.',
      ),
      'identifier' => 'management_blocks:admin/structure/block',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_captcha:admin/config/people/captcha.
  $menu_links['management_captcha:admin/config/people/captcha'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/people/captcha',
    'router_path' => 'admin/config/people/captcha',
    'link_title' => 'CAPTCHA',
    'options' => array(
      'attributes' => array(
        'title' => 'Administer how and where CAPTCHAs are used.',
      ),
      'identifier' => 'management_captcha:admin/config/people/captcha',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_people:admin/config/people',
  );
  // Exported menu link: management_chosen:admin/config/user-interface/chosen.
  $menu_links['management_chosen:admin/config/user-interface/chosen'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/user-interface/chosen',
    'router_path' => 'admin/config/user-interface/chosen',
    'link_title' => 'Chosen',
    'options' => array(
      'attributes' => array(
        'title' => 'Configuration for Chosen plugin',
      ),
      'identifier' => 'management_chosen:admin/config/user-interface/chosen',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_user-interface:admin/config/user-interface',
  );
  // Exported menu link: management_ckeditor-link:admin/config/content/ckeditor_link.
  $menu_links['management_ckeditor-link:admin/config/content/ckeditor_link'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/content/ckeditor_link',
    'router_path' => 'admin/config/content/ckeditor_link',
    'link_title' => 'CKEditor Link',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure CKEditor Link.',
      ),
      'identifier' => 'management_ckeditor-link:admin/config/content/ckeditor_link',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content-authoring:admin/config/content',
  );
  // Exported menu link: management_clean-urls:admin/config/search/clean-urls.
  $menu_links['management_clean-urls:admin/config/search/clean-urls'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/search/clean-urls',
    'router_path' => 'admin/config/search/clean-urls',
    'link_title' => 'Clean URLs',
    'options' => array(
      'attributes' => array(
        'title' => 'Enable or disable clean URLs for your site.',
      ),
      'identifier' => 'management_clean-urls:admin/config/search/clean-urls',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 5,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_search-and-metadata:admin/config/search',
  );
  // Exported menu link: management_comments:admin/content/comment.
  $menu_links['management_comments:admin/content/comment'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/content/comment',
    'router_path' => 'admin/content/comment',
    'link_title' => 'Comments',
    'options' => array(
      'attributes' => array(
        'title' => 'List and edit site comments and the comment approval queue.',
      ),
      'identifier' => 'management_comments:admin/content/comment',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content:admin/content',
  );
  // Exported menu link: management_compact-forms:admin/config/user-interface/compact_forms.
  $menu_links['management_compact-forms:admin/config/user-interface/compact_forms'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/user-interface/compact_forms',
    'router_path' => 'admin/config/user-interface/compact_forms',
    'link_title' => 'Compact Forms',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure Compact Forms settings.',
      ),
      'identifier' => 'management_compact-forms:admin/config/user-interface/compact_forms',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_user-interface:admin/config/user-interface',
  );
  // Exported menu link: management_conference:admin/conference.
  $menu_links['management_conference:admin/conference'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/conference',
    'router_path' => 'admin/conference',
    'link_title' => 'Conference',
    'options' => array(
      'attributes' => array(
        'title' => 'Administer your conference.',
      ),
      'identifier' => 'management_conference:admin/conference',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -7,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin',
  );
  // Exported menu link: management_configuration:admin/conference/config.
  $menu_links['management_configuration:admin/conference/config'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/conference/config',
    'router_path' => 'admin/conference/config',
    'link_title' => 'Configuration',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure settings and business rules for your store.',
      ),
      'identifier' => 'management_configuration:admin/conference/config',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 50,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_conference:admin/conference',
  );
  // Exported menu link: management_configuration:admin/config.
  $menu_links['management_configuration:admin/config'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config',
    'router_path' => 'admin/config',
    'link_title' => 'Configuration',
    'options' => array(
      'attributes' => array(
        'title' => 'Administer settings.',
      ),
      'identifier' => 'management_configuration:admin/config',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin',
  );
  // Exported menu link: management_content-authoring:admin/config/content.
  $menu_links['management_content-authoring:admin/config/content'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/content',
    'router_path' => 'admin/config/content',
    'link_title' => 'Content authoring',
    'options' => array(
      'attributes' => array(
        'title' => 'Settings related to formatting and authoring content.',
      ),
      'identifier' => 'management_content-authoring:admin/config/content',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -15,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_content-types:admin/structure/types.
  $menu_links['management_content-types:admin/structure/types'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/types',
    'router_path' => 'admin/structure/types',
    'link_title' => 'Content types',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage content types, including default status, front page promotion, comment settings, etc.',
      ),
      'identifier' => 'management_content-types:admin/structure/types',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_content:admin/content.
  $menu_links['management_content:admin/content'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/content',
    'router_path' => 'admin/content',
    'link_title' => 'Content',
    'options' => array(
      'attributes' => array(
        'title' => 'Administer content and comments.',
      ),
      'identifier' => 'management_content:admin/content',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -10,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin',
  );
  // Exported menu link: management_context:admin/structure/context.
  $menu_links['management_context:admin/structure/context'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/context',
    'router_path' => 'admin/structure/context',
    'link_title' => 'Context',
    'options' => array(
      'attributes' => array(
        'title' => 'Associate menus, views, blocks, etc. with different contexts to structure your site.',
      ),
      'identifier' => 'management_context:admin/structure/context',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_countries:admin/config/regional/countries.
  $menu_links['management_countries:admin/config/regional/countries'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/regional/countries',
    'router_path' => 'admin/config/regional/countries',
    'link_title' => 'Countries',
    'options' => array(
      'attributes' => array(
        'title' => 'List, edit, or add countries.',
      ),
      'identifier' => 'management_countries:admin/config/regional/countries',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_regional-and-language:admin/config/regional',
  );
  // Exported menu link: management_cron:admin/config/system/cron.
  $menu_links['management_cron:admin/config/system/cron'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/system/cron',
    'router_path' => 'admin/config/system/cron',
    'link_title' => 'Cron',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage automatic site maintenance tasks.',
      ),
      'identifier' => 'management_cron:admin/config/system/cron',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 20,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_system:admin/config/system',
  );
  // Exported menu link: management_dashboard:admin/dashboard.
  $menu_links['management_dashboard:admin/dashboard'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/dashboard',
    'router_path' => 'admin/dashboard',
    'link_title' => 'Dashboard',
    'options' => array(
      'attributes' => array(
        'title' => 'View and customize your dashboard.',
      ),
      'identifier' => 'management_dashboard:admin/dashboard',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -15,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin',
  );
  // Exported menu link: management_datasets:admin/dkan/datasets.
  $menu_links['management_datasets:admin/dkan/datasets'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/dkan/datasets',
    'router_path' => 'admin/dkan/datasets',
    'link_title' => 'Datasets',
    'options' => array(
      'identifier' => 'management_datasets:admin/dkan/datasets',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 5,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_dkan:admin/dkan',
  );
  // Exported menu link: management_date-and-time:admin/config/regional/date-time.
  $menu_links['management_date-and-time:admin/config/regional/date-time'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/regional/date-time',
    'router_path' => 'admin/config/regional/date-time',
    'link_title' => 'Date and time',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure display formats for date and time.',
      ),
      'identifier' => 'management_date-and-time:admin/config/regional/date-time',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -15,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_regional-and-language:admin/config/regional',
  );
  // Exported menu link: management_date-api:admin/config/date.
  $menu_links['management_date-api:admin/config/date'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/date',
    'router_path' => 'admin/config/date',
    'link_title' => 'Date API',
    'options' => array(
      'attributes' => array(
        'title' => 'Settings for modules the use the Date API.',
      ),
      'identifier' => 'management_date-api:admin/config/date',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -10,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_date-popup:admin/config/date/date_popup.
  $menu_links['management_date-popup:admin/config/date/date_popup'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/date/date_popup',
    'router_path' => 'admin/config/date/date_popup',
    'link_title' => 'Date Popup',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure the Date Popup settings.',
      ),
      'identifier' => 'management_date-popup:admin/config/date/date_popup',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_date-api:admin/config/date',
  );
  // Exported menu link: management_development:admin/config/development.
  $menu_links['management_development:admin/config/development'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/development',
    'router_path' => 'admin/config/development',
    'link_title' => 'Development',
    'options' => array(
      'attributes' => array(
        'title' => 'Development tools.',
      ),
      'identifier' => 'management_development:admin/config/development',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -10,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_diff:admin/config/content/diff.
  $menu_links['management_diff:admin/config/content/diff'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/content/diff',
    'router_path' => 'admin/config/content/diff',
    'link_title' => 'Diff',
    'options' => array(
      'attributes' => array(
        'title' => 'Diff settings.',
      ),
      'identifier' => 'management_diff:admin/config/content/diff',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content-authoring:admin/config/content',
  );
  // Exported menu link: management_display-suite:admin/structure/ds.
  $menu_links['management_display-suite:admin/structure/ds'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/ds',
    'router_path' => 'admin/structure/ds',
    'link_title' => 'Display Suite',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage layouts for entities and configure fields, view modes etc.',
      ),
      'identifier' => 'management_display-suite:admin/structure/ds',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_disqus:admin/config/services/disqus.
  $menu_links['management_disqus:admin/config/services/disqus'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/services/disqus',
    'router_path' => 'admin/config/services/disqus',
    'link_title' => 'Disqus',
    'options' => array(
      'attributes' => array(
        'title' => 'Provides configuration options for the Disqus comment system.',
      ),
      'identifier' => 'management_disqus:admin/config/services/disqus',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_web-services:admin/config/services',
  );
  // Exported menu link: management_dkan-dataset-forms:admin/dkan/dataset_forms.
  $menu_links['management_dkan-dataset-forms:admin/dkan/dataset_forms'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/dkan/dataset_forms',
    'router_path' => 'admin/dkan/dataset_forms',
    'link_title' => 'DKAN Dataset Forms',
    'options' => array(
      'attributes' => array(
        'title' => 'Form settings for DKAN Datasets.',
      ),
      'identifier' => 'management_dkan-dataset-forms:admin/dkan/dataset_forms',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_dkan:admin/dkan',
  );
  // Exported menu link: management_dkan:admin/dkan.
  $menu_links['management_dkan:admin/dkan'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/dkan',
    'router_path' => 'admin/dkan',
    'link_title' => 'DKAN',
    'options' => array(
      'attributes' => array(
        'title' => 'DKAN Settings and Administration.',
      ),
      'identifier' => 'management_dkan:admin/dkan',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -8,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin',
  );
  // Exported menu link: management_easy-breadcrumb:admin/config/user-interface/easy-breadcrumb.
  $menu_links['management_easy-breadcrumb:admin/config/user-interface/easy-breadcrumb'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/user-interface/easy-breadcrumb',
    'router_path' => 'admin/config/user-interface/easy-breadcrumb',
    'link_title' => 'Easy Breadcrumb',
    'options' => array(
      'attributes' => array(
        'title' => 'Controls settings for the module Easy Breadcrumb',
      ),
      'identifier' => 'management_easy-breadcrumb:admin/config/user-interface/easy-breadcrumb',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_user-interface:admin/config/user-interface',
  );
  // Exported menu link: management_empty-page-callbacks:admin/structure/empty-page.
  $menu_links['management_empty-page-callbacks:admin/structure/empty-page'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/empty-page',
    'router_path' => 'admin/structure/empty-page',
    'link_title' => 'Empty Page callbacks',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage Empty Page menu callbacks.',
      ),
      'identifier' => 'management_empty-page-callbacks:admin/structure/empty-page',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_entity-fields-builder-settings:admin/config/content/efb.
  $menu_links['management_entity-fields-builder-settings:admin/config/content/efb'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/content/efb',
    'router_path' => 'admin/config/content/efb',
    'link_title' => 'Entity Fields Builder settings',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure settings specific to the Entity Fields Builder module.',
      ),
      'identifier' => 'management_entity-fields-builder-settings:admin/config/content/efb',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content-authoring:admin/config/content',
  );
  // Exported menu link: management_entity-translation:admin/config/regional/entity_translation.
  $menu_links['management_entity-translation:admin/config/regional/entity_translation'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/regional/entity_translation',
    'router_path' => 'admin/config/regional/entity_translation',
    'link_title' => 'Entity translation',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure which entities can be translated and enable or disable language fallback.',
      ),
      'identifier' => 'management_entity-translation:admin/config/regional/entity_translation',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_regional-and-language:admin/config/regional',
  );
  // Exported menu link: management_external-links:admin/config/user-interface/extlink.
  $menu_links['management_external-links:admin/config/user-interface/extlink'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/user-interface/extlink',
    'router_path' => 'admin/config/user-interface/extlink',
    'link_title' => 'External links',
    'options' => array(
      'attributes' => array(
        'title' => 'Alter the display of external links on the site.',
      ),
      'identifier' => 'management_external-links:admin/config/user-interface/extlink',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_user-interface:admin/config/user-interface',
  );
  // Exported menu link: management_favicons:admin/config/media/favicon_formatter.
  $menu_links['management_favicons:admin/config/media/favicon_formatter'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/media/favicon_formatter',
    'router_path' => 'admin/config/media/favicon_formatter',
    'link_title' => 'Favicons',
    'options' => array(
      'identifier' => 'management_favicons:admin/config/media/favicon_formatter',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_media:admin/config/media',
  );
  // Exported menu link: management_features:admin/structure/features.
  $menu_links['management_features:admin/structure/features'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/features',
    'router_path' => 'admin/structure/features',
    'link_title' => 'Features',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage features.',
      ),
      'identifier' => 'management_features:admin/structure/features',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_feeds-log:admin/reports/feeds.
  $menu_links['management_feeds-log:admin/reports/feeds'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/reports/feeds',
    'router_path' => 'admin/reports/feeds',
    'link_title' => 'Feeds log',
    'options' => array(
      'attributes' => array(
        'title' => 'Review log messages of imports and subscriptions to feeds.',
      ),
      'identifier' => 'management_feeds-log:admin/reports/feeds',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_reports:admin/reports',
  );
  // Exported menu link: management_field-collections:admin/structure/field-collections.
  $menu_links['management_field-collections:admin/structure/field-collections'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/field-collections',
    'router_path' => 'admin/structure/field-collections',
    'link_title' => 'Field collections',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage fields on field collections.',
      ),
      'identifier' => 'management_field-collections:admin/structure/field-collections',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_field-dependencies:admin/structure/dependencies.
  $menu_links['management_field-dependencies:admin/structure/dependencies'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/dependencies',
    'router_path' => 'admin/structure/dependencies',
    'link_title' => 'Field dependencies',
    'options' => array(
      'attributes' => array(
        'title' => 'Administer field dependencies for the site.',
      ),
      'identifier' => 'management_field-dependencies:admin/structure/dependencies',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_field-list:admin/reports/fields.
  $menu_links['management_field-list:admin/reports/fields'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/reports/fields',
    'router_path' => 'admin/reports/fields',
    'link_title' => 'Field list',
    'options' => array(
      'attributes' => array(
        'title' => 'Overview of fields on all entity types.',
      ),
      'identifier' => 'management_field-list:admin/reports/fields',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_reports:admin/reports',
  );
  // Exported menu link: management_file-settings:admin/config/media/file-settings.
  $menu_links['management_file-settings:admin/config/media/file-settings'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/media/file-settings',
    'router_path' => 'admin/config/media/file-settings',
    'link_title' => 'File settings',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure allowed file extensions, default alt and title sources, and the file upload wizard.',
      ),
      'identifier' => 'management_file-settings:admin/config/media/file-settings',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_media:admin/config/media',
  );
  // Exported menu link: management_file-system:admin/config/media/file-system.
  $menu_links['management_file-system:admin/config/media/file-system'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/media/file-system',
    'router_path' => 'admin/config/media/file-system',
    'link_title' => 'File system',
    'options' => array(
      'attributes' => array(
        'title' => 'Tell Drupal where to store uploaded files and how they are accessed.',
      ),
      'identifier' => 'management_file-system:admin/config/media/file-system',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -10,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_media:admin/config/media',
  );
  // Exported menu link: management_file-types:admin/structure/file-types.
  $menu_links['management_file-types:admin/structure/file-types'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/file-types',
    'router_path' => 'admin/structure/file-types',
    'link_title' => 'File types',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage settings for the type of files used on your site.',
      ),
      'identifier' => 'management_file-types:admin/structure/file-types',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_files:admin/content/file.
  $menu_links['management_files:admin/content/file'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/content/file',
    'router_path' => 'admin/content/file',
    'link_title' => 'Files',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage files used on your site.',
      ),
      'identifier' => 'management_files:admin/content/file',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content:admin/content',
  );
  // Exported menu link: management_fitvids:admin/config/media/fitvids.
  $menu_links['management_fitvids:admin/config/media/fitvids'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/media/fitvids',
    'router_path' => 'admin/config/media/fitvids',
    'link_title' => 'FitVids',
    'options' => array(
      'attributes' => array(
        'title' => 'Configuration for FitVids module',
      ),
      'identifier' => 'management_fitvids:admin/config/media/fitvids',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_media:admin/config/media',
  );
  // Exported menu link: management_flags:admin/structure/flags.
  $menu_links['management_flags:admin/structure/flags'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/flags',
    'router_path' => 'admin/structure/flags',
    'link_title' => 'Flags',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure flags for marking content with arbitrary information (such as <em>offensive</em> or <em>bookmarked</em>).',
      ),
      'identifier' => 'management_flags:admin/structure/flags',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_flexslider:admin/config/media/flexslider.
  $menu_links['management_flexslider:admin/config/media/flexslider'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/media/flexslider',
    'router_path' => 'admin/config/media/flexslider',
    'link_title' => 'FlexSlider',
    'options' => array(
      'attributes' => array(
        'title' => 'Administer FlexSlider presets.',
      ),
      'identifier' => 'management_flexslider:admin/config/media/flexslider',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_media:admin/config/media',
  );
  // Exported menu link: management_google-analytics:admin/config/system/googleanalytics.
  $menu_links['management_google-analytics:admin/config/system/googleanalytics'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/system/googleanalytics',
    'router_path' => 'admin/config/system/googleanalytics',
    'link_title' => 'Google Analytics',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure tracking behavior to get insights into your website traffic and marketing effectiveness.',
      ),
      'identifier' => 'management_google-analytics:admin/config/system/googleanalytics',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_system:admin/config/system',
  );
  // Exported menu link: management_help:admin/help.
  $menu_links['management_help:admin/help'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/help',
    'router_path' => 'admin/help',
    'link_title' => 'Help',
    'options' => array(
      'attributes' => array(
        'title' => 'Reference for usage, configuration, and modules.',
      ),
      'identifier' => 'management_help:admin/help',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 9,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin',
  );
  // Exported menu link: management_honeypot-configuration:admin/config/content/honeypot.
  $menu_links['management_honeypot-configuration:admin/config/content/honeypot'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/content/honeypot',
    'router_path' => 'admin/config/content/honeypot',
    'link_title' => 'Honeypot configuration',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure Honeypot spam prevention and the forms on which Honeypot will be used.',
      ),
      'identifier' => 'management_honeypot-configuration:admin/config/content/honeypot',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content-authoring:admin/config/content',
  );
  // Exported menu link: management_image-styles:admin/config/media/image-styles.
  $menu_links['management_image-styles:admin/config/media/image-styles'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/media/image-styles',
    'router_path' => 'admin/config/media/image-styles',
    'link_title' => 'Image styles',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure styles that can be used for resizing or adjusting images on display.',
      ),
      'identifier' => 'management_image-styles:admin/config/media/image-styles',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_media:admin/config/media',
  );
  // Exported menu link: management_image-toolkit:admin/config/media/image-toolkit.
  $menu_links['management_image-toolkit:admin/config/media/image-toolkit'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/media/image-toolkit',
    'router_path' => 'admin/config/media/image-toolkit',
    'link_title' => 'Image toolkit',
    'options' => array(
      'attributes' => array(
        'title' => 'Choose which image toolkit to use if you have installed optional toolkits.',
      ),
      'identifier' => 'management_image-toolkit:admin/config/media/image-toolkit',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 20,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_media:admin/config/media',
  );
  // Exported menu link: management_ink-filepicker-settings:admin/config/media/inkfilepicker.
  $menu_links['management_ink-filepicker-settings:admin/config/media/inkfilepicker'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/media/inkfilepicker',
    'router_path' => 'admin/config/media/inkfilepicker',
    'link_title' => 'Ink Filepicker Settings',
    'options' => array(
      'identifier' => 'management_ink-filepicker-settings:admin/config/media/inkfilepicker',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_media:admin/config/media',
  );
  // Exported menu link: management_ip-address-blocking:admin/config/people/ip-blocking.
  $menu_links['management_ip-address-blocking:admin/config/people/ip-blocking'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/people/ip-blocking',
    'router_path' => 'admin/config/people/ip-blocking',
    'link_title' => 'IP address blocking',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage blocked IP addresses.',
      ),
      'identifier' => 'management_ip-address-blocking:admin/config/people/ip-blocking',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 10,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_people:admin/config/people',
  );
  // Exported menu link: management_janrain-engage:admin/config/people/rpx.
  $menu_links['management_janrain-engage:admin/config/people/rpx'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/people/rpx',
    'router_path' => 'admin/config/people/rpx',
    'link_title' => 'Janrain Engage',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure the settings for Janrain Engage',
      ),
      'identifier' => 'management_janrain-engage:admin/config/people/rpx',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -4,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_people:admin/config/people',
  );
  // Exported menu link: management_jquery-update:admin/config/development/jquery_update.
  $menu_links['management_jquery-update:admin/config/development/jquery_update'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/development/jquery_update',
    'router_path' => 'admin/config/development/jquery_update',
    'link_title' => 'jQuery update',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure settings related to the jQuery upgrade, the library path and compression.',
      ),
      'identifier' => 'management_jquery-update:admin/config/development/jquery_update',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_development:admin/config/development',
  );
  // Exported menu link: management_languages:admin/config/regional/language.
  $menu_links['management_languages:admin/config/regional/language'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/regional/language',
    'router_path' => 'admin/config/regional/language',
    'link_title' => 'Languages',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure languages for content and the user interface.',
      ),
      'identifier' => 'management_languages:admin/config/regional/language',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -10,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_regional-and-language:admin/config/regional',
  );
  // Exported menu link: management_link-iframe-blacklist:admin/config/content/link_iframe_formatter.
  $menu_links['management_link-iframe-blacklist:admin/config/content/link_iframe_formatter'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/content/link_iframe_formatter',
    'router_path' => 'admin/config/content/link_iframe_formatter',
    'link_title' => 'Link iframe blacklist',
    'options' => array(
      'attributes' => array(
        'title' => 'Config blacklist for link iframe formatter',
      ),
      'identifier' => 'management_link-iframe-blacklist:admin/config/content/link_iframe_formatter',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content-authoring:admin/config/content',
  );
  // Exported menu link: management_logging-and-errors:admin/config/development/logging.
  $menu_links['management_logging-and-errors:admin/config/development/logging'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/development/logging',
    'router_path' => 'admin/config/development/logging',
    'link_title' => 'Logging and errors',
    'options' => array(
      'attributes' => array(
        'title' => 'Settings for logging and alerts modules. Various modules can route Drupal\'s system events to different destinations, such as syslog, database, email, etc.',
      ),
      'identifier' => 'management_logging-and-errors:admin/config/development/logging',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -15,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_development:admin/config/development',
  );
  // Exported menu link: management_main-menu:admin/structure/menu/manage/main-menu.
  $menu_links['management_main-menu:admin/structure/menu/manage/main-menu'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/menu/manage/main-menu',
    'router_path' => 'admin/structure/menu/manage/%',
    'link_title' => 'Main menu',
    'options' => array(
      'identifier' => 'management_main-menu:admin/structure/menu/manage/main-menu',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_menus:admin/structure/menu',
  );
  // Exported menu link: management_maintenance-mode:admin/config/development/maintenance.
  $menu_links['management_maintenance-mode:admin/config/development/maintenance'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/development/maintenance',
    'router_path' => 'admin/config/development/maintenance',
    'link_title' => 'Maintenance mode',
    'options' => array(
      'attributes' => array(
        'title' => 'Take the site offline for maintenance or bring it back online.',
      ),
      'identifier' => 'management_maintenance-mode:admin/config/development/maintenance',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -10,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_development:admin/config/development',
  );
  // Exported menu link: management_management:admin/structure/menu/manage/management.
  $menu_links['management_management:admin/structure/menu/manage/management'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/menu/manage/management',
    'router_path' => 'admin/structure/menu/manage/%',
    'link_title' => 'Management',
    'options' => array(
      'identifier' => 'management_management:admin/structure/menu/manage/management',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_menus:admin/structure/menu',
  );
  // Exported menu link: management_media-browser-settings:admin/config/media/browser.
  $menu_links['management_media-browser-settings:admin/config/media/browser'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/media/browser',
    'router_path' => 'admin/config/media/browser',
    'link_title' => 'Media browser settings',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure the behavior and display of the media browser.',
      ),
      'identifier' => 'management_media-browser-settings:admin/config/media/browser',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_media:admin/config/media',
  );
  // Exported menu link: management_media:admin/config/media.
  $menu_links['management_media:admin/config/media'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/media',
    'router_path' => 'admin/config/media',
    'link_title' => 'Media',
    'options' => array(
      'attributes' => array(
        'title' => 'Media tools.',
      ),
      'identifier' => 'management_media:admin/config/media',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -10,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_menu-block:admin/config/user-interface/menu-block.
  $menu_links['management_menu-block:admin/config/user-interface/menu-block'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/user-interface/menu-block',
    'router_path' => 'admin/config/user-interface/menu-block',
    'link_title' => 'Menu block',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure menu block.',
      ),
      'identifier' => 'management_menu-block:admin/config/user-interface/menu-block',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_user-interface:admin/config/user-interface',
  );
  // Exported menu link: management_menu-navigation:admin/structure/menu/manage/menu-menu-navigation.
  $menu_links['management_menu-navigation:admin/structure/menu/manage/menu-menu-navigation'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/menu/manage/menu-menu-navigation',
    'router_path' => 'admin/structure/menu/manage/%',
    'link_title' => 'Menu Navigation',
    'options' => array(
      'identifier' => 'management_menu-navigation:admin/structure/menu/manage/menu-menu-navigation',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_menus:admin/structure/menu',
  );
  // Exported menu link: management_menu-ogp:admin/structure/menu/manage/menu-menuogp.
  $menu_links['management_menu-ogp:admin/structure/menu/manage/menu-menuogp'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/menu/manage/menu-menuogp',
    'router_path' => 'admin/structure/menu/manage/%',
    'link_title' => 'Menu OGP',
    'options' => array(
      'identifier' => 'management_menu-ogp:admin/structure/menu/manage/menu-menuogp',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_menus:admin/structure/menu',
  );
  // Exported menu link: management_menu-position-rules:admin/structure/menu-position.
  $menu_links['management_menu-position-rules:admin/structure/menu-position'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/menu-position',
    'router_path' => 'admin/structure/menu-position',
    'link_title' => 'Menu position rules',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure rules for menu positions.',
      ),
      'identifier' => 'management_menu-position-rules:admin/structure/menu-position',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_menu-trail-by-path:admin/config/search/menu_trail_by_path.
  $menu_links['management_menu-trail-by-path:admin/config/search/menu_trail_by_path'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/search/menu_trail_by_path',
    'router_path' => 'admin/config/search/menu_trail_by_path',
    'link_title' => 'Menu trail by path',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure menu trail by path module.',
      ),
      'identifier' => 'management_menu-trail-by-path:admin/config/search/menu_trail_by_path',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_search-and-metadata:admin/config/search',
  );
  // Exported menu link: management_menuogp:admin/structure/menu/manage/menu-menu-ogp.
  $menu_links['management_menuogp:admin/structure/menu/manage/menu-menu-ogp'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/menu/manage/menu-menu-ogp',
    'router_path' => 'admin/structure/menu/manage/%',
    'link_title' => 'menu_ogp',
    'options' => array(
      'identifier' => 'management_menuogp:admin/structure/menu/manage/menu-menu-ogp',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_menus:admin/structure/menu',
  );
  // Exported menu link: management_menus:admin/structure/menu.
  $menu_links['management_menus:admin/structure/menu'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/menu',
    'router_path' => 'admin/structure/menu',
    'link_title' => 'Menus',
    'options' => array(
      'attributes' => array(
        'title' => 'Add new menus to your site, edit existing menus, and rename and reorganize menu links.',
      ),
      'identifier' => 'management_menus:admin/structure/menu',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_metatag:admin/config/search/metatags.
  $menu_links['management_metatag:admin/config/search/metatags'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/search/metatags',
    'router_path' => 'admin/config/search/metatags',
    'link_title' => 'Metatag',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure Metatag defaults.',
      ),
      'identifier' => 'management_metatag:admin/config/search/metatags',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_search-and-metadata:admin/config/search',
  );
  // Exported menu link: management_migrate:admin/content/migrate.
  $menu_links['management_migrate:admin/content/migrate'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/content/migrate',
    'router_path' => 'admin/content/migrate',
    'link_title' => 'Migrate',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage importing of data into your Drupal site',
      ),
      'identifier' => 'management_migrate:admin/content/migrate',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content:admin/content',
  );
  // Exported menu link: management_module-filter:admin/config/user-interface/modulefilter.
  $menu_links['management_module-filter:admin/config/user-interface/modulefilter'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/user-interface/modulefilter',
    'router_path' => 'admin/config/user-interface/modulefilter',
    'link_title' => 'Module filter',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure how the modules page looks and acts.',
      ),
      'identifier' => 'management_module-filter:admin/config/user-interface/modulefilter',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_user-interface:admin/config/user-interface',
  );
  // Exported menu link: management_modules:admin/modules.
  $menu_links['management_modules:admin/modules'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/modules',
    'router_path' => 'admin/modules',
    'link_title' => 'Modules',
    'options' => array(
      'attributes' => array(
        'title' => 'Extend site functionality.',
      ),
      'identifier' => 'management_modules:admin/modules',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -2,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin',
  );
  // Exported menu link: management_multilingual-settings:admin/config/regional/i18n.
  $menu_links['management_multilingual-settings:admin/config/regional/i18n'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/regional/i18n',
    'router_path' => 'admin/config/regional/i18n',
    'link_title' => 'Multilingual settings',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure extended options for multilingual content and translations.',
      ),
      'identifier' => 'management_multilingual-settings:admin/config/regional/i18n',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 10,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_regional-and-language:admin/config/regional',
  );
  // Exported menu link: management_multistep:admin/config/content/multistep.
  $menu_links['management_multistep:admin/config/content/multistep'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/content/multistep',
    'router_path' => 'admin/config/content/multistep',
    'link_title' => 'Multistep',
    'options' => array(
      'attributes' => array(
        'title' => 'Allows the user to configure different options for the multistep module.',
      ),
      'identifier' => 'management_multistep:admin/config/content/multistep',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content-authoring:admin/config/content',
  );
  // Exported menu link: management_my-workbench:admin/workbench.
  $menu_links['management_my-workbench:admin/workbench'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/workbench',
    'router_path' => 'admin/workbench',
    'link_title' => 'My Workbench',
    'options' => array(
      'attributes' => array(
        'title' => 'My Workbench area',
      ),
      'identifier' => 'management_my-workbench:admin/workbench',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -20,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin',
  );
  // Exported menu link: management_navigation:admin/structure/menu/manage/navigation.
  $menu_links['management_navigation:admin/structure/menu/manage/navigation'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/menu/manage/navigation',
    'router_path' => 'admin/structure/menu/manage/%',
    'link_title' => 'Navigation',
    'options' => array(
      'identifier' => 'management_navigation:admin/structure/menu/manage/navigation',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_menus:admin/structure/menu',
  );
  // Exported menu link: management_oauth:admin/config/services/oauth.
  $menu_links['management_oauth:admin/config/services/oauth'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/services/oauth',
    'router_path' => 'admin/config/services/oauth',
    'link_title' => 'OAuth',
    'options' => array(
      'attributes' => array(
        'title' => 'Settings for OAuth',
      ),
      'identifier' => 'management_oauth:admin/config/services/oauth',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_web-services:admin/config/services',
  );
  // Exported menu link: management_oembed:admin/config/media/oembed.
  $menu_links['management_oembed:admin/config/media/oembed'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/media/oembed',
    'router_path' => 'admin/config/media/oembed',
    'link_title' => 'oEmbed',
    'options' => array(
      'attributes' => array(
        'title' => 'Settings for oEmbed',
      ),
      'identifier' => 'management_oembed:admin/config/media/oembed',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_media:admin/config/media',
  );
  // Exported menu link: management_og-context:admin/config/group/context.
  $menu_links['management_og-context:admin/config/group/context'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/group/context',
    'router_path' => 'admin/config/group/context',
    'link_title' => 'OG context',
    'options' => array(
      'attributes' => array(
        'title' => 'OG context detection and selection',
      ),
      'identifier' => 'management_og-context:admin/config/group/context',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_organic-groups:admin/config/group',
  );
  // Exported menu link: management_og-field-settings:admin/config/group/fields.
  $menu_links['management_og-field-settings:admin/config/group/fields'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/group/fields',
    'router_path' => 'admin/config/group/fields',
    'link_title' => 'OG field settings',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure Organic groups fields in bundles.',
      ),
      'identifier' => 'management_og-field-settings:admin/config/group/fields',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_organic-groups:admin/config/group',
  );
  // Exported menu link: management_og-membership-types:admin/config/group/group-membership.
  $menu_links['management_og-membership-types:admin/config/group/group-membership'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/group/group-membership',
    'router_path' => 'admin/config/group/group-membership',
    'link_title' => 'OG membership types',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage group memberships type, including fields.',
      ),
      'identifier' => 'management_og-membership-types:admin/config/group/group-membership',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_organic-groups:admin/config/group',
  );
  // Exported menu link: management_og-menu-settings:admin/config/group/og_menu.
  $menu_links['management_og-menu-settings:admin/config/group/og_menu'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/group/og_menu',
    'router_path' => 'admin/config/group/og_menu',
    'link_title' => 'OG menu settings',
    'options' => array(
      'attributes' => array(
        'title' => 'Configuration for Organic groups menu',
      ),
      'identifier' => 'management_og-menu-settings:admin/config/group/og_menu',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_organic-groups:admin/config/group',
  );
  // Exported menu link: management_og-permissions-overview:admin/config/group/permissions.
  $menu_links['management_og-permissions-overview:admin/config/group/permissions'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/group/permissions',
    'router_path' => 'admin/config/group/permissions',
    'link_title' => 'OG permissions overview',
    'options' => array(
      'attributes' => array(
        'title' => 'Overview of Organic groups permissions.',
      ),
      'identifier' => 'management_og-permissions-overview:admin/config/group/permissions',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_organic-groups:admin/config/group',
  );
  // Exported menu link: management_og-roles-overview:admin/config/group/roles.
  $menu_links['management_og-roles-overview:admin/config/group/roles'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/group/roles',
    'router_path' => 'admin/config/group/roles',
    'link_title' => 'OG roles overview',
    'options' => array(
      'attributes' => array(
        'title' => 'Overview of organic groups roles.',
      ),
      'identifier' => 'management_og-roles-overview:admin/config/group/roles',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_organic-groups:admin/config/group',
  );
  // Exported menu link: management_og-settings:admin/config/group/settings.
  $menu_links['management_og-settings:admin/config/group/settings'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/group/settings',
    'router_path' => 'admin/config/group/settings',
    'link_title' => 'OG settings',
    'options' => array(
      'attributes' => array(
        'title' => 'Administer OG settings.',
      ),
      'identifier' => 'management_og-settings:admin/config/group/settings',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_organic-groups:admin/config/group',
  );
  // Exported menu link: management_organic-groups-menus:admin/structure/og_menu.
  $menu_links['management_organic-groups-menus:admin/structure/og_menu'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/og_menu',
    'router_path' => 'admin/structure/og_menu',
    'link_title' => 'Organic groups menus',
    'options' => array(
      'attributes' => array(
        'title' => 'Add new organic groups menus to your site, edit existing ones, and rename and reorganize menu links.',
      ),
      'identifier' => 'management_organic-groups-menus:admin/structure/og_menu',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_organic-groups:admin/config/group.
  $menu_links['management_organic-groups:admin/config/group'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/group',
    'router_path' => 'admin/config/group',
    'link_title' => 'Organic groups',
    'options' => array(
      'attributes' => array(
        'title' => 'Administer the suite of Organic groups modules.',
      ),
      'identifier' => 'management_organic-groups:admin/config/group',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -5,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_page-titles:admin/config/search/page-title.
  $menu_links['management_page-titles:admin/config/search/page-title'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/search/page-title',
    'router_path' => 'admin/config/search/page-title',
    'link_title' => 'Page titles',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure the page titles for your site (the title in the &lt;head&gt; tag).',
      ),
      'identifier' => 'management_page-titles:admin/config/search/page-title',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_search-and-metadata:admin/config/search',
  );
  // Exported menu link: management_pantheon-apache-solr:admin/config/search/pantheon.
  $menu_links['management_pantheon-apache-solr:admin/config/search/pantheon'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/search/pantheon',
    'router_path' => 'admin/config/search/pantheon',
    'link_title' => 'Pantheon Apache Solr',
    'options' => array(
      'attributes' => array(
        'title' => 'Check communication with Pantheon\'s Apache Solr Service',
      ),
      'identifier' => 'management_pantheon-apache-solr:admin/config/search/pantheon',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_search-and-metadata:admin/config/search',
  );
  // Exported menu link: management_people:admin/config/people.
  $menu_links['management_people:admin/config/people'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/people',
    'router_path' => 'admin/config/people',
    'link_title' => 'People',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure user accounts.',
      ),
      'identifier' => 'management_people:admin/config/people',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -20,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_people:admin/people.
  $menu_links['management_people:admin/people'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/people',
    'router_path' => 'admin/people',
    'link_title' => 'People',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage user accounts, roles, and permissions.',
      ),
      'identifier' => 'management_people:admin/people',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -4,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin',
  );
  // Exported menu link: management_performance:admin/config/development/performance.
  $menu_links['management_performance:admin/config/development/performance'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/development/performance',
    'router_path' => 'admin/config/development/performance',
    'link_title' => 'Performance',
    'options' => array(
      'attributes' => array(
        'title' => 'Enable or disable page caching for anonymous users and set CSS and JS bandwidth optimization options.',
      ),
      'identifier' => 'management_performance:admin/config/development/performance',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -20,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_development:admin/config/development',
  );
  // Exported menu link: management_quicktabs:admin/structure/quicktabs.
  $menu_links['management_quicktabs:admin/structure/quicktabs'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/quicktabs',
    'router_path' => 'admin/structure/quicktabs',
    'link_title' => 'Quicktabs',
    'options' => array(
      'attributes' => array(
        'title' => 'Create blocks of tabbed content.',
      ),
      'identifier' => 'management_quicktabs:admin/structure/quicktabs',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_rdf-publishing-settings:admin/config/services/rdf.
  $menu_links['management_rdf-publishing-settings:admin/config/services/rdf'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/services/rdf',
    'router_path' => 'admin/config/services/rdf',
    'link_title' => 'RDF publishing settings',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure how site content gets published in RDF.',
      ),
      'identifier' => 'management_rdf-publishing-settings:admin/config/services/rdf',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_web-services:admin/config/services',
  );
  // Exported menu link: management_recent-log-messages:admin/reports/dblog.
  $menu_links['management_recent-log-messages:admin/reports/dblog'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/reports/dblog',
    'router_path' => 'admin/reports/dblog',
    'link_title' => 'Recent log messages',
    'options' => array(
      'attributes' => array(
        'title' => 'View events that have recently been logged.',
      ),
      'identifier' => 'management_recent-log-messages:admin/reports/dblog',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -1,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_reports:admin/reports',
  );
  // Exported menu link: management_recline-configuration:admin/dkan/recline.
  $menu_links['management_recline-configuration:admin/dkan/recline'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/dkan/recline',
    'router_path' => 'admin/dkan/recline',
    'link_title' => 'Recline Configuration',
    'options' => array(
      'attributes' => array(
        'title' => 'Configurable items for recline module',
      ),
      'identifier' => 'management_recline-configuration:admin/dkan/recline',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_dkan:admin/dkan',
  );
  // Exported menu link: management_regional-and-language:admin/config/regional.
  $menu_links['management_regional-and-language:admin/config/regional'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/regional',
    'router_path' => 'admin/config/regional',
    'link_title' => 'Regional and language',
    'options' => array(
      'attributes' => array(
        'title' => 'Regional settings, localization and translation.',
      ),
      'identifier' => 'management_regional-and-language:admin/config/regional',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -5,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_regional-settings:admin/config/regional/settings.
  $menu_links['management_regional-settings:admin/config/regional/settings'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/regional/settings',
    'router_path' => 'admin/config/regional/settings',
    'link_title' => 'Regional settings',
    'options' => array(
      'attributes' => array(
        'title' => 'Settings for the site\'s default time zone and country.',
      ),
      'identifier' => 'management_regional-settings:admin/config/regional/settings',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -20,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_regional-and-language:admin/config/regional',
  );
  // Exported menu link: management_reports:admin/reports.
  $menu_links['management_reports:admin/reports'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/reports',
    'router_path' => 'admin/reports',
    'link_title' => 'Reports',
    'options' => array(
      'attributes' => array(
        'title' => 'View reports, updates, and errors.',
      ),
      'identifier' => 'management_reports:admin/reports',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 5,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin',
  );
  // Exported menu link: management_rss-publishing:admin/config/services/rss-publishing.
  $menu_links['management_rss-publishing:admin/config/services/rss-publishing'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/services/rss-publishing',
    'router_path' => 'admin/config/services/rss-publishing',
    'link_title' => 'RSS publishing',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure the site description, the number of items per feed and whether feeds should be titles/teasers/full-text.',
      ),
      'identifier' => 'management_rss-publishing:admin/config/services/rss-publishing',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_web-services:admin/config/services',
  );
  // Exported menu link: management_rules:admin/config/workflow/rules.
  $menu_links['management_rules:admin/config/workflow/rules'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/workflow/rules',
    'router_path' => 'admin/config/workflow/rules',
    'link_title' => 'Rules',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage reaction rules and rule components.',
      ),
      'identifier' => 'management_rules:admin/config/workflow/rules',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_workflow:admin/config/workflow',
  );
  // Exported menu link: management_search-and-metadata:admin/config/search.
  $menu_links['management_search-and-metadata:admin/config/search'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/search',
    'router_path' => 'admin/config/search',
    'link_title' => 'Search and metadata',
    'options' => array(
      'attributes' => array(
        'title' => 'Local site search, metadata and SEO.',
      ),
      'identifier' => 'management_search-and-metadata:admin/config/search',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -10,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_search-api:admin/config/search/search_api.
  $menu_links['management_search-api:admin/config/search/search_api'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/search/search_api',
    'router_path' => 'admin/config/search/search_api',
    'link_title' => 'Search API',
    'options' => array(
      'attributes' => array(
        'title' => 'Create and configure search engines.',
      ),
      'identifier' => 'management_search-api:admin/config/search/search_api',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_search-and-metadata:admin/config/search',
  );
  // Exported menu link: management_search-settings:admin/config/search/settings.
  $menu_links['management_search-settings:admin/config/search/settings'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/search/settings',
    'router_path' => 'admin/config/search/settings',
    'link_title' => 'Search settings',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure relevance settings for search and other indexing options.',
      ),
      'identifier' => 'management_search-settings:admin/config/search/settings',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -10,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_search-and-metadata:admin/config/search',
  );
  // Exported menu link: management_sharethis:admin/config/services/sharethis.
  $menu_links['management_sharethis:admin/config/services/sharethis'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/services/sharethis',
    'router_path' => 'admin/config/services/sharethis',
    'link_title' => 'ShareThis',
    'options' => array(
      'attributes' => array(
        'title' => 'Choose the widget, button family, and services for using ShareThis to share content online.',
      ),
      'identifier' => 'management_sharethis:admin/config/services/sharethis',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_web-services:admin/config/services',
  );
  // Exported menu link: management_shortcuts:admin/config/user-interface/shortcut.
  $menu_links['management_shortcuts:admin/config/user-interface/shortcut'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/user-interface/shortcut',
    'router_path' => 'admin/config/user-interface/shortcut',
    'link_title' => 'Shortcuts',
    'options' => array(
      'attributes' => array(
        'title' => 'Add and modify shortcut sets.',
      ),
      'identifier' => 'management_shortcuts:admin/config/user-interface/shortcut',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_user-interface:admin/config/user-interface',
  );
  // Exported menu link: management_site-information:admin/config/system/site-information.
  $menu_links['management_site-information:admin/config/system/site-information'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/system/site-information',
    'router_path' => 'admin/config/system/site-information',
    'link_title' => 'Site information',
    'options' => array(
      'attributes' => array(
        'title' => 'Change site name, e-mail address, slogan, default front page, and number of posts per page, error pages.',
      ),
      'identifier' => 'management_site-information:admin/config/system/site-information',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -20,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_system:admin/config/system',
  );
  // Exported menu link: management_status-report:admin/reports/status.
  $menu_links['management_status-report:admin/reports/status'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/reports/status',
    'router_path' => 'admin/reports/status',
    'link_title' => 'Status report',
    'options' => array(
      'attributes' => array(
        'title' => 'Get a status report about your site\'s operation and any detected problems.',
      ),
      'identifier' => 'management_status-report:admin/reports/status',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -60,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_reports:admin/reports',
  );
  // Exported menu link: management_string-overrides:admin/config/regional/stringoverrides.
  $menu_links['management_string-overrides:admin/config/regional/stringoverrides'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/regional/stringoverrides',
    'router_path' => 'admin/config/regional/stringoverrides',
    'link_title' => 'String overrides',
    'options' => array(
      'attributes' => array(
        'title' => 'Provides a quick and easy way of replacing text on the site.',
      ),
      'identifier' => 'management_string-overrides:admin/config/regional/stringoverrides',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_regional-and-language:admin/config/regional',
  );
  // Exported menu link: management_strongarm:admin/config/development/strongarm.
  $menu_links['management_strongarm:admin/config/development/strongarm'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/development/strongarm',
    'router_path' => 'admin/config/development/strongarm',
    'link_title' => 'Strongarm',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage Drupal variable settings that have been strongarmed.',
      ),
      'identifier' => 'management_strongarm:admin/config/development/strongarm',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_development:admin/config/development',
  );
  // Exported menu link: management_structure:admin/structure.
  $menu_links['management_structure:admin/structure'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure',
    'router_path' => 'admin/structure',
    'link_title' => 'Structure',
    'options' => array(
      'attributes' => array(
        'title' => 'Administer blocks, content types, menus, etc.',
      ),
      'identifier' => 'management_structure:admin/structure',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -8,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_administration:admin',
  );
  // Exported menu link: management_superfish:admin/config/user-interface/superfish.
  $menu_links['management_superfish:admin/config/user-interface/superfish'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/user-interface/superfish',
    'router_path' => 'admin/config/user-interface/superfish',
    'link_title' => 'Superfish',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure Superfish Menus',
      ),
      'identifier' => 'management_superfish:admin/config/user-interface/superfish',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_user-interface:admin/config/user-interface',
  );
  // Exported menu link: management_system:admin/config/system.
  $menu_links['management_system:admin/config/system'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/system',
    'router_path' => 'admin/config/system',
    'link_title' => 'System',
    'options' => array(
      'attributes' => array(
        'title' => 'General system related configuration.',
      ),
      'identifier' => 'management_system:admin/config/system',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -20,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_tagclouds-configuration:admin/config/content/tagclouds.
  $menu_links['management_tagclouds-configuration:admin/config/content/tagclouds'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/content/tagclouds',
    'router_path' => 'admin/config/content/tagclouds',
    'link_title' => 'TagClouds configuration',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure the tag clouds. Set the order, the number of tags, and the depth of the clouds.',
      ),
      'identifier' => 'management_tagclouds-configuration:admin/config/content/tagclouds',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content-authoring:admin/config/content',
  );
  // Exported menu link: management_taxonomy-manager:admin/config/user-interface/taxonomy-manager-settings.
  $menu_links['management_taxonomy-manager:admin/config/user-interface/taxonomy-manager-settings'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/user-interface/taxonomy-manager-settings',
    'router_path' => 'admin/config/user-interface/taxonomy-manager-settings',
    'link_title' => 'Taxonomy Manager',
    'options' => array(
      'attributes' => array(
        'title' => 'Advanced settings for the Taxonomy Manager',
      ),
      'identifier' => 'management_taxonomy-manager:admin/config/user-interface/taxonomy-manager-settings',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_user-interface:admin/config/user-interface',
  );
  // Exported menu link: management_taxonomy-manager:admin/structure/taxonomy_manager/voc.
  $menu_links['management_taxonomy-manager:admin/structure/taxonomy_manager/voc'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/taxonomy_manager/voc',
    'router_path' => 'admin/structure/taxonomy_manager/voc',
    'link_title' => 'Taxonomy Manager',
    'options' => array(
      'attributes' => array(
        'title' => 'Administer vocabularies with the Taxonomy Manager',
      ),
      'identifier' => 'management_taxonomy-manager:admin/structure/taxonomy_manager/voc',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_taxonomy:admin/structure/taxonomy.
  $menu_links['management_taxonomy:admin/structure/taxonomy'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/taxonomy',
    'router_path' => 'admin/structure/taxonomy',
    'link_title' => 'Taxonomy',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage tagging, categorization, and classification of your content.',
      ),
      'identifier' => 'management_taxonomy:admin/structure/taxonomy',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_text-formats:admin/config/content/formats.
  $menu_links['management_text-formats:admin/config/content/formats'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/content/formats',
    'router_path' => 'admin/config/content/formats',
    'link_title' => 'Text formats',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure how content input by users is filtered, including allowed HTML tags. Also allows enabling of module-provided filters.',
      ),
      'identifier' => 'management_text-formats:admin/config/content/formats',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content-authoring:admin/config/content',
  );
  // Exported menu link: management_title-settings:admin/config/content/title.
  $menu_links['management_title-settings:admin/config/content/title'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/content/title',
    'router_path' => 'admin/config/content/title',
    'link_title' => 'Title settings',
    'options' => array(
      'attributes' => array(
        'title' => 'Settings for the Title module.',
      ),
      'identifier' => 'management_title-settings:admin/config/content/title',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content-authoring:admin/config/content',
  );
  // Exported menu link: management_top-access-denied-errors:admin/reports/access-denied.
  $menu_links['management_top-access-denied-errors:admin/reports/access-denied'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/reports/access-denied',
    'router_path' => 'admin/reports/access-denied',
    'link_title' => 'Top \'access denied\' errors',
    'options' => array(
      'attributes' => array(
        'title' => 'View \'access denied\' errors (403s).',
      ),
      'identifier' => 'management_top-access-denied-errors:admin/reports/access-denied',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_reports:admin/reports',
  );
  // Exported menu link: management_top-page-not-found-errors:admin/reports/page-not-found.
  $menu_links['management_top-page-not-found-errors:admin/reports/page-not-found'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/reports/page-not-found',
    'router_path' => 'admin/reports/page-not-found',
    'link_title' => 'Top \'page not found\' errors',
    'options' => array(
      'attributes' => array(
        'title' => 'View \'page not found\' errors (404s).',
      ),
      'identifier' => 'management_top-page-not-found-errors:admin/reports/page-not-found',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_reports:admin/reports',
  );
  // Exported menu link: management_top-search-phrases:admin/reports/search.
  $menu_links['management_top-search-phrases:admin/reports/search'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/reports/search',
    'router_path' => 'admin/reports/search',
    'link_title' => 'Top search phrases',
    'options' => array(
      'attributes' => array(
        'title' => 'View most popular search phrases.',
      ),
      'identifier' => 'management_top-search-phrases:admin/reports/search',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_reports:admin/reports',
  );
  // Exported menu link: management_translate-interface:admin/config/regional/translate.
  $menu_links['management_translate-interface:admin/config/regional/translate'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/regional/translate',
    'router_path' => 'admin/config/regional/translate',
    'link_title' => 'Translate interface',
    'options' => array(
      'attributes' => array(
        'title' => 'Translate the built in interface and optionally other text.',
      ),
      'identifier' => 'management_translate-interface:admin/config/regional/translate',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -5,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_regional-and-language:admin/config/regional',
  );
  // Exported menu link: management_translation-sets:admin/config/regional/i18n_translation.
  $menu_links['management_translation-sets:admin/config/regional/i18n_translation'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/regional/i18n_translation',
    'router_path' => 'admin/config/regional/i18n_translation',
    'link_title' => 'Translation sets',
    'options' => array(
      'attributes' => array(
        'title' => 'Translation sets overview.',
      ),
      'identifier' => 'management_translation-sets:admin/config/regional/i18n_translation',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 10,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_regional-and-language:admin/config/regional',
  );
  // Exported menu link: management_tweet-embed:admin/config/services/tweet_embed.
  $menu_links['management_tweet-embed:admin/config/services/tweet_embed'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/services/tweet_embed',
    'router_path' => 'admin/config/services/tweet_embed',
    'link_title' => 'Tweet Embed',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure the default settings for the Tweet Embed input filter.',
      ),
      'identifier' => 'management_tweet-embed:admin/config/services/tweet_embed',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_web-services:admin/config/services',
  );
  // Exported menu link: management_twitter:admin/config/services/twitter.
  $menu_links['management_twitter:admin/config/services/twitter'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/services/twitter',
    'router_path' => 'admin/config/services/twitter',
    'link_title' => 'Twitter',
    'options' => array(
      'attributes' => array(
        'title' => 'Twitter accounts and settings.',
      ),
      'identifier' => 'management_twitter:admin/config/services/twitter',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_web-services:admin/config/services',
  );
  // Exported menu link: management_universally-unique-identifiers:admin/config/system/uuid.
  $menu_links['management_universally-unique-identifiers:admin/config/system/uuid'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/system/uuid',
    'router_path' => 'admin/config/system/uuid',
    'link_title' => 'Universally unique identifiers',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure universally unique identifiers.',
      ),
      'identifier' => 'management_universally-unique-identifiers:admin/config/system/uuid',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_system:admin/config/system',
  );
  // Exported menu link: management_url-aliases:admin/config/search/path.
  $menu_links['management_url-aliases:admin/config/search/path'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/search/path',
    'router_path' => 'admin/config/search/path',
    'link_title' => 'URL aliases',
    'options' => array(
      'attributes' => array(
        'title' => 'Change your site\'s URL paths by aliasing them.',
      ),
      'identifier' => 'management_url-aliases:admin/config/search/path',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -5,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_search-and-metadata:admin/config/search',
  );
  // Exported menu link: management_url-redirects:admin/config/search/redirect.
  $menu_links['management_url-redirects:admin/config/search/redirect'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/search/redirect',
    'router_path' => 'admin/config/search/redirect',
    'link_title' => 'URL redirects',
    'options' => array(
      'attributes' => array(
        'title' => 'Redirect users from one URL to another.',
      ),
      'identifier' => 'management_url-redirects:admin/config/search/redirect',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_search-and-metadata:admin/config/search',
  );
  // Exported menu link: management_user-interface:admin/config/user-interface.
  $menu_links['management_user-interface:admin/config/user-interface'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/user-interface',
    'router_path' => 'admin/config/user-interface',
    'link_title' => 'User interface',
    'options' => array(
      'attributes' => array(
        'title' => 'Tools that enhance the user interface.',
      ),
      'identifier' => 'management_user-interface:admin/config/user-interface',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => -15,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_user-menu:admin/structure/menu/manage/user-menu.
  $menu_links['management_user-menu:admin/structure/menu/manage/user-menu'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/menu/manage/user-menu',
    'router_path' => 'admin/structure/menu/manage/%',
    'link_title' => 'User menu',
    'options' => array(
      'identifier' => 'management_user-menu:admin/structure/menu/manage/user-menu',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_menus:admin/structure/menu',
  );
  // Exported menu link: management_video:admin/config/media/video.
  $menu_links['management_video:admin/config/media/video'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/media/video',
    'router_path' => 'admin/config/media/video',
    'link_title' => 'Video',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure different aspects of the video module and its plugins',
      ),
      'identifier' => 'management_video:admin/config/media/video',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_media:admin/config/media',
  );
  // Exported menu link: management_videojs:admin/config/media/videojs.
  $menu_links['management_videojs:admin/config/media/videojs'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/media/videojs',
    'router_path' => 'admin/config/media/videojs',
    'link_title' => 'Video.js',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure the settings for the Video.js module.',
      ),
      'identifier' => 'management_videojs:admin/config/media/videojs',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_media:admin/config/media',
  );
  // Exported menu link: management_views-panes:admin/config/content-views.
  $menu_links['management_views-panes:admin/config/content-views'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/content-views',
    'router_path' => 'admin/config/content-views',
    'link_title' => 'Views panes',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure Views to be used as CTools content.',
      ),
      'identifier' => 'management_views-panes:admin/config/content-views',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_views-plugins:admin/reports/views-plugins.
  $menu_links['management_views-plugins:admin/reports/views-plugins'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/reports/views-plugins',
    'router_path' => 'admin/reports/views-plugins',
    'link_title' => 'Views plugins',
    'options' => array(
      'attributes' => array(
        'title' => 'Overview of plugins used in all views.',
      ),
      'identifier' => 'management_views-plugins:admin/reports/views-plugins',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_reports:admin/reports',
  );
  // Exported menu link: management_views:admin/structure/views.
  $menu_links['management_views:admin/structure/views'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/structure/views',
    'router_path' => 'admin/structure/views',
    'link_title' => 'Views',
    'options' => array(
      'attributes' => array(
        'title' => 'Manage customized lists of content.',
      ),
      'identifier' => 'management_views:admin/structure/views',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_structure:admin/structure',
  );
  // Exported menu link: management_web-services:admin/config/services.
  $menu_links['management_web-services:admin/config/services'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/services',
    'router_path' => 'admin/config/services',
    'link_title' => 'Web services',
    'options' => array(
      'attributes' => array(
        'title' => 'Tools related to web services.',
      ),
      'identifier' => 'management_web-services:admin/config/services',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_webform-settings:admin/config/content/webform.
  $menu_links['management_webform-settings:admin/config/content/webform'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/content/webform',
    'router_path' => 'admin/config/content/webform',
    'link_title' => 'Webform settings',
    'options' => array(
      'attributes' => array(
        'title' => 'Global configuration of webform functionality.',
      ),
      'identifier' => 'management_webform-settings:admin/config/content/webform',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content-authoring:admin/config/content',
  );
  // Exported menu link: management_workbench-email:admin/config/workbench/email.
  $menu_links['management_workbench-email:admin/config/workbench/email'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/workbench/email',
    'router_path' => 'admin/config/workbench/email',
    'link_title' => 'Workbench Email',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure email moderation notification.',
      ),
      'identifier' => 'management_workbench-email:admin/config/workbench/email',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_workbench:admin/config/workbench',
  );
  // Exported menu link: management_workbench-moderation:admin/config/workbench/moderation.
  $menu_links['management_workbench-moderation:admin/config/workbench/moderation'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/workbench/moderation',
    'router_path' => 'admin/config/workbench/moderation',
    'link_title' => 'Workbench Moderation',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure content moderation.',
      ),
      'identifier' => 'management_workbench-moderation:admin/config/workbench/moderation',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_workbench:admin/config/workbench',
  );
  // Exported menu link: management_workbench:admin/config/workbench.
  $menu_links['management_workbench:admin/config/workbench'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/workbench',
    'router_path' => 'admin/config/workbench',
    'link_title' => 'Workbench',
    'options' => array(
      'attributes' => array(
        'title' => 'Workbench',
      ),
      'identifier' => 'management_workbench:admin/config/workbench',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_workflow:admin/config/workflow.
  $menu_links['management_workflow:admin/config/workflow'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/workflow',
    'router_path' => 'admin/config/workflow',
    'link_title' => 'Workflow',
    'options' => array(
      'attributes' => array(
        'title' => 'Content workflow, editorial workflow tools.',
      ),
      'identifier' => 'management_workflow:admin/config/workflow',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 5,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_configuration:admin/config',
  );
  // Exported menu link: management_wysiwyg-profiles:admin/config/content/wysiwyg.
  $menu_links['management_wysiwyg-profiles:admin/config/content/wysiwyg'] = array(
    'menu_name' => 'management',
    'link_path' => 'admin/config/content/wysiwyg',
    'router_path' => 'admin/config/content/wysiwyg',
    'link_title' => 'Wysiwyg profiles',
    'options' => array(
      'attributes' => array(
        'title' => 'Configure client-side editors.',
      ),
      'identifier' => 'management_wysiwyg-profiles:admin/config/content/wysiwyg',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'management_content-authoring:admin/config/content',
  );
  // Exported menu link: menu-footer-menu_about-the-blog:http://www.opengovpartnership.org/blog/about.
  $menu_links['menu-footer-menu_about-the-blog:http://www.opengovpartnership.org/blog/about'] = array(
    'menu_name' => 'menu-footer-menu',
    'link_path' => 'http://www.opengovpartnership.org/blog/about',
    'router_path' => '',
    'link_title' => 'About the Blog',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer-menu_about-the-blog:http://www.opengovpartnership.org/blog/about',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-footer-menu_blog-disclaimer:http://www.opengovpartnership.org/blog/disclaimer.
  $menu_links['menu-footer-menu_blog-disclaimer:http://www.opengovpartnership.org/blog/disclaimer'] = array(
    'menu_name' => 'menu-footer-menu',
    'link_path' => 'http://www.opengovpartnership.org/blog/disclaimer',
    'router_path' => '',
    'link_title' => 'Blog Disclaimer',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer-menu_blog-disclaimer:http://www.opengovpartnership.org/blog/disclaimer',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-footer-menu_log-in:user/login.
  $menu_links['menu-footer-menu_log-in:user/login'] = array(
    'menu_name' => 'menu-footer-menu',
    'link_path' => 'user/login',
    'router_path' => 'user/login',
    'link_title' => 'Log in',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer-menu_log-in:user/login',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-footer-menu_log-out:user/logout.
  $menu_links['menu-footer-menu_log-out:user/logout'] = array(
    'menu_name' => 'menu-footer-menu',
    'link_path' => 'user/logout',
    'router_path' => 'user/logout',
    'link_title' => 'Log out',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer-menu_log-out:user/logout',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-footer-menu_privacy-policy:node/1351.
  $menu_links['menu-footer-menu_privacy-policy:node/1351'] = array(
    'menu_name' => 'menu-footer-menu',
    'link_path' => 'node/1351',
    'router_path' => 'node/%',
    'link_title' => 'Privacy Policy',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer-menu_privacy-policy:node/1351',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-footer-menu_terms-of-use:node/1350.
  $menu_links['menu-footer-menu_terms-of-use:node/1350'] = array(
    'menu_name' => 'menu-footer-menu',
    'link_path' => 'node/1350',
    'router_path' => 'node/%',
    'link_title' => 'Terms of Use',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-footer-menu_terms-of-use:node/1350',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-menu-navigation_stories:<front>.
  $menu_links['menu-menu-navigation_stories:<front>'] = array(
    'menu_name' => 'menu-menu-navigation',
    'link_path' => '<front>',
    'router_path' => '',
    'link_title' => 'Stories',
    'options' => array(
      'attributes' => array(
        'title' => 'Stories page',
      ),
      'alter' => TRUE,
      'identifier' => 'menu-menu-navigation_stories:<front>',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 1,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-menu-ogp_about:aboutus.
  $menu_links['menu-menu-ogp_about:aboutus'] = array(
    'menu_name' => 'menu-menu-ogp',
    'link_path' => 'aboutus',
    'router_path' => 'aboutus',
    'link_title' => 'About',
    'options' => array(
      'attributes' => array(),
      'item_attributes' => array(
        'id' => '',
        'class' => '',
        'style' => '',
      ),
      'identifier' => 'menu-menu-ogp_about:aboutus',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -46,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-menu-ogp_countries:countries.
  $menu_links['menu-menu-ogp_countries:countries'] = array(
    'menu_name' => 'menu-menu-ogp',
    'link_path' => 'countries',
    'router_path' => 'countries',
    'link_title' => 'Countries',
    'options' => array(
      'attributes' => array(),
      'item_attributes' => array(
        'id' => '',
        'class' => '',
        'style' => '',
      ),
      'identifier' => 'menu-menu-ogp_countries:countries',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-menu-ogp_resources:node/5720.
  $menu_links['menu-menu-ogp_resources:node/5720'] = array(
    'menu_name' => 'menu-menu-ogp',
    'link_path' => 'node/5720',
    'router_path' => 'node/%',
    'link_title' => 'Resources',
    'options' => array(
      'attributes' => array(),
      'item_attributes' => array(
        'id' => '',
        'class' => '',
        'style' => '',
      ),
      'identifier' => 'menu-menu-ogp_resources:node/5720',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -47,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-menu-ogp_stories:stories.
  $menu_links['menu-menu-ogp_stories:stories'] = array(
    'menu_name' => 'menu-menu-ogp',
    'link_path' => 'stories',
    'router_path' => 'stories',
    'link_title' => 'Stories',
    'options' => array(
      'attributes' => array(),
      'item_attributes' => array(
        'id' => '',
        'class' => '',
        'style' => '',
      ),
      'identifier' => 'menu-menu-ogp_stories:stories',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-menu-ogp_themes:themes.
  $menu_links['menu-menu-ogp_themes:themes'] = array(
    'menu_name' => 'menu-menu-ogp',
    'link_path' => 'themes',
    'router_path' => 'themes',
    'link_title' => 'Themes',
    'options' => array(
      'attributes' => array(),
      'item_attributes' => array(
        'id' => '',
        'class' => '',
        'style' => '',
      ),
      'identifier' => 'menu-menu-ogp_themes:themes',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-menu-ogp_userogp:userogp.
  $menu_links['menu-menu-ogp_userogp:userogp'] = array(
    'menu_name' => 'menu-menu-ogp',
    'link_path' => 'userogp',
    'router_path' => 'userogp',
    'link_title' => 'UserOGP',
    'options' => array(
      'identifier' => 'menu-menu-ogp_userogp:userogp',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -45,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-menuogp_stories:<front>.
  $menu_links['menu-menuogp_stories:<front>'] = array(
    'menu_name' => 'menu-menuogp',
    'link_path' => '<front>',
    'router_path' => '',
    'link_title' => 'Stories',
    'options' => array(
      'attributes' => array(
        'title' => 'Stories page',
      ),
      'alter' => TRUE,
      'identifier' => 'menu-menuogp_stories:<front>',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: menu-og-5486_test:<front>.
  $menu_links['menu-og-5486_test:<front>'] = array(
    'menu_name' => 'menu-og-5486',
    'link_path' => '<front>',
    'router_path' => '',
    'link_title' => 'Test',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'menu-og-5486_test:<front>',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );
  // Exported menu link: navigation_about:aboutus.
  $menu_links['navigation_about:aboutus'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'aboutus',
    'router_path' => 'aboutus',
    'link_title' => 'About',
    'options' => array(
      'identifier' => 'navigation_about:aboutus',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: navigation_action-plan-cycles:node/add/ogp-action-plan-cycles.
  $menu_links['navigation_action-plan-cycles:node/add/ogp-action-plan-cycles'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/ogp-action-plan-cycles',
    'router_path' => 'node/add/ogp-action-plan-cycles',
    'link_title' => 'Action Plan Cycles',
    'options' => array(
      'identifier' => 'navigation_action-plan-cycles:node/add/ogp-action-plan-cycles',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_action-plan:node/add/action-plan.
  $menu_links['navigation_action-plan:node/add/action-plan'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/action-plan',
    'router_path' => 'node/add/action-plan',
    'link_title' => 'Action plan',
    'options' => array(
      'identifier' => 'navigation_action-plan:node/add/action-plan',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_add-block:block/add.
  $menu_links['navigation_add-block:block/add'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'block/add',
    'router_path' => 'block/add',
    'link_title' => 'Add Block',
    'options' => array(
      'identifier' => 'navigation_add-block:block/add',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: navigation_add-content:node/add.
  $menu_links['navigation_add-content:node/add'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add',
    'router_path' => 'node/add',
    'link_title' => 'Add content',
    'options' => array(
      'identifier' => 'navigation_add-content:node/add',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: navigation_add-file:file/add.
  $menu_links['navigation_add-file:file/add'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'file/add',
    'router_path' => 'file/add',
    'link_title' => 'Add file',
    'options' => array(
      'identifier' => 'navigation_add-file:file/add',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: navigation_blog-post:node/add/blog-post.
  $menu_links['navigation_blog-post:node/add/blog-post'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/blog-post',
    'router_path' => 'node/add/blog-post',
    'link_title' => 'Blog Post',
    'options' => array(
      'attributes' => array(
        'title' => 'A blog post that will be reviewed by the blog editor.',
      ),
      'identifier' => 'navigation_blog-post:node/add/blog-post',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_blogroll:block/add/blogroll.
  $menu_links['navigation_blogroll:block/add/blogroll'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'block/add/blogroll',
    'router_path' => 'block/add/blogroll',
    'link_title' => 'Blogroll',
    'options' => array(
      'identifier' => 'navigation_blogroll:block/add/blogroll',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-block:block/add',
  );
  // Exported menu link: navigation_case-study:node/add/case-study.
  $menu_links['navigation_case-study:node/add/case-study'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/case-study',
    'router_path' => 'node/add/case-study',
    'link_title' => 'Case Study',
    'options' => array(
      'attributes' => array(
        'title' => 'Case Studies belong to countries.',
      ),
      'identifier' => 'navigation_case-study:node/add/case-study',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_civic-society-organization:node/add/civic-society-org.
  $menu_links['navigation_civic-society-organization:node/add/civic-society-org'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/civic-society-org',
    'router_path' => 'node/add/civic-society-org',
    'link_title' => 'Civic Society Organization',
    'options' => array(
      'identifier' => 'navigation_civic-society-organization:node/add/civic-society-org',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_commitment:node/add/commitment.
  $menu_links['navigation_commitment:node/add/commitment'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/commitment',
    'router_path' => 'node/add/commitment',
    'link_title' => 'Commitment',
    'options' => array(
      'attributes' => array(
        'title' => 'Commitments belong to countries and fall under their Action Plan.',
      ),
      'identifier' => 'navigation_commitment:node/add/commitment',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_compose-tips:filter/tips.
  $menu_links['navigation_compose-tips:filter/tips'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'filter/tips',
    'router_path' => 'filter/tips',
    'link_title' => 'Compose tips',
    'options' => array(
      'identifier' => 'navigation_compose-tips:filter/tips',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: navigation_country-page:node/add/country-page.
  $menu_links['navigation_country-page:node/add/country-page'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/country-page',
    'router_path' => 'node/add/country-page',
    'link_title' => 'Country Page',
    'options' => array(
      'attributes' => array(
        'title' => 'A country page is a group which can have members.',
      ),
      'identifier' => 'navigation_country-page:node/add/country-page',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_dataset:node/add/dataset.
  $menu_links['navigation_dataset:node/add/dataset'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/dataset',
    'router_path' => 'node/add/dataset',
    'link_title' => 'Dataset',
    'options' => array(
      'attributes' => array(
        'title' => 'Datasets are simply used to group related pieces of data. These can then be found under a single url with a description and licensing information.',
      ),
      'identifier' => 'navigation_dataset:node/add/dataset',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_event:node/add/event.
  $menu_links['navigation_event:node/add/event'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/event',
    'router_path' => 'node/add/event',
    'link_title' => 'Event',
    'options' => array(
      'attributes' => array(
        'title' => 'Events appear in a list.  They can also have RSVPs.',
      ),
      'identifier' => 'navigation_event:node/add/event',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_expert:node/add/expert.
  $menu_links['navigation_expert:node/add/expert'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/expert',
    'router_path' => 'node/add/expert',
    'link_title' => 'Expert',
    'options' => array(
      'identifier' => 'navigation_expert:node/add/expert',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_header-imagetitle:block/add/header-image-title.
  $menu_links['navigation_header-imagetitle:block/add/header-image-title'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'block/add/header-image-title',
    'router_path' => 'block/add/header-image-title',
    'link_title' => 'Header image/title',
    'options' => array(
      'identifier' => 'navigation_header-imagetitle:block/add/header-image-title',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-block:block/add',
  );
  // Exported menu link: navigation_import:import.
  $menu_links['navigation_import:import'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'import',
    'router_path' => 'import',
    'link_title' => 'Import',
    'options' => array(
      'identifier' => 'navigation_import:import',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 1,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: navigation_link:node/add/link.
  $menu_links['navigation_link:node/add/link'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/link',
    'router_path' => 'node/add/link',
    'link_title' => 'Link',
    'options' => array(
      'attributes' => array(
        'title' => 'Links can appear in Activity Streams as well as the Resources section',
      ),
      'identifier' => 'navigation_link:node/add/link',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_meeting-minutes:node/add/minutes.
  $menu_links['navigation_meeting-minutes:node/add/minutes'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/minutes',
    'router_path' => 'node/add/minutes',
    'link_title' => 'Meeting minutes',
    'options' => array(
      'attributes' => array(
        'title' => 'Minutes from OGP meetings.',
      ),
      'identifier' => 'navigation_meeting-minutes:node/add/minutes',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_migrate-extras-media-example:node/add/migrate-extras-media-example.
  $menu_links['navigation_migrate-extras-media-example:node/add/migrate-extras-media-example'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/migrate-extras-media-example',
    'router_path' => 'node/add/migrate-extras-media-example',
    'link_title' => 'Migrate Extras Media Example',
    'options' => array(
      'attributes' => array(
        'title' => 'Content type for testing Migrate Extras support for the Media module.',
      ),
      'identifier' => 'navigation_migrate-extras-media-example:node/add/migrate-extras-media-example',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_my-bookmarks:bookmarks.
  $menu_links['navigation_my-bookmarks:bookmarks'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'bookmarks',
    'router_path' => 'bookmarks',
    'link_title' => 'My bookmarks',
    'options' => array(
      'identifier' => 'navigation_my-bookmarks:bookmarks',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: navigation_news-and-events:node/add/news-and-events.
  $menu_links['navigation_news-and-events:node/add/news-and-events'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/news-and-events',
    'router_path' => 'node/add/news-and-events',
    'link_title' => 'News and Events',
    'options' => array(
      'identifier' => 'navigation_news-and-events:node/add/news-and-events',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_news:node/add/news.
  $menu_links['navigation_news:node/add/news'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/news',
    'router_path' => 'node/add/news',
    'link_title' => 'News',
    'options' => array(
      'attributes' => array(
        'title' => 'Press coverage of OGP',
      ),
      'identifier' => 'navigation_news:node/add/news',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_ogp-slideshow:block/add/slideshow.
  $menu_links['navigation_ogp-slideshow:block/add/slideshow'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'block/add/slideshow',
    'router_path' => 'block/add/slideshow',
    'link_title' => 'OGP Slideshow',
    'options' => array(
      'identifier' => 'navigation_ogp-slideshow:block/add/slideshow',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-block:block/add',
  );
  // Exported menu link: navigation_page-title-list:admin/reports/page-title.
  $menu_links['navigation_page-title-list:admin/reports/page-title'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'admin/reports/page-title',
    'router_path' => 'admin/reports/page-title',
    'link_title' => 'Page Title List',
    'options' => array(
      'attributes' => array(
        'title' => 'List all nodes with their Page Titles',
      ),
      'identifier' => 'navigation_page-title-list:admin/reports/page-title',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: navigation_page:node/add/page.
  $menu_links['navigation_page:node/add/page'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/page',
    'router_path' => 'node/add/page',
    'link_title' => 'Page',
    'options' => array(
      'attributes' => array(
        'title' => 'Creates a basic page with a title and a body.',
      ),
      'identifier' => 'navigation_page:node/add/page',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_priority-links:block/add/priority-links.
  $menu_links['navigation_priority-links:block/add/priority-links'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'block/add/priority-links',
    'router_path' => 'block/add/priority-links',
    'link_title' => 'Priority Links',
    'options' => array(
      'identifier' => 'navigation_priority-links:block/add/priority-links',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-block:block/add',
  );
  // Exported menu link: navigation_progress-report:node/add/irm-report.
  $menu_links['navigation_progress-report:node/add/irm-report'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/irm-report',
    'router_path' => 'node/add/irm-report',
    'link_title' => 'Progress Report',
    'options' => array(
      'attributes' => array(
        'title' => 'IRM Reports belong to countries',
      ),
      'identifier' => 'navigation_progress-report:node/add/irm-report',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_report-comments:node/add/report-comments.
  $menu_links['navigation_report-comments:node/add/report-comments'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/report-comments',
    'router_path' => 'node/add/report-comments',
    'link_title' => 'Report Comments',
    'options' => array(
      'attributes' => array(
        'title' => 'Report Comments belong to IRM Reports',
      ),
      'identifier' => 'navigation_report-comments:node/add/report-comments',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_resource:node/add/resource.
  $menu_links['navigation_resource:node/add/resource'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/resource',
    'router_path' => 'node/add/resource',
    'link_title' => 'Resource',
    'options' => array(
      'attributes' => array(
        'title' => 'Data can be any file or link to a file containing useful data.',
      ),
      'identifier' => 'navigation_resource:node/add/resource',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_resources:resources.
  $menu_links['navigation_resources:resources'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'resources',
    'router_path' => 'resources',
    'link_title' => 'Resources',
    'options' => array(
      'identifier' => 'navigation_resources:resources',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: navigation_room:node/add/room.
  $menu_links['navigation_room:node/add/room'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/room',
    'router_path' => 'node/add/room',
    'link_title' => 'Room',
    'options' => array(
      'attributes' => array(
        'title' => 'Rooms provide a location for each session.',
      ),
      'identifier' => 'navigation_room:node/add/room',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_schedule-item:node/add/schedule-item.
  $menu_links['navigation_schedule-item:node/add/schedule-item'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/schedule-item',
    'router_path' => 'node/add/schedule-item',
    'link_title' => 'Schedule Item',
    'options' => array(
      'attributes' => array(
        'title' => 'Use schedule items for content you wish to have in the schedule but not be part of any session submission workflows. Examples include scheduling lunch or breaks.',
      ),
      'identifier' => 'navigation_schedule-item:node/add/schedule-item',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_self-assessment:node/add/self-assessment.
  $menu_links['navigation_self-assessment:node/add/self-assessment'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/self-assessment',
    'router_path' => 'node/add/self-assessment',
    'link_title' => 'Self Assessment',
    'options' => array(
      'attributes' => array(
        'title' => 'Self Assessments belong to countries',
      ),
      'identifier' => 'navigation_self-assessment:node/add/self-assessment',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_session:node/add/session.
  $menu_links['navigation_session:node/add/session'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/session',
    'router_path' => 'node/add/session',
    'link_title' => 'Session',
    'options' => array(
      'attributes' => array(
        'title' => 'Use this content type to propose sessions at the event. Users can vote on proposed sessions and add sessions to their individual session agendas.',
      ),
      'identifier' => 'navigation_session:node/add/session',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_slideshow:block/add/beanslide.
  $menu_links['navigation_slideshow:block/add/beanslide'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'block/add/beanslide',
    'router_path' => 'block/add/beanslide',
    'link_title' => 'Slideshow',
    'options' => array(
      'identifier' => 'navigation_slideshow:block/add/beanslide',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-block:block/add',
  );
  // Exported menu link: navigation_steering-committee:node/add/ogp-steering-committee.
  $menu_links['navigation_steering-committee:node/add/ogp-steering-committee'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/ogp-steering-committee',
    'router_path' => 'node/add/ogp-steering-committee',
    'link_title' => 'Steering Committee',
    'options' => array(
      'identifier' => 'navigation_steering-committee:node/add/ogp-steering-committee',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_story:node/add/story.
  $menu_links['navigation_story:node/add/story'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/story',
    'router_path' => 'node/add/story',
    'link_title' => 'Story',
    'options' => array(
      'attributes' => array(
        'title' => 'Stories are written by your staff and appear in the News section.  Similar to a blog post.',
      ),
      'identifier' => 'navigation_story:node/add/story',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_tags:tagclouds.
  $menu_links['navigation_tags:tagclouds'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'tagclouds',
    'router_path' => 'tagclouds',
    'link_title' => 'Tags',
    'options' => array(
      'identifier' => 'navigation_tags:tagclouds',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: navigation_themes:themes.
  $menu_links['navigation_themes:themes'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'themes',
    'router_path' => 'themes',
    'link_title' => 'Themes',
    'options' => array(
      'identifier' => 'navigation_themes:themes',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: navigation_time-slot:node/add/time-slot.
  $menu_links['navigation_time-slot:node/add/time-slot'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/time-slot',
    'router_path' => 'node/add/time-slot',
    'link_title' => 'Time slot',
    'options' => array(
      'attributes' => array(
        'title' => 'Use time slots to define when sessions will occur.',
      ),
      'identifier' => 'navigation_time-slot:node/add/time-slot',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_tool-links:block/add/tool-links.
  $menu_links['navigation_tool-links:block/add/tool-links'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'block/add/tool-links',
    'router_path' => 'block/add/tool-links',
    'link_title' => 'Tool Links',
    'options' => array(
      'identifier' => 'navigation_tool-links:block/add/tool-links',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-block:block/add',
  );
  // Exported menu link: navigation_toolkit:node/add/toolkit.
  $menu_links['navigation_toolkit:node/add/toolkit'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/toolkit',
    'router_path' => 'node/add/toolkit',
    'link_title' => 'Toolkit',
    'options' => array(
      'identifier' => 'navigation_toolkit:node/add/toolkit',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_topic-tools:tools.
  $menu_links['navigation_topic-tools:tools'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'tools',
    'router_path' => 'tools',
    'link_title' => 'Topic Tools',
    'options' => array(
      'identifier' => 'navigation_topic-tools:tools',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: navigation_translate-strings:locale.
  $menu_links['navigation_translate-strings:locale'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'locale',
    'router_path' => 'locale',
    'link_title' => 'Translate strings',
    'options' => array(
      'identifier' => 'navigation_translate-strings:locale',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
  );
  // Exported menu link: navigation_tweet:node/add/tweet.
  $menu_links['navigation_tweet:node/add/tweet'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/tweet',
    'router_path' => 'node/add/tweet',
    'link_title' => 'Tweet',
    'options' => array(
      'attributes' => array(
        'title' => 'A tweet imported from a cron twitter search looking for #OGP or #OpenGovPartnership',
      ),
      'identifier' => 'navigation_tweet:node/add/tweet',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_webform:node/add/webform.
  $menu_links['navigation_webform:node/add/webform'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/webform',
    'router_path' => 'node/add/webform',
    'link_title' => 'Webform',
    'options' => array(
      'attributes' => array(
        'title' => 'Create a new form or questionnaire accessible to users. Submission results and statistics are recorded and accessible to privileged users.',
      ),
      'identifier' => 'navigation_webform:node/add/webform',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_webinar:node/add/webinar.
  $menu_links['navigation_webinar:node/add/webinar'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/webinar',
    'router_path' => 'node/add/webinar',
    'link_title' => 'Webinar',
    'options' => array(
      'attributes' => array(
        'title' => 'Webinars appear in the Issues section',
      ),
      'identifier' => 'navigation_webinar:node/add/webinar',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_working-group-page:node/add/working-group-page.
  $menu_links['navigation_working-group-page:node/add/working-group-page'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/working-group-page',
    'router_path' => 'node/add/working-group-page',
    'link_title' => 'Working Group Page',
    'options' => array(
      'attributes' => array(
        'title' => 'Just like a regular "page" node, but belongs to a particular working group.',
      ),
      'identifier' => 'navigation_working-group-page:node/add/working-group-page',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: navigation_working-group:node/add/working-group.
  $menu_links['navigation_working-group:node/add/working-group'] = array(
    'menu_name' => 'navigation',
    'link_path' => 'node/add/working-group',
    'router_path' => 'node/add/working-group',
    'link_title' => 'Working Group',
    'options' => array(
      'identifier' => 'navigation_working-group:node/add/working-group',
    ),
    'module' => 'system',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => 0,
    'customized' => 0,
    'language' => 'und',
    'menu_links_customized' => 0,
    'parent_identifier' => 'navigation_add-content:node/add',
  );
  // Exported menu link: user-menu_user-account:user.
  $menu_links['user-menu_user-account:user'] = array(
    'menu_name' => 'user-menu',
    'link_path' => 'user',
    'router_path' => 'user',
    'link_title' => 'User account',
    'options' => array(
      'alter' => TRUE,
      'identifier' => 'user-menu_user-account:user',
    ),
    'module' => 'system',
    'hidden' => 1,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -10,
    'customized' => 1,
    'language' => 'und',
    'menu_links_customized' => 1,
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('About');
  t('About the Blog');
  t('About the IEP');
  t('About the IRM');
  t('Access to Information Working Group');
  t('Account settings');
  t('Acerca de...');
  t('Acerca del IRM');
  t('Action Plan Cycles');
  t('Action plan');
  t('Actions');
  t('Add Block');
  t('Add content');
  t('Add file');
  t('Administer map');
  t('Administer resources');
  t('Administration');
  t('Administration menu');
  t('Advanced help');
  t('Agenda');
  t('Agenda Items (America) (menu position rule)');
  t('Agenda Items (Asia) (menu position rule)');
  t('Agenda Items (Europe) (menu position rule)');
  t('Americas Regional Meeting');
  t('Annual Reports');
  t('Appearance');
  t('Articles of Governance');
  t('Artículos de Gobierno');
  t('Asia Pacific Regional Meeting');
  t('Available updates');
  t('Awards');
  t('BeautyTips');
  t('Block types');
  t('Blocks');
  t('Blog');
  t('Blog Authors');
  t('Blog Disclaimer');
  t('Blog Post');
  t('Blogroll');
  t('CAPTCHA');
  t('CKEditor Link');
  t('CSO Day');
  t('Calendars and Deadlines');
  t('Case Study');
  t('Chosen');
  t('Civic Society Organization');
  t('Civil Society');
  t('Civil Society Engagement');
  t('Clean URLs');
  t('Comments');
  t('Commitment');
  t('Compact Forms');
  t('Compose tips');
  t('Conference');
  t('Configuration');
  t('Contact');
  t('Contact & FAQ');
  t('Contact OGP');
  t('Content');
  t('Content authoring');
  t('Content types');
  t('Context');
  t('Contáctanos');
  t('Countries');
  t('Country Page');
  t('Cron');
  t('Cronograma y fechas límite');
  t('Cumbre Londres 2013');
  t('Cómo Funciona OGP');
  t('Cómo incorporarse');
  t('DKAN');
  t('DKAN Dataset Forms');
  t('Dashboard');
  t('Dataset');
  t('Datasets');
  t('Date API');
  t('Date Popup');
  t('Date and time');
  t('Declaración de Gobierno Abierto');
  t('Develop a National Action Plan');
  t('Development');
  t('Diff');
  t('Disclaimer');
  t('Display Suite');
  t('Disqus');
  t('Easy Breadcrumb');
  t('El Boletín');
  t('Elegibilidad');
  t('Eligibility Criteria');
  t('Empty Page callbacks');
  t('Entity Fields Builder settings');
  t('Entity translation');
  t('Envíanos información sobre la Alianza');
  t('Europe Regional Meeting');
  t('Event');
  t('Events ES (menu position rule)');
  t('Expert');
  t('External links');
  t('FAQs');
  t('Favicons');
  t('Features');
  t('Feeds log');
  t('Festival');
  t('Field collections');
  t('Field dependencies');
  t('Field list');
  t('File settings');
  t('File system');
  t('File types');
  t('Files');
  t('Finances and Budget');
  t('Fiscal Openness Working Group');
  t('FitVids');
  t('Flags');
  t('FlexSlider');
  t('Gazette');
  t('Get Involved');
  t('Google Analytics');
  t('Governance & Information Disclosure');
  t('Government');
  t('Groups');
  t('Grupos de Trabajo Temáticos');
  t('Header image/title');
  t('Help');
  t('Home');
  t('Honeypot configuration');
  t('How To Join');
  t('IP address blocking');
  t('IRM Staff');
  t('Image styles');
  t('Image toolkit');
  t('Import');
  t('Information Disclosure');
  t('Ink Filepicker Settings');
  t('Involúcrate');
  t('Janrain Engage');
  t('Languages');
  t('Link');
  t('Link iframe blacklist');
  t('Log In');
  t('Log Out');
  t('Log in');
  t('Log out');
  t('Logging and errors');
  t('Logistics');
  t('London Summit 2013');
  t('Main menu');
  t('Maintenance mode');
  t('Management');
  t('Media');
  t('Media browser settings');
  t('Meeting minutes');
  t('Menu Navigation');
  t('Menu OGP');
  t('Menu block');
  t('Menu position rules');
  t('Menu trail by path');
  t('Menus');
  t('Metatag');
  t('Migrate');
  t('Migrate Extras Media Example');
  t('Misión y Objetivos');
  t('Mission and Strategy');
  t('Module filter');
  t('Modules');
  t('Multilateral Organizations');
  t('Multilingual settings');
  t('Multistep');
  t('My Workbench');
  t('My bookmarks');
  t('Navigation');
  t('News');
  t('News and Events');
  t('Newsletter');
  t('OAuth');
  t('OG context');
  t('OG field settings');
  t('OG membership types');
  t('OG menu settings');
  t('OG permissions overview');
  t('OG roles overview');
  t('OG settings');
  t('OGP Ambassadors');
  t('OGP Explorer');
  t('OGP IRM Database (1&2)');
  t('OGP Logo & Branding Guidelines');
  t('OGP Research Agenda');
  t('OGP Slideshow');
  t('OGP Support Unit Staff');
  t('OGP Working Groups');
  t('Open Government Declaration');
  t('Organic groups');
  t('Organic groups menus');
  t('Page');
  t('Page Title List');
  t('Page titles');
  t('Pantheon Apache Solr');
  t('Past Events');
  t('Países');
  t('People');
  t('Performance');
  t('Preguntas Frecuentes');
  t('Press Releases');
  t('Presupuesto');
  t('Priority Links');
  t('Privacy Policy');
  t('Progress Report');
  t('Quicktabs');
  t('Qué Hacemos');
  t('RDF publishing settings');
  t('RSS publishing');
  t('Recent IRM Reports');
  t('Recent log messages');
  t('Recline Configuration');
  t('Recursos');
  t('Regional and language');
  t('Regional settings');
  t('Registration');
  t('Report Comments');
  t('Reports');
  t('Requirements');
  t('Requisitos');
  t('Resource');
  t('Resources');
  t('Response Policy');
  t('Room');
  t('Rules');
  t('Schedule Item');
  t('Search API');
  t('Search and metadata');
  t('Search settings');
  t('Self Assessment');
  t('Self-Assessment Process');
  t('Session');
  t('ShareThis');
  t('Shortcuts');
  t('Site information');
  t('Slideshow');
  t('Sories');
  t('Speakers');
  t('Status report');
  t('Steering Committee');
  t('Stories');
  t('Story');
  t('String overrides');
  t('Strongarm');
  t('Structure');
  t('Submit a Resource');
  t('Subnational Government Pilot Program');
  t('Superfish');
  t('System');
  t('TagClouds configuration');
  t('Tags');
  t('Taxonomy');
  t('Taxonomy Manager');
  t('Terms of Use');
  t('Test');
  t('Text formats');
  t('Themes');
  t('Time slot');
  t('Title settings');
  t('Tool Links');
  t('Toolkit');
  t('Tools');
  t('Top \'access denied\' errors');
  t('Top \'page not found\' errors');
  t('Top search phrases');
  t('Topic Tools');
  t('Trabaja con nosotros');
  t('Translate interface');
  t('Translate strings');
  t('Translation sets');
  t('Transparencia');
  t('Tweet');
  t('Tweet Embed');
  t('Twitter');
  t('URL aliases');
  t('URL redirects');
  t('Unidad de Apoyo de OGP');
  t('Universally unique identifiers');
  t('Use the OpenGov Guide');
  t('User account');
  t('User interface');
  t('User menu');
  t('UserOGP');
  t('Video');
  t('Video.js');
  t('Views');
  t('Views panes');
  t('Views plugins');
  t('Web services');
  t('Webform');
  t('Webform settings');
  t('Webinar');
  t('Webinars');
  t('What We Do');
  t('Work With Us');
  t('Workbench');
  t('Workbench Email');
  t('Workbench Moderation');
  t('Workflow');
  t('Working Group');
  t('Working Group Page');
  t('Wysiwyg profiles');
  t('jQuery update');
  t('menu_ogp');
  t('oEmbed');

  return $menu_links;
}
