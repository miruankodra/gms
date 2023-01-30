<?php

use App\Http\Controllers\TemporaryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Authentication\LoginController;
use App\Http\Controllers\Authentication\RegisterController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::post('/login', [TemporaryController::class, 'login']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/user/login', [LoginController::class, 'login'])->withoutMiddleware(VerifyCsrfToken::class)->name('user.login');

Route::post('/user/register', [RegisterController::class, 'store'])->withoutMiddleware(VerifyCsrfToken::class)->name('user.register');

Route::get('/user/{id}', [DashboardController::class, 'getUserInfo'])->withoutMiddleware(VerifyCsrfToken::class);

Route::post('/user/profile/store', [DashboardController::class, 'storeProfile']);

Route::get('/users', [DashboardController::class, 'getUsers'])->withoutMiddleware(VerifyCsrfToken::class);

Route::get('/greenhouse/{id}', [DashboardController::class, 'getGreenhouseInfo'])->withoutMiddleware(VerifyCsrfToken::class);

Route::get('/statistics/{id}', [DashboardController::class, 'getGreenhouseStatistics'])->withoutMiddleware(VerifyCsrfToken::class);


Route::post('/dashboard', [DashboardController::class, 'index'])->withoutMiddleware(VerifyCsrfToken::class)->name('user.register');
