<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\StudentAccount;
use App\Models\AdmissionHandler;
use App\Models\DepartmentStaff;
use App\Models\Cashier;
use App\Models\Registrar;

class LoginEnController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $email = $credentials['email'];
        $user = null;
        $redirectUrl = null;

        if (strpos($email, '@stud.nnn') !== false) {
            $user = StudentAccount::where('email', $email)->first();
            $redirectUrl = '/student-dashboard';
        } elseif (strpos($email, '@admin.nnn') !== false) {
            $user = AdmissionHandler::where('email', $email)->first();
            $redirectUrl = '/admin-dashboard';
        } elseif (strpos($email, '@dept.nnn') !== false) {
            $user = DepartmentStaff::where('email', $email)->first();
            $redirectUrl = '/department-dashboard';
        } elseif (strpos($email, '@cash.nnn') !== false) {
            $user = Cashier::where('email', $email)->first();
            $redirectUrl = '/cashier-dashboard';
        } elseif (strpos($email, '@regis.nnn') !== false) {
            $user = Registrar::where('email', $email)->first();
            $redirectUrl = '/registrar-dashboard';
        } else {
            return response()->json(['message' => 'Invalid email domain'], 401);
        }

        if ($user && Hash::check($credentials['password'], $user->password)) {
            Auth::login($user);
            return response()->json(['message' => 'Login successful', 'redirectUrl' => $redirectUrl], 200);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }
}
