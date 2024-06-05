<?php
namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function showLoginPage()
    {
        return Inertia::render('LoginForm');
    }
}

    
