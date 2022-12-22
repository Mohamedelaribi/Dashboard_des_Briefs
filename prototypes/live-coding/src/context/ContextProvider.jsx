import { createContext, useContext, useState } from "react";
import React from 'react'
export const ContextTodo = createContext();

const text = ["Hello world"];

const ContextProvider = ({children}) => {
    const [todoList, setTodoList] = useState('text');


  return (
    <ContextTodo.Provider value={todoList}>
      {children}
    </ContextTodo.Provider>
  )
}

export default ContextProvider