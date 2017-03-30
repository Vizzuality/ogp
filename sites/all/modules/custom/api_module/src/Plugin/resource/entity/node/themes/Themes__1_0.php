<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\themes;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\themes;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Themes__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\themes
 *
 * @Resource(
 *   name = "themes:1.0",
 *   resource = "themes",
 *   label = "Themes",
 *   description = "Export the themes with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "taxonomy_term",
 *     "bundles": {
 *       "topics"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class Themes__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['id'] = array(
      'property' => 'tid',
    );

    $public_fields['name'] = array(
      'property' => 'name',
    );

    $public_fields['description'] = array(
      'property' => 'description',
    );

    $public_fields['group'] = array(
      'property' => 'field_group',
    );

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
