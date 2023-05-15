import React from 'react';
import logo from '../images/planet.png'

function Navbar() {
  return (
    <nav>
        <img className="nav-logo" src={logo} width={40} alt="Navbar logo"/>

    </nav>
    )
}

export default Navbar