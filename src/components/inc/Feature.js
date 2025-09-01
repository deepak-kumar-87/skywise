import React from "react";
import { FaProjectDiagram, FaEye, FaNetworkWired } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import Image1 from "../images/s3.png";
import Image2 from "../images/s6.png";
import Image3 from "../images/s2.png";
import Image4 from "../images/s7.jpg"; // We'll store styles here

function Feature() {
  const navItems = [
    { icon: <FaProjectDiagram />, title: "Custom Software Solutions", active: true },
    { icon: <AiOutlineBarChart />, title: "Vehicle Tracking & Fleet Management", active: false },
    { icon: <FaEye />, title: "Mining Operations Support", active: true },
    { icon: <FaNetworkWired />, title: "Analytics & Reporting Tools", active: false },
  ];

 
  return (
    <div className="operation-section">
      <h2 className="section-title">
        Enhance safety, efficiency, and sustainability across fleet operations
      </h2>

      {/* Navigation */}
      <div className="operation-nav">
        {navItems.map((item, i) => (
          <div
            key={i}
            className={`nav-card ${item.active ? "active" : ""}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <div>
              <div className="nav-title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Feature;
