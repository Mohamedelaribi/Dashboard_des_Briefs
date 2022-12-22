import { useContext } from "react"
import { TodoContextProvider } from "../context/TodoContext"



const AddTodoForm =()=>{
    const {handleChangeAdd , submitData} = useContext(TodoContextProvider)




    return(
            <form onSubmit={submitData}>
                <div className="mb-3">
                    <input type="text" className="form-control" name="nameBrief" onChange={handleChangeAdd}/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" name="detailBrief" onChange={handleChangeAdd}/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" name="imageBrief" onChange={handleChangeAdd}/>
                </div>
                <div className="mb-3">
                    <input type="datetime-local" className="form-control" name="startDate" onChange={handleChangeAdd}/>
                </div>
                <div className="mb-3">
                    <input type="datetime-local" className="form-control" name="endDate" onChange={handleChangeAdd}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
    )
}
export default AddTodoForm