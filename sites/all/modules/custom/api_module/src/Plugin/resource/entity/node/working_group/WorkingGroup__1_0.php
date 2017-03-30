<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\working_group;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\working_group;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class WorkingGroup__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\working_group
 *
 * @Resource(
 *   name = "working_group:1.0",
 *   resource = "working_group",
 *   label = "WorkingGroup",
 *   description = "Export the working groups with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "range" = 5,
 *     "bundles": {
 *       "working_group"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class WorkingGroup__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['name'] = array(
    );

    $public_fields['body'] = array(
      'property' => 'body',
    );

    $public_fields['date'] = array(
      'property' => 'created',
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
