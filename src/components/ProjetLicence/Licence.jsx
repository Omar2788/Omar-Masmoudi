import React from 'react'
import "./licence.css"
import video from "../../video/demo.mp4"
const Licence = () => {
  return (
    <div className='lef'>
            <div className="l-bg"></div>
            <div className="c-wrapper">
                <div className="l-left">
                    <h1 className="c-title">End of study project</h1>
                    <div className="c-info">
                    <p>Here is my end-of-study project for the bachelor's degree cycle in computer science, software engineering and information systems, 
                    carried out within the company Acteol during four months, 14 February 2022 to 15 June 2022.<br/>
                    My project is to develop an application that helps companies and digital agencies to schedule and publish organic posts
                    on Facebook and Instagram. <br/> With direct API integration across Facebook, digital agencies can schedule multiple social posts
                    across different profiles, which allows them to save time.<br/>
                    <b>Technology :</b> <br/> Facebook Graph API, .NET Core, Entity Framework, MVC, JavaScript, JQuery, CSS, SQLserver 
                    </p>
                    </div>
                </div>
                <div className="video">
                    <video className='videoo' controls="controls" autoPlay={true}>
                    <source src={video}  type="video/mp4"/>
                    </video>
                </div>
            </div>
    </div>
  )
}

export default Licence