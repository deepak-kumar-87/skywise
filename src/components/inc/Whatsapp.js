import React, { useState } from "react";
import whatsapp from "../images/whatsapp.png";
import contact from "../images/contact1.png";

function Whatsapp() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(""); // "whatsapp" | "contact"

  const openPopup = (type) => {
    setPopupType(type);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupType("");
  };

  return (
    <div className="text-center my-5">
      
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openPopup("whatsapp")}
        style={{
          position: "fixed",
          bottom: "70px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "28px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: "1000",
        }}
      >
        <img
            src={whatsapp}
            alt="PCI DSS Compliant"
            style={{ height: "30px", margin: "10px" }}
          />
      </button>

      {/* Floating Contact Button */}
      <button
        onClick={() => openPopup("contact")}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#0072b1",
          color: "#fff",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: "1000",
        }}
      >
        <img
            src={contact}
            alt="PCI DSS Compliant"
            style={{ height: "30px", margin: "10px" }}
          />
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "2000",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "30px",
              width: "350px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <h4 style={{ marginBottom: "20px" }}>
              {popupType === "whatsapp"
                ? "Chat with us on WhatsApp"
                : "Contact Us"}
            </h4>
            <hr />
            {popupType === "whatsapp" ? (
              <a
                href="https://wa.me/919163671179"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#25D366",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                WhatsApp
              </a>
            ) : (
              <div>
                <p>✉️ | info@skywisetechnologies.in</p>
                <p>📞 | +91 9163671179</p><hr />  
              </div>
            )}

            <button
              onClick={closePopup}
              style={{
                marginTop: "20px",
                background: "red",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Whatsapp;
