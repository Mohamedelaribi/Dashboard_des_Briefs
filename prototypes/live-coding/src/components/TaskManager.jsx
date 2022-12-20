import { createContext, useEffect, useState } from "react";
import React from 'react'
import Task from "./Task";
import axios from "axios";


export const taskContext =  createContext();




function TaskManager({children}) {
    const [tasks ,setTasks] = useState([])

    function getTasks() {
       
            axios.get('http://127.0.0.1:8000/api/tasks').then((response)=> {
             console.log(response.data);
             setTasks(response.data); 
           });
         
    }

  return (
        <taskContext.Provider value={{tasks, getTasks}}>
            {children}
        </taskContext.Provider>
  )
}

export default TaskManager