<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apprenant extends Model
{
    use HasFactory;

    public function brief(){
        return $this->hasMany(Brief::class);
    }

    public function task(){
        return $this->hasMany(Task::class);
    }
}
