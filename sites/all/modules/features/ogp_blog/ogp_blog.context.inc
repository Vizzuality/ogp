<?php
/**
 * @file
 * ogp_blog.context.inc
 */

/**
 * Implements hook_context_default_contexts().
 */
function ogp_blog_context_default_contexts() {
  $export = array();

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'blog';
  $context->description = '';
  $context->tag = 'blog';
  $context->conditions = array(
    'menu' => array(
      'values' => array(
        'blog' => 'blog',
      ),
    ),
    'views' => array(
      'values' => array(
        'ogp_blog:page' => 'ogp_blog:page',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'menu_block-ogp_page-1' => array(
          'module' => 'menu_block',
          'delta' => 'ogp_page-1',
          'region' => 'blog_footer_left',
          'weight' => '-10',
        ),
        'bean-network-blogrollw' => array(
          'module' => 'bean',
          'delta' => 'network-blogrollw',
          'region' => 'blog_footer_left',
          'weight' => '-9',
        ),
        'views-blog_categories-block' => array(
          'module' => 'views',
          'delta' => 'blog_categories-block',
          'region' => 'blog_footer_mid',
          'weight' => '-10',
        ),
        'tagclouds-2' => array(
          'module' => 'tagclouds',
          'delta' => '2',
          'region' => 'blog_footer_mid',
          'weight' => '-9',
        ),
        'views-ogp_opengov_tweets-block_1' => array(
          'module' => 'views',
          'delta' => 'ogp_opengov_tweets-block_1',
          'region' => 'blog_footer_right',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('blog');
  $export['blog'] = $context;

  $context = new stdClass();
  $context->disabled = FALSE; /* Edit this to true to make a default context disabled initially */
  $context->api_version = 3;
  $context->name = 'blog_node';
  $context->description = '';
  $context->tag = 'blog';
  $context->conditions = array(
    'node' => array(
      'values' => array(
        'blog_post' => 'blog_post',
      ),
      'options' => array(
        'node_form' => '0',
      ),
    ),
  );
  $context->reactions = array(
    'block' => array(
      'blocks' => array(
        'menu_block-ogp_blog-1' => array(
          'module' => 'menu_block',
          'delta' => 'ogp_blog-1',
          'region' => 'blog_footer_left',
          'weight' => '-10',
        ),
        'bean-network-blogrollw' => array(
          'module' => 'bean',
          'delta' => 'network-blogrollw',
          'region' => 'blog_footer_left',
          'weight' => '-9',
        ),
        'views-blog_categories-block' => array(
          'module' => 'views',
          'delta' => 'blog_categories-block',
          'region' => 'blog_footer_mid',
          'weight' => '-10',
        ),
        'tagclouds-2' => array(
          'module' => 'tagclouds',
          'delta' => '2',
          'region' => 'blog_footer_mid',
          'weight' => '-9',
        ),
        'views-ogp_opengov_tweets-block_1' => array(
          'module' => 'views',
          'delta' => 'ogp_opengov_tweets-block_1',
          'region' => 'blog_footer_right',
          'weight' => '-10',
        ),
      ),
    ),
  );
  $context->condition_mode = 0;

  // Translatables
  // Included for use with string extractors like potx.
  t('blog');
  $export['blog_node'] = $context;

  return $export;
}
