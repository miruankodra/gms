<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class TemporaryController extends Controller
{
    // public function index(){
    //     return view('/frontend/src/index');
    // }



    public function ulogin(Request $request){
        
        
        
        return response()->json(['update'=>1]);
        
    }


}
