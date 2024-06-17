<?php

namespace App\Http\Controllers;

use App\Models\ProcessingEnrollment;
use App\Models\EnrolledStudent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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
}
