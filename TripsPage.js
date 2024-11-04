import React, { useState } from "react";

function TripsPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [tripData, setTripData] = useState({
    destination: "Penang",
    checkInDate: "10/11/2024",
    checkOutDate: "10/11/2024",
    guests: 4,
  });

  const handleEditClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <header style={{ backgroundColor: "#00C4CC", padding: "10px 0" }}>
        <h2>Trips</h2>
      </header>

      <div style={tripsContainerStyle}>
        <TripCard onEditClick={handleEditClick} tripData={tripData} />
        <TripCard onEditClick={handleEditClick} tripData={tripData} />
        <TripCard onEditClick={handleEditClick} tripData={tripData} />
        <TripCard onEditClick={handleEditClick} tripData={tripData} />
      </div>

      {showPopup && (
        <EditTripPopup
          tripData={tripData}
          onClose={handleClosePopup}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
}

function TripCard({ onEditClick, tripData }) {
  return (
    <div style={cardStyle}>
      <p>
        <strong>Destination:</strong> {tripData.destination}{" "}
        <strong>Check in date:</strong> {tripData.checkInDate}{" "}
        <strong>Check out date:</strong> {tripData.checkOutDate}{" "}
        <strong>Number of guests:</strong> {tripData.guests}
      </p>
      <button style={editButtonStyle} onClick={onEditClick}>
        Edit Trip
      </button>
    </div>
  );
}

function EditTripPopup({ tripData, onClose, onChange }) {
  return (
    <div style={popupOverlayStyle}>
      <div style={popupStyle}>
        <h3>Edit Trip</h3>
        <label>
          Destination:
          <select
            name="destination"
            value={tripData.destination}
            onChange={onChange}
            style={inputStyle}
          >
            <option value="Mount Kinabalu">Mount Kinabalu</option>
            <option value="Redang Island">Redang Island</option>
            <option value="Malacca">Malacca</option>
            <option value="Penang">Penang</option>
          </select>
        </label>
        <label>
          Check in date:
          <input
            type="date"
            name="checkInDate"
            value={tripData.checkInDate}
            onChange={onChange}
            style={inputStyle}
          />
        </label>
        <label>
          Check out date:
          <input
            type="date"
            name="checkOutDate"
            value={tripData.checkOutDate}
            onChange={onChange}
            style={inputStyle}
          />
        </label>
        <label>
          Number of guests:
          <select
            name="guests"
            value={tripData.guests}
            onChange={onChange}
            style={inputStyle}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        <div style={buttonContainerStyle}>
          <button style={saveButtonStyle} onClick={onClose}>
            Save
          </button>
          <button style={closeButtonStyle} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

const tripsContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  padding: "20px",
};

const cardStyle = {
  backgroundColor: "#FFA500",
  padding: "15px",
  borderRadius: "5px",
  textAlign: "left",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const editButtonStyle = {
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
  width: "400px",
  textAlign: "left",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  marginBottom: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
};

const saveButtonStyle = {
  backgroundColor: "#333",
  color: "#FFF",
  padding: "10px 20px",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "4px",
};

const closeButtonStyle = {
  backgroundColor: "#333",
  color: "#FFF",
  padding: "10px 20px",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "4px",
};

export default TripsPage;
