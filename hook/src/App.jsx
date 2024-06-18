import React, { createContext } from 'react'
import FetchAPI from './hook/FetchAPI'
import {Route, Routes } from 'react-router-dom'
import Category from './hook/Category'
import Form from './hook/form/Form'
import CompA from './hook/group/CompA'

export let nameContext = createContext()
function App() {
  
  let names="Nikesh"

  return (
    <>
      {/* <Form/> */}
      <Routes>
          <Route path="/" element={<FetchAPI/>}/>
          <Route path="/category/:cat_name" element={<Category/>}/>
          
      </Routes>
      {/* <nameContext.Provider value={names}>
      <CompA/>
      </nameContext.Provider> */}
      
    </>
  )
}

export default App
