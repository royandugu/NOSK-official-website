import React from 'react';
import { Link } from 'react-router-dom';

//CSS importing
import './NavBar.css';
import "../css/bootstrap.min.css";

import { colors } from '../../assests/colors/colors';

const NavBar = (props) => {
  return (
      <div className="container-fluid bg-light">
        <div className="row navbarContainer">
            {/* Logo */}
            <div className="col-2">
              <Link to="/"><img src={require('../../assests/logo/NOSK_Logo_with_Tagline.png')} className="navbar__logo" alt='nepal open source klub' /></Link>
            </div>
            <div className='col-10 navbarContainer__items' style={{color : colors.header}}>
              <ul className="nav nav-bar justify-content-end">
                {/* About */}
                <li className="nav-item">
                  <Link to='/' className='nav-link about'>About</Link>
                </li>
                {/* Groups Under */}
                <li className="nav-item">
                  <Link to='/' className='nav-link groups'>Groups</Link>
                </li>
                {/* Alumni */}
                <li className="nav-item">
                  <Link to='/' className='nav-link alumni'>Alumni</Link>
                </li>
                {/* Events */}
                <li className="nav-item">
                  <Link to='/' className='nav-link events'>Events</Link>
                </li>
                {/* Projects */}
                <li className="nav-item">
                  <Link to='/' className='nav-link projects'>Projects</Link>
                </li>
                {/* Contact */}
                <li className="nav-item">
                  <Link to='#contact' className='nav-link contact'>Contact</Link>
                </li>
              </ul>
            </div>
        </div>
      </div>
    )
  }

export default NavBar;