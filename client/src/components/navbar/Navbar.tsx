import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <Link to="/" className="logo">Pixel Lab</Link>
            <div className="links">
                <a href="#" className="link">About</a>
                <a href="#" className="link">Features</a>
                <a href="#" className="link">User Guide</a>
            </div>
        </div>
    </div>
  )
}
