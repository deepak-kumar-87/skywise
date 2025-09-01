import React from "react";// optional for custom styling
import { FaCheck, FaFlag, FaUsers, FaComments, FaStar } from "react-icons/fa";
function VMC() {
    return (
        <section className="section bg-light border-top py-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading text-dark fw-bold">Our Vision, Mission & Dharma</h3>
                        <div className="underline mx-auto mb-3"></div>
                        <p className="text-muted">
                            Empowering businesses through innovation, integrity, and excellence.
                        </p>
                    </div>
                </div>
                <div className="container-fluid my-5 p-0">
                      <div className="row g-0">
                        {/* Left Column - Our Culture */}
                        <div
                          className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center p-5"
                          style={{
                            background: "linear-gradient(135deg, #00e6e6, #1de9b6)",
                            color: "#1f2937",
                          }}
                        >
                          <h2 className="fw-bold mb-4">Our Culture</h2>
                          <ul className="list-unstyled text-start" style={{ maxWidth: "500px" }}>
                            <li className="mb-3 d-flex">
                              <FaCheck color="#f43f3f" className="me-2 mt-1" />
                              <span>
                                We communicate clearly, because in a world crowded with
                                over-the-top marketing, simple wins.
                              </span>
                            </li>
                            <li className="mb-3 d-flex">
                              <FaCheck color="#f43f3f" className="me-2 mt-1" />
                              <span>
                                We are not rock stars, we are diligent professionals who get your
                                projects delivered
                              </span>
                            </li>
                            <li className="mb-3 d-flex">
                              <FaCheck color="#f43f3f" className="me-2 mt-1" />
                              <span>
                                Selling a product is easy, extracting business value from it makes
                                us different
                              </span>
                            </li>
                          </ul>
                          <button
                            className="btn fw-bold mt-3"
                            style={{
                              backgroundColor: "#0b2b55",
                              color: "#fff",
                              padding: "12px 40px",
                              borderRadius: "6px",
                            }}
                          >
                            Find out more
                          </button>
                        </div>
                
                        {/* Right Column - Our Commitment */}
                        <div
                          className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center p-5"
                          style={{
                            backgroundColor: "#1a1233",
                            color: "#e5e7eb",
                          }}
                        >
                          <h2 className="fw-bold mb-4">Our Commitment</h2>
                          <ul className="list-unstyled text-start" style={{ maxWidth: "500px" }}>
                            <li className="mb-3 d-flex">
                              <FaCheck color="#f43f3f" className="me-2 mt-1" />
                              <span>
                                We’re the trusted partner that takes a proactive approach to your
                                technology.
                              </span>
                            </li>
                            <li className="mb-3 d-flex">
                              <FaCheck color="#f43f3f" className="me-2 mt-1" />
                              <span>
                                We are fellow business professionals who understand your day to
                                day business objective
                              </span>
                            </li>
                            <li className="mb-3 d-flex">
                              <FaCheck color="#f43f3f" className="me-2 mt-1" />
                              <span>
                                We’re the built-in IT support staff that’s always there when you
                                need us.
                              </span>
                            </li>
                          </ul>
                          <button
                            className="btn fw-bold mt-3"
                            style={{
                              backgroundColor: "#00e6e6",
                              color: "#0b2b55",
                              padding: "12px 40px",
                              borderRadius: "6px",
                            }}
                          >
                            Get in touch
                          </button>
                        </div>
                      </div>
                    </div>
                 <div className="container my-5">
                       {/* Vision & Mission Section */}
                       <div
                         className="p-4 mb-5"
                         style={{ backgroundColor: "#f5f9fc", borderRadius: "6px" }}
                       >
                         <div className="row">
                           <div className="col-md-3">
                             <h5 className="fw-bold" style={{ color: "#0b355e" }}>
                               Vision & Mission
                             </h5>
                           </div>
                           <div className="col-md-9" style={{ color: "#374151", fontSize: "15px" }}>
                             <p>
                              Amidst the rise of countless IT companies, our goal was never just to claim we are different, but to demonstrate it—by creating a customer-centric organization built on 
                              {" "}<strong>trust and commitment</strong>. Fulfilling customer expectations was, and continues to be, our core motto.
                              
                             </p>
                             <p>
                               Our vision and mandate drive us to harness intellectual and technical excellence for the right business needs. At Wizertech, we recognize that organizations mirror their people, and we continuously strive to create a proactive, customer-focused company.
                             </p>
                           </div>
                         </div>
                       </div>
                 
                       {/* Values Section */}
                       <div className="mb-4">
                         <h5 className="fw-bold" style={{ color: "#0b355e" }}>
                           Dharma
                         </h5>
                         <p style={{ color: "#374151", fontSize: "15px" }}>
                           Our working-class values are the driving force behind our excellent
                           performance so far. Our values are…
                         </p>
                       </div>
                 
                       {/* Values Grid */}
                       <div
                         className="row g-4 p-4"
                         style={{ border: "1px solid #e5e7eb", borderRadius: "6px" }}
                       >
                         {/* Commitment */}
                         <div className="col-md-6 d-flex">
                           <FaFlag size={30} color="#0b355e" className="me-3 mt-1" />
                           <div>
                             <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                               Commitment
                             </h6>
                             <p style={{ color: "#374151", fontSize: "14px" }}>
                               Be accountable, work as a team and delivery more than commit
                             </p>
                           </div>
                         </div>
                 
                         {/* Innovation */}
                         <div className="col-md-6 d-flex">
                           <FaComments size={30} color="#0b355e" className="me-3 mt-1" />
                           <div>
                             <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                               Innovation
                             </h6>
                             <p style={{ color: "#374151", fontSize: "14px" }}>
                               Simplify complex and difficult technologies and make them business
                               friendly
                             </p>
                           </div>
                         </div>
                 
                         {/* Community */}
                         <div className="col-md-6 d-flex">
                           <FaUsers size={30} color="#0b355e" className="me-3 mt-1" />
                           <div>
                             <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                               Community
                             </h6>
                             <p style={{ color: "#374151", fontSize: "14px" }}>
                               Create a career friendly place for hardworking & talented professionals
                             </p>
                           </div>
                         </div>
                 
                         {/* Excellence */}
                         <div className="col-md-6 d-flex">
                           <FaStar size={30} color="#0b355e" className="me-3 mt-1" />
                           <div>
                             <h6 className="fw-bold" style={{ color: "#0b355e" }}>
                               Excellence
                             </h6>
                             <p style={{ color: "#374151", fontSize: "14px" }}>
                               Delivery effective solutions which makes a difference in day to day
                               work environment
                             </p>
                           </div>
                         </div>
                       </div>
                     </div>
                 

                
            </div>
        </section>
    );
}

export default VMC;
