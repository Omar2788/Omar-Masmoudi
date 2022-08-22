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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eius omnis maxime officia, exercitationem, sed possimus similique nobis accusantium dolores odit reiciendis necessitatibus rem at! In doloremque rerum nemo? Velit.
                </p>

            </div>
        </div>
    </section>
  )
}

export default About