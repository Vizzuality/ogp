<?php
/**
 * @file
 * Process theme data.
 */

/**
 * Theme function for file type icons.
 */
function at_ogp_file_link($variables) {
 $file = $variables['file'];
  //$icon_directory = $variables['icon_directory'];
  $url = file_create_url($file->uri);
  //$icon = theme('file_icon', array('file' => $file, 'icon_directory' => $icon_directory));
  $options = array(
    'attributes' => array(
       'type' => $file->filemime . '; length=' . $file->filesize,
     ),
  );
  if (empty($file->description)) {
    $link_text = $file->filename;
  } else {
    $link_text = $file->description;
    $options['attributes']['title'] = check_plain($file->filename);
  }
  return '<span class="file">' . l($link_text, $url, $options) . '</span>';
}

function at_ogp_file_entity_download_link($variables) {
  $file = $variables['file'];
  $icon_directory = $variables['icon_directory'];

  $uri = file_entity_download_uri($file);
  //$icon = theme('file_icon', array('file' => $file, 'icon_directory' => $icon_directory));

  // Set options as per anchor format described at
  // http://microformats.org/wiki/file-format-examples
  $uri['options']['attributes']['type'] = $file->filemime . '; length=' . $file->filesize;

  // Provide the default link text
  if (!isset($variables['text'])) {
    $variables['text'] = t('Download [file:name]');
  }

  // Peform unsanitized token replacement if $uri['options']['html'] is empty
  // since then l() will escape the link text.
  $variables['text'] = token_replace($variables['text'], array('file' => $file), array('clear' => TRUE, 'sanitize' => empty($uri['options']['html'])));

  $output = '<span class="file">' . l($variables['text'], $uri['path'], $uri['options']);
  // $output .= ' ' . '<span class="file-size">(' . format_size($file->filesize) . ')</span>';
  $output .= '</span>';

  return $output;
}

function at_ogp_preprocess_page(&$vars) {
  if (isset($vars['node']->type)) {
    $node = $vars['node'];
    if ($node->type == 'country_page') {
      $vars['title'] = t('');
    }
    if ($node->type == 'blog_post') {
      $vars['title'] = t('Blog');
    }

    // Fix untranslated nodes template for Europe Regional Meeting and Asia Pacific Regional Meeting.
    if ($GLOBALS['language']->language == 'es') {
      $page_tpl_nids = array(3742, 3743, 3744, 3745, 3746, 3747, 3734, 3735, 3736, 3737, 3738, 3755);
      if (array_search($vars['node']->nid, $page_tpl_nids) !== FALSE) {
        $vars['theme_hook_suggestion'] = 'page';
      }
    }
    //$vars['theme_hook_suggestions'][] = 'page__'. $vars['node']->type;
  }
  if (drupal_get_path_alias() == 'IRM-explorer') {
    //$vars['theme_hook_suggestion'] = 'page__irm';
  }
  $path = drupal_get_path_alias($_GET['q']);
  $alias = explode('/', $path);
  if (isset($alias[1]) && isset($vars['node']) && $vars['node']->type != 'event' && ($alias[1] == 'london-summit-2013' || $alias[1] == 'cumbre-londres-2013' || $alias[1] == 'asia-pacific-regional-meeting' || $alias[1] == 'europe-regional-meeting' || $alias[1] == 'americas-regional-meeting')) {
    $vars['theme_hook_suggestion'] = 'page';
  }
  // Add user's posts
  if (arg(0) == 'user' and arg(1) and !arg(2)) {
    $user_blog_posts = views_embed_view('bloggers_posts');
    if (!empty($user_blog_posts)) {
      $vars['page']['content']['system_main']['userposts'] = array(
        '#markup' => '<div class="user-blog-posts"><h3>' . t('Blog posts') . '</h3>' . $user_blog_posts . '</div>',
        '#weight' => 40,
      );
    }
  }

  // IRM Explorer Pages
  $irm_explorer_paths = array(
    'IRM-explorer',
    'IRM-explorer/longer',
    'IRM-explorer/shorter',
  );
  if (in_array(drupal_get_path_alias(), $irm_explorer_paths)) {
    $vars['theme_hook_suggestion'] = 'page__irm';
    //$vars['page']['footer']['#access'] = FALSE;
    //unset($vars['page']['footer']);
    //$vars['page']['content']['#access'] = FALSE;
    $vars['page']['content']['system_main']['#access'] = FALSE;
    //dpm($vars);
    $vars['show_messages'] = FALSE;
    drupal_add_js('sites/all/libraries/irm_explorer/libraries/jquery/v1ptSomething/jquery-1.11.1.js', array(
      'type' => 'file',
      'scope' => 'footer',
      'group' => JS_LIBRARY,
      'weight' => -3,
    ));
    drupal_add_js('sites/all/libraries/irm_explorer/libraries/jquery_csv/jquery.csv-0.71.js', array(
      'type' => 'file',
      'scope' => 'footer',
      'group' => JS_LIBRARY,
      'weight' => -2,
    ));
    drupal_add_js('sites/all/libraries/irm_explorer/libraries/FileSaver.js-master/FileSaver.js', array(
      'type' => 'file',
      'scope' => 'footer',
      'group' => JS_LIBRARY,
      'weight' => -1,
    ));
    drupal_add_css('sites/all/libraries/irm_explorer/irm_explorer.css');
    drupal_add_css('sites/all/libraries/irm_explorer/style_fixes.css');
    drupal_add_js('sites/all/libraries/irm_explorer/style_fixes.js');
    $ver = substr(drupal_get_path_alias(), 13, 7) == 'shorter' ? 'shorter' : 'longer';
    drupal_add_js('sites/all/libraries/irm_explorer/irm_explorer_' . $ver . '.js', array(
      'type' => 'file',
      'scope' => 'footer',
      'group' => JS_LIBRARY,
      'weight' => -1,
    ));
  }

  // IRM Explorer Landing Page
  if (drupal_get_path_alias() == 'explorer/landing') {
    $vars['theme_hook_suggestion'] = 'page__irm_landing';
  }
}

function at_ogp_preprocess_node(&$vars) {
  if ($vars['display_submitted']) {
    $account = user_load($vars['uid']);
    $authors = array(l((empty($account->field_full_name) ? $account->name : $account->field_full_name[LANGUAGE_NONE][0]['value']), 'user/' . $account->uid));
    if (!empty($vars['field_authors']) && !empty($vars['field_authors'][LANGUAGE_NONE])) {
      foreach($vars['field_authors'][LANGUAGE_NONE] as $author) {
        $authors[] = $author['value'];
      }
    }
    $credit = t('By') . ' ';
    $author_last = array_pop($authors);
    if (empty($authors)) {
      $credit .= $author_last;
    }
    else {
      $credit .= implode(', ', $authors) . ' ' . t('and') . ' ' . $author_last;
    }
    $vars['submitted'] = $credit . '<br /><span class="submitted-date">' . $vars['date'] . '</span>';
  }

  switch ($vars['type']) {
    case 'country_page':
      if ($vars['view_mode'] == 'action_plan') {
        $vars['page'] = TRUE;
        $vars['country_section'] = t('Action Plans');
      }
      elseif ($vars['view_mode'] == 'full' && !empty($vars['body'])) {
        $vars['country_section'] = t('Introduction');
      }
      break;
  }
}

/**
 * Implements hook_form_FORM_ID_alter().
 *
 * Render language switcher as short two-letter language codes.
 * @todo replace this with JS so that options still appear to be full language name.
 */
function at_ogp_form_lang_dropdown_form_alter(&$form, &$form_state) {
  foreach($form['lang_dropdown_select']['#options'] as $lang_code => $language_name) {
    $form['lang_dropdown_select']['#options'][$lang_code] = strtoupper($lang_code);
  }
}

function at_ogp_preprocess_html(&$variables) {
  // Add external css files.
  $external_css = array(
    '#attached' => array(
      'css' => array(
        '//fonts.googleapis.com/css?family=PT+Sans:400,400italic' => array(
          'type' => 'external'),
        '//fonts.googleapis.com/css?family=Open+Sans:400,300', array(
          'type' => 'external'),
        '//fonts.googleapis.com/css?family=PT+Sans+Narrow', array(
          'type' => 'external'),
      ),
    ),
  );

  switch (drupal_get_http_header("status")) {
    case '404 Not Found':
      $variables['classes_array'][] = 'error-404';
      break;
    case '403 Forbidden':
      $variables['classes_array'][] = 'error-403';
      break;
  }

}

/**
 * Returns HTML for an inactive facet item.
 *
 * @param $variables
 *   An associative array containing the keys 'text', 'path', 'options', and
 *   'count'. See the l() and theme_facetapi_count() functions for information
 *   about these variables.
 *
 * @ingroup themeable
 */
function at_ogp_facetapi_link_inactive($variables) {
  // Builds accessible markup.
  // @see http://drupal.org/node/1316580
  $accessible_vars = array(
    'text' => $variables['text'],
    'active' => FALSE,
  );
  $accessible_markup = theme('facetapi_accessible_markup', $accessible_vars);

  // Sanitizes the link text if necessary.
  $sanitize = empty($variables['options']['html']);
  $variables['text'] = ($sanitize) ? check_plain($variables['text']) : $variables['text'];

  // Adds count to link if one was passed.
  if (isset($variables['count'])) {
    $variables['text'] .= ' ' . theme('facetapi_count', $variables);
  }

  // Resets link text, sets to options to HTML since we already sanitized the
  // link text and are providing additional markup for accessibility.
  $variables['text'] .= $accessible_markup;
  $variables['options']['html'] = TRUE;
  return theme_link($variables);
}

/**
 * Returns HTML for an inactive facet item.
 *
 * @param $variables
 *   An associative array containing the keys 'text', 'path', and 'options'. See
 *   the l() function for information about these variables.
 *
 * @see l()
 *
 * @ingroup themeable
 */
function at_ogp_facetapi_link_active($variables) {

  // Sanitizes the link text if necessary.
  $sanitize = empty($variables['options']['html']);
  $link_text = ($sanitize) ? check_plain($variables['text']) : $variables['text'];

  // Theme function variables fro accessible markup.
  // @see http://drupal.org/node/1316580
  $accessible_vars = array(
    'text' => $variables['text'],
    'active' => TRUE,
  );
  $accessible_markup = theme('facetapi_accessible_markup', $accessible_vars);

  $variables['text'] .= $accessible_markup;
  $variables['options']['html'] = TRUE;
  return theme_link($variables);
}

function at_ogp_preprocess_camp_schedule_grid(&$vars) {
  $vars['header'][0]['data'] = t('Time');
}

/*
 * Implements template_css_alter().
 * Remove theme CSS at IRM page
 */
/*function at_ogp_css_alter(&$items) {
  if (drupal_get_path_alias() == 'IRM-explorer') {
    foreach ($items as $item => $value) {
      if (substr($item, 35, 11) == 'responsive.') {
        unset($items[$item]);
      }
    }
    dpm($items);
  }
}*/