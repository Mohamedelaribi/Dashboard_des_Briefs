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
      axios.delete(`http://127.0.0.1:8000/api/brief/${id}`).then(res=>{
        setBriefs(briefs.filter((item)=>item.id !== Number(id)));
    });
      
    }
  return (
    <div>
        <Nav/>
          <h1>Brief</h1>
          <Link to='/AddBrief'>Ajouter Brief</Link>
          <div>

          <table className="table">
  <thead>
    <tr>
      <th scope="col">name brief</th>
      <th scope="col">detail brief</th>
      <th scope="col">start Date</th>
      <th scope="col">end Date</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
  {briefs.map(Brief=>(            
    <tr key={Brief.id}>
      <td>{Brief.nameBrief}</td>
      <td>{Brief.detailBrief}</td>
      <td>{Brief.startDate}</td>
      <td>{Brief.endDate}</td>
      <td><button onClick={(e)=>deleteBrief(Brief.id, e)}>delete</button>
      <Link to={`/editeBrief/${Brief.id}`}>edit</Link></td>
    </tr>
))}
  </tbody>
</table>
            
          </div>
        
    </div>
  )
}

export default Brief