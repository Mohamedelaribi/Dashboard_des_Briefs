import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react';
function Brief() {

  const [Briefs, setBriefs]= useState([])

  useEffect(()=> {
   axios.get('http://127.0.0.1:8000/api/brief').then((response)=> {
    console.log(response.data);
    setBriefs(response.data); 
  });
},[]);





  return (
    <div className='briefContainer'>
      <button className='addBriefButton'>Add Brief</button>
      <div className="listBrief">
        {Briefs.map(brief=>(
          <div className="briefCard" key={brief.id}>
            <div className="briefImage">
              <img src="" alt="" />
            </div>
            <h2 className='titleBrief'>{brief.nameBrief}</h2>
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default Brief