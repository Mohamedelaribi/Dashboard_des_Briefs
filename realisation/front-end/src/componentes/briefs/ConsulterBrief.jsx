import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './style/briefs.css'
import axios from 'axios';
function ConsulterBrief() {


  const {id}= useParams();
  const [Brief , setBrief] = useState({task:[]});

  useEffect(()=>{

    axios.get(`http://127.0.0.1:8000/api/brief/${id}/edit`).then((response)=>{
      console.log(response.data)
      setBrief(response.data)
    })

  },[])


  return (
    <div className='containerConsulterBrief'>
        <div className='consulterBrief'>
        <div className="titleBrief">
          <h2 className='nameBrief'>{Brief.nameBrief}</h2>
          <span className="nambreOfTask">{Brief.task.length} taches</span>
        </div>

        <div className="detailBrief">
          <p>{Brief.detailBrief}</p>
        </div>
        <div className="dateBrief">
          <div>          
            <h3>Date De Livraison :</h3><span>{Brief.startDate}</span>
          </div>
          <div>          
            <h3>Date De Livraison :</h3><span>{Brief.endDate}</span>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default ConsulterBrief