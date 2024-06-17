<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewlyEnrollee extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_number',
        
        'program',
        'yrlevel',
        'semester',
        'contact_number',
        'id_image',
    ];

    public function studentAccount()
    {
        return $this->belongsTo(StudentAccount::class, 'student_number', 'student_number');
    }
}
