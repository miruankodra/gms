<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use Validator;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    // public function login(Request $request){
    //     $user = User::where('email', $request->input('email'))
    //                 ->where('password', $request->input('password'));

    //     if($user->count() == 1){
    //         return response()->json($user->get(['id','username']));
    //     }else{
    //         return response()->json(['logged'=>false]);
    //     }
    
        
    // }

    public function login(Request $request){ 
        //User check
        // if(Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])){ 
        //   // $user = Auth::user(); 
        // //Setting login response 
        // // $success['token'] = $this->apiToken;
        // // $success['name'] =  $user;
        //   return response()->json([
        //     'status' => 'success',
        //     'api_token' => $user->api_token,
        //     'user' => $user->username
        //   ]); 
        // } else { 
        //   return response()->json([
        //     'status' => 'error',
        //     'data' => 'Unauthorized Access'
        //   ]); 
        // } 

        $user = User::where('email', $request->input('email'))
                    ->where('password', $request->input('password'))->get()->first();

        if($user->count() == 1){
          // $success['token'] = $this->apiToken;
          // $success['name'] =  $user;
            return response()->json([
              'status' => 'success',
              // 'api_token' => $user->api_token,
              // 'api_token' => $user->pluck('api_token'),
              'user' => $user,
            ]); 
          } else { 
            return response()->json([
              'status' => 'error',
              'data' => 'Unauthorized Access'
            ]); 
          } 
        
      }
}