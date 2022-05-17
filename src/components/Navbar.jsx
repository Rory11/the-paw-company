import React, {useState} from 'react';
import './Navbar.css';
import LogoAnimated from '../assets/LogoAnimated.mp4';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {

  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
       <div className='nav-container'>
           <h1>THE PAW COMPANY</h1>
           <video  width="80" height="80" autoPlay="autoplay" muted loop>
              <source src={LogoAnimated} type="video/mp4" />
            </video>
           <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li>
              <Link onClick={handleClick} to='home' smooth={true} duration={800}>
                <a href="/">Home</a>
              </Link>
            </li>
            <li>
              <Link onClick={handleClick}  to='about' smooth={true} duration={800}>
                <a href="#">About</a>
              </Link>
            </li>
            <li>
              <Link onClick={handleClick}  to='services' smooth={true} duration={800}>
                <a href="#">Services</a>
              </Link>
            </li>
            <li><a href="http://contact.thepawcompany.ca/">Contact</a></li>
           </ul>
           <div  className='hamburger' onClick={handleClick}>
             {click ? (<FaRegTimesCircle className='icon' />) : <HiOutlineMenuAlt4 className='icon' />}
             
           </div>
       </div>
    </div>
  )
}

export default Navbar