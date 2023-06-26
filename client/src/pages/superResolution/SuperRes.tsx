import React from 'react'
import {Link} from 'react-router-dom'

import './superRes.css'
import { Navbar } from '../../components/navbar/Navbar'
import { OptionBar } from '../../components/optionsNavBar/OptionBar'

export const SuperRes = () => {
  return (
    <div>
        <Navbar/>
        <OptionBar/>
        Super Resolution
    </div>
  )
}
