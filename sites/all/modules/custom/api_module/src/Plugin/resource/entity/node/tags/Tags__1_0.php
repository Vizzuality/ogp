<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\tags;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\tags;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Tags__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\tags
 *
 * @Resource(
 *   name = "tags:1.0",
 *   resource = "tags",
 *   label = "Tags",
 *   description = "Export the tags with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "taxonomy_term",
 *     "bundles": {
 *       "tags"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class Tags__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();
    return $public_fields;
  }

}
