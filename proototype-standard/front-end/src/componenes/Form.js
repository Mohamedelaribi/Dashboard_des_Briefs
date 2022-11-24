import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";


function Form(){

    const [task, setTask] = useState("");
    return(
        <div className="form">
            <form>
                <input type="text" className="form-control" placeholder="task"></input>
                <button type="submit" className="button">send</button>
            </form>
            <h1>{task}</h1>
        </div>
    )
}

export default Form;
