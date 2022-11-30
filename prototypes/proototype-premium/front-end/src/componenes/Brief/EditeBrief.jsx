import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Nav from '../Header/Nav'
import axios from 'axios'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function EditeBrief() {
    const nav = useNavigate();
    const [brief,setBrief] = useState({
        nameBrief:"",
        detailBrief:"",
        startDate:"",
        endDate:"",
    })

    const {id} = useParams();
    console.log(id);
    
    useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/brief/${id}`).then((reasponse) =>{
      console.log(reasponse.data);  
      setBrief(reasponse.data);
      });
    },[]);

    const handleEdite = (e)=>{
        // setBrief({...brief,[e.target.name]:e.target.value});
        const newBrief = {...brief}
        newBrief[e.target.name]= e.target.value
        setBrief(newBrief);
        console.log(newBrief)
    }


    const updateData = (e)=>{
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/brief/${id}`,{
            nameBrief:brief.nameBrief,
            detailBrief:brief.detailBrief,
            startDate:brief.startDate,
            endDate:brief.endDate
        })      
        .then(res=>{
            console.log(res.data)
            nav("/brief")
        })
    };
  return (
    <div>
        <Nav/>
        <h2>edite Brief</h2>
        <form onSubmit={(e)=>updateData(e)} >
            <input name='nameBrief'  type="text"  id='name' value={brief.nameBrief} onChange={(e)=>handleEdite(e)} />
            <input name='detailBrief'  type="text"  id='detail'value={brief.detailBrief} onChange={(e)=>handleEdite(e)} />
            <input name='startDate'  type="date"  id='startDate' value={brief.startDate} onChange={(e)=>handleEdite(e)} />
            <input name='endDate'  type="date"  id='endDate' value={brief.endDate} onChange={(e)=>handleEdite(e)} />
            <button type='submit'>send</button>
        </form>
    </div>
  )
}

export default EditeBrief




