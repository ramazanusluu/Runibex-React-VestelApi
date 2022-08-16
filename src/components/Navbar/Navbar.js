import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <a className="navbar-brand fs-6 me-5 active" href="/">
            <i className="fa-solid fa-bars me-2"></i>
            Tüm Ürünler
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <a className="nav-link active" href="/">
                  <i className="fa-solid fa-house me-2"></i>
                  Ana Sayfa
                </a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link active" href="/">
                  <i className="fa-solid fa-magnifying-glass me-2"></i>
                  Ara
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <i className="fa-solid fa-filter me-2"></i>
                  Filtrele
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  <i className="fa-solid fa-basket-shopping"></i>
                  <span className="translate-middle badge rounded-pill bg-light text-dark rounded-circle">
                    0
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
