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

    // private $apiToken;
   public function __construct()
    {
    // $this->apiToken = uniqid(base64_encode(Str::random(40)));
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
   
    $postArray['password'] = Hash::make($request['password']); 
    $user = User::create($postArray); 
    
    // $success['token'] = $this->apiToken;  
    $success['name'] =  $user->username;
    return response()->json([
      'status' => 'success',
      'data' => $success,
    ]); 
  }
}
