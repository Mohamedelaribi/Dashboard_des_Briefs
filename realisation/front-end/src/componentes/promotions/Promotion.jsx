import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import './style/promotion.css'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Promotion() {

        const [Promotions, setPromotion] = useState([])
        useEffect(()=>{
          axios.get('http://127.0.0.1:8000/api/promotion').then((response)=>{
            console.log(response.data)
            setPromotion(response.data)
        });
      },[])


      const deletePromotion = (id,e) => {
        e.preventDefault()
        axios.delete(`http://127.0.0.1:8000/api/promotion/${id}`).then(rep=>{
          console.log(rep)
          setPromotion(Promotions.filter((item)=>item.id !== Number(id)));
        })
      }


  return (
    <div className='promottionList'>


            
              {/* <Popup trigger={<button> Trigger</button>} position="right center">
                <div>Popup content here !!</div>
              </Popup> */}
            
        <Link to ={'/AddPromotion'} style={{color:"white"}}><button className='addPromotionButton'> ajouter Promotion</button></Link>
        
        <div className='containerPromotion'>

          {Promotions.map(promotion =>(
            <div className='promotionCard' key={promotion.id}>
            <div className="icons">
              <BorderColorIcon style={{color:"#296DB0" , cursor:"pointer"}}/>
              <a onClick={(e)=>deletePromotion(promotion.id,e)}><DeleteIcon style={{color:"#DA1E1E", cursor:"pointer"}}/></a> 
            </div>
            <h2 className='titleCard'>{promotion.namePromotion}</h2>
            <div className='detailPromotion'>
                <div className="left">
                  <div className='promotionDescription'>
                  <span className='desciptionPromotion'>{promotion.descriptionPromotion}</span>
                  </div>
                  <div className='startAt'>
                  <span className='startAt'>{promotion.startAt}</span>
                  </div>
                </div>
                <div className="rigth">
                  <div className="promotionName">
                    <span className='namePromotion'>{promotion.namePromotion}</span>
                  </div>
                  <div className="numbreOfApprenant">
                    <span className='namePromotion'>{Promotions.length}</span>
                  </div>
                  
                </div>
            </div>

          </div>
          
          ))}
          </div>
    </div>
  )
}

export default Promotion