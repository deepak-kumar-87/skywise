import React from "react";
import { FaProjectDiagram, FaEye, FaNetworkWired } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import Image1 from "../images/s3.png";
import Image2 from "../images/s6.png";
import Image3 from "../images/s2.png";
import Image4 from "../images/s12.png";

function Operation() {
  const navItems = [
    { icon: <FaProjectDiagram />, title: "Workflow", active: true },
    { icon: <AiOutlineBarChart />, title: "AI & Analytics", active: false },
    { icon: <FaEye />, title: "Visibility", active: true },
    { icon: <FaNetworkWired />, title: "IoT", active: false },
  ];

  const sections = [
    {
      title: "Workflows",
      desc: "Optimize tasks like job sheets, vehicle servicing, consignment management, and vehicle indenting for efficient workflows. Our solutions eliminate bottlenecks and ensure seamless operations.",
      img: Image1,
      links: [
        "Multi-Modal Transportation Management System",
        "Predictive Maintenance & Diagnostics",
        "Load/Dispatch Planner",
      ],
    },
    {
      title: "AI & Analytics",
      desc: "Our AI-driven analytics deliver actionable insights into driver behavior, trip efficiency, and cost optimization. Make smarter, data-backed decisions with advanced analytics.",
      img: Image2,
      links: [
        "Driver Behaviour Monitoring",
        "Fuel Theft Monitoring",
        "Vehicle/Trip P&L Monitoring",
      ],
    },
    {
      title: "Visibility",
      desc: "Get end-to-end visibility across your workforce, vehicles, assets, and facilities. Real-time tracking and monitoring empower you to stay in control, always.",
      img: Image3,
      links: [
        "GPS Fleet Tracking",
        "Empower EVs with Intelligent Telematics",
        "AI-Powered Video Telematics",
      ],
    },
    {
      title: "IoT",
      desc: "Unlock the power of IoT to enhance safety, optimize fuel consumption, improve vehicle health, and secure your cargo. Future-proof your fleet with connected intelligence.",
      img: Image4,
      links: [
        "Unlocking Cargo Security",
        "Fuel Management Solution",
        "OBD/CAN Based Tracking",
      ],
    },
  ];

  return (
    <div className="operation-section py-5">
      {/* Section Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark">
          Enhance Safety, Efficiency & Sustainability in Fleet Operations
        </h2>
        <div
          className="mx-auto"
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#007bff",
            borderRadius: "2px",
            marginTop: "10px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
        {navItems.map((item, i) => (
          <div
            key={i}
            className={`p-3 rounded d-flex align-items-center gap-3 shadow-sm ${
              item.active ? "bg-primary text-white" : "bg-white text-dark"
            }`}
            style={{
              minWidth: "200px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <span className="fs-4">{item.icon}</span>
            <div>
              <div className="fw-semibold">{item.title}</div>
              <small className={item.active ? "text-white-50" : "text-muted"}>
                Learn more →
              </small>
            </div>
          </div>
        ))}
      </div>

      {/* Sections */}
      {sections.map((sec, i) => (
        <div
          key={i}
          className={`row align-items-center py-5 ${
            i % 2 !== 0 ? "flex-row-reverse bg-light" : "bg-white"
          }`}
          style={{
            borderRadius: "12px",
            marginBottom: "40px",
          }}
        >
          {/* Text */}
          <div className="col-md-6 px-4">
            <h3 className="fw-bold text-primary mb-3">{sec.title}</h3>
            <p className="text-muted">{sec.desc}</p>
            <ul className="list-unstyled mt-3">
              {sec.links.map((link, idx) => (
                <li
                  key={idx}
                  className="mb-2 d-flex align-items-center"
                  style={{ fontSize: "15px" }}
                >
                  <span className="me-2 text-success">✔</span>
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "#333" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#007bff")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "#333")
                    }
                  >
                    {link} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="col-md-6 text-center">
            <img
              src={sec.img}
              alt={sec.title}
              className="img-fluid rounded shadow-lg"
              style={{
                maxWidth: "420px",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Operation;
