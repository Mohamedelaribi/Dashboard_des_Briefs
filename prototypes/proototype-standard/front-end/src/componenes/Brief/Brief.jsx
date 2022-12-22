import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Header/Nav'
import { useContext } from 'react';
import { BriefContext } from './BriefContext';

function Brief() {

  const {briefs, getAllBriefs , deleteBrief} = useContext(BriefContext)
  useEffect(()=>{
    getAllBriefs()

  },[]);
  console.log(briefs);



  return (
    <div>
        <Nav/>
          <h1>Brief</h1>
          <Link to='/AddBrief'>Ajouter Brief</Link>
          <div>
          <table class="table">
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
      <td><button onClick={()=>deleteBrief(Brief.id) }  >delete</button>
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