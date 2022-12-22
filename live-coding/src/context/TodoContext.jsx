import axios from "axios";
import { createContext, useState } from "react";


export const TodoContextProvider = createContext();


const TodoListProvider = ({children}) =>{
        const [Todo , setTodo] = useState([]);
        const [AddTodo , setAddTodo] = useState([])

        const getAllTodo = async () =>{
            const dataApi = await axios.get('http://127.0.0.1:8000/api/brief')
            setTodo(dataApi.data)
        }

        const handleChangeAdd = (e)=>{
            const name = e.target.name
            const value = e.target.value
            setAddTodo({...AddTodo,[name]:value})

        }

        const submitData = async (e)=>{
            e.preventDefault()
            const addApi = await axios.post('http://127.0.0.1:8000/api/brief', AddTodo)

        }






        return(
            <TodoContextProvider.Provider value={{ 
                Todo,
                getAllTodo,
                handleChangeAdd,
                submitData,
             }}>
                {children}
            </TodoContextProvider.Provider>
        )
}
export default TodoListProvider