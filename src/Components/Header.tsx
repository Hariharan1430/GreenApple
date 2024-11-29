import React from "react";
import YoutubeIcon from "../Contactus-elements/youtube_icon.svg"; // Adjust the path as necessary
import FacebookIcon from "../Contactus-elements/FB_icon.svg"; // Adjust the path as necessary
import InstaIcon from "../Contactus-elements/insta_icon.svg"; // Adjust the path as necessary
import PhoneIcon from "../Contactus-elements/Phone.svg"; // Adjust the path as necessary
import MessageIcon from "../Contactus-elements/message.svg"; // Adjust the path as necessary
import LocationIcon from "../Contactus-elements/location.svg";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="contact-info">
        <span>
          <img src={PhoneIcon} alt="Phone" className="icons" />
          +91 4566 224422
        </span>
        <span>
          <img src={MessageIcon} alt="Email" className="icons" />
          Greenapplekids68@gmail.com
        </span>
        <span>
          <img src={LocationIcon} alt="Location" className="icons" />
          North Car Street, Aruppukottai - 626101
        </span>
      </div>
      <div className="social-media">
        <span>Follow Us:</span>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={FacebookIcon} alt="Facebook" />{" "}
          {/* Using custom SVG */}
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InstaIcon} alt="Instagram" />{" "}
          {/* Using custom SVG */}
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={YoutubeIcon} alt="YouTube" />{" "}
          {/* Using custom SVG */}
        </a>
      </div>
    </header>
  );
};

export default Header;