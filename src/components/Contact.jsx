import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <form method='POST' action='https://getform.io/f/bf911fb4-181d-409a-b43a-b500ed3bed82'>
            <h2>Contact Us</h2>
            <label htmlFor="name">Full Name</label>
            <input name='name' type="text" id="name" placeholder='Enter your name' required />
            <label htmlFor="email">Email Address</label>
            <input name='email' type="text" id="email" placeholder='Enter your email' required />
            <label htmlFor="address">Home Address</label>
            <input name='address' type="text" id="address" placeholder='Enter your home address' required />
            <label htmlFor="pets">Pet Name(s)</label>
            <input name='pets' type="text" id="pets" placeholder='Enter your pets name' required />
            <label htmlFor="message">Message</label>
            <textarea name='message' id="message" cols="30" rows="10" placeholder='Enter your message'></textarea>
            <button type='submit'>Submit</button>
        </form>
        <div className='company-info'>
            
        </div>
    </div>
  )
}

export default Contact