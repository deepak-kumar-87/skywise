import React from "react";
import {
  FaClipboardList,
  FaChartBar,
  FaCogs,
  FaChalkboardTeacher,
  FaUnlockAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Logistics() {
  const steps = [
    {
      title: "Assessment & Roadmap",
      desc: "A comprehensive assessment of the current state of the client, understand their desired state and providing a roadmap to breakdown departmental silos.",
      icon: <FaClipboardList size={28} className="text-primary" />,
    },
    {
      title: "Performance Design",
      desc: "An easy to adopt design for highlighting the key performance indicators to plan, monitor, analyse & manage business performance.",
      icon: <FaChartBar size={28} className="text-primary" />,
    },
    {
      title: "Expert Implementation",
      desc: "Implementation of solutions on time and within budget by our expert solution architects.",
      icon: <FaCogs size={28} className="text-primary" />,
    },
    {
      title: "Comprehensive Training",
      desc: "We train, onboard, and offer post-launch support to your teams for better management and productivity.",
      icon: <FaChalkboardTeacher size={28} className="text-primary" />,
    },
    {
      title: "Capability Expansion",
      desc: "Building new capabilities to unlock new technical skills and expand business capabilities.",
      icon: <FaUnlockAlt size={28} className="text-primary" />,
    },
  ];

  return (
    <div className="container my-5">
      {/* ======= Heading Section ======= */}
      <div className="text-center mb-5">
        <h4 className="fw-bold" style={{ color: "#0b355e" }}>
          Skywise Technologies delivers end-to-end IT solutions for the logistics sector—assessing, implementing, integrating, and managing with excellence.
        </h4>
        <p
          className="text-muted"
          style={{ maxWidth: "750px", margin: "15px auto" }}
        >
         Through comprehensive assessments, we understand the customer’s current and desired states, delivering a roadmap that eliminates silos and fosters business agility.
        </p>
      </div>

      {/* ======= Timeline Section ======= */}
      <div className="position-relative">
        {/* Vertical Line */}
        <div
          className="position-absolute top-50 start-50 translate-middle"
          style={{ width: "3px", height: "100%", backgroundColor: "#e5e7eb" }}
        ></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`row align-items-center mb-5 ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Left / Right Side */}
            <div
              className={`col-md-6 ${
                index % 2 === 0
                  ? "text-md-end text-center"
                  : "text-md-start text-center"
              }`}
            >
              <div className="d-inline-flex align-items-center">
                {/* Icon inside circle */}
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#f0f7ff",
                  }}
                >
                  {step.icon}
                </div>
                <div
                  className={index % 2 === 0 ? "me-3 text-end" : "ms-3 text-start"}
                  style={{ maxWidth: "350px" }}
                >
                  <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                    {step.title}
                  </h6>
                  <p className="text-muted small mb-0">{step.desc}</p>
                </div>
              </div>
            </div>

            {/* Dot in center */}
            <div className="col-md-0 d-none d-md-flex justify-content-center">
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#2563eb",
                  borderRadius: "50%",
                  zIndex: 2,
                }}
              ></div>
            </div>

            {/* Empty column for spacing */}
            <div className="col-md-6 d-none d-md-block"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Logistics;
