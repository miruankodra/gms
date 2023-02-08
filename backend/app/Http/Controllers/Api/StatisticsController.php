<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Greenhouse;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    public function getStatistics($id){
        $statistics = Greenhouse::find($id)->statistic;

        $tempData = [];
        $soilData = [];
        $airData = [];
        $day = [];
        foreach($statistics as $i=>$stat){
            array_push($tempData, ['x' => $stat->created_at, 'y' => $stat->temp_avg]);
            array_push($airData, ['x' => $stat->created_at, 'y' => $stat->air_humid_avg]);
            array_push($soilData, ['x' => $stat->created_at, 'y' => $stat->soil_humid_avg]);
        }
        return response()->successResponse([$tempData, $airData, $soilData]);
    }

}
