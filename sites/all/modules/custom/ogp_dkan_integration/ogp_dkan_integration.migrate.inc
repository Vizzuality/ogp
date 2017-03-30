<?php
/**
 * @file
 * Migration file for ogp_dkan_integration.
 */


/**
 * Implements hook_migrate_api().
 */
function ogp_dkan_integration_migrate_api() {
  $api = array(
    // Migrate API, not CKAN's of course.
    'api' => 2,
    'groups' => array(
      'ogp_documents' => array(
        'title' => t('OGP Documents'),
      ),
    ),
    'migrations' => array(
      'ogp_documents' => array(
        'class_name' => 'MigrateOGPDocuments',
        'group_name' => 'ogp_documents',
        'title' => t('OGP Documents Migration'),
      ),
    ),
  );
  return $api;
}

class OGPDocumentsListJSON extends MigrateListJSON {
  public function __construct($list_url) {
    parent::__construct($list_url);
  }

  public function getIdList() {
    $json = file_get_contents($this->listUrl);
    if (isset($json)) {
      $data = drupal_json_decode($json);
      if ($data) {
        return $data;
      }
    }
    $error = t('Loading of !listurl failed:', array('!listurl' => $this->listUrl));
    Migration::displayMessage($error);
    return NULL;
  }

  public function computeCount() {
    return count($this->getIdList());
  }
}

class OGPDocumentItemJSON extends MigrateItemJSON {
  public function getItem($id) {
    $item_url = $this->constructItemUrl($id);
    $json = file_get_contents($item_url);
    if (isset($json)) {
      $json = json_decode($json);
      return $json;
    }
    $error = t('Loading of !itemurl failed:', array('!itemurl' => $item_url));
    Migration::displayMessage($error);
  }
}

class MigrateOGPDocuments extends Migration {
  public function __construct($arguments) {
    parent::__construct($arguments);

    $this->source = new MigrateSourceList(
      new OGPDocumentsListJSON(implode('/', array(OGP_DOCUMENTS_TEMP, 'list.json'))),
      new OGPDocumentItemJSON(implode('/', array(OGP_DOCUMENTS_TEMP, ':id.json')))
    );
    $this->map = new MigrateSQLMap(
      $this->machineName,
      array(
        'uuid' => array(
          'type' => 'varchar',
          'length' => 255,
          'not null' => TRUE,
          'description' => 'id',
        ),
      ),
      MigrateDestinationNode::getKeySchema()
    );
    $this->destination = new MigrateDestinationNode('dataset', array('text_format' => 'html'));

    $this->addFieldMapping('title', 'title');
  }

  public function prepareRow($row) {
    
  }

  public function prepare($node, $row) {
    // $node->uid = $row->uid;
    $node->field_period = array(
      LANGUAGE_NONE => array(
        array(
          'from' => $row->range[0],
          'to' => $row->range[1],
        ),
      ),
    );
    $node->field_country_ref = array(
      LANGUAGE_NONE => array(
        array(
          'target_id' => $row->country,
        ),
      ),
    );
    $node->field_resources = array(
      LANGUAGE_NONE => array(),
    );
    foreach ($row->documents as $document) {
      $nid = $this->createResourceNode($document);
      $node->field_resources[LANGUAGE_NONE][] = array('target_id' => $nid);
    }
  }

  public function complete($node, $row) {
  }

  public function createResourceNode($document) {
    $node = new stdClass();
    $node->is_new = TRUE;
    $node->language = 'und';
    $node->uid = $document->user;
    $node->type = 'resource';
    $node->title = $document->title;
    $node->field_upload = array(
      LANGUAGE_NONE => array(
        (array) file_load($document->fid),
      ),
    );
    $node->field_ogp_document_type = array(
      LANGUAGE_NONE => array(
        array(
          'tid' => $this->createTax(
            $document->type,
            'ogp_document_type'
          )->tid,
        ),
      ),
    );
    if (isset($document->summary)) {
      $node->body = array(
        LANGUAGE_NONE => array(
          array(
            'value' => $document->summary,
          ),
        ),
      );
    }
    if (isset($document->tags)) {
      $node->field_ogp_document_tags = array(
        LANGUAGE_NONE => array(),
      );
      foreach ($document->tags as $tag) {
        $node->field_ogp_document_tags[LANGUAGE_NONE][] = array(
          'tid' => $this->createTax(
            $tag,
            'ogp_document_tags'
          )->tid,
        );
      }
    }
    node_save($node);
    if (isset($document->report_page)) {
      $report_page_node = node_load($document->report_page);
      $report_page_node->field_report_ref = array(
        LANGUAGE_NONE => array(
          array(
            'target_id' => $node->nid,
          ),
        ),
      );
      node_save($report_page_node);
    }
    $this->map->saveIDMapping($node, array($node->nid), 0, 0, '');
    return $node->nid;
  }

  public function createTax($name, $vocab_name) {
    $v = taxonomy_vocabulary_machine_name_load($vocab_name);
    if ($term = taxonomy_get_term_by_name($name, $v->machine_name, $v->vid)) {
      $term = array_pop($term);
      return $term;
    }
    else {
      $new_term = new stdClass();
      $new_term->name = $name;
      $new_term->vid = $v->vid;
      $term = taxonomy_term_save($new_term);
      if ($term == SAVED_NEW) {
        $term = taxonomy_get_term_by_name($name, $v->machine_name);
        $term = array_pop($term);
        return $term;
      }
      else {
        return NULL;
      }
    }
  }
}
