<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\experts;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\experts;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Experts__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\experts
 *
 * @Resource(
 *   name = "experts:1.0",
 *   resource = "experts",
 *   label = "Experts",
 *   description = "Export the experts with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "expert"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class Experts__1_0 extends ResourceNode{
  /**
   * {@inheritdoc}
   */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['location'] = array(

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
