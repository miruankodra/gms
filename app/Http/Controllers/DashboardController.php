<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __construct()
    {
        
    }


    public function index(Request $request){
        $data = $request->all();
        $api_token = $data['api_token'];

        $user = User::where('api_token', $api_token)->get();

        if($user || $user != " ")
            return response()->json(['status'=>'success', 'user'=>$user]);
        else
            return response()->json(['status'=>'error']);

    }
}
