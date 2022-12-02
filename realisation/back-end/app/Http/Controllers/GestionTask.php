<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class GestionTask extends Controller
{
    public function index()
    {
        $getAllTasks = Task::all();
        return response()->json($getAllTasks);
    }

    public function store(Request $request)
    {
        $task = new Task; 

        $task->nameTask = $request->nameTask;
        $task->brief_id = $request->brief_id;	
        $task->startDate = $request->startDate;
        $task->endDate = $request->endDate;
        $task->save();
        return response()->json($task);
    }

    public function show($id)
    {
        
    }

    public function edit($id)
    {
        $getTask = Promotion::find($id);
        return response()->json($getTask);
    }

    public function update(Request $request, $id)
    {
        $updateTask = Task::find($id);

        $updateTask->nameTask = $request->newNameTask;
        $updateTask->brief_id = $request->newbrief_id;
        $updateTask->startDate = $request->newStartDate;
        $updateTask->endDate = $request->newEndDate;

        $updateTask->save();
        return response()->json($updateTask);
    }


    public function destroy($id)
    {
        $destroyTask = Task::find($id);
        $destroyTask->delete();
        return response()->json($destroyTask);
    }
}
