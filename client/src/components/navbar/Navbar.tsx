import React from 'react'
import './navbar.css'

export const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="logo">Pixel Lab</div>
            <div className="links">
                <a href="#" className="link">About</a>
                <a href="#" className="link">Features</a>
                <a href="#" className="link">User Guide</a>
            </div>
        </div>
    </div>
  )
}
