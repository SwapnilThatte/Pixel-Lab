import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo-and-info">
            <div className="logo">Pixel Lab</div>
            <div className="footer-info">
                All rights reserved &#169; 2023
            </div>
        </div>
        <div className="footer-links">
            <a href="#" className="footerlink">Code</a>
            <a href="#" className="footerlink">About</a>
            <a href="#" className="footerlink">Features</a>
            <a href="#" className="footerlink">User Guide</a>
        </div>
    </div>
  )
}
