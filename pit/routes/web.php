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
use App\Models\AcceptedApplicants;
use App\Http\Controllers\MailController;

Route::get('/', function () {
    return Inertia::render('WelcomePage/WelPage');
})->name('welcome-page');;

Route::get('/admission-form', function () {
    return Inertia::render('AdmissionComponents/AdmissionForm');
})->name('admission-form');;


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware(['web'])->group(function () {
    // Student Dashboard
    Route::get('/student-dashboard', function () {
        return Inertia::render('DComponents/StudentD');
    })->middleware(['auth:student', 'role:student'])->name('student.dashboard');

    Route::get('/enrollment-process', function () {
        return Inertia::render('DComponents/EnrollmentWindow/EnrollApp');
    })->name('student-dash-enrollment-process');
    
    Route::get('/certofreg', function () {
        return Inertia::render('DComponents/CertOfRegisWindow/CORApp');
    })->name('certofregistration');
    
    Route::get('/program-details', function () {
        return Inertia::render('DComponents/ProgramDetailsWindow/ProgramApp');
    })->name('student-dash-program-details');

    Route::get('/shiftreq', function () {
        return Inertia::render('DComponents/ShiftReqWindow/ShiftReqApp');
    })->name('shiftrequest');

    Route::get('/assess-billing', function () {
        return Inertia::render('DComponents/AssessBillingWindow/AssessBillingApp');
    })->name('assessment-billing');
    

    // Department Staff Dashboard
    Route::get('/department-dashboard', function () {
        return Inertia::render('DepartmentComponents/Department');
    })->middleware(['auth:department_staff', 'role:department_staff'])->name('department.dashboard');
    // Cashier Dashboard
    Route::get('/cashier-dashboard', function () {
        return Inertia::render('CashierComponents/Cashier');
    })->middleware(['auth:cashier', 'role:cashier'])->name('cashier.dashboard');

    Route::get('/payprocess', function () {
        return Inertia::render('CashierComponents/PayProcessWindow/PayProcessApp');
    })->middleware(['auth:cashier', 'role:cashier'])->name('payment-process');

    
    // Registrar Dashboard
    Route::get('/registrar-dashboard', function () {
        return Inertia::render('RegistrarComponents/Registrar');
    })->middleware(['auth:registrar', 'role:registrar'])->name('registrar.dashboard');

    // Admission Handler Dashboard
    Route::get('/admin-dashboard', function () {
        return Inertia::render('AdminComponents/AllAdComps');
    })->middleware(['auth:admission_handler', 'role:admission_handler'])->name('admin.dashboard');

    Route::get('/application-process', function () {
        return Inertia::render('AdminComponents/Applications/App');
    })->middleware(['auth:admission_handler', 'role:admission_handler'])->name('application.process');

    
    Route::get('/accepted-applicants', function () {
        return Inertia::render('AdminComponents/ApplicantList/App');
    })->middleware(['auth:admission_handler', 'role:admission_handler'])->name('accepted.applicants');

    
});



Route::post('/submitForm', [AdmissionInfoController::class, 'store'])->name('submitForm');


Route::get('/login', [PagesController::class, 'showLoginPage'])->name('login');

Route::post('/login', [LoginEnController::class, 'login']);

Route::post('/logout', [LoginEnController::class, 'logout'])->name('logout');


// routes/web.php
use App\Http\Controllers\AdmissionHandlerController;

Route::get('/admission-handlers', [AdmissionHandlerController::class, 'index']);