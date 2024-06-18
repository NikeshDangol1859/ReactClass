import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link btn btn-outline-primary d-inline-flex   px-2 text-decoration-none rounded-2" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-outline-primary d-inline-flex focus-ring  px-2 text-decoration-none rounded-2" to="/modules">Modules</Link>
        </li>
        <li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to="/pro" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Product
  </Link>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/barcode">Bar Code Reading System</Link></li>
    <li><Link className="dropdown-item" to="/rfid">RFID SYSTEM</Link></li>
  </ul>
</li>

<li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to="/service" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Service
  </Link>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/advance">ADVANCED LIBRARY MANAGEMENT SOFTWARE</Link></li>
    <li><Link className="dropdown-item" to="/digital">Digital LIBRARY MANAGEMENT SOFTWARE</Link></li>
    <li><Link className="dropdown-item" to="/school">School LIBRARY MANAGEMENT SOFTWARE</Link></li>
  </ul>
</li>
        <li className="nav-item">
          <Link className="nav-link btn btn-outline-primary d-inline-flex focus-ring  px-2 text-decoration-none rounded-2" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-outline-primary d-inline-flex focus-ring  px-2 text-decoration-none rounded-2" to="/contact">Contact</Link>
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>

      
    </>
  )
}

export default Nav
