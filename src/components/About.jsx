import React from "react";
import './About.css'
import OurFounderImg from '../assets/OurFounderImg.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
    }, [])

  return (
    <div name='about' className="about">
      <div className="about-container">
        <div className="header">
          <div className="who-we-are-container">
            <h2>Introduction</h2>
            <div data-aos="fade-right" className="who-we-are-content">
                <p>
                  Hello! Meet Thunder Bay's newest dog walking and pet sitting services!
                </p>
                <br />
                <p>
                  A local business that aims to create a welcoming environment for all pets.
                  Your pets safety will be priority number one.

                </p>
                <br />
                <p>
                  The Paw Company is reliable, trustworthy and cares about you and your pet.
                </p>
            </div>
          </div>
          <div className="founder-container">
            <h2>The Founder</h2>
            <img src={OurFounderImg} alt="Amity in a field with dog smiling." />
          </div>
        </div>
        <div data-aos="fade-left" className="content-container">
            <p>
              Meet Amity, the founder of The Paw Company. She grew up on her parents hobby farm in Neebing, ON.
              She has always been surrounded by animals like; dogs, cats, horses, rabbits and even a geep! (Half goat, half sheep)
            </p>
            <br />
            <p>
              In her teenage years she started dog sitting for family and friends, loving every second of it.  She has always dreamed
              of working in a veterinary clinic where she can help animals in need and care for them.
            </p>
            <br />
            <p>
              Amity started dog walking and petting sitting more frequently after having her son, Finley. She found herself with more free 
              time and a flexible schedule, perfect for accommodating  pet families of all kinds. She cant wait to keep your pawesome friends
              some company! 
            </p>
        
        </div>
      </div>
    </div>
  );
};

export default About;
