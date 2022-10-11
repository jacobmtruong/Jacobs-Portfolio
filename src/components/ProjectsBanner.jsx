import React from 'react';
import '../styles/projectsbanner.css'
import arrow from '../images/arrow.svg'
import { Link } from 'react-router-dom'

const ProjectsBanner = () => {
    return (
        <div className='projects-banner-container'>
            <div className='projects-banner-small-container'>

                <Link className='single-project-container'>
                    <img src={require('../images/dmvrex.png')} alt="dmvrex-project" className='project-banner-img-dmv'/>
                    <div className='project-text-container'>
                        <p className='project-title'>DMV Rex</p>
                        <img src={arrow} alt="arrow-view" className='project-arrow'/>
                    </div>
                </Link>

                <Link className='single-project-container'>
                    <img src={require('../images/FitLab.png')} alt="dmvrex-project" className='project-banner-img-fitlab' />
                    <div className='project-text-container'>
                        <p className='project-title'>FitLab</p>
                        <img src={arrow} alt="arrow-view" className='project-arrow'/>
                    </div>
                </Link>

                <Link className='single-project-container'>
                    <img src={require('../images/FestLook.png')} alt="dmvrex-project" className='project-banner-img-festlook' />
                    <div className='project-text-container'>
                        <p className='project-title'>FestLook</p>
                        <img src={arrow} alt="arrow-view" className='project-arrow'/>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default ProjectsBanner