import React from 'react'
import './Contact.css'
import bg from '../../img/con-bg.jpg';
import emailjs from '@emailjs/browser';

import { useRef, useState  } from "react";


const Contact = () => {
  const form = useRef();

  const [done, setDone] =useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5n78ehh', 'template_cts13sm', form.current, 'CD9JxOJOxex2Qz_fE')
      .then((result) => {
        console.log(result.text);
        setDone(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="contact-form">
 <div className="w-left" data-aos="zoom-in-right"
 data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
 >
          <img src={bg} alt="#" />

      </div>
      <div className="c-right"  data-aos="zoom-in-left"
      data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
      >
        <h1>Get in Touch</h1>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea type="text" name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span> {done && "Message as been Sent!!!"}</span>
        </form>
      </div>

    </section>
  )
}

export default Contact