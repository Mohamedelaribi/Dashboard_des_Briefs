<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Promotion;

class GestionPromotion extends Controller
{

    public function index()
    {
        $getAllPromotion = Promotion::all();
        return response()->json($getAllPromotion);
    }

    public function store(Request $request)
    {
        $promotion = new Promotion;

        $promotion->namePromotion = $request->namePromotion;
        $promotion->descriptionPromotion = $request->descriptionPromotion;
        $promotion->startAt = $request->startAt;
        $promotion->endAt = $request->endAt;
        $promotion->save();
        return response()->json($promotion);
    }

    public function show($id)
    {

    }

    public function edit($id)
    {
        $getPromotion = Promotion::find($id);
        return response()->json($getPromotion);
    }

    public function update(Request $request, $id)
    {
        $updatePromotion = Promotion::find($id);

        $updatePromotion->namePromotion = $request->newNamePromotion;
        $updatePromotion->descriptionPromotion = $request->newDescriptionPromotion;
        $updatePromotion->numberLearners = $request->newNumberLearners;
        $updatePromotion->startAt = $request->newStartAt;
        $updatePromotion->endAt = $request->newEndAt;

        $updatePromotion->save();
        return response()->json($updatePromotion);
    }


    public function destroy($id)
    {
        $destroyPromotion = Promotion::find($id);
        $destroyPromotion->delete();
        return response()->json($destroyPromotion);
    }
}
