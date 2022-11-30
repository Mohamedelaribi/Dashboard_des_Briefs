import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
        <ul>
            <Link to="/Promotion">Promotion</Link>
            <Link to="/Apprenant">Apprenant</Link>
            <Link to="/Brief">Brief</Link>
        </ul>
    </div>
  )
}

export default Nav;