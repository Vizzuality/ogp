<?php
/**
 * @file
 * ogp_input_formats.features.filter.inc
 */

/**
 * Implements hook_filter_default_formats().
 */
function ogp_input_formats_filter_default_formats() {
  $formats = array();

  // Exported format: Rich Text.
  $formats['filtered_html'] = array(
    'format' => 'filtered_html',
    'name' => 'Rich Text',
    'cache' => 1,
    'status' => 1,
    'weight' => -10,
    'filters' => array(
      'wysiwyg' => array(
        'weight' => -50,
        'status' => 1,
        'settings' => array(
          'valid_elements' => '@[class|style],
a[!href|target<_blank|title],
div[align<center?justify?left?right],
p[align<center?justify?left?right],
img[*],
table[width|cellpadding|cellspacing|border], tr[align|valign], td[align|valign|width], tbody, th[align|valign|width], thead, tfoot, colgroup, col, caption,
br,span,em,strong,cite,code,blockquote,ul,ol,li,dl,dt,dd,h2,h3,h4,h5,',
          'allow_comments' => 0,
          'nofollow_policy' => 'whitelist',
          'nofollow_domains' => array(
            0 => 'ogp.home.local',
            2 => 'opengovpartnership.org',
          ),
          'style_color' => array(
            'color' => 'color',
            'background' => 'background',
            'background-color' => 'background-color',
            'background-image' => 'background-image',
            'background-repeat' => 'background-repeat',
            'background-attachment' => 'background-attachment',
            'background-position' => 'background-position',
          ),
          'style_font' => array(
            'font-style' => 'font-style',
            'font-variant' => 'font-variant',
            'font-weight' => 'font-weight',
            'font' => 0,
            'font-family' => 0,
            'font-size' => 0,
            'font-size-adjust' => 0,
            'font-stretch' => 0,
          ),
          'style_text' => array(
            'text-align' => 'text-align',
            'text-decoration' => 0,
            'text-indent' => 0,
            'text-transform' => 0,
            'letter-spacing' => 0,
            'word-spacing' => 0,
            'white-space' => 0,
            'direction' => 0,
            'unicode-bidi' => 0,
          ),
          'style_box' => array(
            'margin' => 'margin',
            'margin-top' => 'margin-top',
            'margin-right' => 'margin-right',
            'margin-bottom' => 'margin-bottom',
            'margin-left' => 'margin-left',
            'padding' => 'padding',
            'padding-top' => 'padding-top',
            'padding-right' => 'padding-right',
            'padding-bottom' => 'padding-bottom',
            'padding-left' => 'padding-left',
          ),
          'style_border-1' => array(
            'border' => 'border',
            'border-top' => 'border-top',
            'border-right' => 'border-right',
            'border-bottom' => 'border-bottom',
            'border-left' => 'border-left',
            'border-width' => 'border-width',
            'border-top-width' => 'border-top-width',
            'border-right-width' => 'border-right-width',
            'border-bottom-width' => 'border-bottom-width',
            'border-left-width' => 'border-left-width',
          ),
          'style_border-2' => array(
            'border-color' => 'border-color',
            'border-top-color' => 'border-top-color',
            'border-right-color' => 'border-right-color',
            'border-bottom-color' => 'border-bottom-color',
            'border-left-color' => 'border-left-color',
            'border-style' => 'border-style',
            'border-top-style' => 'border-top-style',
            'border-right-style' => 'border-right-style',
            'border-bottom-style' => 'border-bottom-style',
            'border-left-style' => 'border-left-style',
          ),
          'style_dimension' => array(
            'height' => 'height',
            'line-height' => 'line-height',
            'width' => 'width',
            'max-height' => 0,
            'max-width' => 0,
            'min-height' => 0,
            'min-width' => 0,
          ),
          'style_positioning' => array(
            'bottom' => 0,
            'clip' => 0,
            'left' => 0,
            'overflow' => 0,
            'right' => 0,
            'top' => 0,
            'vertical-align' => 0,
            'z-index' => 0,
          ),
          'style_layout' => array(
            'clear' => 'clear',
            'float' => 'float',
            'position' => 'position',
            'visibility' => 'visibility',
            'display' => 0,
          ),
          'style_list' => array(
            'list-style' => 'list-style',
            'list-style-image' => 'list-style-image',
            'list-style-position' => 'list-style-position',
            'list-style-type' => 'list-style-type',
          ),
          'style_table' => array(
            'border-collapse' => 'border-collapse',
            'border-spacing' => 'border-spacing',
            'caption-side' => 'caption-side',
            'empty-cells' => 'empty-cells',
            'table-layout' => 'table-layout',
          ),
          'style_user' => array(
            'cursor' => 0,
            'outline' => 0,
            'outline-width' => 0,
            'outline-style' => 0,
            'outline-color' => 0,
            'zoom' => 0,
          ),
          'rule_valid_classes' => array(
            0 => 'link-button',
          ),
          'rule_valid_ids' => array(),
          'rule_style_urls' => array(),
        ),
      ),
      'media_filter' => array(
        'weight' => -49,
        'status' => 1,
        'settings' => array(),
      ),
      'image_resize_filter' => array(
        'weight' => -48,
        'status' => 1,
        'settings' => array(
          'link' => 1,
          'link_class' => '',
          'link_rel' => '',
          'image_locations' => array(
            'local' => 'local',
            'remote' => 0,
          ),
        ),
      ),
      'filter_url' => array(
        'weight' => -44,
        'status' => 1,
        'settings' => array(
          'filter_url_length' => 72,
        ),
      ),
    ),
  );

  // Exported format: Unfiltered Rich Text.
  $formats['full_html'] = array(
    'format' => 'full_html',
    'name' => 'Unfiltered Rich Text',
    'cache' => 0,
    'status' => 1,
    'weight' => -8,
    'filters' => array(
      'oembed' => array(
        'weight' => -50,
        'status' => 1,
        'settings' => array(
          'options' => '',
          'view_mode' => 'full',
          'autoembed' => 1,
        ),
      ),
      'media_filter' => array(
        'weight' => -49,
        'status' => 1,
        'settings' => array(),
      ),
      'filter_url' => array(
        'weight' => -46,
        'status' => 1,
        'settings' => array(
          'filter_url_length' => 72,
        ),
      ),
    ),
  );

  // Exported format: Plain text.
  $formats['plain_text'] = array(
    'format' => 'plain_text',
    'name' => 'Plain text',
    'cache' => 1,
    'status' => 1,
    'weight' => -5,
    'filters' => array(
      'filter_html_escape' => array(
        'weight' => 0,
        'status' => 1,
        'settings' => array(),
      ),
      'filter_url' => array(
        'weight' => 1,
        'status' => 1,
        'settings' => array(
          'filter_url_length' => 72,
        ),
      ),
      'filter_autop' => array(
        'weight' => 2,
        'status' => 1,
        'settings' => array(),
      ),
    ),
  );

  return $formats;
}
