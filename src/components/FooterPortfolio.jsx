import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/footer.css'
import jmtsmall from '../images/jmt-small.svg'
import github from '../images/github.svg'
import email from '../images/email.svg'

const FooterPortfolio = () => {

    // Open a new tab with URL
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };


  return (
    <div className='footer-container'>
        <div className='left-nest'>
            <img src={jmtsmall} alt="jmt-icon" />
            <p className='footer-legal'>© 2022 Jacob Minh Truong</p>
        </div>
        <p className='middle-nest'>Let's Connect</p>
        <div className='right-nest'>
            <Link onClick={() => openInNewTab('https://github.com/jacobmtruong')}><img src={github} alt="github-icon" /></Link>
            <Link to="/contact"><img src={email} alt="email-icon" style={{backgroundColor: "#64748B", borderRadius: '40px'}}/></Link>
        </div>
    </div>
  )
}

export default FooterPortfolio