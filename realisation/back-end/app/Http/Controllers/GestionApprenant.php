<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Apprenant;

class GestionApprenant extends Controller
{

    public function index()
    {
        $apprenant = Apprenant::all();
        return response()->json($apprenant);
    }


    public function store(Request $request)
    {
        
        $apprenant = new Apprenant;
        $apprenant->promotion_id = $request->promotion_id;
        $apprenant->firstName = $request->firstName;
        $apprenant->lastName = $request->lastName;
        $apprenant->email = $request->email;
        $apprenant->save();
        return response()->json($apprenant);
    }


    public function edit($id)
    {
        $editApprenant = Apprenant::find($id);
        return response()->json($editApprenant);
    }

    public function update(Request $request, $id)
    {
        $updateApprenant = Apprenant::find($id);
        $updateApprenant->firstName = $request->newFirstName;
        $updateApprenant->lastName = $request->newLastName;
        $updateApprenant->email = $request->newEmail;
        $updateApprenant->save();
        return response()->json($updateApprenant);
    }


    public function destroy($id)
    {
       $destroyApprenant= Apprenant::find($id);
       $destroyApprenant->delete();
       return response()->json($destroyApprenant);
    }
}
