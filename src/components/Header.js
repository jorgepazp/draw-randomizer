import React from 'react';
import {
    Link, NavLink
  } from "react-router-dom";


const Header = () =>{

    return(
        <header className='header'>
        <nav>
            <h2 className='logo'>LOGO</h2>
          <ul>
            <li>
              <NavLink exact activeClassName='link' to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName='link' to="/about">About</NavLink>
            </li>
            
          </ul>
        </nav>
        </header>
    );

}

export default Header;