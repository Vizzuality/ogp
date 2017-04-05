<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\news;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\news;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class News__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\news
 *
 * @Resource(
 *   name = "news:1.0",
 *   resource = "news",
 *   label = "News",
 *   description = "Export the news with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
*     "range" = 4,
 *     "bundles": {
 *       "news"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class News__1_0 extends ResourceNode{
  /**
   * {@inheritdoc}
   */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['date'] = array(
      'property' => 'field_publication_date'
    );

    $public_fields['image'] = array(
      'property' => 'field_media'
    );

    $public_fields['alias'] = array(
      'property' => 'nid',
      'process_callbacks' => array(
        array($this, 'getAlias')
      )
    );

    $public_fields['name'] = array(
    );

    return $public_fields;
  }

  public function getAlias($value) {
    return drupal_get_path_alias('node/' . $value);
  }
}
