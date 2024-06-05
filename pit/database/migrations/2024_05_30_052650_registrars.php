<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Registrars extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('registrars', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email')->unique();
        $table->string('password');
        $table->timestamps();
    });
    DB::table('registrars')->insert([
        'name' => 'John Patrick Awit',
        'email' => 'johnawit@regis.nnn',
        'password' => bcrypt('iamsopogi'), // Hash the password
        'created_at' => now(),
        'updated_at' => now(),
    ]);
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
