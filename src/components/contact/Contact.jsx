import React from 'react'
import "./contact.css"
import Phone from "../../img/tel-g.png"
import Email from "../../img/email-o.png"
import Linkedin from "../../img/linkedin.png"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react'

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_ggeoaqc', 'template_t5qykwt', formRef.current, 'Ew0z94uwnnblGNiBV')
        .then((result) => {
            setDone(true)
        }, (error) => {
            setDone(false)
        });
    };
  return (
    <section id='contact'>
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact here</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />+216 23 944 808
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />masmoudiomar501@gmail.com
                        </div>
                        <div className="c-info-item">
                        <a href='https://www.linkedin.com/in/omar-masmoudi/' className='c-info-linkedin'> <img src={Linkedin} alt="" className="c-icon" />https://www.linkedin.com/in/omar-masmoudi/</a>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className='c-desc'>
                    <b>Let's discuss !</b> redirect to my Linkedin profile or cantact me with mobile phone or
                    you can send me an Email.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' />
                        <input type="text" placeholder='Subject' name='user_subject' />
                        <input type="text" placeholder='Email' name='user_email' />
                        <textarea  rows="5" placeholder='Message' name='message'></textarea>
                        <button>Submit</button>
                        {done && "Your Email was sent successfully.. Thank you."}
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact