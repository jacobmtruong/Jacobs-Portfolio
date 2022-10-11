import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'
import jmtsmall from '../images/jmt-small.svg'
import github from '../images/github.svg'
import email from '../images/email.svg'
import linkedin from '../images/linkedin.svg'
import ContactForm from './ContactForm'

const FooterPortfolio = () => {

    // Open a new tab with URL
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const [contact, setContact] = useState(false)

    const toggleContact = () => {
        setContact(!contact)
    }

    return (
        <footer>
            <div className='footer-container'>
                <div className='left-nest'>
                    <img src={jmtsmall} alt="jmt-icon" />
                    <p className='footer-legal'>© 2022 Jacob Minh Truong</p>
                </div>
                <p className='middle-nest'>Let's Connect</p>
                <div className='right-nest'>
                    <Link onClick={() => openInNewTab('https://github.com/jacobmtruong')}><img src={github} alt="github-icon" /></Link>
                    <Link onClick={() => openInNewTab('https://www.linkedin.com/in/jacob-truong/')}><img src={linkedin} alt="linked-icon" /></Link>
                    <Link onClick={toggleContact}><img src={email} alt="email-icon" /></Link>
                </div>
                {contact && (<ContactForm toggleContact={toggleContact} />)}
            </div>
        </footer>
    )
}

export default FooterPortfolio