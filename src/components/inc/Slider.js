import React from "react";
import Slider1 from "../images/t3.jpg";
import Slider2 from "../images/t9.jpg";
import Slider3 from "../images/t6.jpg";
import "animate.css";

function Slider() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide carousel-fade"
      data-bs-ride="carousel"
      style={{ paddingTop: 75, paddingBottom: 75, backgroundColor: "#f9f9f9" }}
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" />
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {[Slider1, Slider2, Slider3].map((img, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="6000" key={index}>
            <div className="position-relative" style={{ maxHeight: "80vh", overflow: "hidden" }}>
              <img src={img} className="d-block w-100" alt={`Slide ${index + 1}`} style={{ objectFit: "cover", height: "80vh", filter: "brightness(70%)" }} />
              <div className="carousel-caption d-none d-md-block animate__animated animate__fadeInUp">
                <h2 className="fw-bold text-white">
                  {index === 0 && "Vehicle Tracking & Fleet Management"}
                  {index === 1 && "Analytics & Reporting Tools"}
                  {index === 2 && "Custom Software Solutions"}
                </h2>
                <p className="text-white fs-5">
                  {index === 0 &&
                    "We offer advanced GPS-based systems that provide real-time visibility into vehicle movement, fuel usage, driver behaviour, and route optimization—enabling safer, more efficient transport operations."}
                  {index === 1 &&
                    "Our platforms include powerful dashboards and data visualization tools that help organizations make informed operational decisions."}
                  {index === 2 &&
                    "Whether it's integration with existing ERPs or building standalone systems, we create applications tailored to our client’s needs."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
