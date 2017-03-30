<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\irm_commitments;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\irm_commitments;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class IrmCommitments__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\irm_commitments
 *
 * @Resource(
 *   name = "irm_commitments:1.0",
 *   resource = "irm_commitments",
 *   label = "IrmCommitments",
 *   description = "Export the irm_commitments with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "irm_commitments"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class IrmCommitments__1_0 extends ResourceNode{
  /**
  * {@inheritdoc}
  */

  protected function publicFields() {
    $public_fields = parent::publicFields();


    $public_fields['theme'] = array(
      'property' => 'field_theme_irm',
    );

    $public_fields['country'] = array(
      'property' => 'field_country_irm',
    );

    $public_fields['body'] = array(
      'property' => 'body'
    );

    $public_fields['start_date'] = array(
      'property' => 'field_start_date_irm'
    );

    $public_fields['end_date'] = array(
      'property' => 'field_end_date_irm'
    );

    $public_fields['specifity'] = array(
      'property' => 'field_specificity'
    );

    $public_fields['relevant_ogp'] = array(
      'property' => 'field_relevant_to_the_advancemen'
    );

    $public_fields['year_submission'] = array(
      'property' => 'field_year_submission'
    );

    $public_fields['country'] = array(
      'property' => 'field_country_irm',
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
