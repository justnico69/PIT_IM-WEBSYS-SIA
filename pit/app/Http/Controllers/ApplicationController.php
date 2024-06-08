<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdmissionInfo;

class ApplicationController extends Controller
{
    public function index()
    {
        $applicants = AdmissionInfo::all();
        return response()->json($applicants);
    }

    public function show($id)
    {
        $applicant = AdmissionInfo::findOrFail($id);
        return response()->json($applicant);
    }

    public function destroy($id)
    {
        $applicant = AdmissionInfo::findOrFail($id);
        $applicant->delete();

        return response()->json(['message' => 'Applicant rejected and deleted successfully!']);
    }
}
//heeeyyy