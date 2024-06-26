<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ApplicantsController;
use App\Http\Controllers\MailController;

Route::get('/enrollment-status', function () {
    //
})->name('enrollment-status');


Route::get('/applicants', [ApplicantsController::class, 'index']);
Route::get('/applicants/{id}', [ApplicantsController::class, 'show']); 
Route::post('/applicants/reject/{id}', [App\Http\Controllers\ApplicantsController::class, 'reject']);



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
Route::post('/send-rejection-email', [MailController::class, 'sendRejectionMail']);


use App\Http\Controllers\EnrolledStudentController;

Route::post('/enroll', [EnrolledStudentController::class, 'store']);
Route::patch('/enroll/{id}/pay', [EnrolledStudentController::class, 'pay']);


use App\Http\Controllers\SectionController;

Route::get('/sections', [SectionController::class, 'getSections']);

use App\Http\Controllers\ProcessingEnrollmentController;

Route::get('/processing_enrollment', [ProcessingEnrollmentController::class, 'index']);
Route::post('/processing_enrollment/pay/{id}', [ProcessingEnrollmentController::class, 'pay']);
Route::get('/check_duplicate_student_number/{studentNumber}', [ProcessingEnrollmentController::class, 'checkDuplicateStudentNumber']);

use App\Http\Controllers\DepartmentITController;

Route::get('/it-students', [DepartmentITController::class, 'getITStudents']);

Route::get('/accepted-applicants/{studentNumber}', [DepartmentITController::class, 'getAcceptedApplicant']);


use App\Http\Controllers\DepartmentTCMController;

Route::get('/tcm-students', [DepartmentTCMController::class, 'getTCMStudents']);

Route::get('/accepted-applicants/{studentNumber}', [DepartmentTCMController::class, 'getAcceptedApplicant']);

use App\Http\Controllers\DepartmentDSController;

Route::get('/ds-students', [DepartmentDSController::class, 'getDSStudents']);

Route::get('/accepted-applicants/{studentNumber}', [DepartmentDSController::class, 'getAcceptedApplicant']);

use App\Http\Controllers\DepartmentCSController;

Route::get('/cs-students', [DepartmentCSController::class, 'getCSStudents']);

Route::get('/accepted-applicants/{studentNumber}', [DepartmentCSController::class, 'getAcceptedApplicant']);

use App\Http\Controllers\DepartmentScmController;

Route::get('/scm-students', [DepartmentScmController::class, 'getScm']);

Route::get('/accepted-applicants/{studentNumber}', [DepartmentScmController::class, 'getAcceptedApplicant']);


use App\Http\Controllers\SendCOR;

Route::post('/send-cor', [SendCOR::class, 'sendCOR']);

