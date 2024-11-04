import React, { useState } from "react";
import mountKinabaluImage from "./images/deal_mt_k.jpg";
import redangImage from "./images/3d2n-Redang-Beach-Resort-Discovery-Diving-Package.webp";
import malaccaImage from "./images/malacca deal.jpg";
import penangImage from "./images/penang deals.jpg";


function DealsPage() {
  const [showPopup, setShowPopup] = useState(null);

  const handleOpenPopup = (deal) => {
    setShowPopup(deal);
  };

  const handleClosePopup = () => {
    setShowPopup(null);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <header style={{ backgroundColor: "#00C4CC", padding: "10px 0" }}>
        <h2>Deals</h2>
      </header>

      <div style={dealsContainerStyle}>
  <DealCard
    title="4D3N Mount Kinabalu Stay"
    image={mountKinabaluImage}
    onSeeMore={() => handleOpenPopup("mountKinabalu")}
  />
  <DealCard
    title="4D3N Redang Stay"
    image={redangImage}
    onSeeMore={() => handleOpenPopup("redang")}
  />
  <DealCard
    title="4D3N Malacca Stay"
    image={malaccaImage}
    onSeeMore={() => handleOpenPopup("malacca")}
  />
  <DealCard
    title="4D3N Penang Stay"
    image={penangImage}
    onSeeMore={() => handleOpenPopup("penang")}
  />
</div>


      {showPopup && <Popup deal={showPopup} onClose={handleClosePopup} />}
    </div>
  );
}

function DealCard({ title, image, onSeeMore }) {
  return (
    <div style={cardStyle}>
      {image && <img src={image} alt={title} style={imageStyle} />}
      <p>{title}</p>
      <button style={seeMoreButtonStyle} onClick={onSeeMore}>
        See More
      </button>
    </div>
  );
}

function Popup({ deal, onClose }) {
  let price, duration;

  switch (deal) {
    case "mountKinabalu":
      price = "RM 2900 per person";
      duration = "4D3N";
      break;
    case "redang":
      price = "RM 3200 per person";
      duration = "4D3N";
      break;
    case "malacca":
      price = "RM 2800 per person";
      duration = "4D3N";
      break;
    case "penang":
      price = "RM 3000 per person";
      duration = "4D3N";
      break;
    default:
      break;
  }

  return (
    <div style={popupOverlayStyle}>
      <div style={popupStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          &times;
        </button>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Duration:</strong> {duration}</p>
      </div>
    </div>
  );
}

// Styles
const dealsContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)", // Two columns for the layout
  gap: "20px",
  padding: "20px",
};

const cardStyle = {
  backgroundColor: "#FFA500",
  padding: "20px",
  borderRadius: "5px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const imageStyle = {
  width: "500px",
  height: "220px",
  objectFit: "cover", 
  borderRadius: "5px",
  marginBottom: "10px",
};


const seeMoreButtonStyle = {
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
  width: "300px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  position: "relative", 
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "none",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
  color: "#333", 
};


export default DealsPage;
