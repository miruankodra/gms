<?php
  include 'Crud.php';
  $crud = new Crud(); //Create crud object


  //Getting JSON data from Angular Frontend
  $loginData = json_decode(file_get_contents("php://input"));

  if (sizeof($loginData) != 0){
    $email = $loginData->email;
    $password = $loginData->password;

    $query = "SELECT email, passkey FROM gms_users where email = '$email'";
    $data = $crud->getData($query);
    if ($data[0] == $password){
      echo json_encode($data[0]);
    }
  }
