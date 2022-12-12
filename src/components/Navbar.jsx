import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import jmt from '../images/jmt.svg'
import resume from '../images/Jacob_Truong_resume.pdf'
import ContactForm from './ContactForm';
import menu from '../images/menu.svg'
// import { BurgerSpin as icon} from 'react-burger-icons'

const Navbar = () => {

    const [contact, setContact] = useState(false)

    const toggleContact = () => {
        setContact(!contact)
    }

    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-small-container'>
                    <NavLink to='/'><img src={jmt} alt="jmt-logo" /></NavLink>

                    <nav>

                        <ul className='navbar-button-container'>
                            <li><NavLink to='/' className={({ isActive }) => (isActive ? "navbar-btn-active" : "navbar-btn")}>Projects</NavLink></li>
                            <li><NavLink to='/introduction' className={({ isActive }) => (isActive ? "navbar-btn-active" : "navbar-btn")}>About Me</NavLink></li>
                            <li><a href={resume} download="JacobTruong_resume.pdf" className="navbar-btn">Resume</a></li>
                            <li><NavLink onClick={toggleContact} className='navbar-btn-contact'>Contact</NavLink></li>
                        </ul>


                        <div className="dropdown">
                            <button className="btn"><img src={menu} alt='menu-icon'/></button>
                            <div className='dropdown-content'>
                                <NavLink to='/' className={({ isActive }) => (isActive ? "navbar-btn-active" : "navbar-btn")}>Projects</NavLink>
                                <NavLink to='/introduction' className={({ isActive }) => (isActive ? "navbar-btn-active" : "navbar-btn")}>About Me</NavLink>
                                <a href={resume} download="JacobTruong_resume.pdf" className="navbar-btn">Resume</a>
                                <NavLink onClick={toggleContact} className='navbar-btn-contact'>Contact Me</NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {contact && (<ContactForm toggleContact={toggleContact} />)}
        </>
    )
}

export default Navbar