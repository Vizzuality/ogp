<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\group_resources;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\group_resources;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class GroupResources__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\group_resources
 *
 * @Resource(
 *   name = "group_resources:1.0",
 *   resource = "group_resources",
 *   label = "Group Resources",
 *   description = "Export the group_resources with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "taxonomy_term",
 *     "bundles": {
 *       "resource_groups"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class GroupResources__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['alias'] = array(
      'property' => 'tid',
      'process_callbacks' => array(
        array($this, 'getAlias')
      )
    );

    return $public_fields;
  }

  public function getAlias($value) {
    return drupal_get_path_alias('taxonomy/term/' . $value);
  }
}
