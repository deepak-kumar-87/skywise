import React from "react";
import Itservices from "../inc/Itservice";
import Services3 from "../images/technology.jpg";

function Technology() {
  const techItems = [
    {
      title: "Web Technology",
      desc: "Core of online presence. HTML, CSS, and JavaScript create dynamic, scalable websites that ensure user engagement and smooth functionality.",
      bg: "bg-light",
    },
    {
      title: "AI & ML",
      desc: "Powerful AI algorithms, neural networks, and ML models that solve complex problems and unlock data-driven insights for businesses.",
      bg: "bg-warning bg-opacity-10",
    },
    {
      title: "Computer Vision",
      desc: "From image processing to real-time object detection and pattern recognition — turning visual information into actionable intelligence.",
      bg: "bg-info bg-opacity-10",
    },
    {
      title: "IoT",
      desc: "Interconnected devices and sensors enabling smarter operations, predictive analytics, and seamless real-time monitoring.",
      bg: "bg-success bg-opacity-10",
    },
    {
      title: "RPA / Bot",
      desc: "Intelligent automation with robotic process automation (RPA) and bots to reduce repetitive tasks and boost productivity.",
      bg: "bg-danger bg-opacity-10",
    },
    {
      title: "Cloud Computing",
      desc: "On-demand resources, scalable infrastructure, and SaaS/PaaS/IaaS solutions delivering flexibility and performance on the cloud.",
      bg: "bg-secondary bg-opacity-10",
    },
  ];

  return (
    <div className="technology-page">
      {/* Hero Banner with Overlay */}
      <div
        className="tech-banner position-relative d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${Services3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "380px",
        }}
      >
        <div
          className="overlay position-absolute w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
        ></div>
        <h1
          className="fw-bold text-white position-relative text-center"
          style={{
            fontSize: "3rem",
            zIndex: 2,
            textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
          }}
        >
          Cutting-Edge <span className="text-primary">Technology</span>
        </h1>
      </div>
      <Itservices />
      {/* White Rounded Container */}
      <div
        className="container bg-white rounded-4 shadow-lg p-5"
        style={{ marginTop: "-50px" }}
      >
        
        {/* Title & Breadcrumb */}
        <div className="mb-4">
          <h2 className="fw-bold text-dark">TECHNOLOGY</h2>
          {/* <div className="d-flex align-items-center mb-3 small">
            <a href="/" className="text-primary fw-semibold text-decoration-none">
              Home
            </a>
            <span className="mx-2 text-muted">➤</span>
            <span className="text-muted">Technology</span>
          </div> */}
          <hr
            className="border-primary border-3 opacity-100 center"
            style={{ width: "100px" }}
          />
          
        </div>
        
        {/* Intro Paragraph */}
        <p className="text-muted fs-5">
          Our strength lies in merging innovation with reliable technologies to build scalable, 
          secure, and intelligent 
          solutions that power{" "} <strong>automation, digital transformation, and AI-led growth across industries.</strong>
        </p>

        {/* Technology Grid */}
        <div className="row g-4 mt-4">
          {techItems.map((tech, index) => (
            <div className="col-md-4" key={index}>
              <div
                className={`p-4 shadow-sm rounded-4 border ${tech.bg} h-100 tech-card`}
                style={{
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                }}
              >
                <h5 className="fw-bold mb-3 text-dark">{tech.title}</h5>
                <p className="text-muted">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra CSS for Hover Effects */}
      <style jsx>{`
        .tech-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border: 1px solid #007bff !important;
          background-color: #fdfdfd !important;
        }
      `}</style>
    </div>
  );
}

export default Technology;
