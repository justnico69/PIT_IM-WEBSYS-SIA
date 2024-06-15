<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\AcceptedApplicant;
use App\Models\AcceptedApplicants;

class MailController extends Controller
{
    public function sendMail(Request $request) 
    {
        $toEmail = $request->input('email');
        $message = 'Congratulations! You are accepted!';
        $subject = 'Acceptance';

    $response = Mail::to($toEmail)->send(new AcceptedApplicant($message,$subject));
    dd($response);
}
}