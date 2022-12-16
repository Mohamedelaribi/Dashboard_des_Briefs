import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './style/briefs.css';




function Task() {

  const[Tasks ,setTask] = useState({task:[]})
  const{id}=useParams();
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/brief/${id}/tasks`).then((response)=>{
      console.log(response.data)
      setTask(response.data)
    })
  },[])


  return (
    <div className='taskContainer'>
      <h2 className='nameBrief'>{Tasks.nameBrief}</h2>
      <div className="taskList">
        {Tasks.task.map(item=>(
            <div className="cardTask" key={item.id}>
              <h2 className='titleTask'>TASK1</h2>
            <div className="taskNameContainer">
              <h3 className="nameOfTask">Nom De Tache:</h3>
              <h3 className="taskName">{item.nameTask}</h3>
            </div>
            <div className="StartDateContainer">
              <p className="startDateOfTask">Date/Heure de debut:</p>
              <p className="taskStartDate">{item.startDate}</p>
            </div>
            <div className="endDateContainer">
              <p className="endDateOfTask">Date/Heure de debut:</p>
              <p className="taskEndtDate">{item.endDate}</p>
            </div>
        </div>
        ))}

  
      </div>
    </div>
  )
}

export default Task