import React from 'react'
import "./projectList.css"
import Project from "../Project/Project"
import { projects } from '../../data'
const ProjectList = () => {
  return (
    <section id='project'>
      <div className='pl'>
          <div className="pl-texts">
              <h1 className='pl-title'>Projects</h1>
              <p className='pl-desc'>
                  Here we present my Projects during my acadamic & professional background
              </p>
          </div>
          <div className="pl-list">
              {projects.map((item) =>(
                  <Project key={item.id} img={item.img} link={item.link}/>
              ))}
          </div>
      </div>
    </section>
  )
}

export default ProjectList