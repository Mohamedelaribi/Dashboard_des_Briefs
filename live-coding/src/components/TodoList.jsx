import { useContext, useEffect } from "react";
import { TodoContextProvider } from "../context/TodoContext";


const TodoList = ()=>{
    const {Todo , getAllTodo} = useContext(TodoContextProvider);

    useEffect(()=>{
        getAllTodo();
        console.log(Todo)
    },[])

    return(
        <table className="table">
  <thead>
    <tr>
      <th>todo</th>
    </tr>
  </thead>
  <tbody>
    {Todo.map((item)=>
        <tr key={item.id}>
      <td>{item.nameBrief}</td>

    </tr>
    )}

    
  </tbody>
</table>
    )
}
export default TodoList


