import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react';

function AddBrief() {

    const [Brief, setBrief] = useState({
        name:"",
        detail:"",
        starDate:"",
        endDate:"",
    })

    function handle(e){

    }

  return (
    <div>
        <form onSubmit={e}>
            <input type="text" onChange={(e)=>handle} value={Brief.name} id='nameBrief' />
            <input type="text" onChange={(e)=>handle} value={Brief.detail} id='detail' />
            <input type="date" onChange={(e)=>handle} value={Brief.starDate} id='starDate' />
            <input type="date" onChange={(e)=>handle} value={Brief.endDate} id='endDate' />
   
        </form>


    </div>
  )
}

export default AddBrief