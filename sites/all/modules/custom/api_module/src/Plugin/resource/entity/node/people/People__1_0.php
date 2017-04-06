<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\people;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\people;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class People__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\people
 *
 * @Resource(
 *   name = "people:1.0",
 *   resource = "people",
 *   label = "People",
 *   description = "Export the people with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "people"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class People__1_0 extends ResourceNode{
  /**
   * {@inheritdoc}
   */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['country'] = array(
      'property' => 'field_countries_involved',
    );

    $public_fields['country_poc'] = array(
      'property' => 'field_countries_poc',
    );

    $public_fields['body'] = array(
      'property' => 'body',
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
}
