import React, {useEffect} from 'react'
import './Services.css'
import KittyPaws from '../assets/KittyPaws.png'
import SmallPaws from '../assets/SmallPaws.png'
import PuppyPaws from '../assets/PuppyPaws.png'
import DogWalking from '../assets/DogWalking.png'
import FooterImg from '../assets/FooterImg.png'
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
                <div className='upper-row'>
                    <div data-aos="zoom-in"  className='service-box'>
                        <h3>KITTY PAWS</h3>
                        <img src={KittyPaws} alt="Cartoon of a grey and brown cat." />
                        <p>Your cat will have all their needs met!</p>
                        <br />
                        <p>Visits include;</p>
                        <p>feeding, cleaning the litter box, playtime, 
                            brushing, love and attention.
                        </p>
                        <br />
                        <p>$15 per visit (weekdays)</p>
                        <p>$20 per visit (weekends)</p>
                        <button>
                            <a href="http://contact.thepawcompany.ca/">
                                Get Started
                            </a>
                        </button>

                    </div>
                    <div data-aos="zoom-in" className='service-box dark'>
                        <h3>SMALLER PAWS</h3>
                        <img src={SmallPaws} alt="Catroon of a brown and white hamster." />
                        <p>Your little paw friend will be happy to!</p>
                        <br />
                        <p>Visits include;</p>
                        <p>Feeding, watering, love and attention 
                            (If they require it).
                        </p>
                        <br />
                        <p>*Please inquire for rates*</p>
                        <button>
                            <a href="http://contact.thepawcompany.ca/">
                                Get Started
                            </a>
                        </button>
                        
                    </div>
                </div>
                <div className='lower-row'>
                    <div data-aos="zoom-in" className='service-box'>
                        <h3>PUPPY PAWS</h3>
                        <img src={PuppyPaws} alt="Cartoon of a brown and white puppy with a leash in his mouth." />
                        <p>A solo visit to make sure your puppy has everything!</p>
                        <br />
                        <p>Visits include;</p>
                        <p>A quick trip outside (if vet approves), changing
                            pee pads, feeding, playtime, love and attention.
                        </p>
                        <br />
                        <p>*please inquire for rates*</p>
                        <button>
                            <a href="http://contact.thepawcompany.ca/">
                                Get Started
                            </a>
                        </button>
                    </div>
                    <div data-aos="zoom-in" className='service-box'>
                        <h3>DOG WALKING</h3>
                        <img src={DogWalking} alt="Cartoon of a brown dog leash." />
                        <p>Your dog will enjoy a 30 minute walk!</p>
                        <br />
                        <p>Small group walks;</p>
                        <p>$17 per walk (Mon-Fri)</p>
                        <p>$20 per walk (casual)</p>
                        <br />
                        <p>Solo walks;</p>
                        <p>$19 per walk (Mon-Fri)</p>
                        <p>$22 per walk (casual)</p>
                        <button>
                            <a href="http://contact.thepawcompany.ca/">
                                Get Started
                            </a>
                        </button>
                    </div>
                </div>

            </div>

             <div className='services-footer-container'>
                 <img src={FooterImg} alt="White outline of dog head with heart above it." />
                <div className='services-footer'>
                    <h2>Not sure what you need?</h2>
                    <p>We'll answer any questions you may have, help with scheduling, or anything else you may need.</p>
                    <div className='services-button-container'>
                        <button>
                            <a href="http://contact.thepawcompany.ca/">
                                Email Us
                            </a>
                        </button>
                        <button>
                            <a href="tel:807 252 8124">
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