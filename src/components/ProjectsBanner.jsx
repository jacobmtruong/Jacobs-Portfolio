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
                    <Link className='link'>Learn More</Link>
                </div>


                <div className='image-festlook'>
                    <div className='project-text'>
                        <p style={{fontSize: "36px"}}>FestLook</p>
                        <p style={{fontSize: "18px", color: "#C3CEE1"}}>Java / Spring Boot / MySQL</p>
                    </div>
                    <Link className='link' to='/project/festlook'>Learn More</Link>
                </div>

                {/* <Link className='single-project-container'>
                    <img src={require('../images/dmvrex.png')} alt="dmvrex-project" className='project-banner-img-dmv' />
                    <div className='project-text-container'>
                        <p className='project-title'>DMV Rex</p>
                        <img src={arrow} alt="arrow-view" className='project-arrow' />
                    </div>
                </Link> */}
{/* 
                <Link className='single-project-container'>
                    <img src={require('../images/FitLab.png')} alt="dmvrex-project" className='project-banner-img-fitlab' />
                    <div className='project-text-container'>
                        <p className='project-title'>FitLab</p>
                        <img src={arrow} alt="arrow-view" className='project-arrow' />
                    </div>
                </Link>

                <Link className='single-project-container'>
                    <img src={require('../images/FestLook.png')} alt="dmvrex-project" className='project-banner-img-festlook' />
                    <div className='project-text-container'>
                        <p className='project-title'>FestLook</p>
                        <img src={arrow} alt="arrow-view" className='project-arrow' />
                    </div>
                </Link> */}
            </div>
        </div>
    )
}

export default ProjectsBanner