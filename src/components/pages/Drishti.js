import React from "react";
import Slider from "../inc/Slider";

// Images
import Services3 from "../images/t6.jpg";
import Services5 from "../images/d4.png";
import Services6 from "../images/d11.png";
import Services7 from "../images/d12.png";
import Services8 from "../images/d13.png";
import Services9 from "../images/d14.png";
import Services10 from "../images/d15.png";
import Transport from "../inc/Transport";
import Operation from "../inc/Operation";
import Services4 from '../images/t10.jpg';

function Drishti() {
  return (
     <div className="technology-page">
        {/* Top Banner */}
        <div
          className="tech-banner"
          style={{
            backgroundImage: `url(${Services3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
          }}
        ></div>
        <div className="container bg-white rounded-4 shadow p-5" style={{ marginTop: "-100px" }}>
          {/* Title & Breadcrumb */}
          <h2 className="fw-bold text-dark">DRISHTI</h2>
          <div className="d-flex align-items-center mb-3">
            <a href="/" className="text-primary fw-semibold">Home</a>
            <span className="mx-2 text-muted">➤</span>
            <span className="text-muted">Product</span>
            <span className="mx-2 text-muted">➤</span>
            <span className="text-muted">Drishti</span>
          </div>
          <hr className="border-primary border-2 opacity-100" style={{ width: "120px", marginBottom: "30px" }} />
        
          <section className="py-5" style={{ background: "#f2f6fc" }}>
            <div className="container py-4">
              <div className="row align-items-center">
                {/* Left Column */}
                <div className="col-md-4">
                  {/* <h5 className="main-heading text-primary">Drishti</h5>
                  <hr className="mb-3 border-primary" /> */}
                  <img
                    src={Services3}
                    className="img-fluid rounded shadow"
                    alt="Logistics"
                  />
                </div>

            {/* Right Column */}
            <div className="col-md-8">
              <h3 className="text-info">Digital Logistics & Transport</h3> 
               <div
                className="underline bg-info mb-3"
                style={{ height: "3px" }}
              ></div> 
              <p className="text-muted">
                DRISHTI is a next-generation, integrated hardware and software
                solution developed by SKYWISE TECHNOLOGIES LLP, designed to
                revolutionize logistics and transport management in industrial
                operations. Built to enable 100% digital transformation, DRISHTI
                streamlines the entire transportation lifecycle—from loading to
                unloading—with advanced surveillance, automation, and
                data-driven insights.
              </p>
              <h5 className="text-success">
                Enabling real-time monitoring and continuous improvement to set
                new operational benchmarks.
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* Description Section */}
      <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="mb-3">
            <div
              className="underline bg-primary"
              style={{ height: "3px" }}
            ></div>
            <h3 className="text-primary mt-3">
              What Makes DRISHTI Different?
            </h3>
          </div>
          <p className="text-muted">
            DRISHTI is not just a GPS tracking system. It’s a comprehensive
            transport management platform that combines smart IoT devices,
            facial recognition, AI-powered algorithms, mobile applications, and
            control room automation to offer real-time monitoring, enhanced
            safety, and complete traceability across your logistics ecosystem.
          </p>
          <h5 className="text-success">
            Real-time monitoring and process optimization like never before.
          </h5>
        </div>
      </section>
      {/* About Section */}
            <div className="container py-5">
                <div className="card shadow-lg border-0">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <h4 className="text-primary">Who We Are?</h4>
                                <p className="text-muted">
                                    We are Skywise Technologies – your trusted digital partner. With
                                    extensive experience in software development, logistics
                                    solutions, and IT consulting, our team delivers robust solutions
                                    that enhance your business operations.
                                </p>
                                <a href="#about" className="btn btn-outline-primary mt-2">
                                    Read More
                                </a>

                                <div className="accordion mt-4" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                                Why Us?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show">
                                            <div className="accordion-body">
                                                Domain Expertise: With deep knowledge of mining and logistics operations, we understand your challenges.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                                Robust Security Features
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                Theft prevention and operational monitoring built into our core solutions.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                                Scalable & Secure Systems
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                All our solutions are designed with scalability, security, and compliance in mind.   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <img src={Services3} alt="service" className="img-fluid rounded shadow" />
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bg-light p-3 rounded shadow h-100">
                                            <h5 className="text-success">Mining</h5>
                                            <hr />
                                            <p className="text-muted mb-0">Fast and reliable mining services for global deliveries.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bg-light p-3 rounded shadow h-100">
                                            <h5 className="text-success">Logistics</h5>
                                            <hr />
                                            <p className="text-muted mb-0">Efficient end-to-end logistics tailored for your business.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <img src={Services4} alt="logistics" className="img-fluid rounded shadow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      <Transport />
      <Operation />

      {/* Transport Intelligence Section */}
      <div className="container py-5">
        <div className="card shadow border-info">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <h4 className="text-secondary">
                  End-to-End Transport Intelligence
                </h4>
              </div>
              <div className="col-lg-8">
                <div className="bg-light p-4 rounded border border-info">
                  <h5 className="text-primary">
                    From GPS fencing at loading points to audit-trail-enabled
                    unloading supervision, DRISHTI brings every logistics
                    touchpoint under a unified digital umbrella.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight Section */}
      <section
        className="text-white text-center py-5"
        style={{ backgroundColor: "#001f3f" }}
      >
        <div className="container">
          <h3 className="main-heading">40% downtime reduction</h3>
          <div
            className="underline mx-auto bg-light"
            style={{ height: "2px", width: "60px" }}
          ></div>
        </div>
      </section>

      {/* Features Cards Section */}
      <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {[
              {
                img: Services6,
                title: "Real-time Alerts",
                desc: "Proactively act on anomalies detected in real-time during operations.",
              },
              {
                img: Services7,
                title: "Fuel Management",
                desc: "Smart refueling strategy to reduce downtime and improve fleet performance.",
              },
              {
                img: Services8,
                title: "User-friendly Dashboard",
                desc: "Comprehensive dashboards for tracking mining activities across locations.",
              },
              {
                img: Services5,
                title: "Data Analytics",
                desc: "Extract actionable insights from vast datasets to enhance performance.",
              },
              {
                img: Services9,
                title: "AI/ML in Mining",
                desc: "Leverage AI/ML for predictive analysis and smarter mining decisions.",
              },
              {
                img: Services10,
                title: "Real-Time Location Systems (RTLS)",
                desc: "Track personnel and assets accurately for safer, more efficient operations.",
              },
            ].map((card, index) => (
              <div className="col" key={index}>
                <div className="card h-100 shadow-lg border-0">
                  <img
                    src={card.img}
                    className="card-img-top rounded-top"
                    alt={card.title}
                  />
                  <div className="card-body bg-white">
                    <h5 className="card-title text-primary">{card.title}</h5>
                    <p className="card-text text-muted">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        
          
        </div>

        

      </div>
  );
}

export default Drishti;
