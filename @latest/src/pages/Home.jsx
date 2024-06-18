import React from 'react'
import Containt from './Containt'

function Home() {
  return (
    <>
    <div className="images">
        <div className="background">
            <div className="contain">
                <div className="text">
                    <p className='lib_text'> LIBRARY MANAGEMENT SYSTEM SOFTWARE</p>
                    <p className="sub_lib">Complete, Automated Library Management Software</p>

                   <div>
                   <button type="button" className="btn btn-success p-3">GET A QUOTE</button>
                   </div>


                </div>
                <div className="img">
                    <img src="https://www.elibrarysoftware.com/img/laptop.png" alt="" />
                </div>
                
            </div>
        </div>
    </div>

    <Containt/>


      
    </>
  )
}

export default Home
