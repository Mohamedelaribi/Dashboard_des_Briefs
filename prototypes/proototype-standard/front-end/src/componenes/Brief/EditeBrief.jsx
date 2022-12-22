import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../Header/Nav'
import { BriefContext } from './BriefContext';
function EditeBrief() {
  const {Brief , updateBrief, handelChange,getSingleBrief} = useContext(BriefContext)
   const {id} = useParams();

  useEffect(()=>{
    getSingleBrief(id)
  },[]);

  console.log(Brief);
  return (

    <div>
        <Nav/>
        <h1>edit Brief</h1>
        <form onSubmit={(e)=>updateBrief(Brief.id,e)} key={Brief.id} >
            <input name='nameBrief'  type="text" onChange={handelChange} value={Brief.nameBrief}  id='name' />
            <input name='detailBrief'  type="text" onChange={handelChange} value={Brief.detailBrief} id='detail' />
            <input name='startDate' type="date" onChange={handelChange} value={Brief.startDate} id='startDate' />
            <input name='endDate' type="date"onChange={handelChange} value={Brief.endDate} id='endDate' />
            <button type='submit'>send</button>
        </form>
    </div>
  )
}

export default EditeBrief