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