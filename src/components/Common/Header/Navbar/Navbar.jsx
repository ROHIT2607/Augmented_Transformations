import React from "react";
import "./Navbar.css"; // Import custom CSS for hover effect
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-content">
            <img src="/ATLogo.jpg" className="imageSize" />

            <div
              className="nav-mid collapse navbar-collapse justify-content-center"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav nav-ul fw-medium">
                {/* Standard list items */}
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    About Us
                  </a>
                </li>

                {/* First Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    aria-expanded="false"
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
                  {/* <a href="#" className="nav-link contactButtonColor">
                    Contact Us
                  </a> */}
                  <Link to="/contact" className="nav-link contactButtonColor">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="nav-right">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
