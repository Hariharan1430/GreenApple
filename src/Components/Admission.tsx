import React from "react";
import './Admission.css';
import Downloadicon from '../Contactus-elements/download.svg';
import Backimage from '../Contactus-elements/9A90A76D 1.png';
import SunWithABC from '../Contactus-elements/Admission-icon sun&text.svg'; 
import BoyAndGirlOnPencil from '../Contactus-elements/Admission-icon pencil.svg'; 

const Form = () => {
  return (
    <>
    
      <div className="admission-Totalcontainer">
        {/* 1stBox - TextwithImage */}
        <div className="admission-text-image-container">
          {/* Left Box - Text Section */}
          <div className="admission-text-container">
            <h1>Admission open for <br></br>new students</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="admission-learn-more-btn">More</button>
          </div>

          {/* Right Box - Image Section */}
          <div className="admission-image-container">
            <img src={SunWithABC} alt="Sun with ABC" className="admission-image1" />
            <img
              src={BoyAndGirlOnPencil}
              alt="Boy and Girl on Pencil"
              className="admission-image2"
            />
          </div>
        </div>

        {/* 2ndBox - Formcontainer */}
        <div className="admission-form-container">
          {/* Form Content (already provided, not changing anything here) */}
          <div className="admission-header-box">
            <h1>Start Your Child's Education</h1>
            <p>Register for admissions</p>
          </div>

          {/* Student Info Form */}
          <div className="admission-student-info-box">
            <div className="admission-row">
              <div className="admission-field-left">
                <label>Student Name</label>
                <input type="text" placeholder="Enter your kid name" />
              </div>
              <div className="admission-field-right">
                <label>Gender</label>
                <div className="admission-radio-group">
                  <div className="admission-radio-option">
                    <input type="radio" name="gender" value="male" id="male" />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="admission-radio-option">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      id="female"
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
            </div>
            {/* Other form fields (code not changed) */}
          </div>

          {/* Parent Info Form */}
          <div className="admission-parent-info-box">
            <div className="admission-row">
              <div className="admission-field-left">
                <label>Father / Guardian Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="admission-field-right">
                <label>Mother Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
            </div>

            <div className="admission-row">
              <div className="admission-field-left">
                <label>Mail id</label>
                <input type="email" placeholder="Enter your e-mail id" />
              </div>
              <div className="admission-field-right">
                <label>Phone number</label>
                <input type="tel" placeholder="Enter your number " />
              </div>
            </div>

            <div className="admission-row">
              <div className="admission-field-full">
                <label>Enter your query</label>
                <textarea placeholder="your query" />
              </div>
            </div>

            <div className="admission-row buttons-row">
              <button type="submit" className="admission-submit-btn">
                Submit
              </button>
              <button className="admission-download-btn">
                Download Application
                <img
                  src={Downloadicon}
                  alt="download icon"
                  className="admission-download-icon"
                />
              </button>
            </div>
          </div>
        </div>

        {/* 3rdBox - Lastimagecontainer */}
        <div className="admission-Lastimagediv">
          <p className="admission-Imagetext">Loren ipsum Loren ipsumLoren ipsum</p>
          <img
          className="admission-Lastimage"
            src={Backimage}
            alt="download icon"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      
    </>
  );
};

export default Form;
