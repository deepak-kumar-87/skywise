import React from "react";
import {
  FaCloud,
  FaServer,
  FaProjectDiagram,
  FaCogs,
  FaLaptopCode,
  FaNetworkWired,
  FaDatabase,
} from "react-icons/fa";
import {
  MdOutlineSecurity,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";
// import {
//   // SiMicrosoft,
//   SiMicrosoft,
// } from "react-icons/si";
import { TbCloud } from "react-icons/tb";
import { GrServices } from "react-icons/gr";

function Services() {
  const services = [
    {
      icon: <FaCloud size={26} color="#0d6efd" />,
      title: "Cloud Managed Services",
      desc: "Expert management of cloud resources",
    },
    {
      icon: <MdOutlineSecurity size={26} color="#0d6efd" />,
      title: "IT Audit & Planning",
      desc: "Assessing and strategizing IT needs",
    },
    {
      icon: <MdOutlineIntegrationInstructions size={26} color="#0d6efd" />,
      title: "System Integration",
      desc: "Seamlessly integrating diverse IT systems",
    },
    // {
    //   icon: <SiMicrosoft size={26} color="#0d6efd" />,
    //   title: "M365 Managed Services",
    //   desc: "Managing Microsoft 365 resources for better ROI",
    // },
    {
      icon: <GrServices size={26} color="#0d6efd" />,
      title: "FastTrack Services",
      desc: "Embee is a Microsoft Gold and FastTrack partner",
    },
    {
      icon: <FaServer size={26} color="#0d6efd" />,
      title: "Managed IT Services",
      desc: "24*7*365 Managed IT solutions for peace of mind",
    },
    {
      icon: <TbCloud size={26} color="#0d6efd" />,
      title: "Managed Network Services",
      desc: "Reduce costs with managed services that simplify and automate your network",
    },
    {
      icon: <FaDatabase size={26} color="#0d6efd" />,
      title: "Database Administration Services",
      desc: "Expert DBA for Optimal Performance",
    },
    {
      icon: <FaCogs size={26} color="#0d6efd" />,
      title: "IT Infra Managed Services",
      desc: "IT Infra Management for operational efficiency, security & scalability",
    },
  ];

  return (
    <div className="container my-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Managed IT Services</h2>
        <p
          className="text-muted"
          style={{ maxWidth: "700px", margin: "10px auto" }}
        >
          Comprehensive IT managed services to ensure performance, security, and
          seamless business operations.
        </p>
      </div>

      {/* Services Grid */}
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-start">
              {/* Icon */}
              <div
                className="me-3"
                style={{
                  minWidth: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {service.icon}
              </div>
              {/* Text */}
              <div>
                <h6 className="fw-bold mb-1">{service.title}</h6>
                <p className="text-muted small mb-0">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
