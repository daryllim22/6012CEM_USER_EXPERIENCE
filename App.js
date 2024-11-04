import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookingPage from "./BookingPage";
import DealsPage from "./DealsPage";
import DestinationsPage from "./DestinationsPage";
import TripsPage from "./TripsPage";
import ReviewPage from "./ReviewPage";
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <header style={{ backgroundColor: "#00C4CC", padding: "10px 0", textAlign: "center" }}>
          <Link to="/booking" style={linkStyle}>Booking</Link>
          <Link to="/deals" style={linkStyle}>Deals</Link>
          <Link to="/destinations" style={linkStyle}>Destinations</Link>
          <Link to="/trips" style={linkStyle}>Trips</Link>
          <Link to="/reviews" style={linkStyle}>Reviews</Link>
        </header>

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/trips" element={<TripsPage />} />
            <Route path="/reviews" element={<ReviewPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const linkStyle = {
  backgroundColor: "#333",
  color: "#FFF",
  padding: "10px 20px",
  margin: "0 5px",
  textDecoration: "none",
  fontSize: "16px",
  borderRadius: "5px",
};

export default App;
