import React from 'react';
import './About.css';
import Aboutimage from "../Contactus-elements/desktop/aboutus-section1.png"
import Image1 from '../Contactus-elements/desktop/aboutus-chairman.png'
import Image2 from '../Contactus-elements/desktop/aboutus-principal.png'
import Image3 from '../Contactus-elements/desktop/our mission.png'
import Image4 from '../Contactus-elements/desktop/our vision.png'
import Image5 from '../Contactus-elements/desktop/aboutus-groupphoto.png'
import Cloudimage from "../../src/Contactus-elements/cloud.svg";
import Homeimage from "../../src/Contactus-elements/Home.svg";
import HeartBallon from "../../src/Contactus-elements/HeartBallon.svg";
import RocketImage from "../../src/Contactus-elements/roc.svg";
import Bigcloud  from "../../src/Contactus-elements/Bigcloud.svg";
import Butterfly from "../../src/Contactus-elements/butterfly (1).svg"
import YellowBaloon from "../../src/Contactus-elements/Contactus-Yellow baloon.svg"
import Butterfly1 from "../../src/Contactus-elements/Butterfly.svg"
import Star from "../../src/Contactus-elements/Star.svg"
import Flower from "../../src/Contactus-elements/Flower.svg"


const About = () => {
  return (
    <div className="container">
      {/* Box 1 */}
      <div className="box box1">
        <div className="background-image"></div>
        
      </div>
      

      {/* Box 2 */}

  
      <div className="box box2">


        <div className="about-us">

          <div className="about-text">
          <img src={Cloudimage} alt="cloud" className="aboutcloud" />

            <h1 >About Us</h1>
            <p>
            Green Apple Kids Started with 7 Kids 12 Years Ago, and Now Marching with 150+ Kids in it's First Branch Aruppukottai. 
            Provided with the World Class Learning Facility and Healthy Growing Environment Green Apple Kids growing Faster with Your Kids. Now We can Proudly declare, 
            the Green Apple Kids is one of the Such Place to give the Perfect Feed for the Initial Learning Ages of Your Kids.
            </p>
          </div>
          <div className="about-image">
          <img src={HeartBallon} alt="cloud" className="heartballon" />


            <img src={Aboutimage}alt="About Us" />
            <img src={Homeimage} alt="cloud" className="homeimage" />


          </div>


        </div>
      </div>

      {/* Box 3 */}
      <img src={RocketImage} alt="cloud" className="aboutRocket" />


      <div className="box box3" >

        <h3>FOUNDER'S MESSAGE</h3>

        <h1>Pleasure to Meet You Here</h1>
        <div className="founder-image">
          <img src={Image1} alt="Founder's Image" />
        </div>
        <p>
          Education is becoming a Costly Commodity now a days. Yes I meant Commodity. The Fast Flying World Sees Everything very Commercial Including Our Loved Children's Knowledge and Future. So,
           We decided to Give Affordable World Class Education to our Children and Started Green Apple Kids and Walking Slowly towards our Vision and I am Sure with All your Support we Reach it Very 
          </p>
          <h3>Chairman</h3>

          <h1 style={{marginBottom:'7%'}}>Sundara Lakshmi</h1>
          
        
      </div>


      {/* Box 4 */}
      <div className="box box2">
        <div className="about-us">
          <div className="about-text">
           
            <p>
            Welcome to GREEN APPLE KIDS SCHOOL, where every child's journey begins with curiosity and joy! As the principal,
             I am honoured to lead a team of dedicated educators who nurture and inspire our young learners. At our school, we believe in creating a warm,
              inclusive, and stimulating environment where each child feels valued and excited to explore. Our curriculum is designed to spark imagination and 
              foster a love for learning through play, creativity, and discovery. We are committed to partnering with families to ensure that every child thrives socially, 
              emotionally, and academically.
            </p>
            <h3>principal 
            </h3>
            <h2>S.SINDHU</h2>
          </div>
          <div className="about-image">
          <img src={Bigcloud} alt="cloud" className="bigcloud" />

            <img src={Image2} alt="Our Mission" />

          </div>
        </div>
      </div>

      {/* Box 5 */}
      <div className="box box5">
        <div className="mission">
          <div className="mission-image">
            <img src={Image3} alt="Future Vision" />
          </div>
          <div className="mission-text">
          <img src={Butterfly} alt="cloud" className="Butterfly" />
          <img src={YellowBaloon} alt="cloud" className="YellowBaloon" />


            <h1>Our Mission</h1>
            <p>
            To Make an Revolutionary Foot Print in Early Education for Kids and to Create World Class Facility to Reach the Goal. We aspire to be recognized for our innovative approaches, commitment to quality, and dedication to the holistic development of each child. 
            Through collaborative partnerships with families and the community, we aim to empower young learners to become confident, compassionate, and responsible global citizens
            </p>
          </div>
        </div>
      </div>
  
      {/* Box 6 */}

      <div className="box box2" >
        <div className="about-us">
          <div className="about-text">
          <img src={Bigcloud} alt="cloud" className="bigcloud1" />

            <h1 >Our Vision</h1>
            <p>
            To Make an Revolutionary Foot Print in Early Education for Kids and to Create World Class Facility to Reach the Goal.
At GAK, we are dedicated to nurturing young minds and hearts in a safe, supportive, and stimulating environment. Our mission is to inspire a lifelong love of learning through innovative programs that promote creativity, curiosity, and 
social-emotional growth.
            </p>
          </div>
          <div className="about-image">
          <img src={Butterfly1} alt="cloud" className="Butterfly1" />

            <img src={Image4}alt="About Us" />
          </div>
        </div>
      </div>
 
        {/* Box 7 */}
      <div className="box box3">
      {/* <img src={Sun} alt="cloud" className="aboutsun" /> */}
      <img src={Flower} alt="cloud" className="aboutFlower" />


      <img src={Star} alt="cloud" className="starimage" /> 

        <div className="founder-image">

          <img src={Image5} alt="Founder's Image" />
        </div>

        <h1>Our Strength</h1>

        <p >
        This Group of High Talented, Self Esteemed Individual Motherly Teachers are the Strength of 
Green Apple Kids Group. With their Talented Behaviour and Motherly Nature they makes Each 
Kid more Perfect to be      Better Person in this Society.
</p>
       
      </div>
      </div>
  );
};

export default About;
