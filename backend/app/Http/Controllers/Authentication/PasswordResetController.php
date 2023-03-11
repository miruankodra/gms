<?php

namespace App\Http\Controllers\authentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PasswordResetController extends Controller
{
    public function sendRecoveryEmail(Request $request){
        $email = $request->input('email');
        $user = User::where('email', '=', $email)->get();
    }
}
