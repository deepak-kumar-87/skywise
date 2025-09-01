import React from "react";
import VMC from "./inc/Vmc";
import Leader from "../inc/Leader";

import Services3 from "../images/certiticate.jpeg";
import isoLogo from "../images/q1.jpg";

function About() {
  return (
    <div style={{ backgroundColor: "#f4f6f9", paddingTop: 75 }}>
      {/* Company Info Section */}
      <section className="py-5">
        <div className="container">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h3
                className="fw-bold mb-3"
                style={{
                  background: "linear-gradient(45deg, #007bff, #00c6ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                🏢 Our Company
              </h3>
              <hr className="mb-4" style={{ borderTop: "3px solid #007bff", width: "80px" }} />

              <p className="fs-6 text-secondary lh-lg">
                <strong className="text-dark">Skywise Technologies LLP</strong> is an innovation-driven company focused on building intelligent, reliable, and scalable software solutions for the mining and logistics industries.
                <br />
                <br />
                With a vision to transform complex operations through innovation, we build tailored applications that enhance efficiency, improve safety, safeguard assets, and empower smarter, data-backed decisions.
                <br />
                <br />
                
                Our strength lies in uniting domain expertise with next-generation technologies like {" "}
                <span className="text-danger fw-semibold">AI, IoT, GPS-based tracking, and Cloud Computing.</span> Skywise provides tailored solutions, 
                including real-time fleet management, logistics automation, and mining productivity optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Core Values */}
      <VMC />
      <Leader />
      {/* ISO Certification Section */}
      
      {/* Customer Focus Section */}
      <section className="py-5">
        <div className="container">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <div className="row g-4 align-items-center">
                <div className="col-lg-4">
                  <div className="bg-light p-4 rounded shadow-sm h-100 text-left">
                    <h4 className="text-secondary fw-semibold">
                      Customer-Centric. Growth - Driven. Powered by IT & AI.
                    </h4>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="bg-white p-4 border-start border-4 border-danger rounded shadow-sm">
                    <h5 className="text-dark lh-lg">
                     
                      Since inception, Skywise Technologies has pioneered{" "} <span className="text-primary fw-bold"> IT and AI-powered solutions, </span>{" "}
                      leveraging cutting-edge technologies to 
                      deliver intelligent, scalable, and future-ready innovations for diverse business needs.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
