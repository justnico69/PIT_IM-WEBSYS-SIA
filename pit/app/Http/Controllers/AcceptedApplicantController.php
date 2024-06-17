<?php

namespace App\Http\Controllers;

use App\Models\AdmissionInfo;
use App\Models\AcceptedApplicants;
use App\Models\StudentAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AcceptedApplicantController extends Controller
{
    public function acceptApplicant($id)
    {
        $applicant = AdmissionInfo::find($id);
        if (!$applicant) {
            return response()->json(['error' => 'Applicant not found'], 404);
        }

        // Generate a new student number
        $lastAcceptedApplicant = AcceptedApplicants::orderBy('student_number', 'desc')->first();
        $newStudentNumber = $lastAcceptedApplicant ? intval($lastAcceptedApplicant->student_number) + 1 : 2023123000;

        // Change email format
        $newEmail = str_replace('@gmail.com', '@stud.nnn', $applicant->email);

        // Create the student account first
        $studentAccount = StudentAccount::create([
            'student_number' => $newStudentNumber,
            'name' => "{$applicant->firstName} {$applicant->lastName}",
            'email' => $newEmail,
            'password' => Hash::make($newStudentNumber), // Set the student number as the password
        ]);

        // Then create a new accepted applicant
        $acceptedApplicant = AcceptedApplicants::create([
            'student_number' => $newStudentNumber,
            'firstName' => $applicant->firstName,
            'middleName' => $applicant->middleName,
            'lastName' => $applicant->lastName,
            'month' => $applicant->month,
            'day' => $applicant->day,
            'year' => $applicant->year,
            'gender' => $applicant->gender,
            'nationality' => $applicant->nationality,
            'email' => $applicant->email,
            'contactno' => $applicant->contactno,
            'streetadd' => $applicant->streetadd,
            'city' => $applicant->city,
            'province' => $applicant->province,
            'zipcode' => $applicant->zipcode,
            'emergencyName' => $applicant->emergencyName,
            'relationship' => $applicant->relationship,
            'emergencyContactNumber' => $applicant->emergencyContactNumber,
            'schoolLastAttended' => $applicant->schoolLastAttended
        ]);

        // Delete the applicant from admission_info table
        $applicant->delete();

        // Return the newStudentNumber along with the response
        return response()->json(['message' => 'Applicant accepted successfully', 'newStudentNumber' => $newStudentNumber]);
    }

    public function show($id)
    {
        // Find the accepted applicant by ID
        $applicant = AcceptedApplicants::find($id);

        // Check if the applicant exists
        if (!$applicant) {
            return response()->json(['message' => 'Applicant not found'], 404);
        }

        // Return the applicant details as a JSON response
        return response()->json($applicant);
    }

    public function index()
    {
        $applicants = AcceptedApplicants::all();
        return response()->json($applicants);
    }
}
