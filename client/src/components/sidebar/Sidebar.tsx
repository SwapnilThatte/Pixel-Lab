import React from 'react'
import './sidebar.css'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      
        <div className="options">
            <div className="option">Enhance Resolution</div>
            <div className="option">Black & White to Color</div>
            <div className="option">Describe Uploaded Image</div>
            <div className="option">Generate Image Using Text</div>
            <div className="option">Identify Objects in Image</div>
        </div>
    </div>
  )
}
