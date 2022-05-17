import React from 'react'
import './Reviews.css'
import ReviewRat from '../assets/ReviewRat.png'
import ReviewDog from '../assets/ReviewDog.png'
import ReviewBanner from '../assets/ReviewBanner.png'

const Reviews = () => {


  return (
    <div name='reviews' className='reviews'>
        <div className='reviews-container'>
            <div className='review-header'>
                <div className='reviews-h2-container'>
                <h2>Reviews</h2>
                </div>
                
                <h3>Hear what our customers have to say!</h3>
            </div>
            <div className='review-one'>
                <p>"Our two rats and one fish really seemed to enjoy there week with Amity!
                    Great at following instructions and super thoughtful towards both us and 
                    our animals, keeping us updated with pictures as requested. Would recommend 
                    to anyone interested in hiring a professional pet sitter." - Thomas G.
                </p>
                <img src={ReviewRat} alt="cute rat in cage with the background shaped like a paw print" />
            </div>
            <div className='review-two'>
                <img src={ReviewDog} alt="cute puppy sitting outside with background shaped like a paw print." />
                <p>"Amity has been just AMAZING at tiring out my pup during their walks!! 
                    She is very responsive, flexible with our schedule, and my pup just LOVES her!!
                    Don't know what we'd do without her ❤" - Jen D.</p>
            </div>
            <div className='review-footer'>
                <img src={ReviewBanner} alt="Banner of a dog paw in a human hand with the text 'We know how hard it is to leave pets, whether its for work or vacation.
                So let us keep your furry friends some company' written overtop." />
            </div>
        </div>
    </div>
  )
}

export default Reviews