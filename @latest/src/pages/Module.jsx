import React from 'react'
import { Link } from 'react-router-dom'
import Module_data from '../data/Module_data'

function Module() {
  return (
    <>
    <h1 className='text-center'>Our Modules</h1>
    <p className='text-center text-secondary'>These modules help in the smooth functioning of Library Management Software</p>


    <div className="container d-flex flex-wrap justify-content-center">
    {Module_data.map((mod)=>
    <div className="col-md-4 d-flex my-3" key={mod.id}>
        <div className="card" style={{width: '20rem'}}>
            <div className="text-center p-3">
                <img src={mod.icon} alt="icon" className="img-fluid mx-auto" style={{width: '50px'}} />
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">{mod.title}</h5>
                <p className="card-text">{mod.discription_mod}</p>
            </div>
        </div>
    </div>
    )}
</div>

   
    
      
    </>
  )
}

export default Module
