<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProcessingEnrollment extends Migration
{
    public function up()
    {
        Schema::create('processing_enrollment', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('student_number'); 
            $table->string('firstName');
            $table->string('lastName');
            $table->string('program');
            $table->string('yrlevel');
            $table->string('semester');
            $table->string('section');
            $table->string('id_image')->nullable();
            $table->boolean('paid')->default(false);
            $table->timestamps();

            $table->foreign('student_number')
                  ->references('student_number')
                  ->on('accepted_applicants')
                  ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('processing_enrollment');
    }
}
