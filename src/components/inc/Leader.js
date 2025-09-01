import React from "react";
import Services18 from "../images/shirish.jpg";
import bgImage from "../images/arjit.jpeg";
import bgImage1 from "../images/t22.jpg";

function LeadershipTeam() {
  const leaders = [
    {
      name: "Shirish Tulsian",
      role: "Founder - (Education: Oxford MBA)",
      desc: "With a strong educational background and years of leadership, Shirish Tulsian drives the strategic vision of our organization.",
      image: Services18, // ✅ Use imported image instead of string path
    },
    {
      name: "Arjit Dutta",
      role: "Co - Founder",
      desc: "Focused on innovation and execution, Arjit Dutta ensures operational excellence and growth across all functions.",
      image: bgImage, // ✅ Use imported image instead of string path
    },
  ];

  return (
    <div
      className="py-5"
      style={{
        background: `linear-gradient(rgba(11, 13, 41, 0.8), rgba(11, 13, 41, 0.8)), url(${bgImage1}) center/cover no-repeat`,
      }}
    >
      <div className="container text-white">
        {/* Heading */}
        <div className="text-center mb-5">
          <h3 className="fw-bold">Our Leadership Team</h3>
          <p
            className="text-light"
            style={{ maxWidth: "700px", margin: "10px auto", opacity: "0.85" }}
          >
            Meet the leaders driving vision, strategy, and innovation at our
            organization.
          </p>
        </div>

        {/* Leaders Section */}
        <div className="row justify-content-center">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="col-md-5 text-center mb-4"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {/* Image with border ring */}
              <div
                className="rounded-circle mx-auto mb-3"
                style={{
                  width: "160px",
                  height: "160px",
                  overflow: "hidden",
                  border: "5px solid #3b82f6",
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Text Info */}
              <h5 className="fw-bold">{leader.name}</h5>
              <h6 className="fw-semibold" style={{ color: "#3b82f6" }}>
                {leader.role}
              </h6>
              <p className="small text-light" style={{ opacity: "0.9", lineHeight: "1.6" }}>
                {leader.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeadershipTeam;
