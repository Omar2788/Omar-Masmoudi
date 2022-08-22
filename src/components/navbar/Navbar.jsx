import React from 'react'
import {HashLink as Link} from "react-router-hash-link";
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-items">
            <div className='nav-item'>
                <Link to='#home' smooth>Home</Link>
            </div>
            <div className='nav-item'>
                <Link to='#about' smooth>About</Link>
            </div>
            <div className='nav-item'>
                <Link to='#project' smooth>Projects</Link>
            </div>
            <div className='nav-item'>
                <Link to='#certif' smooth>Certificate</Link></div>
            <div className='nav-item'>
                <Link to='#contact' smooth >Contact</Link>
            </div>
      </div>
    </div>
  )
}

export default Navbar