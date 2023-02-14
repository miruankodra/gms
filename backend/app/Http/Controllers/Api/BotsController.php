<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Bot;
use Illuminate\Http\Request;

class BotsController extends Controller
{
    public function getBotInfo($id){
        $bot = Bot::find($id);
        return response()->successResponse($bot, 'Found bot successfully!');
    }
}
