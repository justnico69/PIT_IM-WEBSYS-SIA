<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class RegistrarController extends Controller
{
    /**
     * Display the student dashboard.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('DepartmentComponents/Department', [
            'auth' => auth()->user(),
        ]);
    }
}
