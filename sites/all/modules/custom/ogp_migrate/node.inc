<?php
class OgpNode6Migration extends DrupalNode6Migration {
  public function __construct(array $arguments) {
    parent::__construct($arguments);

    $this->removeFieldMapping('path');
    $this->removeFieldMapping('pathauto');
    $this->addFieldMapping('pathauto')
         ->defaultValue(1);
  }

  public function prepareRow($row) {
    if (parent::prepareRow($row) === FALSE) {
      return FALSE;
    }
    if (!empty($row->body)) {
      $this->fixPaths($row->body);
    }
  }

  public static function fixPaths(&$string) {
    $filespath = variable_get('file_' . file_default_scheme() . '_path', conf_path() . '/files/');
    // Fix image tags and links.
    $pattern = '/src="\/sites\/www\.opengovpartnership\.org\/files\/([^"]+)"/';
    $replace = 'src="/' . $filespath . '/legacy_files/$1"';
    $string = preg_replace($pattern, $replace, $string);
  }
}

/**
 * Country-specific migration logic
 */
class OgpCountryMigration extends OgpNode6Migration {
  public function __construct(array $arguments) {
    // Add any other data we're pulling into the source row, before the parent
    // constructor.
    $this->sourceFields['country'] = 'Country abbreviation';
    $this->sourceFields['member_since'] = 'Joined date extracted from create';

    parent::__construct($arguments);

    $this->highwaterField = array();

    // Title field mapping
    $this->addFieldMapping('title_field', 'title');

    $this->removeFieldMapping('body');
    $this->addFieldMapping('body', 'field_country_introduction');
    $this->removeFieldMapping('body:format');
    $this->addFieldMapping('body:format')
         ->defaultValue('full_html');
    $this->removeFieldMapping('body:language');
    $this->addFieldMapping('body:language')
         ->defaultValue('en');

    $this->removeFieldMapping('language');
    $this->addFieldMapping('language')
         ->defaultValue('en');

    $this->addFieldMapping('field_country', 'country');
    $this->addFieldMapping('group_group')
         ->defaultValue(1);
    $this->addFieldMapping('field_country_status', 'field_country_status');
    $this->addFieldMapping('field_country_status:source_type')
         ->defaultValue('name');
    $this->addFieldMapping('field_country_ogp_website', 'field_country_link');
    $this->addFieldMapping('field_country_ap_pdf', 'field_country_action_plan')
         ->sourceMigration('OgpFile');
    $this->addFieldMapping('field_country_ap_pdf:file_class')
         ->defaultValue('MigrateFileFid');
    $this->addFieldMapping('field_member_since', 'member_since');
  }

  /**
   * Implementation of Migration::prepareRow().
   *
   * Here we pull in additional data from a non-core, non-CCK table.
   *
   * @param $row
   */
  public function prepareRow($row) {
    if (parent::prepareRow($row) === FALSE) {
      return FALSE;
    }

    $country = countries_country_lookup($row->title, 'name');
    if ($country) {
      $row->country = $country->iso2;
    }
    else {
      $this->saveMessage(t('No iso2 country code found for !title',
                         array('!title' => $row->title)));
      return FALSE;
    }

    $statuses = array(
      84 => 'Action Plan Submitted and Endorsed Declaration',
      85 => 'Developing Action Plans',
    );
    $row->field_country_status = $statuses[$row->field_country_status];
    $row->member_since = date("Y-m-d H:m:s", $row->created);
    parent::fixPaths($row->field_country_introduction);
  }

}

/**
 * Commitment migration logic
 */
class OgpCommitmentMigration extends OgpNode6Migration {
  public function __construct(array $arguments) {
    parent::__construct($arguments);

    $this->highwaterField = array();

    // No body in the commitment content type
    $this->removeFieldMapping('body');
    $this->removeFieldMapping('body:format');
    $this->removeFieldMapping('body:language');

    $this->removeFieldMapping('language');
    $this->addFieldMapping('language')
         ->defaultValue('en');

    // Title field mapping
    $this->addFieldMapping('title_field', 'title');

    $this->addFieldMapping('og_group_ref', 'field_country_reference')
         ->sourceMigration('Country');
    $this->addFieldMapping('field_description', 'field_description');
    $this->addFieldMapping('field_description:language')
         ->defaultValue('en');
    $this->addFieldMapping('field_activities', 'field_activities');
    $this->addFieldMapping('field_activities:language')
         ->defaultValue('en');
    $this->addFieldMapping('field_start_date', 'field_commitment_date');
    $this->addFieldMapping('field_end_date', 'field_commitment_date:value2');
    $this->addFieldMapping('field_commitment_status', 'field_status');
    $this->addFieldMapping('field_principle', 'field_challenge')
          ->sourceMigration('Challenge');
    $this->addFieldMapping('field_principle:source_type')
          ->defaultValue('tid');
    $this->addFieldMapping('field_contact_name', 'field_contact_name');
    $this->addFieldMapping('field_contact_email', 'field_contact_email');
    $this->addFieldMapping('field_contact_phone', 'field_contact_phone');
    $this->addFieldMapping('field_contact_title', 'field_contact_position');
    $this->addFieldMapping('field_attachment', 'field_related_files')
         ->sourceMigration('OgpFile');
    $this->addFieldMapping('field_attachment:file_class')
         ->defaultValue('MigrateFileFid');
    $this->addFieldMapping('field_resource_link', 'field_country_link');
    $this->addFieldMapping('field_partner_organizations', 'field_partner_organizations');
    $this->addFieldMapping('field_measurement', 'field_measurement');
    $this->addFieldMapping('field_people_reached', 'field_people_reached');

  }

  /**
   * Implementation of Migration::prepareRow().
   *
   * Here we pull in additional data from a non-core, non-CCK table.
   *
   * @param $row
   */
  public function prepareRow($row) {
    if (parent::prepareRow($row) === FALSE) {
      return FALSE;
    }
    $statuses = array(
      'Not Yet Begun' => 0,
      'In Progress' => 2,
      'Completed' => 1,
    );
    $row->field_status = $statuses[$row->field_status];
  }
}

/**
 * Expert migration logic
 */
class OgpExpertMigration extends OgpNode6Migration {
  public function __construct(array $arguments) {

    parent::__construct($arguments);

    $this->highwaterField = array();

    $this->removeFieldMapping('body:format');
    $this->addFieldMapping('body:format')
         ->defaultValue('full_html');
    $this->removeFieldMapping('body:language');
    $this->addFieldMapping('body:language')
         ->defaultValue('en');

    $this->removeFieldMapping('language');
    $this->addFieldMapping('language')
         ->defaultValue('en');

    $this->addFieldMapping('field_experience', 'field_level_one_experience')
         ->sourceMigration('Experience');
    $this->addFieldMapping('field_experience:source_type')
         ->defaultValue('tid');
    $this->addFieldMapping('field_expert_type', 'field_type_of_supplier');
    $this->addFieldMapping('field_attachment', 'field_supplier_file')
         ->sourceMigration('OgpFile');
    $this->addFieldMapping('field_attachment:file_class')
         ->defaultValue('MigrateFileFid');
    $this->addFieldMapping('field_link', 'field_website_link');
    $this->addFieldMapping('field_link:title')
         ->defaultValue('Website');    
    $this->addFieldMapping('field_region', 7)
         ->sourceMigration('Region');    
    $this->addFieldMapping('field_region:source_type')
         ->defaultValue('tid');
  }

  public function prepareRow($row) {
    if (parent::prepareRow($row) === FALSE) {
      return FALSE;
    }
    if (!empty($row->field_level_two_experience[0])) {
      $row->field_level_one_experience = array_merge($row->field_level_one_experience, $row->field_level_two_experience);
    }
  }

}

class OgpNewsMigration extends OgpNode6Migration {
  public function __construct(array $arguments) {
    parent::__construct($arguments);

    $this->highwaterField = array();

    $this->removeFieldMapping('body:language');
    $this->addFieldMapping('body:language')
         ->defaultValue('en');
    $this->removeFieldMapping('body:format');
    $this->addFieldMapping('body:format')
         ->defaultValue('full_html');

    $this->removeFieldMapping('language');
    $this->addFieldMapping('language')
         ->defaultValue('en');

    $this->addFieldMapping('field_link', 'field_link');
    $this->addFieldMapping('field_link:title', 'field_link:title');
    $this->addFieldMapping('field_publication_date', 'field_pub_date');
    $this->addFieldMapping('field_publication_name', 'field_pub_name');
    $this->addFieldMapping('field_publication_name:language')
         ->defaultValue('en');

 }

  public function prepareRow($row) {
    if (parent::prepareRow($row) === FALSE) {
      return FALSE;
    }
    if (!$row->status) {
      return FALSE;
    }
  }

  // Only import published news
  protected function query() {
    // Get the default query (all rows in the users table other than uid 1)
    $query = parent::query();
    // Exclude test accounts
    $query->condition('status', 1);
    return $query;
  }
}