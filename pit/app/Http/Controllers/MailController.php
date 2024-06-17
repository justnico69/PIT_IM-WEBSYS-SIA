<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\AcceptedApplicant;
use App\Mail\RejectedApplicant;
use App\Models\AcceptedApplicants;
use App\Models\StudentAccount;
use Illuminate\Http\Request;

class MailController extends Controller
{
    public function sendMail(Request $request) 
    {
        Log::info('sendMail function called');
        
        // Use new_student_number to find the applicant
        $newStudentNumber = $request->input('new_student_number');
        Log::info('New Student Number: ' . $newStudentNumber);

        // Enable query logging
        \DB::enableQueryLog();

        // Find the applicant using the new student number
        $applicant = AcceptedApplicants::where('student_number', $newStudentNumber)->first();
        $studentAccount = StudentAccount::where('student_number', $newStudentNumber)->first(); 

        // Log the query
        $queries = \DB::getQueryLog();
        Log::info('Executed query: ' . json_encode($queries));

        Log::info('Applicant: ' . json_encode($applicant));

        if ($applicant && $studentAccount) {
            $title = strtolower($applicant->gender) == 'male' ? 'Mr.' : 'Ms.';
            $fullName = "{$applicant->firstName} {$applicant->middleName} {$applicant->lastName}";
            $subject = "Good day to you {$title} {$fullName}. You have been Accepted";

            $message = "Congratulations! You have been accepted to the university. Here are your student credentials:<br>";
            $message .= "Email: {$studentAccount->email}<br>";
            $message .= "Password: {$newStudentNumber}<br>";
            $message .= "This also serves as your student number: {$newStudentNumber}<br>";
            $message .= 'Please <a href="http://127.0.0.1:8000/login">click here</a> to login and enroll. Thank you and have a blessed day!';

            Mail::to($applicant->email)->send(new AcceptedApplicant($message, $subject));
            Log::info('Mail sent successfully');
        } else {
            Log::error('Applicant or Student Account not found');
        }
        
    }
    public function sendRejectionMail(Request $request)
    {
        Log::info('sendRejectionMail function called');
        
        $applicantId = $request->input('applicant_id');
        $applicantEmail = $request->input('email');

        $applicant = AcceptedApplicants::find($applicantId);

        if ($applicant) {
            $title = strtolower($applicant->gender) == 'male' ? 'Mr.' : 'Ms.';
            $fullName = "{$applicant->firstName} {$applicant->middleName} {$applicant->lastName}";
            $subject = "Dear {$title} {$fullName}, we regret to inform you...";
            $message = "We regret to inform you that your application has been rejected. We appreciate your interest in our university and encourage you to apply again in the future. Thank you.";

            // Ensure the email is set correctly
            Mail::to($applicantEmail)->send(new RejectedApplicant($message, $subject));
            Log::info('Rejection mail sent successfully');
        } else {
            Log::error('Applicant not found');
        }
    }
}


