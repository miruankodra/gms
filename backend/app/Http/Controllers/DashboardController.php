<?php

namespace App\Http\Controllers;

use App\Models\Greenhouse;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __construct()
    {

    }


    public function getUserInfo($id){
        $user = User::find($id);
        return response()->json($user);

    }

    public function getGreenhouseInfo($id){
        $greenhouse = Greenhouse::where('user_id', '=', $id);
        return response()->json($greenhouse);
    }


    public function index(Request $request){
        $data = $request->all();
//        $api_token = $data['api_token'];
        $id = (int)$data['userId'];


        $user = User::where('id','=', $id);

        $gh = User::find($id)->greenhouse->first();

        $stats = Greenhouse::find((int)$gh->id)->statistic;

        $temp = [];
        $s_humid = [];
        $a_humid = [];
        $day = [];
        foreach($stats as $i=>$stat){
            $temp[$i]= $stat->temp_avg;
            $a_humid[$i] = $stat->air_humid_avg;
            $s_humid[$i] = $stat->soil_humid_avg;
            $day[$i] = $stat->created_at;
        }

        if($user || $user != " ")

            return response()->json(['status'=>'success', 'greenhouse'=>$gh, 'temp'=>$temp, 'air'=>$a_humid, 'soil'=>$s_humid, 'day'=>$day]);
            // 'user'=>$user,
        else
            return response()->json(['status'=>'error']);

    }

    public function getUsers(){
        $users = User::all();

        return response()->json($users);
    }


}
