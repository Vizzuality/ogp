<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\working_group_page;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\working_group_page;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class WorkingGroupPage__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\working_group_page
 *
 * @Resource(
 *   name = "working_group_page:1.0",
 *   resource = "working_group_page",
 *   label = "WorkingGroupPage",
 *   description = "Export the working_group_page with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "working_group_page"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class WorkingGroupPage__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['body'] = array(
      'property' => 'body',
    );

    $public_fields['page_documents'] = array(
      'property' => 'field_page_documents',
    );

    $public_fields['show'] = array(
      'property' => 'field_wgp_in_menu',
    );

    $public_fields['working_group'] = array(
      'property' => 'field_working_group_parent',
    );


    return $public_fields;
  }
  public function getAlias($value) {
    return drupal_get_path_alias('node/' . $value);
  }
}
