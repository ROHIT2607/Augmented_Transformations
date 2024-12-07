import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >``
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-content d-flex justify-content-between w-100">
            <img src="/ATLogo.jpg" className="imageSize d-none d-md-block" alt="Logo" />

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav nav-ul fw-medium">
                <li className="nav-item">
                  <Link to="/about" className="nav-link" aria-current="page">
                  About Us
                  </Link>
                </li>
                {/* First Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                  >
                    Products
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Second Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Option 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Option 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Option 3
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Success Stories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Career
                  </a>
                </li>
                <li className="nav-item contactButton ">
                  <Link to="/contact" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
