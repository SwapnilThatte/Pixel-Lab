import React from 'react'
import './fileUpload.css'

export const FileUpload = () => {
  return (
    <div className='fileupload'>
            <label htmlFor="upload" className='label-upload'>
              <div className='uploadIcon'>
                <span className="material-symbols-outlined" id='upload-icon'>
                    cloud_upload
                </span>
              </div>
              <div id='uploadText'>Upload Image to get Started !</div>
            </label>
            <input type="file" name="upload" id="upload" />
    </div>
  )
}
