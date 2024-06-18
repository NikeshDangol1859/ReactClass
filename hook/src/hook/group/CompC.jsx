import React from 'react'
import { nameContext } from '../../App'
import { useContext } from 'react'
function CompC() {
    let username = useContext(nameContext)
  return (
    <>
    <h1>Component C</h1>
    <h5>My Name is: {username} </h5>
      
    </>
  )
}

export default CompC
