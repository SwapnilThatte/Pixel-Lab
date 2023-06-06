import React from 'react'
import './editing.css'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'
import { CurrImg } from '../../components/currImg/CurrImg'
import { Footer } from '../../components/footer/Footer'

export const Editing = () => {
  return (
    <div className='editing'>
        <Navbar/>
        {/* Hello */}
        <Sidebar/>
        <div className="images">
        <CurrImg/>
        </div>
        <Footer/>
    </div>
  )
}
