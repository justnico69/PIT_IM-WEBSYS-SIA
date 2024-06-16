<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AcceptedApplicants extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accepted_applicants', function (Blueprint $table) {
            $table->id();
            $table->string('firstName');
            $table->string('middleName')->nullable();
            $table->string('lastName');
            $table->string('month');
            $table->string('day');
            $table->string('year');
            $table->string('gender');
            $table->string('nationality');
            $table->string('email')->unique();
            $table->string('contactno');
            $table->string('streetadd');
            $table->string('city');
            $table->string('province');
            $table->string('zipcode');
            $table->string('emergencyName');
            $table->string('relationship');
            $table->string('emergencyContactNumber');
            $table->string('schoolLastAttended');
            $table->string('student_number')->unique();
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
        Schema::dropIfExists('accepted_applicants');
    }
}
