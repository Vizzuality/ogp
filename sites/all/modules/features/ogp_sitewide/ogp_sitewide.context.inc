<?php
/**
 * @file
 * ogp_sitewide.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function ogp_sitewide_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'front';
  $context->description = 'Front page';
  $context->tag = 'page';
  $context->conditions = array(
    'path' => array(
      'values' => array(
        '<front>' => '<front>',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'bean-front-slideshow' => array(
          'module' => 'bean',
          'delta' => 'front-slideshow',
          'region' => 'secondary_content',
          'weight' => '-10',
        ),
        'bean-home-page-mexico-summit-promotio' => array(
          'module' => 'bean',
          'delta' => 'home-page-mexico-summit-promotio',
          'region' => 'content_top',
          'weight' => '-10',
        ),
        'block-7' => array(
          'module' => 'block',
          'delta' => '7',
          'region' => 'content_top',
          'weight' => '-9',
        ),
        'ogp_map-country_apc' => array(
          'module' => 'ogp_map',
          'delta' => 'country_apc',
          'region' => 'content_top',
          'weight' => '-8',
        ),
        'block-14' => array(
          'module' => 'block',
          'delta' => '14',
          'region' => 'content',
          'weight' => '-10',
        ),
        'block-20' => array(
          'module' => 'block',
          'delta' => '20',
          'region' => 'content',
          'weight' => '-9',
        ),
        'views-events-events_block_1' => array(
          'module' => 'views',
          'delta' => 'events-events_block_1',
          'region' => 'content',
          'weight' => '-7',
        ),
        'views-ogp_opengov_tweets-block_1' => array(
          'module' => 'views',
          'delta' => 'ogp_opengov_tweets-block_1',
          'region' => 'content',
          'weight' => '-6',
        ),
        'fb_likebox-0' => array(
          'module' => 'fb_likebox',
          'delta' => '0',
          'region' => 'content',
          'weight' => '-5',
        ),
        'ogp_activity_stream-ogp_rss' => array(
          'module' => 'ogp_activity_stream',
          'delta' => 'ogp_rss',
          'region' => 'content',
          'weight' => '-4',
        ),
        'block-1' => array(
          'module' => 'block',
          'delta' => '1',
          'region' => 'tertiary_content',
          'weight' => '-9',
        ),
        'block-2' => array(
          'module' => 'block',
          'delta' => '2',
          'region' => 'tertiary_content',
          'weight' => '-8',
        ),
        'block-3' => array(
          'module' => 'block',
          'delta' => '3',
          'region' => 'tertiary_content',
          'weight' => '-7',
        ),
        'block-4' => array(
          'module' => 'block',
          'delta' => '4',
          'region' => 'tertiary_content',
          'weight' => '-6',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('Front page');
  t('page');
  $export['front'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'sitewide';
  $context->description = '';
  $context->tag = 'sitewide';
  $context->conditions = array(
    'sitewide' => array(
      'values' => array(
        1 => 1,
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'superfish-1' => array(
          'module' => 'superfish',
          'delta' => '1',
          'region' => 'menu_bar',
          'weight' => '-10',
        ),
        'system-user-menu' => array(
          'module' => 'system',
          'delta' => 'user-menu',
          'region' => 'menu_bar',
          'weight' => '-9',
        ),
        'views-4a0df027e83066d7a567a3cd9c95f8a8' => array(
          'module' => 'views',
          'delta' => '4a0df027e83066d7a567a3cd9c95f8a8',
          'region' => 'menu_bar',
          'weight' => '-8',
        ),
        'block-6' => array(
          'module' => 'block',
          'delta' => '6',
          'region' => 'footer',
          'weight' => '-6',
        ),
        'block-10' => array(
          'module' => 'block',
          'delta' => '10',
          'region' => 'footer',
          'weight' => '-5',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('sitewide');
  $export['sitewide'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'sitewide_en';
  $context->description = 'English-only sitewide context';
  $context->tag = 'sitewide';
  $context->conditions = array(
    'language' => array(
      'values' => array(
        'en' => 'en',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'menu_block-4' => array(
          'module' => 'menu_block',
          'delta' => '4',
          'region' => 'footer',
          'weight' => '-10',
        ),
        'menu_block-3' => array(
          'module' => 'menu_block',
          'delta' => '3',
          'region' => 'footer',
          'weight' => '-9',
        ),
        'menu-menu-footer-menu' => array(
          'module' => 'menu',
          'delta' => 'menu-footer-menu',
          'region' => 'footer',
          'weight' => '-8',
        ),
        'menu_block-5' => array(
          'module' => 'menu_block',
          'delta' => '5',
          'region' => 'footer',
          'weight' => '-7',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('English-only sitewide context');
  t('sitewide');
  $export['sitewide_en'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'sitewide_es';
  $context->description = 'English-only sitewide context';
  $context->tag = 'sitewide';
  $context->conditions = array(
    'language' => array(
      'values' => array(
        'es' => 'es',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'menu_block-6' => array(
          'module' => 'menu_block',
          'delta' => '6',
          'region' => 'footer',
          'weight' => '-10',
        ),
        'menu_block-7' => array(
          'module' => 'menu_block',
          'delta' => '7',
          'region' => 'footer',
          'weight' => '-9',
        ),
        'menu_block-8' => array(
          'module' => 'menu_block',
          'delta' => '8',
          'region' => 'footer',
          'weight' => '-8',
        ),
        'menu-menu-footer-menu' => array(
          'module' => 'menu',
          'delta' => 'menu-footer-menu',
          'region' => 'footer',
          'weight' => '-7',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('English-only sitewide context');
  t('sitewide');
  $export['sitewide_es'] = $context;

  return $export;
}
