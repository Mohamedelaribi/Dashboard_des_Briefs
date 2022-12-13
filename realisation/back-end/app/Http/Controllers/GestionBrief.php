<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brief;

class GestionBrief extends Controller
{

    public function index()
    {
        $brief = Brief::all();
        return response()->json($brief);
    }

    public function store(Request $request)
    {
      
        $brief = new Brief();
        $brief->nameBrief = $request->nameBrief;
        $brief->detailBrief = $request->detailBrief;
        $brief->imageBrief = $request->imageBrief;
        $brief->startDate = $request->startDate;
        $brief->endDate = $request->endDate;
        $brief->save();
        return response()->json($brief);
    }

    public function edit($id)
    {
        $editBrief = Brief::find($id);
        return response()->json($editBrief);
    }

    public function update(Request $request, $id)
    {
        $updateBrief = Brief::find($id);
        $updateBrief->promotion_id = $request->promotion_id;
        $updateBrief->nameBrief = $request->newNameBrief;
        $updateBrief->detailBrief = $request->newDetailBrief;
        $updateBrief->startDate = $request->newStartDate;
        $updateBrief->endDate = $request->newEndDate;
        $updateBrief->save();
        return response()->json($updateBrief);
    }


    public function destroy($id)
    {
        $destroyBrief = Brief::find($id);
        $destroyBrief->delete();
        return response()->json($destroyBrief);
    }
}
