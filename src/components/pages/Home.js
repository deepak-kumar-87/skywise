import React from "react";
import { Link } from 'react-router-dom';
import VMC from "./inc/Vmc";
import Services5 from '../images/d7.png';
import Services6  from '../images/d8.png';
import Services7 from '../images/d9.jpg';
import Services8 from '../images/d10.png';
import Services16 from '../images/d19.jpg';
import Services10 from '../images/d21.jpg';
import Services11 from '../images/d22.jpg';
import Services12 from '../images/d23.png';
import Services14 from '../images/t14.jpg';
import Services15 from '../images/t15.jpg';
import Sliderhome from "../inc/Sliderhome";
import WhatsApp from "../inc/Whatsapp";
import Feature from "../inc/Feature";
import Logistic from "../inc/Logistic";
import isoLogo from "../images/q1.jpg"; 
import gdprLogo from "../images/q1.jpg";
import pciLogo from "../images/q1.jpg"; 
import Services17 from '../images/d26.png';
import Services18 from '../images/t16.jpg';
import bgImage from "../images/t17.jpg";
import bgPattern from "../images/t18.jpg";
import { FaCubes, FaArrowUp, FaChartLine, FaDatabase, FaPuzzlePiece,   FaCloud, FaLaptop, FaWrench, FaShieldAlt, FaServer, FaCode, FaNetworkWired,
  FaUserTie,
  FaChartBar,
  FaPlusSquare,
  FaDesktop, } from "react-icons/fa";

// import { FaCloud, FaLaptop, FaWrench, FaShieldAlt, FaServer, FaCode } from "react-icons/fa";

function Home() {
    
    return (
        <div>
            {/* Hero Slider */}
            {/* <Slider /> */}
            <Sliderhome />
            {/* Intro Section */}
            <section className="section py-5 bg-dark text-white text-center">
                <div className="container">
                    <h1 className="text-warning">
                        Innovation through Digitalization, Automation, and Disruptive Technologies.
                    </h1>
                    <h6 className="text-info mb-3">
                        Comprehensive IT Consulting, Seamless System Integration, and End-to-End Application Development.
                    </h6>
                </div>
            </section>
            <div className="container my-5">
                <div className="row align-items-center">
                    {/* Left Column - Image */}
                    <div className="col-md-6 text-center">
                    <img
                        src={Services18}
                        alt="Grow With Us"
                        className="img-fluid rounded shadow"
                        style={{ maxWidth: "500px", height: "auto" }}
                    />
                    </div>

                    {/* Right Column - Text */}
                    <div className="col-md-6">
                    <h2 className="fw-bold mb-3" style={{ color: "#0b355e" }}>
                        Grow With Us
                    </h2>
                    <hr
                        className="mb-4"
                        style={{
                        width: "100px",
                        border: "2px solid #c9302c",
                        opacity: "1",
                        }}
                    />
                    <p className="mb-4" style={{ fontSize: "1.1rem", color: "#555" }}>
                        Be part of global projects, innovate with cutting-edge technologies, and unlock limitless career growth.
                        We believe in people-first growth—helping you shape the future while building yours.
                        At our core, we empower talent to thrive—through global exposure, challenging projects, and limitless learning opportunities.
                    </p>
                    <button className="btn btn-danger px-4 py-2 fw-bold">
                        Open Roles
                    </button>
                    </div>
                </div>
            </div>
            
            <div
            className="text-white d-flex align-items-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "300px",
                position: "relative",
            }}
            >
            <div className="container">
                <div className="row align-items-center">
                {/* Left Side - Text */}
                <div className="col-md-8">
                    <h2 className="text-danger fw-bold mb-3">Awards And Recognition</h2>
                    <p className="text-white" style={{ fontSize: "1.1rem", maxWidth: "700px" }}>
                    Our customer-first approach has earned us worldwide recognition, showcasing our relentless commitment to excellence in technology solutions.
                    Accolades from across the globe stand as a testament to our dedication to customer success and our pursuit of high-quality, customer-focused technology solutions.
                    </p>
                </div>

                {/* Right Side - Button */}
                <div className="col-md-4 text-md-end text-center mt-4 mt-md-0">
                    <button className="btn btn-light fw-bold px-4 py-2">View Now</button>
                </div>
                </div>
            </div>
            </div>


            
            {/* Industries & Technologies Section */}
            {/* <section className="section py-5 bg-white text-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4 border-end">
                            <h5 className="fw-bold text-orange text-danger">Industries</h5>
                            <hr className="mb-4" />
                            <ul className="list-unstyled mt-3">
                                <li>• Mining</li>
                                <li>• Logistics</li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <h5 className="fw-bold text-orange text-danger">Technologies <span className="text-dark fw-normal">Solutions & Services</span></h5>
                            <hr className="mb-4" />
                            <ul className="list-unstyled mt-3">
                                <li>• <strong>Web Technologies:</strong> Browser-based ERP (<strong>PACE, PACE360</strong>), Payroll, CRM, SCM; many web-based applications (e.g. DMS, ECM, Workflow Management, Fleet Management); different portals</li>
                                <li>• <strong>AI/ ML:</strong> Use case-based on-demand solutions</li>
                                <li>• <strong>Computer Vision:</strong> Blueeye, TORK. Safety, Security & Surveillance-related solutions</li>
                                <li>• <strong>Facial Recognition, Image Processing, Video Analytics:</strong> Use case-based on-demand solutions</li>
                                <li>• <strong>IoT:</strong> SIM 4.0 (Factory Automation)</li>
                                <li>• <strong>RPA/ Bot:</strong> MyPA (Manual Process Automation)</li>
                                <li>• <strong>BA/ BI:</strong> Power BI, Tableau</li>
                                <li>• <strong>Cloud Computing:</strong> AWS-based solutions</li>
                                <li>• <strong>Mobile Technology:</strong> Several Apps</li>
                                <li>• <strong>RFID/ Barcode:</strong> Inventory/ Asset Tracking, Warehouse Management</li>
                                <li>• <strong>Open Source:</strong> Several On-Demand Solutions</li>
                                <li>• <strong>Geographic Information System (GIS):</strong> Use case-based on-demand solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> */}

            
            {/* New Bottom Section */}
            <div className="container my-5">
                <div className="row align-items-center">
                {/* Left Column - Text */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <h2 className="fw-bold text-dark">SKYWISE People and Technology—Together, Driving Transformation.</h2>
                    <p className="text-muted fs-5">
                        At the intersection of consulting, engineering, and technology, our experts enable the world’s most innovative enterprises to succeed in an AI-powered future. Our values and expertise make us a trusted partner for transformative change.
                    </p>
                    <a href="/service" className="btn btn-primary fw-bold px-4 py-2">
                    EXPLORE OUR OFFERINGS
                    </a>
                </div>
                {/* Right Column - Image */}
                <div className="col-md-6">
                    <img
                    src={Services14}
                    alt="Helping industries move forward"
                    className="img-fluid rounded shadow"
                    />
                </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row align-items-center">
                {/* Left Column - Text */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <img
                    src={Services15}
                    alt="Helping industries move forward"
                    className="img-fluid rounded shadow"
                    />
                    
                </div>
                {/* Right Column - Image */}
                <div className="col-md-6">
                    <h2 className="fw-bold text-dark">Advancing Industries with Technology and Innovation</h2>
                    <p className="text-muted fs-5">
                   Our consultants and engineers bring together industry insights, IT services excellence, and AI-driven innovation to help businesses thrive—now and in the future.
                    </p>
                    <a href="/service" className="btn btn-primary fw-bold px-4 py-2">
                    EXPLORE OUR OFFERINGS
                    </a>
                </div>
                </div>
            </div>
            <Logistic />
            <div className="container my-5">
                  <div className="card shadow p-4 border-0 rounded-3">
                    {/* Header */}
                    <div className="d-flex align-items-center mb-3">
                      <h3 className="fw-bold mb-0 me-2">Systems Integration</h3>
                      <FaArrowUp className="text-primary" style={{ transform: "rotate(45deg)" }} />
                    </div>
                    <p style={{ fontSize: "1.05rem", color: "#555" }}>
                      We provide Systems Integration services that streamline IT solutions, improve efficiency, ensure consistent data, and scale with your business—driving smarter decisions and cost efficiency.
                    </p>
            
                    {/* Core Benefits */}
                    <h5 className="fw-bold mt-4 mb-3">Core Benefits</h5>
                    <div className="row g-3">
                      {/* Benefit Cards */}
                      <div className="col-md-4 col-sm-6">
                        <div className="p-4 bg-light rounded text-center h-100 shadow-sm">
                          <FaCubes className="text-danger mb-3" size={40} />
                          <h6>Enhanced Business Agility</h6>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="p-4 bg-light rounded text-center h-100 shadow-sm">
                          <FaArrowUp className="text-danger mb-3" size={40} />
                          <h6>Improved Data Accessibility</h6>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="p-4 bg-light rounded text-center h-100 shadow-sm">
                          <FaChartLine className="text-danger mb-3" size={40} />
                          <h6>Optimized Resource Utilization</h6>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="p-4 bg-light rounded text-center h-100 shadow-sm">
                          <FaDatabase className="text-danger mb-3" size={40} />
                          <h6>Robust Disaster Recovery Services</h6>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="p-4 bg-light rounded text-center h-100 shadow-sm">
                          <FaPuzzlePiece className="text-danger mb-3" size={40} />
                          <h6>Seamless System Integration</h6>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="p-4 bg-light rounded text-center h-100 shadow-sm">
                          <FaShieldAlt className="text-danger mb-3" size={40} />
                          <h6>Enhanced Security Posture</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            

            {/* Vision, Mission, Core Values */}
            <VMC />
            <div
            className="d-flex align-items-center justify-content-center text-center"
            style={{
                backgroundImage: `url(${bgPattern})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#f4f4f4", // fallback background
                padding: "60px 20px",
            }}
            >
            <h2
                style={{
                maxWidth: "1000px",
                color: "#0d3c55",
                fontWeight: "500",
                lineHeight: "1.5",
                }}
            >
                At the core of our belief is knowledge that delivers impact. With deep domain expertise and a people-first approach, we enable digital transformation that powers business success.
            </h2>
            </div>

            {/* Our Services */}
            <div
                  style={{
                    backgroundColor: "#f9fafb",
                    padding: "60px 20px",
                  }}
                >
                  {/* Heading Section */}
                  <div className="text-center mb-4">
                    <h2 style={{ fontWeight: "700", color: "#000" }}>
                      Smart Solutions for Business Transformation, Process Optimization, and Sustainable Growth.
                    </h2>
                    <p style={{ maxWidth: "800px", margin: "10px auto", fontSize: "16px", color: "#333" }}>
                      With cloud engineering and architecture expertise, we help organizations achieve scalable, cost-efficient, and future-ready transformation.
                    </p>
                    <button
                      style={{
                        backgroundColor: "#0d3c55",
                        color: "#fff",
                        padding: "12px 24px",
                        border: "none",
                        borderRadius: "25px",
                        fontSize: "16px",
                        cursor: "pointer",
                        marginTop: "15px",
                      }}
                    >
                      Schedule a Free Consultation Call
                    </button>
                  </div>
            
                  {/* Services Section */}
                  <div className="container mt-5">
                    <div className="row g-4">
                      {/* Cloud Solutions */}
                      <div className="col-md-4">
                        <div
                          style={{
                            backgroundColor: "#dbeafe",
                            borderRadius: "15px",
                            padding: "25px",
                            textAlign: "center",
                          }}
                        >
                          <FaCloud size={40} color="#0d3c55" />
                          <h5 className="mt-3 fw-bold">Cloud Solutions</h5>
                          <p>
                            Tailored cloud solutions that align with your business objectives, improving
                            efficiency and scalability.
                          </p>
                        </div>
                      </div>
            
                      {/* Modern Workplace */}
                      <div className="col-md-4">
                        <div
                          style={{
                            backgroundColor: "#fef2f2",
                            borderRadius: "15px",
                            padding: "25px",
                            textAlign: "center",
                          }}
                        >
                          <FaLaptop size={40} color="#0d3c55" />
                          <h5 className="mt-3 fw-bold">Modern Workplace</h5>
                          <p>
                            We enable modern workplace transformation, leveraging cloud technology for
                            enhanced collaboration and productivity.
                          </p>
                        </div>
                      </div>
            
                      {/* Managed Services */}
                      <div className="col-md-4">
                        <div
                          style={{
                            backgroundColor: "#fef2f2",
                            borderRadius: "15px",
                            padding: "25px",
                            textAlign: "center",
                          }}
                        >
                          <FaWrench size={40} color="#0d3c55" />
                          <h5 className="mt-3 fw-bold">24*7 Managed Services</h5>
                          <p>
                            We provide round-the-clock managed services to ensure smooth and
                            uninterrupted cloud operations.
                          </p>
                        </div>
                      </div>
            
                      {/* Cyber Security */}
                      <div className="col-md-4">
                        <div
                          style={{
                            backgroundColor: "#f3f4f6",
                            borderRadius: "15px",
                            padding: "25px",
                            textAlign: "center",
                          }}
                        >
                          <FaShieldAlt size={40} color="#0d3c55" />
                          <h5 className="mt-3 fw-bold">Cyber Security</h5>
                          <p>
                            We prioritize security in every aspect of our cloud services, ensuring your
                            data and applications are always protected.
                          </p>
                        </div>
                      </div>
            
                      {/* Infrastructure Services */}
                      <div className="col-md-4">
                        <div
                          style={{
                            backgroundColor: "#eff6ff",
                            borderRadius: "15px",
                            padding: "25px",
                            textAlign: "center",
                          }}
                        >
                          <FaServer size={40} color="#0d3c55" />
                          <h5 className="mt-3 fw-bold">Infrastructure Services</h5>
                          <p>
                            From planning and design to deployment, we ensure that your IT
                            infrastructure aligns with your business objectives.
                          </p>
                        </div>
                      </div>
            
                      {/* Business Applications */}
                      <div className="col-md-4">
                        <div
                          style={{
                            backgroundColor: "#fef2f2",
                            borderRadius: "15px",
                            padding: "25px",
                            textAlign: "center",
                          }}
                        >
                          <FaCode size={40} color="#0d3c55" />
                          <h5 className="mt-3 fw-bold">Business Applications</h5>
                          <p>
                            We design and develop high-performing applications optimized for cloud,
                            driving business transformation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            <div
                  style={{
                    backgroundColor: "#0d0a1f",
                    padding: "80px 20px",
                    color: "#fff",
                  }}
                >
                  {/* Heading Section */}
                  <div className="text-center mb-5">
                    <p style={{ color: "#00bcd4", letterSpacing: "2px", fontSize: "14px" }}>
                      SOLUTIONS
                    </p>
                    <h2
                      style={{
                        fontWeight: "700",
                        fontSize: "28px",
                        color: "#fff",
                        marginTop: "10px",
                      }}
                    >
                      Comprehensive SaaS – Software as a Service includes
                    </h2>
                  </div>
            
                  {/* Services Section */}
                  <div className="container">
                    <div className="row g-5">
                      {/* Business Process Management */}
                      <div className="col-md-4 d-flex">
                        <div>
                          <FaNetworkWired size={30} color="#00bcd4" />
                          <h5 className="mt-3 fw-bold">Business Process Management</h5>
                          <p style={{ color: "#bbb", fontSize: "15px" }}>
                            Business process management (BPM) is to use various methods to
                            discover, model, analyze measure, improve, optimize, and
                            automate business process.
                          </p>
                        </div>
                      </div>
            
                      {/* Cloud based Services and Solutions */}
                      <div className="col-md-4 d-flex">
                        <div>
                          <FaUserTie size={30} color="#00bcd4" />
                          <h5 className="mt-3 fw-bold">
                            Cloud based Services and Solutions
                          </h5>
                          <p style={{ color: "#bbb", fontSize: "15px" }}>
                            We are expert in providing SaaS applications for your business
                            and we also help you into Virtualization & Clustering.
                          </p>
                        </div>
                      </div>
            
                      {/* FOSS */}
                      <div className="col-md-4 d-flex">
                        <div>
                          <FaDesktop size={30} color="#00bcd4" />
                          <h5 className="mt-3 fw-bold">FOSS</h5>
                          <p style={{ color: "#bbb", fontSize: "15px" }}>
                            FOSS (Free and open-source software): maintains the software
                            user’s civil liberty rights and we customize it for your use.
                          </p>
                        </div>
                      </div>
            
                      {/* Low Code App Development */}
                      <div className="col-md-4 d-flex">
                        <div>
                          <FaServer size={30} color="#00bcd4" />
                          <h5 className="mt-3 fw-bold">Low Code App Development</h5>
                          <p style={{ color: "#bbb", fontSize: "15px" }}>
                            We work with major cloud platforms where a suite of
                            interconnected custom business apps can be created without
                            coding skills.
                          </p>
                        </div>
                      </div>
            
                      {/* BI and Analytics */}
                      <div className="col-md-4 d-flex">
                        <div>
                          <FaChartBar size={30} color="#00bcd4" />
                          <h5 className="mt-3 fw-bold">BI and Analytics</h5>
                          <p style={{ color: "#bbb", fontSize: "15px" }}>
                            Our solutions and services on all leading BI tools can help you
                            transform raw data into meaningful and relevant information.
                          </p>
                        </div>
                      </div>
            
                      {/* Enterprise Service Management */}
                      <div className="col-md-4 d-flex">
                        <div>
                          <FaPlusSquare size={30} color="#00bcd4" />
                          <h5 className="mt-3 fw-bold">Enterprise Service Management</h5>
                          <p style={{ color: "#bbb", fontSize: "15px" }}>
                            We implement IT Service Management (ITSM) principles and
                            capabilities in business processes to improve performance,
                            service, and outcomes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
            {/* Features Section */}
            <section className="section py-5 bg-white text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <img src={Services8} alt="Delighting Clients" className="mb-3" style={{ height: '60px' }} />
                            <h5 className="fw-bold text-secondary">Delighting <span className="text-orange">Clients</span></h5>
                            <p className="text-muted">We excel in surpassing service expectations, offering top-notch IT solutions for your needs</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <img src={Services7} alt="Focus on Results" className="mb-3" style={{ height: '60px' }} />
                            <h5 className="fw-bold text-secondary">Focus on <span className="text-orange">Results</span></h5>
                            <p className="text-muted">We’re concerned with what adds value to your business & create customized solutions cater to your needs</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <img src={Services5} alt="Data Security" className="mb-3" style={{ height: '60px' }} />
                            <h5 className="fw-bold text-secondary">Data <span className="text-orange">Security</span></h5>
                            <p className="text-muted">We minimize your risk of exposure to security threats with multiple layers of data protection & encryption</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <img src={Services6} alt="User Support" className="mb-3" style={{ height: '60px' }} />
                            <h5 className="fw-bold text-secondary">User <span className="text-orange">Support</span></h5>
                            <p className="text-muted">Our constant and superior technical support network is aimed at complete customer satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Benefits Section */}
<div className="container my-5">
  {/* Heading */}
  <div className="text-center mb-5">
    <p
      style={{
        letterSpacing: "2px",
        fontSize: "13px",
        color: "#6b7280",
        fontWeight: "600",
      }}
    >
      BENEFITS
    </p>
    <h2
      style={{
        fontWeight: "700",
        color: "#0b355e",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      Our SaaS solutions and services provide a unique range of benefits
    </h2>
  </div>

  {/* Benefits Row */}
  <div className="row text-center">
    {/* Cost Control */}
    <div className="col-md-2 col-sm-6 mx-auto mb-4">
      <div
        style={{
          borderTop: "4px solid #f43f3f",
          paddingTop: "20px",
        }}
      >
        <h5 className="fw-bold" style={{ color: "#0b355e" }}>
          Cost Control
        </h5>
        <p style={{ color: "#6b7280", fontSize: "15px" }}>
          Help you choose the most suitable and budget friendly SaaS
          Solutions.
        </p>
      </div>
    </div>

    {/* Services Support */}
    <div className="col-md-2 col-sm-6 mx-auto mb-4">
      <div
        style={{
          borderTop: "4px solid #f43f3f",
          paddingTop: "20px",
        }}
      >
        <h5 className="fw-bold" style={{ color: "#0b355e" }}>
          Services Support
        </h5>
        <p style={{ color: "#6b7280", fontSize: "15px" }}>
          We extend continuous support from selection to deployment and
          post deployment usage support.
        </p>
      </div>
    </div>

    {/* Compatibility */}
    <div className="col-md-2 col-sm-6 mx-auto mb-4">
      <div
        style={{
          borderTop: "4px solid #f43f3f",
          paddingTop: "20px",
        }}
      >
        <h5 className="fw-bold" style={{ color: "#0b355e" }}>
          Compatibility
        </h5>
        <p style={{ color: "#6b7280", fontSize: "15px" }}>
          A solution which is compatible to your business needs and not
          other way around.
        </p>
      </div>
    </div>

    {/* Security */}
    <div className="col-md-2 col-sm-6 mx-auto mb-4">
      <div
        style={{
          borderTop: "4px solid #f43f3f",
          paddingTop: "20px",
        }}
      >
        <h5 className="fw-bold" style={{ color: "#0b355e" }}>
          Security
        </h5>
        <p style={{ color: "#6b7280", fontSize: "15px" }}>
          We provide solutions which have all necessary security certificate
          credentials.
        </p>
      </div>
    </div>

    {/* Try it before buying it */}
    <div className="col-md-2 col-sm-6 mx-auto mb-4">
      <div
        style={{
          borderTop: "4px solid #f43f3f",
          paddingTop: "20px",
        }}
      >
        <h5 className="fw-bold" style={{ color: "#0b355e" }}>
          Try it before buying it
        </h5>
        <p style={{ color: "#6b7280", fontSize: "15px" }}>
          We provide free trials of SaaS-based products and services, during
          which customer can evaluate how effectively the solution performs.
        </p>
      </div>
    </div>
  </div>
</div>

            {/* Certifications Section */}
            <div className="text-center my-5">
      {/* Heading & Subheading */}
      <h2 style={{ fontWeight: "600", color: "#333" }}>
        Pioneers in Hospitality Technology
      </h2>
      <p
        style={{
          maxWidth: "700px",
          margin: "10px auto 30px",
          color: "#555",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        Certified under ISO, PCI, and GDPR regulations.
      </p>
      

      {/* Certification Box */}
            <div
                className="container"
                style={{
                background: "#fff",
                borderRadius: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                padding: "30px 40px",
                position: "relative",
                display: "inline-block",
                }}
            >
                {/* Title tab */}
                <div
                style={{
                    position: "absolute",
                    top: "-20px",
                    left: "20px",
                    background: "#0072b1",
                    color: "#fff",
                    padding: "10px 25px",
                    borderRadius: "10px",
                    fontWeight: "500",
                    fontSize: "18px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                }}
                >
                Certification
                </div>

                {/* Logos */}
                <div className="d-flex justify-content-center align-items-center flex-wrap mt-4">
                <img
                    src={isoLogo}
                    alt="ISO Certified"
                    style={{ height: "90px", margin: "20px" }}
                />
                <img
                    src={gdprLogo}
                    alt="GDPR Compliant"
                    style={{ height: "70px", margin: "20px" }}
                />
                <img
                    src={pciLogo}
                    alt="PCI DSS Compliant"
                    style={{ height: "70px", margin: "20px" }}
                />
                </div>
            </div>
            </div>
            <WhatsApp />
        </div>

        
    );
    
}

export default Home;