import React from 'react';
import {NavLink} from 'react-router-dom'
import '../styles/navbar.css'
import jmt from '../images/jmt.svg'

const Navbar = () => {
    // Open In New Tab
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

  return (
    <>
        <div className='navbar-container'>
            <div className='navbar-small-container'>
                <NavLink to='/projects'><img src={jmt} alt="jmt-logo" /></NavLink>

                <ul className='navbar-button-container'>
                    <li><NavLink to='/projects' className={({ isActive }) => (isActive ? "navbar-btn-active" : "navbar-btn")}>Projects</NavLink></li>
                    <li><NavLink to='/introduction' className={({ isActive }) => (isActive ? "navbar-btn-active" : "navbar-btn")}>About Me</NavLink></li>
                    <li><NavLink onClick={() => openInNewTab('https://docs.google.com/document/d/1KSNwWAvoN168sRC1PUszAASQadhU6LyDTD5B_NVKO1c/edit?usp=sharing')} className="navbar-btn">Resume</NavLink></li>
                    <li><NavLink to='/contact' className='navbar-btn-contact'>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar