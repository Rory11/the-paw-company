import React, {useState} from 'react';
import './Navbar.css';
import LogoAnimated from '../assets/LogoAnimated.mp4';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';

const Navbar = () => {

  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
       <div className='container'>
           <h1>THE PAW COMPANY</h1>
           <video  width="80" height="80" autoPlay="autoplay" muted loop>
              <source src={LogoAnimated} type="video/mp4" />
            </video>
           <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
           </ul>
           <div  className='hamburger' onClick={handleClick}>
             {click ? (<FaRegTimesCircle className='icon' />) : <HiOutlineMenuAlt4 className='icon' />}
             
           </div>
       </div>
    </div>
  )
}

export default Navbar