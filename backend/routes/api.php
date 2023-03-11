<?php

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




Route::prefix('v1')->group(function () {
//  Auth
    Route::post('/user/login', [LoginController::class, 'login']);
    Route::post('/enroll', [RegisterController::class, 'sendVerificationEmail']);
    Route::post('/verify/code', [RegisterController::class, 'verifyCode']);
    Route::post('/user/register', [RegisterController::class, 'store']);
    Route::post('/password/reset/request', []);
//  User Routes
    Route::get('/user/{id}', [\App\Http\Controllers\Api\AccountController::class, 'getUserInfo']);
    Route::post('/user/profile/store', [\App\Http\Controllers\Api\AccountController::class, 'storeProfile']);
    Route::get('/users', [\App\Http\Controllers\Api\AccountController::class, 'getUsers']);
//  Greenhouse Controller
    Route::get('/greenhouse/{id}', [\App\Http\Controllers\Api\GreenhouseController::class, 'getGreenhouseInfo']);
//  Statistics
    Route::get('/statistics/{id}', [\App\Http\Controllers\Api\StatisticsController::class, 'getStatistics']);
//  Modalities
    Route::get('/greenhouse/{id}/modalities', [\App\Http\Controllers\Api\ModalityController::class, 'getModalities']);
    Route::get('/modality/{id}', [\App\Http\Controllers\Api\ModalityController::class, 'getModalityInfo']);
    Route::post('/modality/select', [\App\Http\Controllers\Api\ModalityController::class, 'changeModality']);
//  Bots
    Route::get('/bot/{id}', [\App\Http\Controllers\Api\BotsController::class, 'getBotInfo']);
    Route::get('/bot', [\App\Http\Controllers\Api\BotsController::class, 'bot']);

})->withoutMiddleware(VerifyCsrfToken::class);



//Route::post('/dashboard', [DashboardController::class, 'index'])->withoutMiddleware(VerifyCsrfToken::class)->name('user.register');
