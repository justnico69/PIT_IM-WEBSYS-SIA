<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdmissionHandler;

class AdmissionHandlerController extends Controller
{
    public function index()
    {
        // Fetch all data from the admission_handlers table
        $admissionHandlers = AdmissionHandler::all();

        // Return the data as a JSON response
        return response()->json($admissionHandlers);
    }
}
