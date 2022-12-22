import React, { useContext } from 'react'
import { ContextTodo, useTodoContext } from '../context/ContextProvider'

const TodoList = () => {
    const {todoList} = useContext(ContextTodo);
    console.log(todoList)
  return (
    <div>
        {/* {todoList.map((todo)=>{
            <li>{todo}</li>
        })}
         */}
    </div>
    
  )
}

export default TodoList