<?php
/**
 * @file
 * ogp_sitewide.features.fe_block_boxes.inc
 */

/**
 * Implements hook_default_fe_block_boxes().
 */
function ogp_sitewide_default_fe_block_boxes() {
  $export = array();

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Copyright Text';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'copyright_text';
  $fe_block_boxes->body = '<p>© 2015&nbsp;Open Government Partnership</p>
';

  $export['copyright_text'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Buttons linking to CSC website';
  $fe_block_boxes->format = 'full_html';
  $fe_block_boxes->machine_name = 'csc_links';
  $fe_block_boxes->body = '<div class="csc-links-block"><div class="csc-links-inner"><a href="https://dgroups.org/hivos/ogp/login"><span>Join the OGP Civil Society Mailing List</span></a><a href="/node/3840"><span>Subscribe to the OGP Newsletter</span></a><a href="/blog"><span>Visit the OGP Blog</span></a></div></div>';

  $export['csc_links'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Empowered by NuCivic';
  $fe_block_boxes->format = 'full_html';
  $fe_block_boxes->machine_name = 'empowered';
  $fe_block_boxes->body = '<p>Empowered by <a class="nuams-link" href="http://www.nucivic.com" rel="nofollow">NuCivic</a></p>';

  $export['empowered'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page accountability block';
  $fe_block_boxes->format = 'plain_text';
  $fe_block_boxes->machine_name = 'front_accountability';
  $fe_block_boxes->body = 'There are rules, regulations and mechanisms in place that call upon government actors to justify their actions, act upon criticisms or requirements made of them, and accept responsibility for failure to perform with respect to laws or commitments.';

  $export['front_accountability'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page innovation block';
  $fe_block_boxes->format = 'plain_text';
  $fe_block_boxes->machine_name = 'front_innovation';
  $fe_block_boxes->body = 'Governments embrace the importance of providing citizens with open access to technology, the role of new technologies in driving innovation, and the importance of increasing the capacity of citizens to use technology.';

  $export['front_innovation'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page participation block';
  $fe_block_boxes->format = 'plain_text';
  $fe_block_boxes->machine_name = 'front_participation';
  $fe_block_boxes->body = 'Governments seek to mobilize citizens to engage in public debate, provide input, and make contributions that lead to more responsive, innovative and effective governance.';

  $export['front_participation'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page transparency block';
  $fe_block_boxes->format = 'plain_text';
  $fe_block_boxes->machine_name = 'front_transparency';
  $fe_block_boxes->body = 'Information on government activities and decisions is open, comprehensive, timely freely available to the public and meets basic open data standards (e.g. raw data, machine readability).';

  $export['front_transparency'] = $fe_block_boxes;

  $fe_block_boxes = new stdClass();
  $fe_block_boxes->info = 'Front page video block';
  $fe_block_boxes->format = 'filtered_html';
  $fe_block_boxes->machine_name = 'front_video';
  $fe_block_boxes->body = '<p>[[{"fid":"5643","view_mode":"full","fields":{"format":"full"},"type":"media","attributes":{"class":"file media-element file-full"},"link_text":"#OGP15 Global Summit Live Stream - Palacio de Minería - Day 2"}]]</p>
';

  $export['front_video'] = $fe_block_boxes;

  return $export;
}
