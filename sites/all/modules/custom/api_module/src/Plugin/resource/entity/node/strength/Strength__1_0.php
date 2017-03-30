<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\strength;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\strength;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Strength__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\strength
 *
 * @Resource(
 *   name = "strength:1.0",
 *   resource = "strength",
 *   label = "Strength",
 *   description = "Export the strength with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "taxonomy_term",
 *     "bundles": {
 *       "strength"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class Strength__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();
    return $public_fields;
  }

}
