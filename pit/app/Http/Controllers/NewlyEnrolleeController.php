<?php

namespace App\Http\Controllers;

use App\Models\NewlyEnrollee;
use Illuminate\Http\Request;

class NewlyEnrolleeController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'student_number' => 'required|exists:student_account,student_number',
            'program' => 'required',
            'yrlevel' => 'required',
            'semester' => 'required',
            'id_image' => 'required|image',
        ]);

        // Handle file upload
        if ($request->hasFile('id_image')) {
            $idImagePath = $request->file('id_image')->store('id_images', 'public');
        }

        NewlyEnrollee::create([
            'student_number' => $request->student_number,
            'email' => $request->email,
            'program' => $request->program,
            'yrlevel' => $request->yrlevel,
            'semester' => $request->semester,
            'id_image' => $idImagePath ?? null,
        ]);

        return response()->json(['message' => 'Enrollment successful'], 201);
        
    }
    public function showImage($id)
    {
        $enrollee = NewlyEnrollee::findOrFail($id);
        $idImagePath = $enrollee->id_image;

        if (!$idImagePath) {
            abort(404);
        }

        $imagePath = Storage::disk('public')->path($idImagePath);

        if (!Storage::disk('public')->exists($idImagePath)) {
            abort(404);
        }

        $file = Storage::disk('public')->get($idImagePath);
        $type = Storage::disk('public')->mimeType($idImagePath);

        return response($file, 200)->header('Content-Type', $type);
    }
}

