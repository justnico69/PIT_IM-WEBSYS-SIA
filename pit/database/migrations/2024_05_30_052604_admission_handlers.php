<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AdmissionHandlers extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('admission_handlers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password'); // Leave it as plain text
            $table->timestamps();
        });

        // Hash the password for the initial record
        DB::table('admission_handlers')->insert([
            'name' => 'Aljo Nicolo Andina',
            'email' => 'andina@admin.nnn',
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
        Schema::dropIfExists('admission_handlers');
    }
}
