<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProcessingEnrollment extends Model
{
    use HasFactory;

    protected $table = 'processing_enrollment';

    // Specify the attributes that are mass assignable.
    protected $fillable = [
        'student_number',
        'firstName',
        'lastName',
        'program',
        'yrlevel',
        'semester',
        'section',
        'id_image',
        'paid',
    ];

}