<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request){
        $user = User::where('email', $request->input('email'))
                    ->where('password', $request->input('password'));

        if($user->count() == 1){
            return response()->json($user->get(['id','username']));
        }else{
            return response()->json(['logged'=>false]);
        }
    
        
    }
}
