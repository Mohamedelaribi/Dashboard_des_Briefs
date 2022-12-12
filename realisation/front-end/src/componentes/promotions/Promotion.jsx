import React from 'react'
import {Link} from 'react-router-dom'
import AddPromotion from './AddPromotion'
function Promotion() {
  return (
    <div className='promottionList'>
        <Link > ajouter Promotion</Link>
        <AddPromotion/>
    </div>
  )
}

export default Promotion