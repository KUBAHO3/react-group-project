import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

function Navbar() {
  return (
    <nav className="container">
      <img className="nav-logo mt-2" src={logo} width={40} height={40} alt="Navbar logo" />
      <ul className="nav-items pt-1">
        <li className="nav-item-list"><NavLink to="/" activeClassName="active"><p className="tab">Rockets</p></NavLink></li>
        <li className="nav-item-list"><NavLink to="/missions" activeClassName="active"><p className="tab">Missions</p></NavLink></li>
        <li className="nav-item-list"><NavLink to="/profile" activeClassName="active"><p className="tab">Profile</p></NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
