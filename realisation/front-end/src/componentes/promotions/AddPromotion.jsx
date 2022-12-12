import axios from 'axios';
import React from 'react'

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
       <form onSubmit={(e)=>sendData(e)}>

        <div>
          <label htmlFor="namePromortion">Nom Promotion: </label>
          <input type="text" name="namePromotion" onChange={handle} placeholder='entre le nom ' />
        </div>

        <div>
          <label htmlFor="descriptionPromotion">description Promotion: </label>
          <input type="text" name="descriptionPromotion" onChange={handle} placeholder='entre la description' />
        </div>

        <div>
          <label htmlFor="startAt">date debut: </label>
          <input type="date" name="startAt" onChange={handle} />
        </div>
        
        <div>
          <label htmlFor="endAt">Nom Promotion: </label>
          <input type="date" name="endAt" onChange={handle}  />
        </div>
        <button type='submit'>add promotion </button>
       </form>
    </div>
  )
}

export default AddPromotion