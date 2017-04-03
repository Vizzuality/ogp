<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\page_category;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\page_category;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class PageCategory__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\page_category
 *
 * @Resource(
 *   name = "page_category:1.0",
 *   resource = "page_category",
 *   label = "PageCategory",
 *   description = "Export the pages categories with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "taxonomy_term",
 *     "bundles": {
 *       "page_category"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class PageCategory__1_0 extends ResourceNode{
  /**
   * {@inheritdoc}
   */

  protected function publicFields() {
    $public_fields = parent::publicFields();
    return $public_fields;
  }
}
