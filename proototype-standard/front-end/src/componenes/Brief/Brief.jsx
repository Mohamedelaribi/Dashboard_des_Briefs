import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from '../Header/Nav'

function Brief() {

  const [briefs,setBriefs] = useState([])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/brief').then((reasponse) =>{
    console.log(reasponse.data);  
    setBriefs(reasponse.data);
    });
  },[]);



    const deleteBrief= (id, e)=>{
      e.preventDefault();
      const thisbrief = e.currentTarget;
      axios.delete(`http://127.0.0.1:8000/api/deleteBrief/${id}`).then(res=>{
        setBriefs(briefs.filter((item)=>item.id !== Number(id)));
    });
      
    }
  return (
    <div>
        <Nav/>
          <h1>Brief</h1>
          <Link to='/AddBrief'>Ajouter Brief</Link>
          <div>
            {briefs.map(Brief=>(
              <div key={Brief.id}>
                <tr>{Brief.nameBrief}</tr>
                <button onClick={(e)=>deleteBrief(Brief.id, e)}>delete</button>
            </div>
            ))}
          </div>
        
    </div>
  )
}

export default Brief