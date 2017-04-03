<?php

/**
  * @file
  * Contains \Drupal\api_module\Plugin\resource\entity\node\countries;
*/

namespace Drupal\api_module\Plugin\resource\entity\node\countries;

use Drupal\restful\Plugin\resource\ResourceNode;

/**
 * Class Countries__1_0
 * @package Drupal\api_module\Plugin\resource\entity\node\countries
 *
 * @Resource(
 *   name = "countries:1.0",
 *   resource = "countries",
 *   label = "Countries",
 *   description = "Export the countries with all authentication providers.",
 *   authenticationTypes = TRUE,
 *   authenticationOptional = TRUE,
 *   dataProvider = {
 *     "entityType": "node",
 *     "range" = 1000,
 *     "bundles": {
 *       "country_page"
 *     },
 *   },
 *   majorVersion = 1,
 *   minorVersion = 0
 * )
 */

class Countries__1_0 extends ResourceNode{
  /**
   * {@inheritdoc}
   */

  protected function publicFields() {
    $public_fields = parent::publicFields();

    $public_fields['alias'] = array(
      'property' => 'nid',
      'process_callbacks' => array(
        array($this, 'getAlias')
      )
    );

    $public_fields['description'] = array(
      'property' => 'body',
    );

    $public_fields['memberSince'] = array(
      'property' => 'field_member_since',
    );

    $public_fields['name'] = array(
      'property' => 'title',
    );

    $public_fields['current_themes'] = array(
      'property' => 'field_current_themes',
      'process_callbacks' => array(
        array($this, 'getThemeLabel')
      )
    );

    $public_fields['midterm_percentage'] = array(
      'property' => 'field_midterm_completion',
    );

    $public_fields['endofterm_percentage'] = array(
      'property' => 'field_end_of_term_completion',
    );

    $public_fields['current_percentage'] = array(
      'property' => 'field_themes_percentage',
    );

    $public_fields['year_action_plan'] = array(
      'property' => 'field_year_of_action_plan',
    );

    $public_fields['none_impact'] = array(
      'property' => 'field_none_impact',
    );

    $public_fields['minor_impact'] = array(
      'property' => 'field_minor_impact',
    );

    $public_fields['moderate_impact'] = array(
      'property' => 'field_moderate_impact',
    );

    $public_fields['transformative_impact'] = array(
      'property' => 'field_transformative_impact',
    );

    $public_fields['access_information'] = array(
      'property' => 'field_access_information',
    );

    $public_fields['civic_participation'] = array(
      'property' => 'field_civic_participation_count',
    );

    $public_fields['public_accountability'] = array(
      'property' => 'field_public_accountability_co',
    );

    $public_fields['unclear'] = array(
      'property' => 'field_unclear_country',
    );

    $public_fields['midterm_completion'] = array(
      'property' => 'field_midterm_completion',
    );

    $public_fields['end_term_completion'] = array(
      'property' => 'field_end_of_term_completion',
    );

    $public_fields['action_plan_count'] = array(
      'property' => 'nid',
      'process_callbacks' => array(
        array($this, 'getActionPlanCount')
      )
    );

    $public_fields['current_commitments_count'] = array(
      'property' => 'nid',
      'process_callbacks' => array(
        array($this, 'getCurrentCommitmentsCount')
      )
    );

    $public_fields['starred_commitments_count'] = array(
      'property' => 'nid',
      'process_callbacks' => array(
        array($this, 'getStarredCommitmentsCount')
      )
    );

    $public_fields['irm_commitments_count'] = array(
      'property' => 'nid',
      'process_callbacks' => array(
        array($this, 'getIrmCommitmentsCount')
      )
    );

    $public_fields['starred_commitments'] = array(
      'property' => 'nid',
      'process_callbacks' => array(
        array($this, 'getStarredCommitments')
      )
    );

    return $public_fields;
  }

  public function getAlias($value) {
    return drupal_get_path_alias('node/' . $value);
  }

  public function getThemeLabel($value) {
    $labels = [];
    foreach ($value as $tid) {
      $tax = taxonomy_term_load($tid);
      $title = $tax->title;
      array_push($labels, $tax->name);
    }
    return $labels;
  }

  public function getActionPlanCount($country) {
    $sql = "SELECT COUNT(*)
            FROM {field_data_field_country_resource} as country
            INNER JOIN {field_data_field_ogp_document_type} as type
            ON country.entity_id = type.entity_id
            WHERE country.field_country_resource_target_id = '" . $country . "' AND type.field_ogp_document_type_tid = '2703'";
    $result = db_query($sql);
    $count = $result->fetchField();
    return $count;
  }

  public function getCurrentCommitmentsCount($country) {
    $sql = "SELECT COUNT(*)
            FROM {field_data_field_country_current} as current
            WHERE current.field_country_current_target_id = '" . $country . "'";
    $result = db_query($sql);
    $count = $result->fetchField();
    return $count;
  }

  public function getIrmCommitmentsCount($country) {
    $sql = "SELECT COUNT(*)
            FROM {field_data_field_country_irm} as irm
            WHERE irm.field_country_irm_target_id = '" . $country . "'";
    $result = db_query($sql);
    $count = $result->fetchField();
    return $count;
  }

  public function getStarredCommitmentsCount($country) {
    $sql = "SELECT COUNT(*)
            FROM {field_data_field_country_starred} as starred
            WHERE starred.field_country_starred_target_id = '" . $country . "'";
    $result = db_query($sql);
    $count = $result->fetchField();
    return $count;
  }

  public function getStarredCommitments($country) {
    $sql = "SELECT *
            FROM {node} as starred
            INNER JOIN {field_data_field_country_starred} as country
            ON starred.nid = country.entity_id
            WHERE starred.type = 'starred_commitments' AND country.field_country_starred_target_id = '" . $country . "'";
    $result = db_query($sql);
    $items = [];
    foreach ($result as $row) {
      $alias = drupal_get_path_alias('node/' . $row->nid);
      $new_item = array('label' => $row->title, 'alias' => $alias);
      array_push($items, $new_item);
    }
    return $items;
  }
}
