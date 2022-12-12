<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Statistic extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'id',
        'gh_id',
        'temp_avg',
        'air_humid_avg',
        'soil_humid_avg',
        'day',
        'created_at'
    ];
}
