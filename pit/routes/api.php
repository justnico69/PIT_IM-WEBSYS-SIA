<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginEnController;
use App\Http\Controllers\ApplicantsController;
use App\Http\Controllers\MailController;

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


Route::post('/send-email', [MailController::class, 'sendMail']);


use App\Http\Controllers\EnrolledStudentController;

Route::post('/enroll', [EnrolledStudentController::class, 'store']);
Route::patch('/enroll/{id}/pay', [EnrolledStudentController::class, 'pay']);


use App\Http\Controllers\SectionController;

Route::get('/sections', [SectionController::class, 'getSections']);

use App\Http\Controllers\ProcessingEnrollmentController;

Route::get('/processing_enrollment', [ProcessingEnrollmentController::class, 'index']);
Route::post('/processing_enrollment/pay/{id}', [ProcessingEnrollmentController::class, 'pay']);
