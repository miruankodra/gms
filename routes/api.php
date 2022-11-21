<?php

use App\Http\Controllers\TemporaryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Authentication\LoginController;
use App\Http\Controllers\Authentication\RegisterController;


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


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/user/login', [LoginController::class, 'login'])->withoutMiddleware(VerifyCsrfToken::class);

Route::post('/user/register', [RegisterController::class, 'store'])->withoutMiddleware(VerifyCsrfToken::class);
