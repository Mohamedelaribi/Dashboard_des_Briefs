<?php

namespace App\Http\Controllers;
use App\Models\Brief;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function store(Request $request){
        $brief = new Brief;

        $brief->nameBrief = $request->input('nameBrief');
        $brief->detailBrief = $request->input('detailBrief');
        $brief->starDate = $request->input('starDate');
        $brief->endDate = $request->input('endDate');

        $brief->save();

        return response()->json($brief);
    }
}
