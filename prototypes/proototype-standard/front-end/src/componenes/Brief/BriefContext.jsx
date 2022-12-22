import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
axios.defaults.baseURL = "http://127.0.0.1:8000/api";

  


export const BriefContext = createContext();
export const  BriefProvider = ({children}) => {
    

    const [briefs,setBriefs] = useState([])
    const navigate = useNavigate();

    const getAllBriefs =async ()=>{
        const result = await axios.get("/brief")
        console.log(result.data)
        setBriefs(result.data)
    }


    const [Brief, setAddBrief] = useState({
        nameBrief:"",
        detailBrief:"",
        imageBrief : "",
        startDate:"",
        endDate:"",

    });


    const handelChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setAddBrief({... Brief, [name]:value})
    }
    

    const sendData = async (e)=>{
        e.preventDefault()
        await axios.post("/brief",Brief)
        getAllBriefs();
        navigate("/Brief");
    }
    
    
    const deleteBrief = async(id)=>{
        await axios.delete(`/brief/${id}`);
        getAllBriefs();
    }

    // const [singleBrief, SetSingleBrief] = useState([]);

    const getSingleBrief = async (id)=>{
        const response = await axios.get(`/brief/${id}/edit`)
        setAddBrief(response.data)
    }

    const updateBrief = async (id,e) => {
        e.preventDefault();
       await axios.put(`/brief/${id}`, Brief);
        getAllBriefs();
        navigate("/Brief");
    }
    
    

    



return(
<BriefContext.Provider value = {{
    briefs,
    getAllBriefs,
    handelChange,
    Brief,
    sendData,
    deleteBrief,
    getSingleBrief,
    updateBrief

    
}}>

    {children}
</BriefContext.Provider>

)













}