<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\AdmissionInfo;

class AdmissionInfoController extends Controller
{
    public function index()
    {
        return Inertia::render('AdmissionComponents/AdmissionForm', [
           
        ]);
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'firstName' => 'required|string',
            'middleName' => 'nullable|string',
            'lastName' => 'required|string',
            'month' => 'required|string',
            'day' => 'required|string',
            'year' => 'required|string',
            'gender' => 'required|string',
            'nationality' => 'required|string',
            'email' => 'required|email|unique:admission_info,email',
            'contactno' => 'required|string',
            'streetadd' => 'required|string',
            'city' => 'required|string',
            'province' => 'required|string',
            'zipcode' => 'required|string',
            'emergencyName' => 'required|string',
            'relationship' => 'required|string',
            'emergencyContactNumber' => 'required|string',
            'schoolLastAttended' => 'required|string',
        ]);

        // Create a new admission information record
        $admissionInfo = AdmissionInfo::create($validatedData);

        // Return a response indicating success
        return response()->json(['message' => 'Admission information stored successfully', 'data' => $admissionInfo], 201);
    }

    // Add other controller methods for updating, retrieving, and deleting admission information
}
