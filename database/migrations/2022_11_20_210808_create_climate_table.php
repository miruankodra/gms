<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('climate', function (Blueprint $table) {
            $table->id();
            $table->foreign('id')->references('id')->on('greenhouse')->onDelete('cascade');
            $table->boolean('temp');
            $table->boolean('air_humid');
            $table->boolean('soil_humid');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('climate');
    }
};
