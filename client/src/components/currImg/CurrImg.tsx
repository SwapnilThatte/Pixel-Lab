import React from 'react'
import './currImg.css'

export const CurrImg = () => {
  return (
    <div>
        <h2>Original Image</h2>
        <div className="img-border">
        <img src="https://source.unsplash.com/1600x900/?mountain" alt="Uploaded Image" className="curr-img" />
        </div>
        <h2>Image After Manipulation</h2>
        <div className="img-border">
            <span className="material-symbols-outlined" id='image-not-found'>image_not_supported</span>
        {/* <img src="https://source.unsplash.com/1600x900/?mountain" alt="Manipulated Image" className="curr-img" /> */}
        </div>
    </div>
  )
}
