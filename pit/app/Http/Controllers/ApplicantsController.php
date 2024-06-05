<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdmissionInfo;

class ApplicantsController extends Controller
{
    public function index()
    {
        $users = AdmissionInfo::select('id', 'firstName', 'lastName')->get(); // Make sure 'id' is selected
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
}
