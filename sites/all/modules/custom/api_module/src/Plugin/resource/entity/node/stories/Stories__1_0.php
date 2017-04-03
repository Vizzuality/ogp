<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\stories;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\stories;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Stories__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\stories
 *
 * @Resource(
 *   name = "stories:1.0",
 *   resource = "stories",
 *   label = "Stories",
 *   description = "Export the stories with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "range" = 6,
 *     "bundles": {
 *       "blog_post"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class Stories__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['title'] = array(
      'property' => 'title',
    );

    $public_fields['topic'] = array(
      'property' => 'field_topic',
      'resource' => array(
        'name' => 'themes',
        'majorVersion' => '1',
        'minorVersion' => '0',
      )
    );

    $public_fields['theme'] = array(
      'property' => 'field_topic',
    );

    $public_fields['category'] = array(
      'property' => 'field_category',
    );

    $public_fields['country'] = array(
      'property' => 'field_country_ref',
      'resource' => array(
        'name' => 'countries',
        'majorVersion' => '1',
        'minorVersion' => '0'
      )
    );

    $public_fields['type'] = array(
      'property' => 'field_category',
    );

    $public_fields['content'] = array(
      'property' => 'body',
    );

    $public_fields['author'] = array(
      'property' => 'field_blog_authors',
      'resource' => array(
        'name' => 'users',
        'majorVersion' => '1',
        'minorVersion' => '0',
      )
    );

    // $public_fields['image'] = array(
    //   'property' => 'field_blog_post_header_image',
    //   'process_callbacks' => array(
    //     array($this, 'getStyleUrl')
    //   )
    // );

    $public_fields['created'] = array(
      'property' => 'created'
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
    $image_path = file_create_url($image['uri']);
    return $image_path;
  }
}
