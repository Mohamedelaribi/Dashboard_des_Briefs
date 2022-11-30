<?php

namespace App\Http\Controllers;
use App\Models\Brief;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function store(Request $request){
        $brief = new Brief;

        $brief->nameBrief = $request->input('nameBrief');
        $brief->promotion_id = $request->input('promotion_id');
        $brief->detailBrief = $request->input('detailBrief');
        $brief->startDate = $request->input('startDate');
        $brief->endDate = $request->input('endDate');

        $brief->save();

        return response()->json($brief);
    }

    public function index(){
        $briefs = Brief::all();

        return response()->json($briefs);
    }

    public function destroy($id){
        $brief = Brief::find($id);
        $brief->delete();
        return response()->json($brief);


    }


    public function edit($id){
        $brief = Brief::find($id);
        return response()->json($brief);
    }

    public function update(Request $request,$id){
        $brief = Brief::find($id);

        $brief->nameBrief = $request->nameBrief;
        $brief->detailBrief = $request->detailBrief;
        // $brief->starDate = $request->starDate;
        // $brief->endDate = $request->endDate;
        $brief->save();
        return $brief;
    }
}
