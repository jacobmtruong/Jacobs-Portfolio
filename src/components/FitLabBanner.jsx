import React from 'react';
import '../styles/fitlabbanner.css'
import gif from '../images/gif.gif'

const FitLabBanner = () => {
  return (
    <div className='fitlab-container'>
        <h1 className='fitlab-h1'>FitLab</h1>
        <img src={gif} alt="gif" className='gif'/>
    </div>
  )
}

export default FitLabBanner