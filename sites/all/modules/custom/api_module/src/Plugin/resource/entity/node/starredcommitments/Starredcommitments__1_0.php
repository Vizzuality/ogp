<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\starredcommitments;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\starredcommitments;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Starredcommitments__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\starredcommitments
 *
 * @Resource(
 *   name = "starredcommitments:1.0",
 *   resource = "starredcommitments",
 *   label = "Starred commitments",
 *   description = "Export the starred commitments with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "bundles": {
 *       "starred_commitments"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class Starredcommitments__1_0 extends ResourceNode{
  /**
   * {@inheritdoc}
   */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['theme'] = array(
      'property' => 'field_theme_starred',
    );

    $public_fields['country'] = array(
      'property' => 'field_country_starred',
      'resource' => array(
        'name' => 'countries',
        'majorVersion' => '1',
        'minorVersion' => '0'
      )
    );

    $public_fields['node'] = array(
      'property' => 'nid'
    );

    $public_fields['countryId'] = array(
      'property' => 'field_country_starred'
    );

    $public_fields['body'] = array(
      'property' => 'body'
    );

    $public_fields['alias'] = array(
      'property' => 'nid',
      'process_callbacks' => array(
        array($this, 'getAlias')
      )
    );

    $public_fields['comm_no'] = array(
      'property' => 'field_comm_no'
    );

    $public_fields['lead_institution'] = array(
      'property' => 'field_lead_institution'
    );

    $public_fields['support_institution'] = array(
      'property' => 'field_support_institution_curren'
    );

    $public_fields['start_date'] = array(
      'property' => 'field_start_date_current'
    );

    $public_fields['end_date'] = array(
      'property' => 'field_end_date_current'
    );

    $public_fields['level_potential_impact'] = array(
      'property' => 'field_potential_impact_list'
    );

    $public_fields['level_completion'] = array(
      'property' => 'field_completion_list'
    );

    $public_fields['year_irm_report'] = array(
      'property' => 'field_year_irm_report_published'
    );

    $public_fields['year_irm_term'] = array(
      'property' => 'field_year_irm_end_of_term_publi'
    );

    $public_fields['level_completion_end'] = array(
      'property' => 'field_level_of_completion_at_end'
    );

    $public_fields['did_open_list'] = array(
      'property' => 'field_did_it_open_list'
    );

    return $public_fields;
  }
  public function getAlias($value) {
    return drupal_get_path_alias('node/' . $value);
  }
}
