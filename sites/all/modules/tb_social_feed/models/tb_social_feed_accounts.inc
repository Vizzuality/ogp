<?php

class Tb_Social_Feed_Accounts {

  private $_name = 'tb_social_feed_accounts';
  private $_alias = 'a';
  public static $RETURN_OBJECT = 0;
  public static $RETURN_ARRAY = 1;

  public function insert($values) {
    return db_insert($this->_name)
            ->fields($values)
            ->execute();
  }

  /**
   * 
   * @param type $values
   * @param type $conditions
   * @return Tb_Social_Feed_Accounts
   */
  public function update($values, $conditions = array()) {
    $db = db_update($this->_name)->fields($values);
    foreach ($conditions as $key => $value) {
      $db->condition($key, $value);
    }
    return $db->execute();
  }

  public function delete($conditions) {
    $db = db_delete($this->_name);
    foreach ($conditions as $key => $value) {
      $db->condition($key, $value);
    }
    return $db->execute();
  }

  public function select($fields = array(), $conditions = array(), $orderBys = array(), $returned_type = 0) {
    $data = '';
    $db = db_select($this->_name, $this->_alias)->fields($this->_alias, $fields);
    foreach ($conditions as $key => $value) {
      $db->condition($key, $value);
    }
    foreach ($orderBys as $key => $value) {
      $db->orderBy($key, $value);
    }
    switch ($returned_type) {
      case self::$RETURN_OBJECT:
        $data = $db->execute()->fetchObject();
        break;

      case self::$RETURN_ARRAY:
        $data = $db->execute()->fetchAll();
        break;
    }
    return $data;
  }

}
