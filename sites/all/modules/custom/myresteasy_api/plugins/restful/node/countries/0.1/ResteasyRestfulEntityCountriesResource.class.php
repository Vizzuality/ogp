<?php

/**
 * @file
 * Contains ResteasyRestfulEntityArtistsResource__0_1.
 */


/**
 * Implements RestfulEntityBaseNode class for the "artist" content type.
 */
class ResteasyRestfulEntityCountriesResource extends RestfulEntityBaseNode {

  /**
   * Overrides RestfulEntityBaseNode::publicFieldsInfo().
   */
  public function publicFieldsInfo() {
    $public_fields = parent::publicFieldsInfo();

    $public_fields['countryName'] = array(
      'property' => 'field_country',
    );

    return $public_fields;
  }
}
