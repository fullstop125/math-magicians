import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/navbar.css';

const NavBar = () => (
  <header>
    <nav>
      <h3>Math Magicians</h3>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
