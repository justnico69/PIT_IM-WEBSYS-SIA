<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EnrolledStudent extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_number',
        'program',
        'yrlevel',
        'semester',
        'section',
        'id_image',
    ];
}
