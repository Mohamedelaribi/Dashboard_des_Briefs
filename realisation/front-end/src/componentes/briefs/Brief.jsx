import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style/briefs.css'
import ImageBrief from '../../images/images.png'
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
              <Link to={`/ConsulterBrief/${brief.id}`}>
              <img src={ImageBrief} alt="" />
              </Link>
            </div>
            <div className="contentCard">
              <h2 className='titleBrief'>{brief.nameBrief}</h2>
              <p className="detailBrief">{brief.detailBrief}</p>
            </div>
            <div className="buttons">
              <Link to={`./${brief.id}/plusdetail`}><button className='addBriefButton'>Plus Detail</button></Link>
              <Link to={`./${brief.id}/tasks`}><button className='TachesButton'>Taches</button></Link>
            </div>
            
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default Brief