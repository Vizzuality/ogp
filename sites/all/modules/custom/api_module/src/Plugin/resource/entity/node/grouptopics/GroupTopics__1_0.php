<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\grouptopics;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\grouptopics;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class GroupTopics__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\grouptopics
 *
 * @Resource(
 *   name = "grouptopics:1.0",
 *   resource = "grouptopics",
 *   label = "Group Topics 2",
 *   description = "Export the grouptopics with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "taxonomy_term",
 *     "bundles": {
 *       "group_topics"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class GroupTopics__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['topics'] = array(
    );

    return $public_fields;
  }
}
