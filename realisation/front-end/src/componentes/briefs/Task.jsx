import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'




function Task() {

  const[Task ,setTask] = useState([])
  const{id}=useParams();
  console.log(id)
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/brief/${id}/tasks`).then((response)=>{
      console.log(response.data)
    })
  },[])


  return (
    <div className=''></div>
  )
}

export default Task