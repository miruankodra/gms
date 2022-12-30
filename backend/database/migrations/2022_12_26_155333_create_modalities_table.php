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
        Schema::create('modalities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('greenhouse_id')->references('id')->on('greenhouses')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('name', 50);
            $table->string('description', 150)->nullable();
            $table->float('temperature');
            $table->float('air_humidity');
            $table->float('soil_humidity');
            $table->boolean('enabled')->default(false);
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
        Schema::dropIfExists('modalities');
    }
};
