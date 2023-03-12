import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fs-6 navbar-dark bg-dark border border-warning">
      <div className="container-fluid ">
        <NavLink className="navbar-brand fs-3 fw-semibold ms-4" to="/">
          NAZENİN <span className="text-warning">Temizlik</span>
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
            <NavLink className="nav-link" to="/">
              Anasayfa
            </NavLink>
            <NavLink className="nav-link" to="/about">
              Hakkımızda
            </NavLink>
            <div className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#armchair"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hizmetlerimiz
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/#armchair">
                    Koltuk Yıkama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#carseat">
                    Araç Koltuğu Yıkama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#bed">
                    Yatak Yıkama
                  </a>
                </li>
              </ul>
            </div>
            <NavLink className="nav-link" to="/contact">
              İletişim
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
