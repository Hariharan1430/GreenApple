import React from 'react';
import './Socialmedia.css';

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="./HomeAssest/twiter-icon.svg" alt="Twitter" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="./HomeAssest/fb-icon.svg" alt="Facebook" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="./HomeAssest/insta-icon.svg" alt="Instagram" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <img src="./HomeAssest/youtube_icon.svg" alt="YouTube" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;