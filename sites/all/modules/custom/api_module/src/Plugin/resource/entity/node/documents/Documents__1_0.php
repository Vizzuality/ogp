<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\documents;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\documents;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Documents__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\documents
 *
 * @Resource(
 *   name = "documents:1.0",
 *   resource = "documents",
 *   label = "Documents",
 *   description = "Export the resource with all authentication providers.",
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

class Documents__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['body'] = array(
      'property' => 'body'
    );

    $public_fields['country'] = array(
      'property' => 'field_country_resource',
      'resource' => array(
        'name' => 'countries',
        'majorVersion' => '1',
        'minorVersion' => '0',
      )
    );

    $public_fields['type'] = array(
      'property' => 'field_ogp_document_type'
    );

    $public_fields['link'] = array(
      'property' => 'field_link'
    );

    $public_fields['date'] = array(
      'property' => 'field_date'
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
