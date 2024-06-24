<?php

namespace App\Http\Controllers;

use App\Models\ProcessingEnrollment;
use App\Models\EnrolledStudent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\AcceptedApplicants;
use App\Mail\EnrollmentConfirmed;
use Illuminate\Support\Facades\Mail;

class ProcessingEnrollmentController extends Controller
{
    /**
     * Display a listing of the enrollees.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            Log::info('Fetching all processing enrollments');
            $enrollments = ProcessingEnrollment::all();
            Log::info('Processing enrollments fetched successfully', ['enrollments_count' => $enrollments->count()]);
            return response()->json(['enrollments' => $enrollments], 200);
        } catch (\Exception $e) {
            Log::error('Error fetching processing enrollments', [
                'message' => $e->getMessage(),
                'stack' => $e->getTraceAsString()
            ]);
            return response()->json(['message' => 'Error fetching processing enrollments'], 500);
        }
    }

    /**
     * Transfer enrollee to enrolled_students table after payment.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function pay($id)
    {
        try {
            Log::info('Attempting to find processing enrollment', ['id' => $id]);
            $enrollment = ProcessingEnrollment::findOrFail($id);
            Log::info('Processing enrollment found', ['enrollment' => $enrollment]);

            Log::info('Checking if student number already exists in enrolled_students table');
            $existingStudent = EnrolledStudent::where('student_number', $enrollment->student_number)->first();
            if ($existingStudent) {
                Log::warning('Enrollment rejected: Student number already exists in enrolled_students table');
                return response()->json(['message' => 'You have already enrolled!'], 400);
            }

            Log::info('Updating payment status');
            $enrollment->paid = true;
            $enrollment->save();

            Log::info('Creating enrolled student record');
            $enrolledStudent = EnrolledStudent::create([
                'student_number' => $enrollment->student_number,
                'program' => $enrollment->program,
                'yrlevel' => $enrollment->yrlevel,
                'semester' => $enrollment->semester,
                'section' => $enrollment->section,
                'id_image' => $enrollment->id_image,
            ]);
            Log::info('Enrolled student record created successfully', ['enrolled_student' => $enrolledStudent]);

            Log::info('Deleting processing enrollment');
            $enrollment->delete();

              // Send enrollment confirmation email
              $acceptedApplicant = AcceptedApplicants::where('student_number', $enrollment->student_number)->first();
              if ($acceptedApplicant) {
                  $title = strtolower($acceptedApplicant->gender) == 'male' ? 'Mr.' : 'Ms.';
                  $fullName = "{$acceptedApplicant->firstName} {$acceptedApplicant->middleName} {$acceptedApplicant->lastName}";
                  $subject = "Congratulations {$title} {$fullName}, you are now enrolled!";
                  $message = "Dear {$title} {$fullName},<br><br>We are pleased to inform you that your payment has been confirmed and you are now officially enrolled at NNN University. Your student number is {$enrollment->student_number}.<br><br>Welcome aboard and we wish you a successful academic journey.<br><br>Best regards,<br>NNN University";
  
                  Mail::to($acceptedApplicant->email)->send(new EnrollmentConfirmed($message, $subject));
                  Log::info('Enrollment confirmation email sent successfully', ['email' => $acceptedApplicant->email]);
              } else {
                  Log::warning('Accepted applicant not found for sending email', ['student_number' => $enrollment->student_number]);
              }

            Log::info('Enrollment paid and successfully moved to enrolled students', ['enrolled_student' => $enrolledStudent]);
            return response()->json(['message' => 'Enrollment paid and successfully moved to enrolled students', 'enrolled_student' => $enrolledStudent], 201);
        } catch (\Exception $e) {
            Log::error('Error during enrollment payment processing', [
                'message' => $e->getMessage(),
                'stack' => $e->getTraceAsString()
            ]);
            return response()->json(['message' => 'Error processing enrollment payment'], 500);
        }
    }

    /**
     * Check if the student number already exists in the enrolled_students table.
     *
     * @param string $studentNumber
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkDuplicateStudentNumber($studentNumber)
    {
        try {
            $existingStudent = EnrolledStudent::where('student_number', $studentNumber)->first();
            if ($existingStudent) {
                return response()->json(['message' => 'You have already enrolled!'], 400);
            } else {
                return response()->json(['message' => 'Student number is available'], 200);
            }
        } catch (\Exception $e) {
            Log::error('Error checking duplicate student number', [
                'message' => $e->getMessage(),
                'stack' => $e->getTraceAsString()
            ]);
            return response()->json(['message' => 'Error checking duplicate student number'], 500);
        }
    }
}
