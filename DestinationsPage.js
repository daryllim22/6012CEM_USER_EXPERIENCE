import React, { useState } from "react";
import mountKinabaluImage from "./images/mt kk.jpg";
import redangImage from "./images/Redang-Beach-Resort-Listing.jpg";
import malaccaImage from "./images/Melaka-River.jpg";
import penangImage from "./images/penangwebp.webp";

function DestinationsPage() {
  const [showPopup, setShowPopup] = useState(null);

  const handleOpenPopup = (destination) => {
    setShowPopup(destination);
  };

  const handleClosePopup = () => {
    setShowPopup(null);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <header style={{ backgroundColor: "#00C4CC", padding: "10px 0" }}>
        <h2>Destinations</h2>
      </header>

      <div style={destinationsContainerStyle}>
        <DestinationCard
          title="Mount Kinabalu"
          image={mountKinabaluImage}
          onSeeMore={() => handleOpenPopup({ title: "Mount Kinabalu", image: mountKinabaluImage })}
        />
        <DestinationCard
          title="Redang Island"
          image={redangImage}
          onSeeMore={() => handleOpenPopup({ title: "Redang Island", image: redangImage })}
        />
        <DestinationCard
          title="Malacca"
          image={malaccaImage}
          onSeeMore={() => handleOpenPopup({ title: "Malacca", image: malaccaImage })}
        />
        <DestinationCard
          title="Penang"
          image={penangImage}
          onSeeMore={() => handleOpenPopup({ title: "Penang", image: penangImage })}
        />
      </div>

      {showPopup && <Popup destination={showPopup} onClose={handleClosePopup} />}
    </div>
  );
}

function DestinationCard({ title, image, onSeeMore }) {
  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <p>{title}</p>
      <button style={seeMoreButtonStyle} onClick={onSeeMore}>
        See More
      </button>
    </div>
  );
}

const imageStyle = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  borderRadius: "5px",
  marginBottom: "10px",
};

function Popup({ destination, onClose }) {
  let content;

  switch (destination.title) {
    case "Mount Kinabalu":
      content = "Mount Kinabalu is the highest mountain in Borneo and Malaysia. With an elevation of 4,095 metres, it is the third-highest peak of an island on Earth, the 28th highest peak in Southeast Asia, and 20th most prominent mountain in the world.";
      break;
    case "Redang Island":
      content = "Redang Island is an island in Kuala Nerus District, Terengganu, Malaysia. It is one of the largest islands off the east coast of Peninsular Malaysia and one of the most beautiful islands in the world. It is famous for its crystal clear waters and white sandy beaches.";
      break;
    case "Malacca":
      content = "Malacca City (also spelled Melaka) is the capital of the coastal state of Malacca, in southwestern Malaysia. At its center, Jonker Street, Chinatown’s main thoroughfare, is known for antique shops and its night market. Nearby, the 17th-century Chinese Cheng Hoon Teng temple has ornate decorations and multiple prayer halls.";
      break;
    case "Penang":
      content = "Penang is a state in northwest Malaysia comprising mainland Seberang Perai and Penang Island. On the island, the state capital of George Town is home to landmarks such as colonial Fort Cornwallis, the ornate Chinese clan house Khoo Kongsi, and the Kapitan Keling Mosque.";
      break;
    default:
      content = "";
      break;
  }

  return (
    <div style={popupOverlayStyle}>
      <div style={popupStyle}>
        <div style={popupHeaderStyle}>
          <button style={closeButtonStyle} onClick={onClose}>
            &times;
          </button>
        </div>
        <img src={destination.image} alt={destination.title} style={popupImageStyle} />
        <p>{content}</p>
      </div>
    </div>
  );
}

const destinationsContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
  position: "relative",
  backgroundColor: "#FFF",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
  textAlign: "left",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const popupHeaderStyle = {
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "10px",
};

const closeButtonStyle = {
  background: "none",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
};

const popupImageStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "5px",
  marginBottom: "10px",
};

export default DestinationsPage;
