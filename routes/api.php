<?php

use App\Http\Controllers\Admin\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(AuthController::class)->prefix('admin')->group(function(){
    Route::post('/login', 'authenticate')->name('admin.login');
});


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
