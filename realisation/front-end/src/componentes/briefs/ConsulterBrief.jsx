import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './style/briefs.css'
import axios from 'axios';
function ConsulterBrief() {


  const {id}= useParams();
  const [Brief , setBrief] = useState({});

  useEffect(()=>{

    axios.get(`http://127.0.0.1:8000/api/brief/${id}/edit`).then((response)=>{
      console.log(response.data)
      setBrief(response)
    })

  },[])


  return (
    <div className='containerConsulterBrief'>
      {Brief.map(brief=>(
        <div className='consulterBrief'>
        
        <div className="titleBrief">
          <h2 className='nameBrief'>{brief.nameBrief}</h2>
          <span className="nambreOfTask">7 taches</span>
        </div>

        <div className="detailBrief">
          <p>Cordially convinced did incommode existence put out suffering certainly. Besides another and saw ferrars limited ten say unknown. On at tolerably depending do perceived.</p>
        </div>
        <div className="dateBrief">
          <div>          
            <h3>Date De Livraison :</h3><span>01/01/2022</span>
          </div>
          <div>          
            <h3>Date De Livraison :</h3><span>01/01/2022</span>
          </div>

        </div>
      </div>
      ))}
      
    </div>
  )
}

export default ConsulterBrief