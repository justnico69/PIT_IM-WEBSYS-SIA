<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminDController extends Controller
{
    /**
     * Display the admin dashboard.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('AdminComponents/AllAdComps');
    }

    // You can add more methods to handle other functionalities related to the admin here
}
