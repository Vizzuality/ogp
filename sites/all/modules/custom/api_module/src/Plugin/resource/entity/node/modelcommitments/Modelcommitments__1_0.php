<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\modelcommitments;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\modelcommitments;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Modelcommitments__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\modelcommitments
 *
 * @Resource(
 *   name = "modelcommitments:1.0",
 *   resource = "modelcommitments",
 *   label = "Model commitments",
 *   description = "Export the model commitments with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "model_commitments"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class Modelcommitments__1_0 extends ResourceNode{
  /**
   * {@inheritdoc}
   */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['theme'] = array(
      'property' => 'field_theme_model',
    );

    // $public_fields['country'] = array(
    //   'property' => 'field_country_model',
    //   'resource' => array(
    //     'name' => 'countries',
    //     'majorVersion' => '1',
    //     'minorVersion' => '0'
    //   )
    // );

    $public_fields['log'] = array(
      'property' => 'log'
    );

    $public_fields['node'] = array(
      'property' => 'nid'
    );

    $public_fields['body'] = array(
      'property' => 'body'
    );

    $public_fields['justification'] = array(
      'property' => 'field_justification_model'
    );

    $public_fields['standardsguidance'] = array(
      'property' => 'field_standards_title'
    );

    $public_fields['linkstandardsguidance'] = array(
      'property' => 'field_standards_link'
    );

    $public_fields['strength'] = array(
      'property' => 'field_strength_model',
      'resource' => array(
        'name' => 'strength',
        'majorVersion' => '1',
        'minorVersion' => '0'
      )
    );

    $public_fields['alias'] = array(
      'property' => 'nid',
      'process_callbacks' => array(
        array($this, 'getAlias')
      )
    );

    $public_fields['country'] = array(
      'property' => 'field_topic_country',
      'resource' => array(
        'name' => 'countries',
        'majorVersion' => '1',
        'minorVersion' => '0'
      )
    );

    return $public_fields;
  }
  public function getAlias($value) {
    return drupal_get_path_alias('node/' . $value);
  }
}
