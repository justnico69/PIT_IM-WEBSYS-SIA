<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EnrolledStudents extends Migration
{
    public function up()
    {
        Schema::create('enrolled_students', function (Blueprint $table) {
            $table->id();
            $table->string('student_number')->unique();
            $table->string('program');
            $table->string('yrlevel');
            $table->string('semester');
            $table->string('section');
            $table->string('id_image')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('enrolled_students');
    }
}
