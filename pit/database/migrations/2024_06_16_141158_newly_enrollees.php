<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class NewlyEnrollees extends Migration
{
    public function up()
    {
        Schema::create('newly_enrollees', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_number')->index(); 
            $table->foreign('student_number')->references('student_number')->on('student_account')->onDelete('cascade');
            $table->string('program');
            $table->string('yrlevel');
            $table->string('semester');
            $table->string('id_image'); 
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('newly_enrollees');
    }
}
