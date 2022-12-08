import React from 'react';
import '../styles/projectsbanner.css'

const ProjectsBanner = () => {
    return (
        <div className='projects-banner-container'>
            <div className='projects-banner-small-container'>

                <div className='image-dmv'>
                    <div className='project-text'>
                        <p style={{fontSize: "36px"}}>DMV Rex</p>
                        <p style={{fontSize: "18px", color: "#C3CEE1"}}>Python / Flask / MySQL</p>
                    </div>
                    <a className='link' href={"https://github.com/jacobmtruong/Projects"} target="_blank" rel='noopener noreferrer'>Learn More</a>
                </div>

                <div className='image-fitlab'>
                    <div className='project-text'>
                        <p style={{fontSize: "36px"}}>FitLab</p>
                        <p style={{fontSize: "18px", color: "#C3CEE1"}}>React JS / Express / Mongoose</p>
                    </div>
                    <a className='link' href={"https://github.com/jacobmtruong/FitLab"} target="_blank" rel='noopener noreferrer'>Learn More</a>
                </div>


                <div className='image-festlook'>
                    <div className='project-text'>
                        <p style={{fontSize: "36px"}}>FestLook</p>
                        <p style={{fontSize: "18px", color: "#C3CEE1"}}>Java / Spring Boot / MySQL</p>
                    </div>
                    <a className='link' href={"https://github.com/jacobmtruong/FESTLOOK_Project"} target="_blank" rel='noopener noreferrer'>Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectsBanner