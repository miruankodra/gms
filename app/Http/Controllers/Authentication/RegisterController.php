<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function store(Request $request){

        $input = $request->all();

        $user = User::create([
                  'firstname' => $request->input('firstname'),
                  'lastname' => $request->input('lastname'), 
                  'username' => $request->input('username'), 
                  'email' => $request->input('email'),
                  'password' =>  Hash::make($request->input('password')),
                  'phone' => $request->input('phone'),
                  'country' => $request->input('country'),
                  'city' => $request->input('city'),
                  'address' => $request->input('address'),
                  'zip' => $request->input('zip'),
        ]);

        

       

       

        if($user->save()){
            return response()->json($user);
        }else{
            return response()->json(false);
        }

      

    }
}
