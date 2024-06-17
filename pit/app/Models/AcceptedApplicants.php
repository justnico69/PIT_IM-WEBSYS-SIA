<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AcceptedApplicants extends Model
{
    protected $fillable = [
        'student_number', 
        'firstName', 
        'middleName', 
        'lastName', 
        'month', 
        'day', 
        'year', 
        'gender', 
        'nationality', 
        'email', 
        'contactno', 
        'streetadd', 
        'city', 
        'province', 
        'zipcode', 
        'emergencyName', 
        'relationship', 
        'emergencyContactNumber', 
        'schoolLastAttended'
    ];

    public function studentAccount()
    {
        return $this->hasOne(StudentAccount::class, 'student_number', 'student_number');
    }
}
