<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth; 

class RegisterController extends Controller
{
    // public function store(Request $request){

    //     $input = $request->all();

    //     $user = User::create([
    //               'firstname' => $request->input('firstname'),
    //               'lastname' => $request->input('lastname'), 
    //               'username' => $request->input('username'), 
    //               'email' => $request->input('email'),
    //               'password' =>  Hash::make($request->input('password')),
    //               'phone' => $request->input('phone'),
    //               'country' => $request->input('country'),
    //               'city' => $request->input('city'),
    //               'address' => $request->input('address'),
    //               'zip' => $request->input('zip'),
    //     ]);

        

       

       

    //     if($user->save()){
    //         return response()->json($user);
    //     }else{
    //         return response()->json(false);
    //     }

      

    // }

   public $apiToken;
   public function __construct()
    {
    $this->apiToken = uniqid(base64_encode(Str::random(40)));
    }
  /** 
   * Register API 
   * 
   * @return \Illuminate\Http\Response 
   */ 
  public function store(Request $request) 
  { 
    
    // $validator = Validator::make($request->all(), [ 
    //   'name' => 'required', 
    //   'email' => 'required|email', 
    //   'password' => 'required', 
      
    // ]);
    // if ($validator->fails()) { 
    //   return response()->json(['error'=>$validator->errors()]);
    // }
    $postArray = $request->all(); 
   
   
    // $user = User::create($postArray); 
    $user = User::create([
        'firstname'=>$postArray['firstname'],
        'lastname'=>$postArray['lastname'],
        'username'=>$postArray['username'],
        'email'=>$postArray['email'],
        // 'password'=> Hash::make($postArray['password']),
        'password'=>$postArray['password'],
        'phone'=>$postArray['phone'],
        'country'=>$postArray['country'],
        'city'=>$postArray['city'],
        'address'=>$postArray['address'],
        'zip'=>$postArray['zip'],
        'api_token' => $this->apiToken,
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
