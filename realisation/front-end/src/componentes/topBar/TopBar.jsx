import React from 'react'
import './TopBarStyle.css';
import {Link} from 'react-router-dom'
import Logo from '../../images/logo.png'

function Nav() {
  return (
    <div>
      <div className="topBar">
        <div className="logo">
          <Link to={'/'}>
            <img src={Logo} alt="" className='Logo' />
          </Link>
        </div>
        <div className="searche">
          <input className='searcheInput' type="text"/>
        </div>
      </div>
    </div>
  )
}

export default Nav