<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class StudentAccount extends Authenticatable
{
    use Notifiable;

    protected $table = 'student_account'; // Corrected table name

    protected $fillable = ['name', 'email', 'password']; // Fillable fields

    protected $hidden = ['password', 'remember_token']; // Hidden fields
}
