import React, { useContext } from 'react'
import axios from 'axios'
import Nav from '../Header/Nav'
import {useState} from 'react';
import { BriefContext } from './BriefContext';





const AddBrief = ()=> {
const {Brief,handelChange, sendData} = useContext(BriefContext)


  return (
    <div>
      
        <form onSubmit={sendData} >
            <input name='nameBrief'  onChange={handelChange} type="text"  id='name' />
            <input name='detailBrief' onChange={handelChange}  type="text"  id='detail' />
            <input name='imageBrief' onChange={handelChange}  type="text"  id='detail' />
            <input name='startDate'  onChange={handelChange} type="date"  id='startDate' />
            <input name='endDate'  onChange={handelChange} type="date"  id='endDate' />
            <button type='submit'>send</button>
        </form>


    </div>
  )
}

export default AddBrief