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
        $id = (int)$data['user_id'];
        

        $user = User::where('api_token', $api_token)->get();
        
        $gh = User::find($id)->greenhouse->first();

        if($user || $user != " ")
            
            return response()->json(['status'=>'success', 'user'=>$user, 'greenhouse'=>$gh]);
            // 'greenhouse'=>$user->greenhouse->get('id')
        else
            return response()->json(['status'=>'error']);

    }
}
