<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdmissionInfoList extends Model
{
    use HasFactory;

    protected $table = 'admission_info';

    protected $fillable = [
        'firstName',
        
        'lastName',
       

    ];
}
