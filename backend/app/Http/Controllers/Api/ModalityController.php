<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Modality;
use Illuminate\Http\Request;

class ModalityController extends Controller
{
    public function __construct()
    {
    }

    public function getModalities ($id) {
        $modalities = Modality::where('greenhouse_id', '=', $id)->get();
        return response()->successResponse($modalities, 'Could not save profile!');
    }
}
