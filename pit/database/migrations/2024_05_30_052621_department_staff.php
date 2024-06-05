<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DepartmentStaff extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('department_staff', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->timestamps();
        });
    
    DB::table('department_staff')->insert([
        'name' => 'Judison Claude Nunez',
        'email' => 'judinunez@dept.nnn',
        'password' => bcrypt('iamsopogi'), // Hash the password
        'created_at' => now(),
        'updated_at' => now(),
    ]);
}
    public function down(): void
    {
        //
    }
};
