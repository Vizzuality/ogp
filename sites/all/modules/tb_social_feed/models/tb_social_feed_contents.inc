<?php

class Tb_Social_Feed_Contents {

  private $_name = 'tb_social_feed_contents';
  private $_alias = 'c';
  public static $RETURN_OBJECT = 0;
  public static $RETURN_ARRAY = 1;

  public function insert($values) {
    $id = db_insert($this->_name)
            ->fields($values)
            ->execute();
    return $id;
  }

  public function update($id, $values = array()) {
    
  }

  public function delete($id) {
    
  }

  public function select($fields = array(), $conditions = array(), $orderBys = array(), $returned_type = 0) {
    $db = db_select($this->_name, $this->_alias)
            ->fields($this->_alias, $fields);
    foreach ($conditions as $key => $value) {
      $db->condition($key, $value);
    }
    foreach ($orderBys as $key => $value) {
      $db->orderBy($key, $value);
    }
    $data = NULL;
    switch ($returned_type) {
      case self::$RETURN_OBJECT:
        $data = $db->execute()
                ->fetchObject();
        break;
      case self::$RETURN_ARRAY:
        $data = $db->execute()
                ->fetchAll();
        break;
    }
    return $data;
  }

}