<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brief;
use App\Models\Task;


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
        $updateBrief->nameBrief = $request->nameBrief;
        $updateBrief->detailBrief = $request->detailBrief;
        $updateBrief->startDate = $request->startDate;
        $updateBrief->endDate = $request->endDate;
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
