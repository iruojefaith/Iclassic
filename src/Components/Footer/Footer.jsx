import React from 'react'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Github from '@iconscout/react-unicons/icons/uil-github'

import './Footer.css'

const Footer = () => {
  return (
    <section className="footer">
    <div className="footer-content " data-aos="zoom-in-up"
    data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
    >
    <div className="footer-icon">
        <h1>Iclassic.</h1>
    </div>
    <ul className="footer-link">
    <h3>Links</h3>
        <li>How to use</li>
        <li>Buy now</li>
        <li>Testimonial</li>
        <li>FAQ</li>
        <li>Contact</li>
    </ul>
    <ul className="footer-account">
    <h3>Account</h3>
        <li>Shopping Bag</li>
        <li>Checkout</li>
        <li>Login</li>
        <li>Register</li>
    </ul>
    <div className="footer-contact">
    <p>
    &#9742; 000 123 456<br></br>
    &#9993; info@iclassic@gmail.com
    </p>
        <Twitter color=' #a47148' size='2.5rem'/>
        <Github color=' #a47148' size='2.5rem'/>
        <Insta color=' #a47148' size='2.5rem'/>
    </div>
    </div>
    <div className="emptydiv" />
   <p>
   &#169;Iruoje Made This</p>
    </section>
  )
}

export default Footer