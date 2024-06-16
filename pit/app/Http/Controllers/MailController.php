<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\AcceptedApplicant;
use App\Models\AcceptedApplicants;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function sendMail(Request $request) 
    {
        Log::info('sendMail function called');
        
        $applicantId = $request->input('applicant_id');
        Log::info('Applicant ID: ' . $applicantId);

        // Enable query logging
        \DB::enableQueryLog();

        $applicant = AcceptedApplicants::find($applicantId);

        // Log the query
        $queries = \DB::getQueryLog();
        Log::info('Executed query: ' . json_encode($queries));

        Log::info('Applicant: ' . json_encode($applicant));

        if ($applicant) {
            $title = strtolower($applicant->gender) == 'male' ? 'Mr.' : 'Ms.';
            $fullName = "{$applicant->firstName} {$applicant->middleName} {$applicant->lastName}";
            $subject = "Good day to you {$title} {$fullName}. You have been Accepted";

            $message = "Congratulations! You have been accepted to the university. Please note below are your student credentials. 
            Please go to this link to login and enroll. Thank you and have a blessed day! ";

            Mail::to($applicant->email)->send(new AcceptedApplicant($message, $subject));
            Log::info('Mail sent successfully');
        } else {
            Log::error('Applicant not found');
        }
    }
}
