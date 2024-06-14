<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Include this

class StudentAccount extends Authenticatable
{
    use Notifiable, HasFactory; // Use the HasFactory trait

    protected $table = 'student_account';

    protected $fillable = ['name', 'email', 'password', 'role']; // Add 'role' here

    protected $hidden = ['password', 'remember_token'];
}
