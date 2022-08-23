import React from 'react'
import"./intro.css"
import p3 from "../../img/p3.png";

const Intro = () => {
  return (
    <section id='home'>
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h1 className='i-name'>Omar Masmoudi</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Full Stack developer</div>
                        
                        </div>
                    </div>
                    <p className="i-desc">
                        I'am a Software Engineer graduated from North American Private University on 2024.
                        I've completed my engineer the second of the generation at my university and
                        my bachelor degree the second one.
                        I'am motivated and passionate with new technology and innovation.  
                    </p>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={p3} alt="" className="i-img" />
            </div>
        </div>
    </section>
  )
}

export default Intro