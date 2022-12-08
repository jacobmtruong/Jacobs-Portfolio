import React from 'react';
import '../styles/projectsbanner.css'
import { Link } from 'react-router-dom'

const ProjectsBanner = () => {
    return (
        <div className='projects-banner-container'>
            <div className='projects-banner-small-container'>

                <div className='image-dmv'>
                    <div className='project-text'>
                        <p style={{fontSize: "36px"}}>DMV Rex</p>
                        <p style={{fontSize: "18px", color: "#C3CEE1"}}>Python / Flask / MySQL</p>
                    </div>
                    <Link className='link'>Learn More</Link>
                </div>

                <div className='image-fitlab'>
                    <div className='project-text'>
                        <p style={{fontSize: "36px"}}>FitLab</p>
                        <p style={{fontSize: "18px", color: "#C3CEE1"}}>React JS / Express / Mongoose</p>
                    </div>
                    <Link className='link' to='/project/fitlab'>Learn More</Link>
                </div>


                <div className='image-festlook'>
                    <div className='project-text'>
                        <p style={{fontSize: "36px"}}>FestLook</p>
                        <p style={{fontSize: "18px", color: "#C3CEE1"}}>Java / Spring Boot / MySQL</p>
                    </div>
                    <Link className='link' to='/project/festlook'>Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectsBanner