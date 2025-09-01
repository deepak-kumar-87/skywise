import React from "react";
import Services3 from "../images/contact.jpg"; // Background image

function Contact() {
  return (
    <div style={{ backgroundColor: "#f4f6f9" }}>
      {/* Top Banner Section */}
      <div
        style={{
          backgroundImage: `url(${Services3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "320px",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            background: "rgba(0,0,0,0.5)",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1 className="fw-bold" style={{ fontSize: "42px" }}>
            Contact Us
          </h1>
        </div>
      </div>

      {/* White Curved Box */}
      <div
        className="container"
        style={{
          marginTop: "-80px",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          padding: "40px",
          position: "relative",
          zIndex: "2",
        }}
      >
        {/* Breadcrumb */}
        <div className="mb-3" style={{ fontSize: "14px" }}>
          <a href="/" style={{ color: "#007bff", textDecoration: "none" }}>
            Home
          </a>{" "}
          <span style={{ margin: "0 5px" }}>➤</span> Contact
        </div>

        {/* Title */}
        <h2 className="fw-bold" style={{ color: "#222" }}>
          Let’s Connect
        </h2>
        <hr
          style={{
            borderTop: "3px solid #007bff",
            width: "70px",
            borderRadius: "2px",
          }}
        />

        {/* Description */}
        <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
          At <strong>Skywise Technologies</strong>, we’re passionate about
          helping businesses succeed through technology. Whether you need
          tailored software, IT consulting, or innovative logistics solutions,
          our team is here to assist you.
        </p>

        {/* Contact Info Section */}
        <div className="row mt-4">
          {/* Address */}
          <div className="col-md-4 mb-3">
            <div
              className="p-4 h-100 text-center rounded"
              style={{ background: "#f9fafc", boxShadow: "0 3px 8px rgba(0,0,0,0.05)" }}
            >
              <i className="fas fa-map-marker-alt fa-2x mb-3 text-primary"></i>
              <h6 className="fw-bold">Address</h6>
              <p style={{ fontSize: "15px", color: "#555" }}>
                MRSL - 5, Bengal Ambuja HIG Complex, City Center, Durgapur,
                Paschim Bardhaman, WB - 713216, India
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-4 mb-3">
            <div
              className="p-4 h-100 text-center rounded"
              style={{ background: "#f9fafc", boxShadow: "0 3px 8px rgba(0,0,0,0.05)" }}
            >
              <i className="fas fa-phone fa-2x mb-3 text-primary"></i>
              <h6 className="fw-bold">Phone</h6>
              <p style={{ fontSize: "15px", color: "#555" }}>
                +91 9163671179 
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-4 mb-3">
            <div
              className="p-4 h-100 text-center rounded"
              style={{ background: "#f9fafc", boxShadow: "0 3px 8px rgba(0,0,0,0.05)" }}
            >
              <i className="fas fa-envelope fa-2x mb-3 text-primary"></i>
              <h6 className="fw-bold">Email</h6>
              <p style={{ fontSize: "15px", color: "#555" }}>
                info@skywisetechnologies.in
              </p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div style={{ marginTop: "40px" }}>
          <iframe
            title="Skywise Technologies Location"
            src="https://www.google.com/maps?q=23.5451376,87.2879256&z=15&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
