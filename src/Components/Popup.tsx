import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Popup.css";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true); // Manage popup visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClose = () => {
    setIsVisible(false); // Hide popup when close button is clicked
    navigate("/"); // Navigate to home page after closing
  };

  if (!isVisible) return null; // If popup is not visible, don't render anything

  return (
    <div className="form-wrapper">
      <div className="fullbox">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <div className="form-container">
          <h2>For admissions Enquire Now.</h2>
          <form>
            <div className="input-row">
              <input
                type="text"
                placeholder="Parent Name"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Child Name"
                className="input-field"
              />
            </div>
            <div className="input-row">
              <input type="text" placeholder="Phone" className="input-field" />
              <input type="email" placeholder="Email" className="input-field" />
            </div>

            <label className="dropdown-heading">Admission Grade.</label>
            <div className="input-row">
              <select className="input-field">
                <option value="PRE-KG">PRE - KG</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="Grade1">Grade 1</option>
              </select>
            </div>

            <p className="disclaimer">
              Our dedicated Admissions Team representatives will get back to
              you within 24 hours.
            </p>

            <button type="submit" className="submit-button">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;