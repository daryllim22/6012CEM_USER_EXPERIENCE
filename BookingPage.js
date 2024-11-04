import React, { useState } from "react";

function BookingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);

  const handleBookNow = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleConfirmBooking = () => {
    setShowPopup(false);
    setShowConfirmationMessage(true);
    setTimeout(() => setShowConfirmationMessage(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", minHeight: "100vh" }}>
      <header style={{ backgroundColor: "#00C4CC", padding: "10px 0" }}>
        <h2>Booking</h2>
      </header>

      <main style={mainContainerStyle}>
        <div style={formContainerStyle}>
          <label style={labelStyle}>Destination:</label>
          <select style={inputStyle}>
            <option value="Mount Kinabalu">Mount Kinabalu</option>
            <option value="Redang Island">Redang Island</option>
            <option value="Malacca">Malacca</option>
            <option value="Penang">Penang</option>
          </select>

          <label style={labelStyle}>Check in date:</label>
          <input type="date" style={inputStyle} />

          <label style={labelStyle}>Check out date:</label>
          <input type="date" style={inputStyle} />

          <label style={labelStyle}>Number of guests:</label>
          <select style={inputStyle}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <button style={bookNowButtonStyle} onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </main>

      {showPopup && <ConfirmationPopup onConfirm={handleConfirmBooking} onClose={handleClosePopup} />}
      {showConfirmationMessage && <BookingConfirmedMessage />}
    </div>
  );
}

function ConfirmationPopup({ onConfirm, onClose }) {
  return (
    <div style={popupOverlayStyle}>
      <div style={popupStyle}>
        <p>Do you want to confirm booking?</p>
        <button style={confirmButtonStyle} onClick={onConfirm}>
          CONFIRM
        </button>
        <button style={confirmButtonStyle} onClick={onClose}>
          CANCEL
        </button>
      </div>
    </div>
  );
}

function BookingConfirmedMessage() {
  return (
    <div style={fadeOverlayStyle}>
      <div style={fadeMessageStyle}>Booking Confirmed</div>
    </div>
  );
}

const mainContainerStyle = {
  backgroundColor: "#FFA500",
  padding: "20px",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const formContainerStyle = {
  backgroundColor: "#FFA500",
  padding: "20px",
  width: "100%",
  maxWidth: "500px",
  textAlign: "left",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const labelStyle = {
  display: "block",
  margin: "10px 0 5px",
  fontSize: "18px",
  color: "#333",
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  marginBottom: "15px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const bookNowButtonStyle = {
  backgroundColor: "#333",
  color: "#FFF",
  padding: "10px 20px",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "4px",
  marginTop: "10px",
};

const popupOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const popupStyle = {
  backgroundColor: "#FFF",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  width: "300px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const confirmButtonStyle = {
  backgroundColor: "#333",
  color: "#FFF",
  padding: "10px 20px",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "4px",
  margin: "5px",
};

const fadeOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1001,
};

const fadeMessageStyle = {
  backgroundColor: "#FFF",
  padding: "20px 40px",
  borderRadius: "8px",
  color: "#333",
  fontSize: "18px",
  fontWeight: "bold",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  animation: "fadeOut 3s forwards", // CSS animation to fade out
};

// Add CSS keyframes for fade out animation
const fadeOutAnimation = `
@keyframes fadeOut {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
`;

// Add the fade-out animation to the document style
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(fadeOutAnimation, styleSheet.cssRules.length);

export default BookingPage;
