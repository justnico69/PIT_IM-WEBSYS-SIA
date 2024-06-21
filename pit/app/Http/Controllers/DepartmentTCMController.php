<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EnrolledStudent;
use App\Models\AcceptedApplicants;
use Illuminate\Support\Facades\Log;

class DepartmentTCMController extends Controller
{
    public function getTCMStudents()
    {
        try {
            $students = EnrolledStudent::where('program', 'BSTCM')->get();
            return response()->json($students);
        } catch (\Exception $e) {
            Log::error('Error fetching TCM students: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to fetch TCM students. Please try again later.'], 500);
        }
    }

    public function getAcceptedApplicant($studentNumber)
    {
        try {
            $applicant = AcceptedApplicants::where('student_number', $studentNumber)->first();
            if (!$applicant) {
                return response()->json(['error' => 'Accepted applicant not found.'], 404);
            }
            return response()->json($applicant);
        } catch (\Exception $e) {
            Log::error('Error fetching accepted applicant details: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to fetch accepted applicant details. Please try again later.'], 500);
        }
    }
}

