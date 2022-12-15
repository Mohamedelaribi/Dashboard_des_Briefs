<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\Brief;

class GestionTask extends Controller
{
    public function index($id)
    {
        $getTasks = Brief::find($id);
        $getTasks->task;
        return response()->json($getTasks);
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
        $getTasks = Task::find($id);
        return response()->json($getTasks);
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
