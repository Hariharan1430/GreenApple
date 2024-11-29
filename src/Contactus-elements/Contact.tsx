import React from "react";
import './Contact.css';
import LocationIcon from "../../src/Contactus-elements/Contactus-icon-location.svg";
import ContactIcon from "../../src/Contactus-elements/Contactus-icon-contactus.svg";
import HoursIcon from "../../src/Contactus-elements/Contactus-icon-opening hours.svg";
import ConnectedIcon from "../../src/Contactus-elements/Contactus- stayconnected.svg";
import FullImageWeb from "../../public/Playarea/Banner-pad-2X.png"; // Desktop/Web Image
import FullImageTab from "../../public/Playarea/Banner-mobile-2X.png"; // Tablet Image
import FullImageMobile from "../../src/Contactus-elements/Contactus-Banner-mobile.svg"; // Mobile Image
import SunIcon from "../../src/Contactus-elements/Contactus-sun.svg";
import RocketIcon from "../../src/Contactus-elements/Contactus-Rocket.svg";
import BalloonIcon1 from "../../src/Contactus-elements/Contactus-Red Baloon.svg";
import BalloonIcon2 from "../../src/Contactus-elements/Contactus-Yellow baloon.svg";
import HeartBalloonIcon from "../../src/Contactus-elements/Contactus-Cloud1.svg";
import groupicons from "../../src/Contactus-elements/Group.svg";
import NameIcon from "../../src/Contactus-elements/Contactus- your name.svg";  
import PhoneIcon from "../../src/Contactus-elements/Contactus-icons-call.svg";  
import AddressIcon from "../../src/Contactus-elements/Contactus-location1.svg";  
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  
import { LatLngTuple } from 'leaflet';  

const ContactDetails: React.FC = () => {
  
  const position: LatLngTuple = [9.5167, 78.1000]; 

  return (
    <div className="contact-wrapper">
      {/* Full Image Box */}
      <div className="image-container">
        <picture>
          {/* Mobile Image */}
          <source media="(max-width: 767px)" srcSet={FullImageMobile} />
          
          {/* Tablet Image */}
          <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={FullImageTab} />
          
          {/* Desktop/Web Image */}
          <img src={FullImageWeb} alt="Contact Banner" className="full-image" />
        </picture>

        <h2 className="contact-heading">Contact Info</h2>

        {/* Floating Images */}
        <img src={SunIcon} alt="Sun" className="floating-image sun" />
        <img src={RocketIcon} alt="Rocket" className="floating-image rocket" />
        <img src={BalloonIcon1} alt="Balloon 1" className="floating-image balloon1" />
        <img src={BalloonIcon2} alt="Balloon 2" className="floating-image balloon2" />
        <img src={HeartBalloonIcon} alt="Heart Balloon" className="floating-image heart-balloon" />
      </div>

      {/* Contact Details */}
      <div className="contact-details-container">
        <div className="contact-card">
          <div className="icon">
            <img src={LocationIcon} alt="Location Icon" />
          </div>
          <h4>Location</h4>
          <p>North Car Street, Aruppukottai - 626101</p>
        </div>

        <div className="contact-card">
          <div className="icon">
            <img src={ContactIcon} alt="Contact Icon" />
          </div>
          <h4>Contact Us</h4>
          <p>Greenapplekids68@gmail.com<br />+91 4566 224422</p>
        </div>

        <div className="contact-card">
          <div className="icon">
            <img src={HoursIcon} alt="Clock Icon" />
          </div>
          <h4>Opening Hours</h4>
          <p>Monday – Friday<br />8:00 AM – 5:00 PM</p>
        </div>

        <div className="contact-card">
          <div className="icon">
            <img src={ConnectedIcon} alt="Social Icon" />
          </div>
          <h4>Stay Connected</h4>
          <div className="social-icons">
            <img src={groupicons} alt="Group Icon" />
          </div>
        </div>
      </div>

      {/* New Section for Form and Map */}
      <div className="form-map-wrapper">
        {/* Left Form Section */}
        <form className="contact-form">
          {/* Heading and Paragraph */}
          <h2 className="form-heading">We Would Love To Hear From You!</h2>
          <p className="form-description">
            If you have any questions, please call us or fill in the form below 
            and we will get back to you very soon.
          </p>

          <div className="name-phone-container">
            <div className="input-with-icon">
              <input type="text" placeholder="Your Name" className="styled-input"/>
              <img src={NameIcon} alt="User Icon" className="icon1" />
            </div>
            <div className="input-with-icon">
              <input type="text" placeholder="Phone number" className="styled-input"/>
              <img src={PhoneIcon} alt="Phone Icon" className="icon1" />
            </div>
          </div>

          <div className="input-with-icon full-width">
            <input type="text" placeholder="Your Address" className="styled-input"/>
            <img src={AddressIcon} alt="Address Icon" className="icon1" />
          </div>

          <div className="input-with-icon full-width">
            <textarea placeholder="Write your Message Here" rows={4} className="styled-textarea" ></textarea >    
          </div>
          <div className="submit-button-container">
            <button type="submit" className="submit-button">Send Now</button>
          </div>
        </form>

        {/* Right Box - Map */}
        <div className="map-container">
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Aruppukottai, Tamil Nadu<br />Address here.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
