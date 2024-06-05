<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class CashierController extends Controller
{
    /**
     * Display the student dashboard.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('CashierComponents/Cashier', [
            'auth' => auth()->user(),
        ]);
    }
}
