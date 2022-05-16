import React, {useEffect} from 'react'
import './Services.css'
import DogWalking from '../assets/DogWalking.png'
import PetSitting from '../assets/PetSitting.png'
import DropInVisits from '../assets/DropInVisits.png'
import FooterImg from '../assets/FooterImg.png'
import ContactPage from '../pages/ContactPage'
import Aos from 'aos';
import "aos/dist/aos.css";


const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

  return (
    <div className='services'>
        <div className='services-container'>
            
            <div className='service-h2-container'>
                <h2>Services</h2>
            </div>

            <div className='service-boxes-container'>
                <div data-aos="flip-down" className='service-box'>
                    <h3>Dog Walking</h3>
                    <img src={DogWalking} alt="" />
                </div>
                <div data-aos="flip-down" className='service-box'>
                    <h3>Pet Sitting</h3>
                    <img src={PetSitting} alt="" />
                </div>
                <div data-aos="flip-down" className='service-box'>
                    <h3>Drop In Visits</h3>
                    <img src={DropInVisits} alt="" />
                </div>

            </div>

             <div className='services-footer-container'>
                 <img src={FooterImg} alt="" />
                <div className='services-footer'>
                    <h2>Not sure what you need?</h2>
                    <div className='services-button-container'>
                        <button>
                            <a href={<ContactPage />}>
                                Email Us
                            </a>
                        </button>
                        <button>
                            <a href="tel:807 620 5617">
                                Call Us
                            </a>
                        </button>
                    </div>
                </div>
             </div>

        </div>
    </div>
  )
}

export default Services