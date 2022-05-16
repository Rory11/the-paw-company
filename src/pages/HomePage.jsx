import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services';
import Navbar from '../components/Navbar';

function HomePage () {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Services />
    </div>
  );
}

export default HomePage