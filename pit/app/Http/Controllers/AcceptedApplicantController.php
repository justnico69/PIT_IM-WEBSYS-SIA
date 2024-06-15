<?php
namespace App\Http\Controllers;
use App\Models\AdmissionInfo;
use App\Models\AcceptedApplicants;
use Illuminate\Http\Request;
class AcceptedApplicantController extends Controller
{
    public function acceptApplicant($id)
    {
        $applicant = AdmissionInfo::find($id);
        if (!$applicant) {
            return response()->json(['error' => 'Applicant not found'], 404);
        }

        // Generate the student number
        $lastAcceptedApplicant = AcceptedApplicants::orderBy('student_number', 'desc')->first();
        $lastStudentNumber = $lastAcceptedApplicant ? intval($lastAcceptedApplicant->student_number) : 2023122999;
        $newStudentNumber = $lastStudentNumber + 1;

        // Create a new accepted applicant
        $acceptedApplicant = new AcceptedApplicants();
        $acceptedApplicant->firstName = $applicant->firstName;
        $acceptedApplicant->middleName = $applicant->middleName;
        $acceptedApplicant->lastName = $applicant->lastName;
        $acceptedApplicant->month = $applicant->month;
        $acceptedApplicant->day = $applicant->day;
        $acceptedApplicant->year = $applicant->year;
        $acceptedApplicant->gender = $applicant->gender;
        $acceptedApplicant->nationality = $applicant->nationality;
        $acceptedApplicant->email = $applicant->email;
        $acceptedApplicant->contactno = $applicant->contactno;
        $acceptedApplicant->streetadd = $applicant->streetadd;
        $acceptedApplicant->city = $applicant->city;
        $acceptedApplicant->province = $applicant->province;
        $acceptedApplicant->zipcode = $applicant->zipcode;
        $acceptedApplicant->emergencyName = $applicant->emergencyName;
        $acceptedApplicant->relationship = $applicant->relationship;
        $acceptedApplicant->emergencyContactNumber = $applicant->emergencyContactNumber;
        $acceptedApplicant->schoolLastAttended = $applicant->schoolLastAttended;
        $acceptedApplicant->student_number = $newStudentNumber;
        $acceptedApplicant->save();

        // Delete the applicant from admission_info table
        $applicant->delete();

       

        return response()->json(['message' => 'Applicant accepted successfully']);
    }
    public function show($id)
    {
        // Find the accepted applicant by ID
        $applicant = AcceptedApplicant::find($id);

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