<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GestionPromotion;
use App\Http\Controllers\GestionBrief;
use App\Http\Controllers\GestionApprenant;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('/promotion', GestionPromotion::class);
Route::resource('/promotion.brief', GestionBrief::class)->shallow();
Route::resource('/promotion.apprenant', GestionApprenant::class)->shallow();