<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\PasswordRecovery;
use Illuminate\Http\Request;

class PasswordResetController extends Controller
{
    public function sendRecoveryEmail(Request $request){
        $email = $request->input('email');
        $user = User::where('email', '=', $email)->get();
        $code = fake()->password(5, 5);
        $usern = [
            $code,
        ];
        $recovery = new PasswordRecovery($usern);
        $user->notify($recovery);
    }
}
