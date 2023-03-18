<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Bot;
use App\Models\Climate;
use Illuminate\Http\Request;

class BotsController extends Controller
{
    public function getBotInfo($id){
        $bot = Bot::find($id);
        return response()->successResponse($bot, 'Found bot successfully!');
    }

    public function dataStore(Request $request) {
        $climate = new Climate();
        $climate->fill($request->all());

        if ($climate->save()) {
            return response()->successResponse([], 'Data stored!');
        } else {
            return response()->errorResponse([], 'Data stored!');
        }
    }

    public  function  bot() {
        return response()->json('Gnak glluk slluk!');
    }
}
