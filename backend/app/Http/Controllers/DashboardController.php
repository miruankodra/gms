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
        $response  = [
            'success' => true,
            'data' => $user,
            'message' => null,
            'error' => null,
        ];

        return response()->json($response);

    }

    public function getGreenhouseInfo($id){
        $greenhouse = Greenhouse::find((int)$id)->first();
        $response  = [
            'success' => true,
            'data' => $greenhouse,
            'message' => null,
            'error' => null,
        ];
        return response()->json($response);
    }

    public function getGreenhouseStatistics($id){
        $statistics = Greenhouse::find($id)->statistic;

        $tempData = [];
        $soilData = [];
        $airData = [];
        $day = [];
        foreach($statistics as $i=>$stat){
            array_push($tempData, ['x' => $stat->created_at, 'y' => $stat->temp_avg]);
            array_push($airData, ['x' => $stat->created_at, 'y' => $stat->air_humid_avg]);
            array_push($soilData, ['x' => $stat->created_at, 'y' => $stat->soil_humid_avg]);
//            [$i] = {x: $stat->created_at, y: $stat->temp_avg};
            $temp[$i]= $stat->temp_avg;
            $a_humid[$i] = $stat->air_humid_avg;
            $s_humid[$i] = $stat->soil_humid_avg;
            $day[$i] = $stat->created_at;
        }

        $response  = [
            'success' => true,
            'data' => [$tempData, $airData, $soilData],
            'message' => null,
            'error' => null,
        ];
        return response()->json($response);
    }


    public function index(Request $request){
        $data = $request->all();
//        $api_token = $data['api_token'];
        $id = (int)$data['userIphpd'];


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


    public function storeProfile(Request $request){
        $data = $request->all();
        $id = (int)$request->input('id');
        $user = User::find($id)->first();
        $user->fill($request->except(['password']));
        if ($request->input('password') != null){
            $user->password = $request->input('password');
        }

        if ($user->save()){
            return response()->json('Profile saved!');
        } else {
            return response()->json('Could not save profile!');
        }

    }


}
