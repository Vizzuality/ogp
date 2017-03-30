<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\current_commitment;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\current_commitment;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class CurrentCommitment__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\current_commitment
 *
 * @Resource(
 *   name = "current_commitment:1.0",
 *   resource = "current_commitment",
 *   label = "Current Commitments",
 *   description = "Export the current_commitment with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "current_commitment"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class CurrentCommitment__1_0 extends ResourceNode{
  /**
   * {@inheritdoc}
   */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['country'] = array(
      'property' => 'field_country_current',
    );

    $public_fields['body'] = array(
      'property' => 'body'
    );

    $public_fields['year_action_plan'] = array(
      'property' => 'field_year_action_plan_current'
    );

    $public_fields['theme_id'] = array(
      'property' => 'field_theme_current',
    );

    $public_fields['start_date'] = array(
      'property' => 'field_start_date_current'
    );

    $public_fields['end_date'] = array(
      'property' => 'field_end_date_current'
    );

    $public_fields['support_institution'] = array(
      'property' => 'field_support_institution_curren'
    );

    $public_fields['lead_institution'] = array(
      'property' => 'field_lead_institution'
    );

    $public_fields['country'] = array(
      'property' => 'field_country_current',
      'resource' => array(
        'name' => 'countries',
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

    return $public_fields;
  }
  public function getAlias($value) {
    return drupal_get_path_alias('node/' . $value);
  }
}
