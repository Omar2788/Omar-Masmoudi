import React from 'react'
import "./about.css"
import p4 from "../../img/pdp.jpeg";

const About = () => {
  return (
    <section id="about">
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={p4} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                Software engineer graduated from North American Private University of Sfax. 
                </p>
                <p className='a-desc'>
                    At the moment, I'm a Full Stack developer. I've worked on personel and professional projects like end of studies project, you can take a look on my projects in the next section.
                    I care deeply about creating world-class, useful, and beautiful products that help people and make a difference. I can be as involved in your project as you need me to be.
                    If you’re interested in my work, send me connection on LinkedIn or drop an Email (contact section)
                </p>

            </div>
        </div>
    </section>
  )
}

export default About