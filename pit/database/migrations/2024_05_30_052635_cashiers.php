<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Cashiers extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('cashiers', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email')->unique();
        $table->string('password');
        $table->timestamps();
    });

    DB::table('cashiers')->insert([
        'name' => 'Nicole Camara',
        'email' => 'niccamara@cash.nnn',
        'password' => bcrypt('iamsopretty'), // Hash the password
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
