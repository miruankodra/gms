<?php
class DbConfig{
  private $_host = '127.0.0.1'; //Hostname
  private $_username = 'root'; //User
  private $_password = ''; //Password
  private $database = 'gms'; //Db name

  protected $connection;
  public function __construct()
  {
    if (!isset($this->connection)){
      $this->connection = new mysqli($this->_host, $this->_username, $this->_password, $this->database);
      if (!isset($this->connection)){
        echo 'Could not connect to database!'; //If dosent connect then return fail message
        exit;
      }
    }
    return $this->connection; //If ok return connection
  }
}
