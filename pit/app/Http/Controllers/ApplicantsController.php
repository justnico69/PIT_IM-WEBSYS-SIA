<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdmissionInfo;
use App\Models\RejectedApplicants;
use Illuminate\Support\Facades\Mail;
use App\Mail\RejectedApplicant;

class ApplicantsController extends Controller
{
    public function index()
    {
        $users = AdmissionInfo::select('id', 'firstName', 'lastName')->get();
        $names = $users->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->firstName . ' ' . $user->lastName,
            ];
        });
        return response()->json($names);
    }

    public function show($id)
    {
        $user = AdmissionInfo::find($id);
        return response()->json($user);
    }

    public function reject($id)
    {
        $applicant = AdmissionInfo::find($id);

        if (!$applicant) {
            return response()->json(['message' => 'Applicant not found'], 404);
        }

        $rejectedApplicant = new RejectedApplicants();
        $rejectedApplicant->firstName = $applicant->firstName;
        $rejectedApplicant->middleName = $applicant->middleName;
        $rejectedApplicant->lastName = $applicant->lastName;
        $rejectedApplicant->month = $applicant->month;
        $rejectedApplicant->day = $applicant->day;
        $rejectedApplicant->year = $applicant->year;
        $rejectedApplicant->gender = $applicant->gender;
        $rejectedApplicant->nationality = $applicant->nationality;
        $rejectedApplicant->email = $applicant->email;
        $rejectedApplicant->contactno = $applicant->contactno;
        $rejectedApplicant->streetadd = $applicant->streetadd;
        $rejectedApplicant->city = $applicant->city;
        $rejectedApplicant->province = $applicant->province;
        $rejectedApplicant->zipcode = $applicant->zipcode;
        $rejectedApplicant->emergencyName = $applicant->emergencyName;
        $rejectedApplicant->relationship = $applicant->relationship;
        $rejectedApplicant->emergencyContactNumber = $applicant->emergencyContactNumber;
        $rejectedApplicant->schoolLastAttended = $applicant->schoolLastAttended;
        $rejectedApplicant->save();

        $applicant->delete();

        return response()->json(['message' => 'Applicant rejected successfully'], 200);
    }
}

