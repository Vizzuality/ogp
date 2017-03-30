<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\sub_group_resource;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\sub_group_resource;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class SubGroupResource__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\sub_group_resource
 *
 * @Resource(
 *   name = "sub_group_resource:1.0",
 *   resource = "sub_group_resource",
 *   label = "Sub Group Resource",
 *   description = "Export the sub_group_resource with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "sub_group_resource"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class SubGroupResource__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['alias'] = array(
      'property' => 'nid',
      'process_callbacks' => array(
        array($this, 'getAlias')
      )
    );

    $public_fields['label'] = array(
      'property' => 'field_short_name_sub',
    );

    return $public_fields;
  }

  public function getAlias($value) {
    return drupal_get_path_alias('node/' . $value);
  }
}
