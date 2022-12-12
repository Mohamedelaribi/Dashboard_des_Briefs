import React from 'react'
import ImgPromotion from '../../images/imgPromotion.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './home.css'
function Home() {
  return (
    <div className='detailPromotionCard'>
        <h2 className='titlePromotion'>Promotion</h2>
        <div className='detailPromotion'>
            <img src={ImgPromotion} alt="" />
            <div className='infoPromotion'>
                <h3 className='namePromotion'>CYBER GANG</h3>
                <p>Promo dev web Solicode 22/23 </p>
            </div>
        </div>
            <div className='nomeInformation'>
            <div className='numbreApprenant'>
                    <GroupsIcon/>
                    <span>16 apprenant</span>
                </div>
                <div className='location'>
                    <LocationOnIcon/>
                    <span>INT-Maroc</span>
                </div>
                <div className='location'>
                    <CalendarMonthIcon/>
                    <span>16/09/2022</span>
                </div>
                
            </div>
    </div>
  )
}

export default Home