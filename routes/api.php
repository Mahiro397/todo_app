<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
/*
Route::group(['middleware' => 'api'], function(){
   
});
*/


//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});


Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/signUp', [AuthController::class, 'signUp']);


Route::middleware('auth:sanctum')->group(function() {
    Route::post('/user', [AuthController::class, 'getLoginUser']);
    Route::get('posts', 'App\Http\Controllers\Api\PostController@index');
    Route::get('/posts/sortDeadline', 'App\Http\Controllers\Api\PostController@sortDeadline'); 
    Route::post('post/create', 'App\Http\Controllers\Api\PostController@create');
    Route::post('edit', 'App\Http\Controllers\Api\PostController@edit'); 
    Route::put('/posts/{id}', 'App\Http\Controllers\Api\PostController@update');
    Route::delete('/posts/{id}', 'App\Http\Controllers\Api\PostController@delete');
});


//Route::get('users', function () {
//    return User::all();
//});