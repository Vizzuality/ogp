<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\events;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\events;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Events__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\events
 *
 * @Resource(
 *   name = "events:1.0",
 *   resource = "events",
 *   label = "Events",
 *   description = "Export the events with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "event"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class Events__1_0 extends ResourceNode{
  /**
   * {@inheritdoc}
   */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['location'] = array(
      'property' => 'field_location',
    );

    $public_fields['country'] = array(
      'property' => 'field_country_event',
    );

    $public_fields['date'] = array(
      'property' => 'field_date',
    );

    $public_fields['image'] = array(
      'property' => 'field_media',
      'process_callbacks' => array(
        array($this, 'getStyleUrl')
      )
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
  public function getStyleUrl($image) {
    $image_path = file_create_url($image[0]['uri']);
    return $image_path;
  }
}
