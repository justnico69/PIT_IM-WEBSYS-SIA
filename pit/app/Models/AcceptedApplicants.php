<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcceptedApplicants extends Model
{
    use HasFactory;

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
        'schoolLastAttended',
        'student_number',
    ];
}
