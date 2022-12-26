<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modality extends Model
{
    use HasFactory;

    protected $table = 'modalities';

    protected $fillable = [
        'greehouse_id',
        'name',
        'description',
        'temperature',
        'air_humidity',
        'soil_humidity',
        'enabled',
    ];

//    protected $casts = [
//        'enabled' =>
//    ];
}