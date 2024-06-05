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

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/student-dashboard', function () {
    return Inertia::render('DComponents/StudentD');
})->name('student.dashboard');

Route::get('/registrar-dashboard', function () {
    return Inertia::render('RegistrarComponents/Registrar');
})->name('registrar.dashboard');

Route::get('/department-dashboard', function () {
    return Inertia::render('DepartmentComponents/Department');
})->name('department.dashboard');

Route::get('/cashier-dashboard', function () {
    return Inertia::render('CashierComponents/Cashier');
})->name('cashier.dashboard');


Route::get('/admission-form', function () {
    return Inertia::render('AdmissionComponents/AdmissionForm');
})->name('admission.form');

Route::post('/submitForm', [AdmissionInfoController::class, 'store'])->name('submitForm');

Route::get('/admin-dashboard', function () {
    return Inertia::render('AdminComponents/AllAdComps');
})->name('admin.dashoard');

Route::get('/application-process', function () {
    return Inertia::render('AdminComponents/Applications/App');
})->name('application-process');

// routes/web.php







Route::get('/login-page', [PagesController::class, 'showLoginPage'])->name('login-page');

Route::post('/login-page', [LoginEnController::class, 'login']);


// Dashboard routes for different user roles






// routes/web.php
use App\Http\Controllers\AdmissionHandlerController;

Route::get('/admission-handlers', [AdmissionHandlerController::class, 'index']);


