<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Hash; // Import the Hash facade

class StudentAccount extends Migration
{
    public function up()
    {
        Schema::create('student_account', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamps();
        });

        DB::table('student_account')->insert([
            'name' => 'Andreanne Monique Gorres',
            'email' => 'amgorres@stud.nnn',
            'password' => Hash::make('iamsopretty'), // Use Hash::make
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        
    }

    public function down()
    {
        Schema::dropIfExists('student_account');
        // Drop the admission_handlers table if needed
    }
}

