<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class StudentAccount extends Authenticatable
{
    use Notifiable, HasFactory;
    
    protected $table = 'student_account';
    protected $primaryKey = 'student_number';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'student_number',
        'name',
        'email',
        'password',
        'role'
    ];

    protected $hidden = [
        'password',
        'remember_token'
    ];

    public function acceptedApplicant()
    {
        return $this->belongsTo(AcceptedApplicants::class, 'student_number', 'student_number');
    }
}
