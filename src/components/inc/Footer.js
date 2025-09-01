import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer
      className="text-white pt-5 pb-3"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      }}
    >
      <div className="container text-md-left">
        <div className="row text-md-left">
          {/* Company Info */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h6
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#FFD700" }}
            >
              About Us
            </h6>
            <p className="small text-light">
              <strong>Skywise Technologies LLP</strong> is a modern software
              company committed to building{" "}
              <span className="fw-bold">intelligent, scalable, and secure</span>{" "}
              solutions. We empower businesses in mining, logistics, and beyond
              through innovation, data-driven insights, and digital
              transformation.
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#FFD700" }}
            >
              Quick Links
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/home" className="text-white text-decoration-none">
                   Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/service" className="text-white text-decoration-none">
                   Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none">
                   Contact
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mt-3">
            <h6
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#FFD700" }}
            >
              Get in Touch
            </h6>
            <p className="mb-2 text-light">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              MRSL - 5, Bengal Ambuja HIG Complex, City Center, Durgapur, WB,
              India - 713216
            </p>
            <p className="mb-2 text-light">
              <FontAwesomeIcon icon={faPhone} className="me-2" /> +91 9163671179
            </p>
            <p className="mb-2 text-light">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />{" "}
              info@skywisetechnologies.in
            </p>
          </div>
        </div>

        <hr className="my-4 border-light" />

        {/* Footer Bottom */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-light small mb-0">
              © {new Date().getFullYear()}{" "}
              <span className="fw-bold">Skywise Technologies LLP</span> — All
              Rights Reserved
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
              <a
                href="https://facebook.com"
                className="btn btn-outline-light btn-sm rounded-circle me-2"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com"
                className="btn btn-outline-light btn-sm rounded-circle me-2"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://linkedin.com"
                className="btn btn-outline-light btn-sm rounded-circle me-2"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://instagram.com"
                className="btn btn-outline-light btn-sm rounded-circle"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
