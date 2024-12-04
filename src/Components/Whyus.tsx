import React from "react";
import "./Whyus.css"; 
import FullImageWeb from "../Contactus-elements/whyus-banner-1920 (1).svg"; // Desktop/Web Image
import FullImageTab from "../Contactus-elements/Tab-Banner.png"; // Tablet Image
import FullImageMobile from "../Contactus-elements/mobile-banner.png"; // Mobile Image
import SunIcon from "../../src/Contactus-elements/Contactus-sun.svg";
import RocketIcon from "../../src/Contactus-elements/Contactus-Rocket.svg";
import BalloonIcon1 from "../../src/Contactus-elements/Contactus-Red Baloon.svg";
import BalloonIcon2 from "../../src/Contactus-elements/Contactus-Yellow baloon.svg";
import HeartBalloonIcon from "../../src/Contactus-elements/Contactus-Cloud1.svg";

const WhyUs: React.FC = () => {
  return ( 
    <div className="whyus-contact-wrapper">
      {/* Full Image Box */}
      <div className="whyus-image-container">
        <picture>
          {/* Mobile Image */}
          <source media="(max-width: 767px)" srcSet={FullImageMobile} />

          {/* Tablet Image */}
          <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={FullImageTab} />

          {/* Desktop/Web Image */}
          <img src={FullImageWeb} alt="Contact Banner" className="whyus-full-image" />
          {/* Text Details */}
        </picture>

        <h2 className="whyus-contact-heading">Why Us?</h2>

        {/* Floating Images */}
        <img src={SunIcon} alt="Sun" className="sun1" />
        <img src={RocketIcon} alt="Rocket" className="floating-image rocket" /> 
        <img    
          src={BalloonIcon1}
          alt="Balloon 1"
          className="floating-image balloon1"
        />
        <img
          src={BalloonIcon2}
          alt="Balloon 2"
          className="floating-image balloon2"
        /> 
        <img
          src={HeartBalloonIcon}
          alt="Heart Balloon"
          className="floating-image heart-balloon"
        />

        <p className="whyus-Text-container">
          Why You Should Start Your Little One's Early Learning Stage with Green
          Apple Kids? What Uniuqe Features we have and How we can make your Kid
          better one with our Unique Teach Techniques are,
        </p>
      </div>

      
       <div className="whyus-box-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/6b7d/7dec/19f42c6dc32d67cf5b8b4f4e5239441b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwzHmjRqT0UWF~wxZTvqbG6PJZmuPxhIimyH7oyMkrMUsr5RAptMv~TzH2TTelHhg4v65KEUs1LpHR0oNUa7InFZRmXKVrMRoUeKDS0DqjGA9YNIh0ml5-vLDbESioxKsP3BrOGc1QxAdsumSpHNGW29PBnI0zXoDWulS2D8HHMI3L5ADpkh2PyTeVLt5yggmeiDPCla7M9IQliEEKn8ylJkK~TxU09fP9~n7hDeudnSS4SSn9hFmSM2hVj3FUPZyyw~FWI8jzvnt45miNxX51t4Fa5WtAlwV3mgpj5KG~Pf4vvaDjJ51xd91vs8T0IzmZkQ7rkg1748YsJ3LkZywQ__"
          alt="Truck GIF"
          className="whyus-truck-gif"
        />

        <div className="whyus-content">
          <div className="whyus-stats-container">
            <div className="whyus-stat-item">
              <img src="./Tab/Tab-Portrait Illustration1.png" alt="image" className="whyus-stat-image" />
              <p className="whyus-stat-text">1:15<br></br> Student ratio</p>
            </div>
            <div className="whyus-stat-item">
              <img src="./Tab/Tab-Portrait Illustration2.png" alt="image" className="whyus-stat-image"/>
              <p className="whyus-stat-text">15+<br></br> caretakers</p>
            </div>
            <div className="whyus-stat-item">
              <img src="./Tab/Tab-Portrait Illustration3.png" alt="image" className="whyus-stat-image" />{" "}
              <p className="whyus-stat-text">Personalised<br></br>Care</p>
            </div>
            <div className="whyus-stat-item">
              <img src="./Tab/Tab-Portrait Illustration4.png" alt="image" className="whyus-stat-image" />{" "}
              <p className="whyus-stat-text">CCTV Monitored <br></br> Infrastructure</p>
            </div>
          </div>
        </div>
      </div> 
 
      <div></div>
    </div>
  );
};

export default WhyUs;
  