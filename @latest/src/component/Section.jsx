import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Pagenotfound from '../pages/Pagenotfound'
import Module from '../pages/Module'
import Barcode from '../pages/Barcode'
import Rifd from '../pages/Rifd'

function Section() {
  return (
    <>

    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/modules" element={<Module />}/>
        <Route path="/barcode" element={<Barcode />}/>
        <Route path="/rfid" element={<Rifd />}/>


        <Route path='/*' element={<Pagenotfound/>}/>
    </Routes>
      
    </>
  )
}

export default Section
