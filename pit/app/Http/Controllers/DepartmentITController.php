<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EnrolledStudent;
use App\Models\AcceptedApplicants;
use Illuminate\Support\Facades\Log;

class DepartmentITController extends Controller
{
    public function getITStudents()
    {
        try {
            $students = EnrolledStudent::where('program', 'BSIT')->get();
            return response()->json($students);
        } catch (\Exception $e) {
            Log::error('Error fetching IT students: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to fetch IT students. Please try again later.'], 500);
        }
    }

    public function getAcceptedApplicant($studentNumber)
    {
        try {
            // Fetch accepted applicant details
            $applicant = AcceptedApplicants::where('student_number', $studentNumber)->first();
            if (!$applicant) {
                return response()->json(['error' => 'Accepted applicant not found.'], 404);
            }
            
            // Fetch enrolled student details
            $student = EnrolledStudent::where('student_number', $studentNumber)->first();
            if ($student) {
                // Assign id_image from enrolled_students table to the applicant object
                $applicant->id_image = $student->id_image;

                // Log information about id_image
                Log::info('ID image URL: ' . $student->id_image);
            } else {
                Log::info('No enrolled student found with student number: ' . $studentNumber);
            }
            
            // Return response with applicant details including id_image
            return response()->json($applicant);
        } catch (\Exception $e) {
            Log::error('Error fetching accepted applicant details: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to fetch accepted applicant details. Please try again later.'], 500);
        }
    }
}
