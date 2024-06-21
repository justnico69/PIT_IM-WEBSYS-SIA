<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RejectedApplicants extends Model
{
    use HasFactory;

    protected $table = 'rejected_applicants';

    protected $fillable = [
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
}
