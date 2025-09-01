import React from "react";
import { Link } from "react-router-dom";
import Transport from "../inc/Transport";
import Operation from "../inc/Operation";
import { FaUser, FaHeadset, FaLifeRing, FaCrown,   FaDatabase,
  FaProjectDiagram,
  FaCloud,
  FaBug,
  FaLock,
  FaServer, FaNetworkWired,
  FaMobileAlt,
  FaShieldAlt,
  FaVideo,
  FaPhoneAlt,
  FaChalkboardTeacher, 
  FaTools,} from "react-icons/fa";
import teamImage from "../images/whyus.jpg"; // replace with your actual image pat
// Images
import BannerImg from "../images/service.jpg";
import SaaSImg from "../images/d19.jpg";
import AppDevImg from "../images/d21.jpg";
import AutomationImg from "../images/d22.jpg";
import HardwareImg from "../images/d23.png";
import SupportImg from "../images/d8.avif";
import AnalyticsImg from "../images/d24.avif";
import ClientsIcon from "../images/d10.png";
import ResultsIcon from "../images/d9.jpg";
import SecurityIcon from "../images/d7.png";
import SupportIcon from "../images/d8.avif";

function Service() {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      {/* Hero Banner */}
      <div
        style={{
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "380px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1 className="fw-bold display-4">Our Services</h1>
          <p className="fs-5 mt-3 text-light" style={{ maxWidth: "650px" }}>
            Empowering businesses with{" "}
            <strong>custom software, AI-driven insights</strong>, and{" "}
            <strong>digital transformation solutions</strong>.
          </p>
        </div>
        
      </div>
          <div className="container my-5">
      {/* Top Section */}
      <div className="row align-items-center mb-5">
        {/* Left - Image */}
        <div className="col-md-6">
          <img
            src={teamImage}
            alt="Team"
            className="img-fluid rounded"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>

        {/* Right - Text */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3" style={{ color: "#0b355e" }}>
            Why Us?
          </h3>
          <p style={{ color: "#374151", fontSize: "15px", lineHeight: "1.8" }}>
            Innovations are mere fad till one can use it profitably. Being at the
            forefront of Tech trends, we understand what will bring value to you.
            We use and test upcoming technologies in our labs before recommending.
            That is how we have build trust and long lasting relationships
          </p>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="row text-center mt-4">
        {/* People */}
        <div className="col-md-3">
          <FaUser size={36} color="#0b355e" className="mb-3" />
          <h6 className="fw-bold" style={{ color: "#0b355e" }}>
            People
          </h6>
          <p style={{ color: "#374151", fontSize: "14px" }}>
            We understand that our people impact the success of our business, and
            we hire people who are dedicated and effective
          </p>
        </div>

        {/* Customer Service */}
        <div className="col-md-3">
          <FaHeadset size={36} color="#0b355e" className="mb-3" />
          <h6 className="fw-bold" style={{ color: "#0b355e" }}>
            Customer Service
          </h6>
          <p style={{ color: "#374151", fontSize: "14px" }}>
            We strive to provide superior customer service and ensure that every
            client is the deserved value
          </p>
        </div>

        {/* Support */}
        <div className="col-md-3">
          <FaLifeRing size={36} color="#0b355e" className="mb-3" />
          <h6 className="fw-bold" style={{ color: "#0b355e" }}>
            Support
          </h6>
          <p style={{ color: "#374151", fontSize: "14px" }}>
            Our Engineers are equipped, trained and usually go the extra mile to
            ensure business productivity
          </p>
        </div>

        {/* Quality */}
        <div className="col-md-3">
          <FaCrown size={36} color="#0b355e" className="mb-3" />
          <h6 className="fw-bold" style={{ color: "#0b355e" }}>
            Quality
          </h6>
          <p style={{ color: "#374151", fontSize: "14px" }}>
            We are committed to deliver outstanding, cutting edge IT solutions
            that add real value that goes beyond what is expected.
          </p>
        </div>
      </div>
    </div>
    <Transport />
    <div className="container-fluid px-0">
       <h2 className="fw-bold text-dark text-center">What We Offer</h2>
        <hr
          style={{
            borderTop: "3px solid #007bff",
            width: "80px",
            margin: "15px auto",
          }}
        />
        <p className="text-muted fs-5 text-center mb-5" style={{ maxWidth: "750px", margin: "0 auto" }}>
          At <strong>Skywise Technologies</strong>, we deliver innovative,
          scalable, and future-ready digital solutions. From{" "}
          <strong>cloud SaaS</strong> to{" "}
          <strong>data analytics & automation</strong>, our services are crafted
          to drive efficiency, growth, and digital transformation.
        </p>
              {/* Solutions Section */}
              <div className="py-5" style={{ backgroundColor: "#0b0d29" }}>
                <div className="container">
                  <h6 className="text-center text-uppercase" style={{ color: "#3b82f6" }}>
                    Solutions
                  </h6>
                  <h3 className="text-center fw-bold text-white mb-5">
                    Comprehensive Application & Software Offerings include
                  </h3>
        
                  <div className="row text-white text-center">
                    {/* Oracle Stack */}
                    <div className="col-md-4 mb-4">
                      <FaDatabase size={32} className="mb-3" />
                      <h6 className="fw-bold">Oracle Stack</h6>
                      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                        Database, Middleware, Cloud, Analytics or Hardwares, we help you
                        maintain the entire spectrum through its entire life cycle
                      </p>
                    </div>
        
                    {/* BPM & Automation */}
                    <div className="col-md-4 mb-4">
                      <FaProjectDiagram size={32} className="mb-3" />
                      <h6 className="fw-bold">BPM & Automation</h6>
                      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                        Automating processes through mobile applications and integrating
                        with legacy systems in shortest possible time and ease
                      </p>
                    </div>
        
                    {/* Cloud & Digitalization */}
                    <div className="col-md-4 mb-4">
                      <FaCloud size={32} className="mb-3" />
                      <h6 className="fw-bold">Cloud & Digitalization</h6>
                      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                        Cloud is more of a tool than a product. We help you use it for
                        business cases which are most suitable for cloud.
                      </p>
                    </div>
        
                    {/* Software Testing */}
                    <div className="col-md-4 mb-4">
                      <FaBug size={32} className="mb-3" />
                      <h6 className="fw-bold">Software Testing</h6>
                      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                        From testing & training to consulting & deployment, we bring in
                        diligent QA approach to your complex testing environment.
                      </p>
                    </div>
        
                    {/* Data Protection */}
                    <div className="col-md-4 mb-4">
                      <FaLock size={32} className="mb-3" />
                      <h6 className="fw-bold">Data Protection</h6>
                      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                        On cloud or premise, data is key to business decision making.
                        Through advisory, we ensure you choose the right solution for
                        your critical data.
                      </p>
                    </div>
        
                    {/* Virtualization */}
                    <div className="col-md-4 mb-4">
                      <FaServer size={32} className="mb-3" />
                      <h6 className="fw-bold">Virtualization</h6>
                      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                        IT landscape is spread over cloud, premise, or hybrid. With our
                        virtualization offerings we ensure optimal hardware usage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        
              {/* Benefits Section */}
              <div className="py-5 bg-white">
                <div className="container">
                  <h6 className="text-center text-uppercase" style={{ color: "#3b82f6" }}>
                    Benefits
                  </h6>
                  <h3 className="text-center fw-bold mb-5">
                    Our services provide a unique range of benefits
                  </h3>
        
                  <div className="row text-center">
                    {/* Strong Domain Expertise */}
                    <div className="col-md-4 mb-4">
                      <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                        Strong Domain Expertise
                      </h6>
                      <p style={{ fontSize: "14px", color: "#374151" }}>
                        Every requirement is unique, with expertise across decades &
                        multiple technologies, we bring the best suitable solution.
                      </p>
                    </div>
        
                    {/* Simplicity in Complexity */}
                    <div className="col-md-4 mb-4">
                      <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                        Simplicity in Complexity
                      </h6>
                      <p style={{ fontSize: "14px", color: "#374151" }}>
                        Problems are complex, dynamic and business-specific. We simplify
                        requirements and provide executable solutions.
                      </p>
                    </div>
        
                    {/* Controlled Cost */}
                    <div className="col-md-4 mb-4">
                      <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                        Controlled Cost
                      </h6>
                      <p style={{ fontSize: "14px", color: "#374151" }}>
                        We ensure our solutions fit your budget and business requirements
                        while maximizing ROI.
                      </p>
                    </div>
        
                    {/* Strong Academia */}
                    <div className="col-md-4 mb-4">
                      <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                        Strong Academia
                      </h6>
                      <p style={{ fontSize: "14px", color: "#374151" }}>
                        We partner with top institutions in India to bring the best
                        brains at your service.
                      </p>
                    </div>
        
                    {/* Your Growth is our Growth */}
                    <div className="col-md-4 mb-4">
                      <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                        Your Growth is our growth too
                      </h6>
                      <p style={{ fontSize: "14px", color: "#374151" }}>
                        If you achieve your objective, we achieve ours too — this is the
                        ethos of every engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div className="container-fluid px-0">
          
              {/* Solutions Section */}
              <div className="py-5" style={{ backgroundColor: "#0b0d29" }}>
                <div className="container">
                  <h6 className="text-center text-uppercase" style={{ color: "#3b82f6" }}>
                    Solutions
                  </h6>
                  <h3 className="text-center fw-bold text-white mb-5">
                    Comprehensive Networking & Security Offerings include
                  </h3>
        
                  <div className="row text-white text-center">
                    {/* Networking */}
                    <div className="col-md-4 mb-4">
                      <FaNetworkWired size={32} className="mb-3" />
                      <h6 className="fw-bold">Networking</h6>
                      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                        Performance and security is what today cloud-based applications
                        require, we present solution which always keeps your network ON.
                      </p>
                    </div>
        
                    {/* Wireless & Mobility */}
                    <div className="col-md-4 mb-4">
                      <FaMobileAlt size={32} className="mb-3" />
                      <h6 className="fw-bold">Wireless & Mobility</h6>
                      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                        Be it SoHo or large-scale enterprise, flexibility and agility is
                        the demand. Cloud or premise, our enriching experience delivers
                        when you need it.
                      </p>
                    </div>
        
                    {/* Network Security */}
                    <div className="col-md-4 mb-4">
                      <FaShieldAlt size={32} className="mb-3" />
                      <h6 className="fw-bold">Network Security</h6>
                      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                        There is always a better and budgetary way to optimally secure a
                        network. We facilitate what your IT landscape demands.
                      </p>
                    </div>
        
                    {/* Conferencing & Collaboration */}
                    <div className="col-md-4 mb-4">
                      <FaVideo size={32} className="mb-3" />
                      <h6 className="fw-bold">Conferencing & Collaboration</h6>
                      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                        4K is the demand and AV over IP is the technology. With advanced
                        softwares, experience services and cloud technology.
                      </p>
                    </div>
        
                    {/* Voice over IP */}
                    <div className="col-md-4 mb-4">
                      <FaPhoneAlt size={32} className="mb-3" />
                      <h6 className="fw-bold">Voice over IP</h6>
                      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                        By adding voice on IP along with data, we bring budget-friendly,
                        scalable technology to your company’s advantage.
                      </p>
                    </div>
        
                    {/* Boardroom Solutions */}
                    <div className="col-md-4 mb-4">
                      <FaChalkboardTeacher size={32} className="mb-3" />
                      <h6 className="fw-bold">Boardroom Solutions</h6>
                      <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                        Interactive, collaborative and 4k ready boardroom solutions
                        enabling productive and result-oriented meetings & conferences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        
              {/* Benefits Section */}
              <div className="py-5 bg-white">
                <div className="container">
                  <h6 className="text-center text-uppercase" style={{ color: "#3b82f6" }}>
                    Benefits
                  </h6>
                  <h3 className="text-center fw-bold mb-5">
                    Our services provide a unique range of benefits
                  </h3>
        
                  <div className="row text-center">
                    {/* Strong Domain Expertise */}
                    <div className="col-md-4 mb-4">
                      <div
                        style={{
                          height: "3px",
                          width: "40px",
                          backgroundColor: "#ef4444",
                          margin: "0 auto 10px",
                        }}
                      ></div>
                      <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                        Strong Domain Expertise
                      </h6>
                      <p style={{ fontSize: "14px", color: "#374151" }}>
                        Every requirement is different and unique, with strong domain
                        expertise spread across OEMs, we bring the best solution.
                      </p>
                    </div>
        
                    {/* Simplicity in Complexity */}
                    <div className="col-md-4 mb-4">
                      <div
                        style={{
                          height: "3px",
                          width: "40px",
                          backgroundColor: "#ef4444",
                          margin: "0 auto 10px",
                        }}
                      ></div>
                      <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                        Simplicity in Complexity
                      </h6>
                      <p style={{ fontSize: "14px", color: "#374151" }}>
                        Problems are usually complex, dynamic and business-specific. We
                        simplify and provide an easy, executable solution.
                      </p>
                    </div>
        
                    {/* Controlled Cost */}
                    <div className="col-md-4 mb-4">
                      <div
                        style={{
                          height: "3px",
                          width: "40px",
                          backgroundColor: "#ef4444",
                          margin: "0 auto 10px",
                        }}
                      ></div>
                      <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                        Controlled Cost
                      </h6>
                      <p style={{ fontSize: "14px", color: "#374151" }}>
                        Positive ROI is paramount. We ensure solutions fit the budget and
                        meet your business requirements.
                      </p>
                    </div>
        
                    {/* Strong Academia */}
                    <div className="col-md-4 mb-4">
                      <div
                        style={{
                          height: "3px",
                          width: "40px",
                          backgroundColor: "#ef4444",
                          margin: "0 auto 10px",
                        }}
                      ></div>
                      <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                        Strong Academia
                      </h6>
                      <p style={{ fontSize: "14px", color: "#374151" }}>
                        We partner with the best institutions in India to bring the best
                        brains at your service.
                      </p>
                    </div>
        
                    {/* Growth */}
                    <div className="col-md-4 mb-4">
                      <div
                        style={{
                          height: "3px",
                          width: "40px",
                          backgroundColor: "#ef4444",
                          margin: "0 auto 10px",
                        }}
                      ></div>
                      <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                        Your Growth is our growth too
                      </h6>
                      <p style={{ fontSize: "14px", color: "#374151" }}>
                        If you achieve your objective, we achieve ours too — that is the
                        “Ethos” we carry in every engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid px-0">
                  {/* Solutions Section */}
                  <div className="py-5" style={{ backgroundColor: "#0b0d29" }}>
                    <div className="container">
                      <h6 className="text-center text-uppercase" style={{ color: "#3b82f6" }}>
                        Solutions
                      </h6>
                      <h3 className="text-center fw-bold text-white mb-5">
                        Comprehensive Systems and Infrastructure Offerings
                      </h3>
            
                      <div className="row text-white text-start">
                        {/* Servers & Compute */}
                        <div className="col-md-4 mb-4 d-flex">
                          <FaServer size={28} className="me-3 text-primary" />
                          <div>
                            <h6 className="fw-bold">Servers & Compute</h6>
                            <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                              From leading edge hyper-converged systems to specialized HPC,
                              we help you decide the best mix of Infra.
                            </p>
                          </div>
                        </div>
            
                        {/* Storages */}
                        <div className="col-md-4 mb-4 d-flex">
                          <FaDatabase size={28} className="me-3 text-primary" />
                          <div>
                            <h6 className="fw-bold">Storages</h6>
                            <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                              Automating processes through business-friendly mobile
                              applications and integrating with legacy systems in shortest
                              possible time and ease.
                            </p>
                          </div>
                        </div>
            
                        {/* Datacenter & Disaster Recovery */}
                        <div className="col-md-4 mb-4 d-flex">
                          <FaCloud size={28} className="me-3 text-primary" />
                          <div>
                            <h6 className="fw-bold">Datacenter & Disaster Recovery</h6>
                            <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                              Cloud is more of a tool than a product. We help you use tools
                              for business cases most suitable for cloud.
                            </p>
                          </div>
                        </div>
            
                        {/* Mobility */}
                        <div className="col-md-4 mb-4 d-flex">
                          <FaMobileAlt size={28} className="me-3 text-primary" />
                          <div>
                            <h6 className="fw-bold">Mobility</h6>
                            <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                              From basics to entire life cycle management of mobile devices,
                              we ensure your devices work safely and securely.
                            </p>
                          </div>
                        </div>
            
                        {/* Physical Security & Surveillance */}
                        <div className="col-md-4 mb-4 d-flex">
                          <FaVideo size={28} className="me-3 text-primary" />
                          <div>
                            <h6 className="fw-bold">Physical Security & Surveillance System</h6>
                            <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                              Spectrum of security services including design, implementation
                              and post-deployment support across technologies and platforms.
                            </p>
                          </div>
                        </div>
            
                        {/* Support & Maintenance */}
                        <div className="col-md-4 mb-4 d-flex">
                          <FaTools size={28} className="me-3 text-primary" />
                          <div>
                            <h6 className="fw-bold">Support & Maintenance Services</h6>
                            <p style={{ fontSize: "14px", color: "#9ca3af" }}>
                              Comprehensive IT support services for hardware repair,
                              maintenance and uptime across all major OEMs and devices.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            
                  {/* Benefits Section */}
                  <div className="py-5 bg-white">
                    <div className="container">
                      <h6 className="text-center text-uppercase" style={{ color: "#3b82f6" }}>
                        Benefits
                      </h6>
                      <h3 className="text-center fw-bold mb-5">
                        Our services provide a unique range of benefits
                      </h3>
            
                      <div className="row text-start">
                        {/* RiMs */}
                        <div className="col-md-4 mb-4">
                          <div
                            style={{
                              height: "3px",
                              width: "40px",
                              backgroundColor: "#ef4444",
                              marginBottom: "10px",
                            }}
                          ></div>
                          <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                            RiMs
                          </h6>
                          <p style={{ fontSize: "14px", color: "#374151" }}>
                            Remote infrastructure management services including health
                            management and troubleshooting across all major OEMs.
                          </p>
                        </div>
            
                        {/* End of Life Support */}
                        <div className="col-md-4 mb-4">
                          <div
                            style={{
                              height: "3px",
                              width: "40px",
                              backgroundColor: "#ef4444",
                              marginBottom: "10px",
                            }}
                          ></div>
                          <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                            End of Life Support
                          </h6>
                          <p style={{ fontSize: "14px", color: "#374151" }}>
                            Support and uptime services for all end-of-life devices from all
                            major OEMs across India, including spares and services.
                          </p>
                        </div>
            
                        {/* Simplicity in Complexity */}
                        <div className="col-md-4 mb-4">
                          <div
                            style={{
                              height: "3px",
                              width: "40px",
                              backgroundColor: "#ef4444",
                              marginBottom: "10px",
                            }}
                          ></div>
                          <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                            Simplicity in Complexity
                          </h6>
                          <p style={{ fontSize: "14px", color: "#374151" }}>
                            Problems are complex and business-specific. We simplify them and
                            deliver easy, executable solutions.
                          </p>
                        </div>
            
                        {/* Controlled Cost */}
                        <div className="col-md-4 mb-4">
                          <div
                            style={{
                              height: "3px",
                              width: "40px",
                              backgroundColor: "#ef4444",
                              marginBottom: "10px",
                            }}
                          ></div>
                          <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                            Controlled Cost
                          </h6>
                          <p style={{ fontSize: "14px", color: "#374151" }}>
                            In difficult times, ROI is paramount. Our support services are
                            cost-effective and budget-friendly.
                          </p>
                        </div>
            
                        {/* IT FMS */}
                        <div className="col-md-4 mb-4">
                          <div
                            style={{
                              height: "3px",
                              width: "40px",
                              backgroundColor: "#ef4444",
                              marginBottom: "10px",
                            }}
                          ></div>
                          <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                            IT FMS
                          </h6>
                          <p style={{ fontSize: "14px", color: "#374151" }}>
                            Onsite support for critical software, hardware, and datacenter
                            operations, whether on-premise or colocated.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
        
      {/* Main Container */}
      <div
        className="container"
        style={{
          marginTop: "30px",
          backgroundColor: "#fff",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          padding: "50px 40px",
        }}
      >
        
        

        {/* <Transport /> */}
        

        {/* Intro */}
        

        {/* Service Cards */}
        
        {/* Highlight Section */}
        <Operation />

        
      </div>
      {/* Why Choose Us */}
        <section className="section py-5 mt-5 bg-light rounded shadow-sm">
          <h3 className="fw-bold mb-4 text-center text-dark">
            {/* Why Choose <span className="text-primary">Skywise?</span> */}
          </h3>
          <div className="row text-center">
            {[
              {
                icon: ClientsIcon,
                title: "Delighting Clients",
                text: "We exceed expectations with tailored digital solutions that align with your vision.",
              },
              {
                icon: ResultsIcon,
                title: "Result-Driven",
                text: "We prioritize measurable impact and sustainable growth for every client.",
              },
              {
                icon: SecurityIcon,
                title: "Data Security",
                text: "Advanced security protocols safeguard your data and ensure compliance.",
              },
              {
                icon: SupportIcon,
                title: "24/7 Support",
                text: "Round-the-clock assistance to keep your business running smoothly.",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div
                  className="p-4 bg-white h-100 rounded shadow-sm"
                  style={{ transition: "all 0.3s ease" }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mb-3"
                    style={{ height: "60px" }}
                  />
                  <h6 className="fw-bold text-dark">{item.title}</h6>
                  <p className="text-muted small">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
    </div>
  );
}

export default Service;
