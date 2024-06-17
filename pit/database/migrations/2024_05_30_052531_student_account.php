<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class StudentAccount extends Migration
{
    public function up()
    {
        Schema::create('student_account', function (Blueprint $table) {
            $table->bigIncrements('student_number'); // Changed to bigIncrements
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('role')->default('student');
            $table->timestamps();
        });

        // Insert a student account record
        DB::table('student_account')->insert([
            'name' => 'Andreanne Monique Gorres',
            'email' => 'amgorres@stud.nnn',
            'password' => Hash::make('iamsopretty'),
            'role' => 'student',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    public function down()
    {
        Schema::dropIfExists('student_account');
    }
}
