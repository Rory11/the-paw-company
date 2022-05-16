import React, {useState} from 'react';
import './ContactNav.css';
import LogoAnimated from '../assets/LogoAnimated.mp4';


const ContactNav = () => {

  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className='contact-nav'>
       <div className='contact-nav-container'>
           <h1>THE PAW COMPANY</h1>
           <video  width="80" height="80" autoPlay="autoplay" muted loop>
              <source src={LogoAnimated} type="video/mp4" />
            </video>
           <ul className={click? 'contact-nav-menu active' : 'nav-menu'}>
            <li>
                <a href="/">Home</a>
            </li>
           </ul>
       </div>
    </div>
  )
}

export default ContactNav