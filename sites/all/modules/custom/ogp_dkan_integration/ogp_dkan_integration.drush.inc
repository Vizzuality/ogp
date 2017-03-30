<?php
/**
 * @file
 * Drush integration for the dkan_fixtures module.
 */

/**
 * Implements hook_drush_command().
 */
function ogp_dkan_integration_drush_command() {
  $items = array();
  $items['ogp-document-export'] = array(
    'description' => dt('Creates JSON files out of ogp documents'),
    'arguments' => array(),
    'aliases' => array('ogpdocexp'),
  );
  $items['ogp-attachment-move'] = array(
    'description' => dt('Moves all attachments to dkan resources and group them in datasets'),
    'arguments' => array(),
    'aliases' => array('ogpattachmv'),
  );
  $items['ogp-fix-docs-titles'] = array(
    'description' => dt('Moves all attachments to dkan resources and group them in datasets'),
    'arguments' => array(),
    'aliases' => array('ogpfixdocst'),
  );
  return $items;
}

/**
 * Drush ogp-fix-docs-titles command callback.
 */
function drush_ogp_dkan_integration_ogp_fix_docs_titles() {
  // Query Action Type.
  $query = new EntityFieldQuery();
  $query->entityCondition('entity_type', 'node')
        ->entityCondition('bundle', 'resource');
  $result = $query->execute();
  if (isset($result['node'])) {
    $nids = array_keys($result['node']);
    $resources = node_load_multiple($nids);
    foreach ($resources as $resource) {
      $resource_wrapper = entity_metadata_wrapper('node', $resource);
      $file = $resource_wrapper->field_upload->value();
      $q = new EntityFieldQuery();
      $q->entityCondition('entity_type', 'node')
        ->fieldCondition('field_attachment', 'fid', $file->fid);
      $r = $q->execute();
      if (isset($r['node']) && count($r['node']) == 1) {
        $node = node_load(end($r['node'])->nid);
        $wrapper = entity_metadata_wrapper('node', $node);
        $field = $wrapper->field_attachment->value();
        foreach ($field as $f) {
          if ($f['fid'] == $file->fid) {
            if (isset($f['description']) && $f['description'] != '') {
              $old_title = $resource_wrapper->title->value();
              $resource_wrapper->title->set($f['description']);
              $resource_wrapper->save();
              drush_log(
                $old_title . ' ---> ' . $resource_wrapper->title->value(),
                'success'
              );
            }
            break;
          }
        }
      }
    }
  }
}

/**
 * Drush ogp-document-export command callback.
 */
function drush_ogp_dkan_integration_ogp_attachment_move() {
  $types = array('page', 'working_group_page', 'event');
  foreach ($types as $type) {
    // Query Action Type.
    $query = new EntityFieldQuery();
    $query->entityCondition('entity_type', 'node')
          ->entityCondition('bundle', $type);
    $result = $query->execute();
    if (isset($result['node'])) {
      $nids = array_keys($result['node']);
      $nodes = node_load_multiple($nids);
      foreach ($nodes as $node) {
        $wrapper = entity_metadata_wrapper('node', $node);
        if (is_null($wrapper->field_page_documents->value())) {
          $dataset = new stdClass();
          $dataset->title = $wrapper->label() . ' - Page Documents';
          $dataset->type = 'dataset';
          $dataset->uid = 1;
          node_save($dataset);
          $wrapper->field_page_documents->set($dataset->nid);
        }
        else {
          $dataset = $wrapper->field_page_documents->value();
        }
        $attachments = $wrapper->field_attachment->value();
        if (count($attachments)) {
          $resources = $dataset->field_resources[LANGUAGE_NONE];
          if (count($resources)) {
            foreach ($resources as $key => $value) {
              $resources[$key] = $value['target_id'];
            }
            $resources = node_load_multiple($resources);
            foreach ($resources as $key => $value) {
              $resources[$key] = $value->field_upload[LANGUAGE_NONE][0]['fid'];
            }
          }
          foreach ($attachments as $attachment) {
            if (!is_array($resources) || !in_array($attachment['fid'], $resources)) {
              $resource = new stdClass();
              $resource->title = $dataset->title . ' - ' . $attachment['fid'];
              $resource->type = 'resource';
              $resource->uid = 1;
              $resource->field_upload = array(
                LANGUAGE_NONE => array(
                  $attachment,
                ),
              );
              $resource->field_dataset_ref = array(
                LANGUAGE_NONE => array(
                  array(
                    'target_id' => $dataset->nid
                  ),
                ),
              );
              node_save($resource);
            }
          }
        }
        $wrapper->save();
      }
    }
  }
}

/**
 * Drush ogp-document-export command callback.
 */
function drush_ogp_dkan_integration_ogp_document_export() {
  $types = array('action_plan', 'irm_report', 'self_assessment');
  foreach ($types as $type) {
    // Query Action Type.
    $query = new EntityFieldQuery();
    $query->entityCondition('entity_type', 'node')
          ->entityCondition('bundle', $type);
    $result = $query->execute();
    if (isset($result['node'])) {
      $nids = array_keys($result['node']);
      $nodes = node_load_multiple($nids);
      foreach ($nodes as $node) {
       switch ($type) {
        case 'action_plan':
          $ap = new ActionPlan($node);
          if ($ap->valid) {
            $status = $ap->created ? 'created' : 'updated';
            drush_log($ap->plan->title . ' '. $status, 'ok'); 
          }
          else {
            $error = 'Can\'t guess period and country for nid: ' . $node->nid . ' titled: ' . $node->title;
            drush_log($error, 'error');
          }
          break;
        case 'irm_report':
        case 'self_assessment':
          $plan = ActionPlan::guessPlanForNode($node);
          if ($plan) {
            $plan->updateDocuments($node);
          }
          else {
            var_dump(
              implode(
                ' - ',
                array(
                  'node/' . $node->nid,
                  $node->title,
                )
              )
            );
          }
          break;
       }
      }
    }
  }
  ActionPlan::saveData();
}

class ActionPlan {
  public $plan;
  public $valid = TRUE;
  public $created = TRUE;
  public static $plans = array();

  public function __construct($node) {
    $key = $this->buildUniqueKey($node);
    if (!$key) {
      $this->valid = FALSE;
      return;
    }
    if (isset(self::$plans[$key])) {
      $this->plan = self::$plans[$key];
      $this->plan->updateDocuments($node);
      $this->created = FALSE;
    }
    else {
      $this->plan = new Plan($node);
      self::$plans[$key] = $this->plan;
    }
  }

  public static function saveData() {
    self::putContents('list.json', array_keys(self::$plans));
    foreach (self::$plans as $key => $plan) {
      self::putContents($key . '.json', $plan);
    }
  }

  protected static function putContents($filename, $content) {
    if (!is_dir(OGP_DOCUMENTS_TEMP)) {
      drupal_mkdir(OGP_DOCUMENTS_TEMP);
    }
    $filename = implode('/', array(OGP_DOCUMENTS_TEMP, $filename));
    file_put_contents($filename, json_encode($content, JSON_PRETTY_PRINT));
  }

  protected static function getTitle($node) {
    $title_fixes = array(
      2753 => 'South Africa 2013-2014 Progress Report',
      2755 => 'United Kingdom 2013-2014 Progress Report',
      2833 => 'Brazil 2013-2014 Progress Report',
      2835 => 'Norway 2013-2014 Progress Report',
      2851 => 'Philippines 2013-2014 Progress Report',
      3134 => 'Mexico 2013-2014 Progress Report',
      3162 => 'Indonesia 2013-2014 Progress Report',
      3166 => 'United States 2013-2014 Progress Report',
      3332 => 'Albania 2014-2015 Progress Report',
      3336 => 'Czech Republic 2014-2015 Progress Report',
      3337 => 'El Salvador 2014-2015 Progress Report',
      3340 => 'Greece 2014-2015 Progress Report',
      3343 => 'Italy 2014-2015 Progress Report',
      3385 => 'Denmark 2014-2015 Progress Report',
      3387 => 'Moldova 2014-2015 Progress Report',
      3708 => 'Bulgaria 2014-2015 Progress Report',
      3710 => 'Ukraine 2014-2015 Progress Report',
      4641 => 'Colombia 2014-2015 Progress Report',
      6668 => 'Norway 2013-2014 Progress Report',
      3391 => 'South Korea 2013-2014 Progress Report'
    );
    if (isset($title_fixes[$node->nid])) {
      return $title_fixes[$node->nid];
    }
    return $node->title;
  }

  public static function guessPlanForNode($node) {
    $regex = '#(20\d{2})|(20\d{2}\-20\d{2})|(20\d{2}\-\d{2})|(20\d{2}\- 20\d{2})|(20\d{2}\- \d{2})#';

    $haystack = self::getTitle($node);
    $pdf_fields = array('field_pdf_version', 'field_pdf_national');
    foreach ($pdf_fields as $field) {
      if (isset($node->{$field}) && count($node->{$field})) {
        $pdfs = $node->{$field}[array_keys($node->{$field})[0]];
        foreach ($pdfs as $pdf) {
          $haystack .= ' ' . $pdf['filename'] . ' ';
        }
      }
    }
    $country = $node->og_group_ref; 
    if (isset($country[LANGUAGE_NONE]) && count($country[LANGUAGE_NONE])) {
      $country = $country[LANGUAGE_NONE][0]['target_id'];
      
      if (preg_match($regex, $haystack, $matches)) {
        $matches = $matches[0];
        foreach (self::$plans as $plan) {
          $conditions = array(
            $plan->country == $country,
            $plan->range[0] <= $matches,
            $plan->range[1] >= $matches
          );
          $conditions = array_unique($conditions);
          $conditions = count($conditions) == 1 && $conditions[0];
          if ($conditions) {
            return $plan;
          }
        }
      }
    }
    return FALSE;
  }

  protected function buildUniqueKey($node) {
    if (isset($node->field_country_ref[LANGUAGE_NONE])) {
      $country = Plan::getCountry($node);
      $range = Plan::parseRange($node);
      if (!is_null($country) && $range) {
        $key = $country . '_' . $range[0] . '-' . $range[1];
        return $key;
      }
    }
    return False;
  }
}

class Plan {
  public $title;
  public $country;
  public $range;
  public $user;
  public $documents = array();
  public static $countries = array();

  public function __construct($node) {
    $this->user = $node->uid;
    $this->country = self::getCountry($node);
    $this->range = self::parseRange($node);

    $country_name = self::queryCountryPage($this->country);
    $country_name = $country_name->title;

    $title = $country_name;
    if (count($this->range)) {
      $title .= ' ' . $this->range[0] . '-' . $this->range[1]; 
    }
    $title .= ' Documents';
    $this->title = $title;
    $this->updateDocuments($node);
  }

  public function updateDocuments($node) {
    $this->documents = array_merge($this->documents, self::getDocuments($node));
  }

  public static function getDocuments($node) {
    $documents = array();
    $fields = array(
      'action_plan' => array('field_country_ap_pdf'),
      'irm_report' => array('field_pdf_national', 'field_pdf_version'),
      'self_assessment' => array('field_pdf_version')
    );
    if (isset($fields[$node->type])) {
      $fields = $fields[$node->type];
      foreach ($fields as $field) {
        if (isset($node->{$field}) && count($node->{$field})) {
          $lang = array_keys($node->{$field})[0];
          foreach ($node->{$field}[$lang] as $file) {
            $document = array(
              'user' => $node->uid,
              'title' => $node->title,
              'type' => str_replace('_', ' ', $node->type),
              'fid' => $file['fid'],
              'tags' => array(),
            );
            if ($node->type == 'irm_report' && $field == 'field_pdf_national') {
              $document['tags'][] = 'national';
              if (isset($node->field_report_comments_page[LANGUAGE_NONE])) {
                $document['report_page'] = $node->field_report_comments_page[LANGUAGE_NONE][0]['target_id'];
              }
            }
            if (isset($node->field_summary[LANGUAGE_NONE]) && count($node->field_summary[LANGUAGE_NONE])) {
              $document['summary'] = $node->field_summary[LANGUAGE_NONE][0]['safe_value'];
            }
            $documents[] = $document;
          }
        }
      }
    }
    return $documents;
  }

  public static function getCountry($node) {
    $country = $node->field_country_ref[LANGUAGE_NONE][0]['target_id'];
    if (is_null($country)) {
      return False;
    }
    return $country;
  }

  public static function getTitle($node) {
    $title_fixes = array(
      3763 => 'Armenia 2011-2013 Action Plan',
      3765 => 'Brazil 2013-2014 Action Plan',
      3766 => 'Bulgaria 2013-2014 Action Plan',
      3769 => 'Colombia 2014-2015 Action Plan',
      3771 => 'Croatia 2012-2013 Action Plan',
      3772 => 'Czech Republic 2011-2012 Action Plan',
      3774 => 'Republica Dominicana 2012-2014 Action Plan',
      3777 => 'Finland 2013-2014 Action Plan',
      3778 => 'Georgia 2012-2014 Action Plan',
      3781 => 'Guatemala 2012-2014 Action Plan',
      3782 => 'Honduras 2012-2014 Action Plan',
      3783 => 'Hungary 2013-2014 Action Plan',
      3786 => 'Italy 2012-2014 Action Plan',
      3787 => 'Jordan 2012-2014 Action Plan',
      3788 => 'Kenya 2012-2014 Action Plan',
      3790 => 'Liberia 2013-2014 Action Plan',
      3791 => 'Lithuania 2014-2015 Action Plan',
      3793 => 'Malta 2012-2014 Action Plan',
      3794 => 'Mexico 2013-2014 Action Plan',
      3796 => 'Montenegro 2011-2016 Action Plan',
      3797 => 'Netherland 2013-2015 Action Plan',
      3798 => 'Norway 2013-2015 Action Plan',
      3799 => 'Panama 2013-2015 Action Plan',
      3803 => 'Romania 2012-2014 Action Plan',
      3804 => 'Slovak 2012-2014 Action Plan',
      3805 => 'South Africa 2013-2015 Action Plan',
      3806 => 'South Korea 2012-2014 Action Plan',
      3807 => 'Spain 2012-2014 Action Plan',
      3808 => 'Sweden 2012-2014 Action Plan',
      3810 => 'Turkey 2012-2014 Action Plan',
      3811 => 'Ukraine 2012-2014 Action Plan',
      3813 => 'United States 2013-2015 Action Plan',
      5369 => 'Georgia 2014-2015 Action Plan',
      5415 => 'Uruguay 2014-2015 Action Plan',
      5416 => 'Uruguay 2014-2015 Action Plan',
      5417 => 'Uruguay 2014-2015 Action Plan',
      5874 => 'Slovak Republic 2015-2016 Action Plan',
      5875 => 'Slovak Republic 2015-2016 Action Plan',
      5972 => 'Panama 2015-2017 Action Plan',
      5973 => 'Panama 2015-2017 Action Plan',
      5997 => 'France 2015-2017 Action Plan',
      5998 => 'France 2015-2017 Action Plan',
      5999 => 'France 2015-2017 Action Plan',
      6000 => 'France 2015-2017 Action Plan',
      6001 => 'France 2015-2017 Action Plan',
      6072 => 'Hungary 2015-2017 Action Plan',
    );
    if (isset($title_fixes[$node->nid])) {
      return $title_fixes[$node->nid];
    }
    return $node->title;
  }

  public static function parseRange($node) {
    $regex = '#(20\d{2})|(20\d{2}\-20\d{2})|(20\d{2}\-\d{2})|(20\d{2}\- 20\d{2})|(20\d{2}\- \d{2})#';
    $title = self::getTitle($node);
    if (preg_match($regex, $title, $matches)) {
      $year = $matches[0];
      $year = explode('-', $year);
      $from = (int) $year[0];
      $to = (int) $year[1];
      $to = ($to == 0) ? ($from + 1) : $to;
      if ($to < 2000) {
        $to += 2000;
      }
      return array($from, $to);
    }
    return False;
  }

  public static function queryCountryPage($target_id) {
    if (!isset(self::$countries[$target_id])) {
      $country = node_load($target_id);
      self::$countries[$target_id] = $country;
    }
    return self::$countries[$target_id];
  }
}
