<?php

/**
 * @file
 * Describe hooks provided by the vimeo_link_formatter module.
 */

 /**
 * Alter the embed code.
 *
 * Use this hook to alter the embed code.
 *
 * @param $embed
 *   The embed configuration.
 * @param $item
 *   The link field item.
 * @param $display
 *   The display settings to use, as found in the 'display' entry of instance definitions.
 *
 */
function hook_vimeo_link_formatter_embed_alter(&$embed, $item, $display) {

  //this example adds the fullscreen option
  $embed['attributes'] .= ' webkitallowfullscreen mozallowfullscreen allowfullscreen';

}
