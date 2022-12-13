import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './style/promotion.css'
function EditPromotion() {


    const [Promotion, setPromotion] = useState([]);


    const {id}= useParams();
    console.log(id)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/promotion/${id}/edit`).then((response)=>{
            console.log(response.data)
            setPromotion(response.data)

    });
},[])






  return (
    <div>
        
    <form className='formPromotion'>
        <h3 className='titleForm'>Ajouter Un Promotion</h3>
        <div className='formInputs'>
        <input type="text" name="namePromotion" value={Promotion.namePromotion}  placeholder='entre le nom ' />

        <input type="text" name="descriptionPromotion" value={Promotion.descriptionPromotion}  placeholder='entre la description' />
    
        <input type="date" name="startAt" value={Promotion.startAt} />       

        <input type="date" name="endAt" value={Promotion.endAt} />

    </div>
      <div className='divButtonForm'>
        <button className='buttonForm' type='submit'>add promotion </button>
      </div>
   </form></div>
  )
}

export default EditPromotion