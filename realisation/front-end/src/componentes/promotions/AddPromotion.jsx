import axios from 'axios';
import React from 'react'
import './style/promotion.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddPromotion() {

  const NavTo = useNavigate();
  const [Promotion , setPromotion] = useState({})


  function handle (e){
    const name = e.target.name;
    const value = e.target.value;
    setPromotion({...Promotion,[name]:value})
  }


  function sendData (e){

      e.preventDefault();
      axios.post('http://127.0.0.1:8000/api/promotion', Promotion).then(res=>{
        console.log(res.data)
        NavTo('/Promotion')
      })
  }




  return (
    <div className='addPromotion'>
       <form className='formPromotion' onSubmit={(e)=>sendData(e)}>
        <h3 className='titleForm'>Ajouter Un Promotion</h3>
        <div className='formInputs'>
          <input type="text" name="namePromotion" onChange={handle} placeholder='entre le nom ' />

          <input type="text" name="descriptionPromotion" onChange={handle} placeholder='entre la description' />
        
          <input type="date" name="startAt" onChange={handle} />       
  
          <input type="date" name="endAt" onChange={handle}  />

        </div>
          <div className='divButtonForm'>
            <button className='buttonForm' type='submit'>add promotion </button>
          </div>
       </form>
    </div>
  )
}

export default AddPromotion