import React from "react";
import Slider1 from '../images/BG4.jpg';
import Slider2 from '../images/t20.jpg';
import Slider3 from '../images/t13.jpg';

function Sliderhome() {
  return (
    <div style={{ paddingTop: 75, paddingBottom: 75, backgroundColor: "#f9f9f9" }}>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={Slider3} className="d-block w-100 slider-img" alt="Slide 1" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100 bg-dark bg-opacity-50">
              <h1 className="display-5 fw-bold text-white">Next-Gen Custom Software Solutions</h1>
              <p className="lead text-light w-75 mx-auto">Custom-built applications that integrate seamlessly with your systems or operate as standalones, designed for your unique business needs.</p>
              <a href="/service" className="btn btn-outline-light mt-3">Request Demo</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item" data-bs-interval="5000">
            <img src={Slider2} className="d-block w-100 slider-img" alt="Slide 2" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100 bg-dark bg-opacity-50">
              <h1 className="display-5 fw-bold text-white">Driving Digital Transformation through Technology-Led Innovation.</h1>
              <p className="lead text-light w-75 mx-auto">Partnering with you from strategy to execution, we power your journey toward customer-focused business excellence.</p>
              <a href="/service" className="btn btn-outline-light mt-3">Explore Features</a>
            </div>
          </div>

          {/* Slide 3 */}         

          <div className="carousel-item" data-bs-interval="5000">
            <img src={Slider1} className="d-block w-100 slider-img" alt="Slide 3" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100 bg-dark bg-opacity-50">
              <h1 className="display-5 fw-bold text-white">Simplify Oracle EBS with AI-Powered Natural Language Queries</h1>
              <p className="lead text-light w-75 mx-auto">Driven by people, powered by innovation, and guided by cost efficiency and excellence—that’s our identity.</p>
              <a href="/service" className="btn btn-outline-light mt-3">Learn More</a>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Sliderhome;
