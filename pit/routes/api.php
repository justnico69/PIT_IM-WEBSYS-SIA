<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginEnController;
use App\Http\Controllers\ApplicantsController;

Route::get('/enrollment-status', function () {
    //
})->name('enrollment-status');


Route::get('/applicants', [ApplicantsController::class, 'index']);
Route::get('/applicants/{id}', [ApplicantsController::class, 'show']); 

Route::post('/login', 'Auth\LoginEnController@login');

use App\Http\Controllers\ApplicationController;


Route::get('/applications', [ApplicationController::class, 'index']);
Route::get('/applications/{id}', [ApplicationController::class, 'show']);
Route::delete('/applications/{id}', [ApplicationController::class, 'destroy']);


use App\Http\Controllers\AcceptedApplicantController;

Route::post('/applicant/accept/{id}', [AcceptedApplicantController::class, 'acceptApplicant']);

Route::get('/applicantshow/accept/{id}', [AcceptedApplicantController::class, 'show']);

Route::get('/applicantshow', [AcceptedApplicantController::class, 'index']);