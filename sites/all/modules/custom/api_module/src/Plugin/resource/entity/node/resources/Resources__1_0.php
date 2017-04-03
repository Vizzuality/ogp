<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\resources;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\resources;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Resources__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\resources
 *
 * @Resource(
 *   name = "resources:1.0",
 *   resource = "resources",
 *   label = "Resources",
 *   description = "Export the resources_info with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "resource_information"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class Resources__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['sub_group'] = array(
      'property' => 'field_sub_group'
    );

    $public_fields['group_resource'] = array(
      'property' => 'field_group_resource_info'
    );

    $public_fields['body'] = array(
      'property' => 'body'
    );

    $public_fields['resource_links'] = array(
      'property' => 'field_related_content'
    );

    $public_fields['post_date'] = array(
      'property' => 'created'
    );

    $public_fields['post_highlighted'] = array(
      'property' => 'field_highlighted'
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
