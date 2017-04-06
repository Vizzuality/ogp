<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\resources_file;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\resources_file;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class ResourcesFile__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\resources_file
 *
 * @Resource(
 *   name = "resources_file:1.0",
 *   resource = "resources_file",
 *   label = "ResourcesFile",
 *   description = "Export the resources_file with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "resource"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class ResourcesFile__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    return $public_fields;
  }

  public function getAlias($value) {
    return drupal_get_path_alias('node/' . $value);
  }
}
