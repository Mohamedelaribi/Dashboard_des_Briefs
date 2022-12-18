<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apprenant_brief', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('apprenant_id');
            $table->unsignedBigInteger('brief_id');
            $table->char('statu')->default('NULL');
            $table->foreign('apprenant_id')->references("id")->on('apprenants')
            ->onDelete('cascade');
            $table->foreign('brief_id')->references("id")->on('briefs')
            ->onDelete('cascade');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
