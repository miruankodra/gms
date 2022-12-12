<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Greenhouse extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'user_id',
        'area',
        'location',       
    ];


    public function user(){
        return $this->belongsTo(User::class);
    }


    public function statistic(){
        return $this->hasMany(Statistic::class);
    }
}
