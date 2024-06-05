<?php
use Inertia\Inertia;

class AuthController extends Controller
{
    public function showLoginForm()
    {
        $page = ['component' => 'Login']; // Example page component
        return Inertia::render('app', ['page' => $page]);
    }
}
