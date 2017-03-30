<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\stories_categories;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\stories_categories;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class StoriesCategories__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\stories_categories
 *
 * @Resource(
 *   name = "stories_categories:1.0",
 *   resource = "stories_categories",
 *   label = "Stories Categories",
 *   description = "Export the stories categories with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "taxonomy_term",
 *     "bundles": {
 *       "blog_category"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class StoriesCategories__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();

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
