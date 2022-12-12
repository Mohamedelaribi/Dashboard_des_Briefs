import React from 'react'
import {Link} from 'react-router-dom'
import './SideBar.css'
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
function SidBar() {
  return (
    <div className='sideBar'>
        <ul className='ulList'>
            
              <Link to={'/'}>
                <li className='linksItem active'> 
                  <HomeIcon/>
                  <span className='linkItemTitle'>Home</span>
                </li>
              </Link>

              <Link to={'/Promotion'}>
                <li className='linksItem'>
                  <SchoolIcon/>
                  <span className='linkItemTitle'> Promotions</span>
                </li>
              </Link>
            
            
            <Link to={'/Apprenant'}>
              <li className='linksItem'>
                <AccountCircleIcon/>
                <span className='linkItemTitle'>Apprenants</span>
                </li>
            </Link>
            
            
            <Link to={'/Brief'}>
              <li className='linksItem'>
                <AssignmentIcon/>
                <span className='linkItemTitle'>Briefs</span>
              </li>
            </Link>
        </ul>
    </div>
  )
}

export default SidBar