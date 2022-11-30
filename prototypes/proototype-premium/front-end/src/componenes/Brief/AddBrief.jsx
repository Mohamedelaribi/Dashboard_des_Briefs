import React from 'react'
import Nav from '../Header/Nav';
import axios from 'axios'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddBrief = ()=> {
  const nav = useNavigate();
    const [Brief, setBrief] = useState({
        nameBrief:"",
        detailBrief:"",
        startDate:"",
        endDate:"",

    });

      function handle(e){
      const newBrief = {...Brief}
      newBrief[e.target.name]= e.target.value
      setBrief(newBrief);
      console.log(newBrief)
    }

    function submit(e){
      e.preventDefault();
      axios.post('http://127.0.0.1:8000/api/brief',{
        nameBrief:Brief.nameBrief,
        detailBrief:Brief.detailBrief,
        startDate:Brief.startDate,
        endDate:Brief.endDate
      })
      
      .then(res=>{
          console.log(res.data)
           nav("/brief")
      })
      
    }

  return (
    <div>
      <Nav />
        <form onSubmit={(e)=>submit(e)} >
            <input name='nameBrief' value={Brief.nameBrief} onChange={handle} type="text"  id='name' />
            <input name='detailBrief' value={Brief.detailBrief} onChange={handle} type="text"  id='detail' />
            <input name='startDate' value={Brief.startDate} onChange={handle} type="date"  id='startDate' />
            <input name='endDate' value={Brief.endDate} onChange={handle} type="date"  id='endDate' />
            <button type='submit'>send</button>
        </form>


    </div>
  )
}

export default AddBrief