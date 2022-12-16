import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './style/briefs.css';




function Task() {

  const[Tasks ,setTask] = useState([])
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
        {Tasks.map(task=>(
          <div className="cardTask">
              <h2 className='titleTask'>{task.nameTask}</h2>
            <div className="taskNameContainer">
              <h3 className="nameOfTask">Nom De Tache:</h3>
              <h3 className="taskName"></h3>
            </div>
            <div className="StartDateContainer">
              <p className="startDateOfTask">Date/Heure de debut:</p>
              <p className="taskStartDate">11/01/2022 10:00</p>
            </div>
            <div className="endDateContainer">
              <p className="endDateOfTask">Date/Heure de debut:</p>
              <p className="taskEndtDate">11/01/2022 10:00</p>
            </div>
        </div>
        ))}
  
      </div>
    </div>
  )
}

export default Task