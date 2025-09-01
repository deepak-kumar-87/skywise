import React from "react";
import { Link } from "react-router-dom";
import Services6  from '../images/d8.png';
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-lg"
      style={{
        background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)", background: "rgba(0,0,0,0.5)"
      }}
    >
      
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link to="/home" className="navbar-brand fw-bold fs-4">
          <span
            className="fw-bold"
            style={{
              background: "linear-gradient(45deg, #FFD700, #FF8C00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SkyWise
          </span>{" "}
          <span className="text-white">Technologies</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link to="/home" className="nav-link text-white fw-semibold">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/technology" className="nav-link text-white fw-semibold">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white fw-semibold">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white fw-semibold">
                Contact
              </Link>
            </li>
             <li className="nav-item">
              <Link to="/service" className="nav-link text-white fw-semibold">
                Service
              </Link>
            </li>

            {/* Products Dropdown */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white fw-semibold"
                href="#"
                id="productDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul
                className="dropdown-menu shadow rounded-3 border-0"
                aria-labelledby="productDropdown"
              >
                <li>
                  <Link to="/drishti" className="dropdown-item fw-semibold">
                     Drishti
                  </Link>
                </li>
                <li>
                  <Link to="/srishti" className="dropdown-item fw-semibold">
                     Srishti
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/service" className="dropdown-item fw-semibold">
                     Service
                  </Link>
                </li>
              </ul>
            </li> */}
          </ul> 

          {/* Right Side Contact Info */}
          <div className="d-flex gap-2">
            <span className="badge rounded-pill bg-warning text-dark px-3 py-2 shadow-sm">
              📞 +91 9163671179
            </span>
            <span className="badge rounded-pill bg-light text-dark px-3 py-2 shadow-sm">
              ✉️ info@skywisetechnologies.in
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
