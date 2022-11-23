import React from "react";

function Form(){
    return(
        <div className="form">
            <form>
                <input type="text" className="form-control" placeholder="task"></input>
                    <button className="button">send</button>
            </form>
        </div>
    )
}

export default Form;