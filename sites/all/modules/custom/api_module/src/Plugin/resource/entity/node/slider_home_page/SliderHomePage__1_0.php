<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\slider_home_page;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\slider_home_page;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class SliderHomePage__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\slider_home_page
 *
 * @Resource(
 *   name = "slider_home_page:1.0",
 *   resource = "slider_home_page",
 *   label = "SliderHomePage__1_0",
 *   description = "Export the slider_home_page with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "slider_home_page"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class SliderHomePage__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['text_link'] = array(
      'property' => 'field_text_link'
    );

    $public_fields['show'] = array(
      'property' => 'field_show_on_slider'
    );

    $public_fields['image'] = array(
      'property' => 'field_image_slide',
      'process_callbacks' => array(
        array($this, 'getStyleUrl')
      )
    );

    $public_fields['alias'] = array(
      'property' => 'field_content_slide',
      'process_callbacks' => array(
        array($this, 'getAlias')
      )
    );

    $public_fields['information_stories'] = array(
      'property' => 'field_content_slide',
      'resource' => array(
        'name' => 'stories',
        'majorVersion' => '1',
        'minorVersion' => '0',
      )
    );

    $public_fields['information_news'] = array(
      'property' => 'field_content_slide',
      'resource' => array(
        'name' => 'news',
        'majorVersion' => '1',
        'minorVersion' => '0',
      )
    );

    $public_fields['information_current'] = array(
      'property' => 'field_content_slide',
      'resource' => array(
        'name' => 'current_commitment',
        'majorVersion' => '1',
        'minorVersion' => '0',
      )
    );

    $public_fields['information_event'] = array(
      'property' => 'field_content_slide',
      'resource' => array(
        'name' => 'events',
        'majorVersion' => '1',
        'minorVersion' => '0',
      )
    );

    $public_fields['information_irm'] = array(
      'property' => 'field_content_slide',
      'resource' => array(
        'name' => 'irm_commitments',
        'majorVersion' => '1',
        'minorVersion' => '0',
      )
    );

    $public_fields['information_model'] = array(
      'property' => 'field_content_slide',
      'resource' => array(
        'name' => 'modelcommitments',
        'majorVersion' => '1',
        'minorVersion' => '0',
      )
    );

    $public_fields['information_page'] = array(
      'property' => 'field_content_slide',
      'resource' => array(
        'name' => 'page',
        'majorVersion' => '1',
        'minorVersion' => '0',
      )
    );

    $public_fields['information_starred'] = array(
      'property' => 'field_content_slide',
      'resource' => array(
        'name' => 'starredcommitments',
        'majorVersion' => '1',
        'minorVersion' => '0',
      )
    );

    $public_fields['information_working'] = array(
      'property' => 'field_content_slide',
      'resource' => array(
        'name' => 'working_group',
        'majorVersion' => '1',
        'minorVersion' => '0',
      )
    );

    $public_fields['information_working_page'] = array(
      'property' => 'field_content_slide',
      'resource' => array(
        'name' => 'working_group_page',
        'majorVersion' => '1',
        'minorVersion' => '0',
      )
    );


    return $public_fields;
  }

  public function getAlias($value) {
    return drupal_get_path_alias('node/' . $value);
  }

  public function getStyleUrl($image) {
    $image_path = file_create_url($image['uri']);
    return $image_path;
  }
}
