import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fs-5 navbar-dark bg-dark border border-warning">
      <div className="container-fluid ">
        <NavLink className="navbar-brand fs-3 fw-semibold ms-4" to="/">
          NAZENİN <span className='text-warning'>Temizlik Hizmetleri</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse me-4" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
          <NavLink
              className="nav-link"
              to="/"
            >
              Anasayfa
            </NavLink>
            <NavLink
              className="nav-link"
              to="/about"
            >
              Hakkımızda
            </NavLink>
            <NavLink
              className="nav-link"
              to="/services"
            >
              Hizmetler
            </NavLink>
            <NavLink
              className="nav-link"
              to="/contact"
            >
              İletişim
            </NavLink>
            
        
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar