<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\commitments;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\commitments;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Commitments__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\commitments
 *
 * @Resource(
 *   name = "commitments:1.0",
 *   resource = "commitments",
 *   label = "Commitments",
 *   description = "Export the commitments with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "commitment"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class Commitments__1_0 extends ResourceNode{
  /**
   * {@inheritdoc}
   */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['description'] = array(
      'property' => 'body'
    );

    $public_fields['countryId'] = array(
      'property' => 'og_group_ref'
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
