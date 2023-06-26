import React from 'react'
import {Link} from 'react-router-dom'
import './optionbar.css'

export const OptionBar = () => {
  return (
    <div className='optionbar'>
        <Link to="/super-resolution" className="optionbar-option">Enhance Resolution</Link>
        <Link to="/image-gen-ai" className="optionbar-option">Generate Images using AI</Link>
        <a href="#" className="optionbar-option">Change Image Type</a>
        <a href="#" className="optionbar-option">Convert to B&W</a>
    </div>
  )
}
