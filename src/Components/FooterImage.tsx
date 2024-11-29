import React from 'react';
import './FooterImage.css'; 
import Cloud1 from "../Contactus-elements/Footercloud.svg"
import Cloud2 from "../Contactus-elements/Contactus-Cloud1.svg"

const FooterImage = () => {
  return (
    <div className="footer-container">

      {/* Text Container */}
      <div className="footer-content">
        {/* Left Side */}
        <div className="footer-left">
          <div className="footer-info">
            <img src="./footerwithimage/icon1.svg" className="footer-icon" alt="" />
            <div>
              <p className="footer-title">Location</p>
              <p className="footer-details">North Car Street, <br /> Arupukottai-626101</p>
            </div>
          </div>

          <div className="footer-info">
            <img src="./footerwithimage/icon2.svg" className="footer-icon" alt="" />
            <div>
              <p className="footer-title">Opening Hours</p>
              <p className="footer-details">Monday - Friday, <br /> 8.00 AM - 5.00 PM</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="footer-right">
          <div className="footer-info">
            <img src="./footerwithimage/icon3.svg" className="footer-icon" alt="" />
            <div>
              <p className="footer-title">Contact Us</p>
              <p className="footer-details">+91 4566 22422, <br /> Greenapplekids68@gmail.com</p>
            </div>
          </div>
          <img src={Cloud1} className='Footercloud1' />
          <img src={Cloud2} className='Footercloud2' />



          <div className="footer-info1">
            <div>
              <p className="footer-title">Stay Connected</p>
              <img src="./footerwithimage/3icons.svg" className="footer-social-icons" alt="" />
            </div>
          </div>
        </div>
      </div>

        
      <div className="background-box">
        <img
          src="./footerwithimage/Home_bottom_anime.svg" // Replace with your image path
          alt="Mom with Kids"
          className="background-image"
        />
      </div>

      {/* Third Box */}
      <div className="copyright-box">
        <p style={{color:'#fff'}}>Copyright Green Apple Kids © 2024. All Rights Reserved.</p>
      </div>
     
    
    </div>
  );
};

  export default FooterImage;