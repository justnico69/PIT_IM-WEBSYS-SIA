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
        $message = "Congratulations! You have been accepted to the university. Please note below are your student credentials. 
        Please go to this link to login and enroll. Thank you and have a blessed day! ";
        $subject = 'Good day to you. You have been Accepted';

    $response = Mail::to($toEmail)->send(new AcceptedApplicant($message,$subject));
    dd($response);
}
}