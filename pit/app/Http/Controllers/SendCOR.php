<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\CORApplicant;
use Illuminate\Support\Facades\Mail;


class SendCOR extends Controller
{
    public function sendCOR(Request $request)
    {
        $student = $request->student;

        Mail::to($student['email'])->send(new CORApplicant((object)$student));

        return response()->json(['message' => 'CoR sent successfully!'], 200);
    }
}
