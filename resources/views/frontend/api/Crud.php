<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include_once "DbConfig.php";

class Crud extends DbConfig{
  public function __construct()
  {
    parent::__construct();
  }
    public function getData($query) //Get data from db
  {
      $result = $this->connection->query($query);
      if ($result == false){
        return false;
      }

      $rows = array();
      while ($row = $result->fetch_assoc()){
        $rows[] = $row;
      }
      return $rows;
  }

  public function execute($query) //Execute commands in db
  {
    $result = $this->connection->query($query);
    if ($result == false){
      echo 'Cannot execute command!';
      return false;
    }else{
      return true;
    }
  }

  public function escape_string($value) //For escaping characters that are needed in the query
  {
    return $this->connection->real_escape_string($value);
  }

}
