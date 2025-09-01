import React from "react";
import { FaArrowRight } from "react-icons/fa";
import tmsImage from "../images/s4.png";
import tmsImage1 from "../images/s8.png";

function TransportManagementSystem() {
  return (
    <div className="container ">
      {/* Navigation Tabs */}
      <ul className="nav nav-pills justify-content-center mb-5">
        <li className="nav-item">
          <a className="nav-link active fw-semibold px-4" href="#tms">
            🚛 Transport Management System
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-semibold px-4" href="#fms">
            🚚 Fleet Management System
          </a>
        </li>
      </ul>

      {/* Section 1 - Transport Management System */}
      <div id="tms" className="row align-items-center mb-5">
        {/* Text */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold text-primary mb-3">Transport Management System</h2>
          <p className="text-muted fs-6">
            Our <strong>Transport Management System (TMS)</strong> is engineered
            to optimize and streamline logistics. It empowers businesses with
            <span className="text-dark fw-semibold"> real-time visibility, intelligent route optimization</span>, and 
            <span className="text-dark fw-semibold"> automated workflows</span>, ensuring efficiency and cost-effectiveness.
          </p>
          <ul className="list-unstyled mt-3">
            {[
              "Real-time tracking and updates",
              "Route optimization for cost savings",
              "Integration with ERP & fleet systems",
              "Detailed analytics and reporting",
            ].map((item, i) => (
              <li key={i} className="mb-2 d-flex align-items-start">
                <FaArrowRight className="text-primary me-2 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="col-md-6 text-center">
          <img
            src={tmsImage}
            alt="Transport Management System"
            className="img-fluid rounded-3 shadow-lg"
            style={{
              maxWidth: "420px",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      </div>

      <hr className="my-5" />

      {/* Section 2 - Fleet Management System */}
      <div id="fms" className="row align-items-center">
        {/* Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={tmsImage1}
            alt="Fleet Management System"
            className="img-fluid rounded-3 shadow-lg"
            style={{
              maxWidth: "420px",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* Text */}
        <div className="col-md-6">
          <h2 className="fw-bold text-success mb-3">Fleet Management System</h2>
          <p className="text-muted fs-6">
            Our <strong>Fleet Management System</strong> helps you track,
            monitor, and maintain vehicles effectively, ensuring{" "}
            <span className="text-dark fw-semibold">maximum uptime</span> and{" "}
            <span className="text-dark fw-semibold">better ROI</span> on your
            assets.
          </p>
          <ul className="list-unstyled mt-3">
            {[
              "Vehicle maintenance scheduling",
              "Driver performance monitoring",
              "Fuel consumption tracking",
              "Compliance & documentation management",
            ].map((item, i) => (
              <li key={i} className="mb-2 d-flex align-items-start">
                <FaArrowRight className="text-success me-2 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TransportManagementSystem;
