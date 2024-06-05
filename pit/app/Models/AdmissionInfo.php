<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdmissionInfo extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
     protected $table = 'admission_info';

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
    ];
}
