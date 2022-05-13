import React from 'react';
import PawCompanyVideo from '../assets/PawCompanyVideo.mp4';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <video autoPlay loop muted playsinline="true"
      disablePictureInPicture="true">
            <source src={PawCompanyVideo} type="video/mp4" />
        </video>
        <div className='container'>
            <h1 className='box'>Welcome to The Paw Company</h1>
            <h2 className='box'>We're Thunder Bay's most reliable pet sitting and dog walking services!</h2>
            <div className='button-container'>
            <button className='box'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Home