<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\letter;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\letter;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Letter__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\letter
 *
 * @Resource(
 *   name = "letter:1.0",
 *   resource = "letter",
 *   label = "Letter",
 *   description = "Export the letter with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "letter"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class Letter__1_0 extends ResourceNode{
  /**
   * {@inheritdoc}
   */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['country'] = array(
      'property' => 'field_country_letter',
    );

    $public_fields['link'] = array(
      'property' => 'field_link_letter'
    );

    $public_fields['year'] = array(
      'property' => 'field_year_published',
      'process_callbacks' => array(
        array($this, 'formatDate')
      )
    );

    $public_fields['description'] = array(
      'property' => 'body'
    );

    $public_fields['alias'] = array(
      'property' => 'nid',
      'process_callbacks' => array(
        array($this, 'getAlias')
      )
    );

    return $public_fields;
  }
  public function getAlias($value) {
    return drupal_get_path_alias('node/' . $value);
  }

  public function formatDate($value) {
    return format_date($value, 'custom', 'Y');
  }
}
