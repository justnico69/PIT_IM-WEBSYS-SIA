<?php

use App\Models\AdmissionInfo;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentDController;
use App\Http\Controllers\RegistrarController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\CashierController;
use Inertia\Inertia;
use App\Http\Controllers\AdmissionInfoController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\Auth\LoginEnController;


Route::get('/', function () {
    return Inertia::render('WelcomePage/WelPage');
})->name('welcome-page');;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware(['web'])->group(function () {
    Route::get('/student-dashboard', function () {
        return Inertia::render('DComponents/StudentD');
    })->middleware(['auth:student', 'role:student'])->name('student.dashboard');
});


Route::get('/login', [PagesController::class, 'showLoginPage'])->name('login');

Route::post('/login', [LoginEnController::class, 'login']);

Route::post('/logout', [LoginEnController::class, 'logout'])->name('logout');

Route::get('/test', function () {
    dump(Auth::user());
});

{/*STUDENT DASHBOARD*/} 
Route::get('/student-dashboard', function () {
    return Inertia::render('DComponents/StudentD');
})->name('student.dashboard');

Route::get('/student-dash-enrollment-process', function () {
    return Inertia::render('DComponents/EnrollmentWindow/EnrollApp');
})->name('student-dash-enrollment-process');

Route::get('/student-dash-cert-of-registration', function () {
    return Inertia::render('DComponents/CertOfRegisWindow/CORApp');
})->name('student-dash-cert-of-registration');

Route::get('/student-dash-program-details', function () {
    return Inertia::render('DComponents/ProgramDetailsWindow/ProgramApp');
})->name('student-dash-program-details');

{/*REGISTRAR DASHBOARD*/} 
Route::get('/registrar-dashboard', function () {
    return Inertia::render('RegistrarComponents/Registrar');
})->name('registrar.dashboard');

Route::get('/settings-dashboard', function () {
    return Inertia::render('RegistrarComponents/Settings');
})->name('settings.dashboard');

{/*DEPARTMENT DASHBOARD*/} 
Route::get('/department-dashboard', function () {
    return Inertia::render('DepartmentComponents/Department');
})->name('department.dashboard');

{/*CASHIER DASHBOARD*/} 
Route::get('/cashier-dashboard', function () {
    return Inertia::render('CashierComponents/Cashier');
})->name('cashier.dashboard');

{/*ADMISSION PAGES*/} 
Route::get('/admission-form', function () {
    return Inertia::render('AdmissionComponents/AdmissionForm');
})->name('admission.form');

Route::get('/thank-you', function () {
    return Inertia::render('AdmissionComponents/ThankYouPage');
})->name('thank.you');

Route::post('/submitForm', [AdmissionInfoController::class, 'store'])->name('submitForm');

{/*ADMISSION DASHBOARD*/} 
Route::get('/admin-dashboard', function () {
    return Inertia::render('AdminComponents/AllAdComps');
})->name('admin.dashoard');

Route::get('/application-process', function () {
    return Inertia::render('AdminComponents/Applications/App');
})->name('application-process');

Route::get('/accepted-applicants', function () {
    return Inertia::render('AdminComponents/ApplicantList/App');
})->name('accepted.applicants');

// routes/web.php















// routes/web.php
use App\Http\Controllers\AdmissionHandlerController;

Route::get('/admission-handlers', [AdmissionHandlerController::class, 'index']);


