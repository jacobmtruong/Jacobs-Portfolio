import {useState} from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
import jmt from '../images/jmt.svg'
import resume from '../images/Jacob_Truong_resume.pdf'
import ContactForm from './ContactForm';

const Navbar = () => {
    // Open In New Tab
    // const openInNewTab = url => {
    //     window.open(url, '_blank', 'noopener,noreferrer');
    // };

    // download files
    // const onClickResume = () => {
    //     // using Java Script method to get PDF file
    //     fetch('Jacob_Truong_resume.pdf').then(response => {
    //         response.blob().then(blob => {
    //             // Creating new object of PDF file
    //             const fileURL = window.URL.createObjectURL(blob);
    //             // Setting various property values
    //             let alink = document.createElement('a');
    //             alink.href = fileURL;
    //             alink.download = 'Jacob_Truong_resume.pdf';
    //             alink.click();
    //         })
    //     })
    // }

    const [contact, setContact] = useState(false)

    const toggleContact = () => {
        setContact(!contact)
    }
    
    return (
        <>
            <div className='navbar-container'>
                <div className='navbar-small-container'>
                    <NavLink to='/projects'><img src={jmt} alt="jmt-logo" /></NavLink>

                    <ul className='navbar-button-container'>
                        <li><NavLink to='/projects' className={({ isActive }) => (isActive ? "navbar-btn-active" : "navbar-btn")}>Projects</NavLink></li>
                        <li><NavLink to='/introduction' className={({ isActive }) => (isActive ? "navbar-btn-active" : "navbar-btn")}>About Me</NavLink></li>
                        <li><a href={resume} download="JacobTruong_resume.pdf" className="navbar-btn">Resume</a></li>
                        <li><NavLink onClick={toggleContact} className='navbar-btn-contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            {contact && (<ContactForm toggleContact = {toggleContact}/>)}
        </>
    )
}

export default Navbar