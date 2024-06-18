import React from 'react'
import { Link } from 'react-router-dom'

function Containt() {
  return (
    <>
    <div className="contain">
        <h1 className="fs-1 text-center">LIBRARY MANAGEMENT SYSTEM SOFTWARE</h1>

<div className="discription">
    <div className="text">
        <p>
        
            Spears Library Management System is developed and designed to manage the inventory system. 
            It is an easy software system that helps within the sleek functioning of the library management 
            system. It keeps track of the books issued and returned from the library. LMS involves maintaining 
            info of existing books yet as new books are added within the library.

            Spears Library software system may be a software system that won't manage the complete info of a 
            library. This system helps keep record of all the things like books, DVDs, CDs, and Magazines etc. in 
            a library. It is utilized in colleges, institutions, colleges, universities and at many more places which 
            provide full support to the librarian and helps in easy management of libraries.

            Spears Library Management system is a software system that helps in maintaining records of all library 
            things. A library management system is additionally referred to as an automatic library system that keeps 
            track of each book issued, returned and added to library. Various sorts of modules are utilized in the library 
            management system for sleek functioning of the system.

            Our library automation software is available in two technologies:
        </p>
        <div className="butt">
            <Link to='/barcode'><button className="btn btn-warning m-2">BARCODE SYSTEM</button></Link>
            
            <Link to='/rfid'><button className="btn btn-success m-2">RFID SYSTEM</button></Link>

        </div>
    </div>
    <div className="dis_image">
        <img src="https://www.elibrarysoftware.com/img/book-entry.png" alt="image" />
    </div>



    
</div>
    </div>
      
    </>
  )
}

export default Containt
