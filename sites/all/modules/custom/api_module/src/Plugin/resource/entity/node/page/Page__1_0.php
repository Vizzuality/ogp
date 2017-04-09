<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\page;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\page;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Page__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\page
 *
 * @Resource(
 *   name = "page:1.0",
 *   resource = "page",
 *   label = "Page",
 *   description = "Export the pages with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "page"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class Page__1_0 extends ResourceNode{
  /**
   * {@inheritdoc}
   */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['body'] = array(
      'property' => 'body'
    );

    $public_fields['date'] = array(
      'property' => 'created'
    );

    $public_fields['author'] = array(
      'property' => 'log'
    );

    $public_fields['alias'] = array(
      'property' => 'nid',
      'process_callbacks' => array(
        array($this, 'getAlias')
      )
    );

    $public_fields['page_category'] = array(
      'property' => 'field_page_category',
      'resource' => array(
        'name' => 'page_category',
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
