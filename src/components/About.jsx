import React, { useEffect} from "react";
import './About.css'
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
  return (
    <div className="about">
      <div className="container">
        <div className="header">
          <div data-aos="fade-down" className="who-we-are-container">
            <h2>Who We Are</h2>
            <div className="who-we-are-content">
                <p>Hello! We are Thunder Bay's newest dog walking
                     and pet sitting business!
                </p>
                <br />
                <p>We are a local business that aims to create a 
                   welcoming environment for all pets with paws. 
                   Your pets safety is our number one priority.
                </p>
            </div>
          </div>
          <div data-aos="fade-down" className="founder-container">
            <h2>Our Founder</h2>
          </div>
        </div>
        <div data-aos="fade-down" className="content-container">
            <p>
            Meet Amity, the founder of The Paw Company. 
            She grew up on her parents hobby farm in Neebing, 
            ON. She has always been surrounded by animals like 
            dogs, cats, horses, rabbits and even a geep (Half goat half sheep)
            </p>
            <br />
            <p>
            In her teenage years she started dog sitting for family and friends,
            loving every second of it.  She has always dreamed of working in
            a veterinary clinic where she can help animals in need and care
            for them.
            </p>
            <br />
            <p>
            Amity started dog walking and petting sitting more often around the 
            time she had her son, with the free time it gave her the opportunity
             to take dog walking more seriously. She realized how much she loved 
             it and decided to go full force and start a company with the help of 
             her family and friends.
            </p>
            <br />
            <p>
            She is so passionate about animals and cares for them as if they were 
            her own. She cant wait to keep your pawesome friend some company! 
            </p>
        </div>
        <div className="footer">
            <div data-aos="fade-down" className="footer-container">
                <p>
                    We know how hard it is to leave pets, whether its for work or vacation.
                </p>
                <div className="cursive">
                <p>
                    So let us keep your furry friends some company.
                </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
