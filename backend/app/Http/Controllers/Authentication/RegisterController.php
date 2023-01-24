<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Models\User;

use Illuminate\Http\Request;


class RegisterController extends Controller
{


//   public $apiToken;
   public function __construct()
    {
//    $this->apiToken = uniqid(base64_encode(Str::random(40)));
    }
  /** 
   * Register API 
   * 
   * @return \Illuminate\Http\JsonResponse
   */ 
  public function store(Request $request) 
  { 
    

    $postArray = $request->all(); 

    $user = User::create([
        'firstname'=>$postArray['firstname'],
        'lastname'=>$postArray['lastname'],
        'username'=>$postArray['username'],
        'email'=>$postArray['email'],
        'password'=> bcrypt($postArray['password']),
        'phone'=>$postArray['phone'],
        'country'=>$postArray['country'],
        'city'=>$postArray['city'],
        'address'=>$postArray['address'],
        'type'=>'User',
        'zip'=>$postArray['zip'],
    ]);

    $success['token'] = $user->api_token;
    $success['name'] =  $user->username;

    return response()->json([
      'status' => 'success',
      'data' => $success['token'],
      'user' => $success['name']
    ]);
  }
}
