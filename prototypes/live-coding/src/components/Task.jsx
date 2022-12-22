import React, { useContext, useEffect } from 'react'
import { taskContext } from './TaskManager'

function Task() {

    const [tasks, getTasks] = useContext(taskContext)
    useEffect(()=>{
        getTasks();
        console.log(getTasks)
    },[])
    
    return (
    <div>

    </div>
  )
}

export default Task