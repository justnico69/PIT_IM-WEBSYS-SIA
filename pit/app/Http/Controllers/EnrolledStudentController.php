<?php

namespace App\Http\Controllers;

use App\Models\AcceptedApplicants;
use App\Models\ProcessingEnrollment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EnrolledStudentController extends Controller
{
    public function store(Request $request)
    {
        Log::info('Enrollment request received', $request->all());

        try {
            // Check if the user has already submitted an enrollment form
            $existingEnrollment = ProcessingEnrollment::where('student_number', $request->student_number)->first();
            if ($existingEnrollment) {
                return response()->json(['message' => 'You have already submitted the enrollment form.'], 400);
            }

            $validatedData = $request->validate([
                'student_number' => 'required|exists:accepted_applicants,student_number',
                'program' => 'required|string',
                'yrlevel' => 'required|string',
                'semester' => 'required|string',
                'section' => 'required|string',
                'id_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            Log::info('Validated data', $validatedData);

            $acceptedApplicant = AcceptedApplicants::where('student_number', $validatedData['student_number'])->first();
            Log::info('Accepted applicant found', ['student_number' => $acceptedApplicant->student_number]);

            $idImagePath = $request->file('id_image')->store('id_images', 'public');
            Log::info('ID image stored', ['path' => $idImagePath]);

            ProcessingEnrollment::create([
                'student_number' => $acceptedApplicant->student_number,
                'firstName' => $acceptedApplicant->firstName, 
                'lastName' => $acceptedApplicant->lastName, 
                'program' => $validatedData['program'],
                'yrlevel' => $validatedData['yrlevel'],
                'semester' => $validatedData['semester'],
                'section' => $validatedData['section'],
                'id_image' => $idImagePath,
                'paid' => false,
            ]);

            Log::info('Enrollment processing initiated successfully.');

            return response()->json(['message' => 'Submission Sent Successfully. Please complete your payments to be enrolled in your department and section'], 201);
        } catch (\Exception $e) {
            Log::error('Error during enrollment processing', [
                'message' => $e->getMessage(),
                'stack' => $e->getTraceAsString()
            ]);

            return response()->json(['message' => 'There was an error processing the enrollment.'], 500);
        }
    }

    public function pay(Request $request, $id)
    {
        $enrollment = ProcessingEnrollment::findOrFail($id);
        $enrollment->paid = true;
        $enrollment->save();

        // Now, move the student to the enrolled_students table
        $enrolledStudent = EnrolledStudent::create([
            'student_number' => $enrollment->student_number,
            'program' => $enrollment->program,
            'yrlevel' => $enrollment->yrlevel,
            'semester' => $enrollment->semester,
            'section' => $enrollment->section,
            'id_image' => $enrollment->id_image,
        ]);

        $enrollment->delete(); // Remove from processing enrollment

        return response()->json(['message' => 'Enrollment paid and successfully moved to enrolled students', 'enrolled_student' => $enrolledStudent]);
    }

    public function showProcessingEnrollment()
    {
        $enrollments = ProcessingEnrollment::all();
        return response()->json(['enrollments' => $enrollments]);
    }
}
