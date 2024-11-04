import React, { useState } from "react";

function ReviewPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [reviews, setReviews] = useState([
    { username: "samlilm12", review: "Stay at Penang was a great holiday destination and there was a wide variety of food to try.", rating: 5 },
    { username: "maxtan89", review: "Malacca has amazing and the Jonker Street was lively there.", rating: 4 },
    { username: "ryanmurphy45", review: "The scenery up in Mount Kinabalu was spectacular and beautiful.", rating: 5 },
    { username: "camnewton24", review: "Redang has various water activities for guests to experience and the water is so clear.", rating: 4 }
  ]);

  const [newReview, setNewReview] = useState({ username: "", review: "", rating: 5 });

  const handleAddReview = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddButtonClick = () => {
    if (newReview.username && newReview.review) {
      setReviews((prevReviews) => [...prevReviews, { ...newReview, rating: parseInt(newReview.rating) }]);
      setNewReview({ username: "", review: "", rating: 5 });
      setShowPopup(false);
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <header style={{ backgroundColor: "#00C4CC", padding: "10px 0" }}>
        <h2 style={{ color: "#FFF", margin: 0 }}>Review</h2>
      </header>

      <main style={{ padding: "20px" }}>
        <div style={containerStyle}>
          <div style={reviewContainerStyle}>
            {reviews.map((review, index) => (
              <ReviewCard key={index} username={review.username} review={review.review} rating={review.rating} />
            ))}
          </div>
          <button style={addReviewButtonStyle} onClick={handleAddReview}>
            + Add Review
          </button>
        </div>

        {showPopup && (
          <AddReviewPopup
            onClose={handleClosePopup}
            onAdd={handleAddButtonClick}
            newReview={newReview}
            onChange={handleInputChange}
          />
        )}
      </main>
    </div>
  );
}

function ReviewCard({ username, review, rating }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} style={{ color: index < rating ? "#FFD700" : "#ccc", fontSize: "18px" }}>★</span>
    ));
  };

  return (
    <div style={reviewCardStyle}>
      <p style={{ color: "red", fontWeight: "bold" }}>
        {username} {renderStars(rating)}
      </p>
      <p>{review}</p>
    </div>
  );
}

function AddReviewPopup({ onClose, onAdd, newReview, onChange }) {
  return (
    <div style={popupOverlayStyle}>
      <div style={popupStyle}>
        <button style={closeButtonStyle} onClick={onClose}>&times;</button>
        <h3>Add Review</h3>
        <label>Username:</label>
        <input type="text" name="username" value={newReview.username} onChange={onChange} style={inputStyle} />
        <label>Review:</label>
        <textarea name="review" value={newReview.review} onChange={onChange} style={{ ...inputStyle, height: "100px" }} />
        <label>Rating:</label>
        <select name="rating" value={newReview.rating} onChange={onChange} style={inputStyle}>
          {[5, 4, 3, 2, 1].map((num) => (
            <option key={num} value={num}>{num} Star{num > 1 && "s"}</option>
          ))}
        </select>
        <button style={addButtonStyle} onClick={onAdd}>ADD</button>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "20px",
};

const reviewContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#FFA500",
  padding: "20px",
  borderRadius: "8px",
  width: "80%",
};

const reviewCardStyle = {
  backgroundColor: "#E0E0E0",
  padding: "15px",
  margin: "10px 0",
  width: "100%",
  borderRadius: "5px",
  textAlign: "left",
};

const addReviewButtonStyle = {
  backgroundColor: "#6200EA",
  color: "#FFF",
  padding: "10px 20px",
  fontSize: "16px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  alignSelf: "flex-start",
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
  position: "relative",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  margin: "10px 0",
  fontSize: "16px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const addButtonStyle = {
  backgroundColor: "#333",
  color: "#FFF",
  padding: "10px 20px",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  borderRadius: "4px",
  marginTop: "10px",
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "none",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
};

export default ReviewPage;
