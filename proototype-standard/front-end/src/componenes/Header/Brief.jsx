import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav'

function Brief() {

  const [briefs,setBriefs] = useState([])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/brief').then((reasponse) =>{
    console.log(reasponse.data);  
    setBriefs(reasponse.data);
    });
  },[]);
  return (
    <div>
        <Nav/>
          <h1>Brief</h1>
          <Link to='/AddBrief'>Ajouter Brief</Link>
          <div>
            {briefs.map(Brief=>(
              <div key={Brief.id}>
                <h3>{Brief.nameBrief}</h3>
                <h3>{Brief.detailBrief}</h3>
            </div>
            ))}
          </div>
        
    </div>
  )
}

export default Brief