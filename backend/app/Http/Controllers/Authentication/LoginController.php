<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Str;

class LoginController extends Controller
{
    public function login(Request $request){
//        $password = bcrypt($request->input('password'));
        $password = $request->input('password');
        $email = $request->input('email');

//        dd(Auth::attempt(['email' => $email, 'password' => $password, 'active' => 1]));

        if (Auth::attempt(['email' => $email, 'password' => $password, 'active' => 1])) {
            $user = User::whereEmail($email)->orWhere('password', '=', $password)->first();
            return response()->json([
              'status' => 'success',
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
