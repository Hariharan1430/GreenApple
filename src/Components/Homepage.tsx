import React, { useEffect, useState } from "react";
import "./Homepage.css"; 

const HomePage: React.FC = () => {
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => prev + 0.5); // Increase position slowly
    }, 50); // Slower update frequency

    return () => clearInterval(interval);
  }, []);

  const verticalOffset = (baseOffset: number): number =>
    15 * Math.sin((position + baseOffset) * 0.1); // Adjust the multiplier for smoother movement
 

 
  

  return (
    <div className="homecontainer">
              {/* Box 1 */}
              
      <div className="banner-image"> </div>

            {/* deceration images */}
      <div className="sky-colour">
        {/* <img
          src="./HomeAssest/sun.svg"
          alt="Sun"
          className="homesun-image"
          style={{ bottom: `${verticalOffset(5)}px` }}
        />
     
        <img
          src="./HomeAssest/Balloon.svg"
          alt="Balloon"
          className="homeballoon"
          style={{ bottom: `${verticalOffset(15)}px` }}
        />
         <img
          src="./HomeAssest/roc (1).svg"
          alt="Rocket"
          className="homerocket-images"
          style={{ bottom: `${verticalOffset(15)}px` }}
        /> 
        <img
          src="./HomeAssest/Cloud1.svg"
          alt="Cloud"
          className="homecloud"
          style={{ bottom: `${verticalOffset(10)}px` }}
        /> */}

   
      </div> 

               {/* Box 2 */}

    <div className="home-cards-container">
      {/* Loaded Talents */}
      <div className="home-card">
        <img
          src="./HomeAssest/boys.svg"
          alt="Boys Image"
          className="home-card-image"
        />
        <h1 className="home-heading">Loaded Talents</h1>
        <p className="home-paragraph">
          Green Apple Kids, is the Place for Minting Multi Talents for your Lovable Kids. 
          The Curriculum has Designed in Such a Way to Feed Multi Level Talents to Each Kid.
        </p>
        <button>Read More</button>
      </div>

      {/* Motherly Care */}
      <div className="home-card">
        <img
          src="./HomeAssest/motherson.svg"
          alt="Mother and Son"
          className="home-card-image"
        />
        <h1 className="home-heading">Motherly Care</h1>
        <p className="home-paragraph">
          Green Apple Kids Teachers and Aunties Pour their Love to Every Kid with a Motherly Care, 
          So that Parent can be Peace at Home while Leaving Kids with us.
        </p>
        <button>Read More</button>
      </div>

      {/* Active Learning */}
      <div className="home-card">
        <img
          src="./HomeAssest/boyreading.svg"
          alt="Boy Reading"
          className="home-card-image"
        />
        <h1 className="home-heading">Active Learning</h1>
        <p className="home-paragraph">
          In Green Apple Kids, We make Sure Each and every Kid is Going through a very Joyful Learning 
          Curve without any Tiredy Behaviour and Active Happy Learning
        </p>
        <button>Read More</button>
      </div>
    </div>
  
               {/* Box 3*/}
      
      <div className="welcome-section">
        <div className="text-content">
          <h2 className="welcome">
            Welcome to 
            </h2>
            <h1 className="highlight">Green Apple Kids
           </h1>
          <p className="paragraph">
            Green Apple Kids started with 7 kids 12  years ago, and now
            marching with 150+ kids in its first branch Aruppukottai. 
            Provided with the world-class learning facility and healthy
            growing environment, Green Apple Kids is growing faster with your
            kids. Now we can proudly declare, that Green Apple Kids iss one of
            the such places to give the perfect feed for the initial learning ages
            of your kids.
          </p>
          <button className="read-more-button">Read More</button>
          <div className="additional-images">
            {/* <img
              src="./HomeAssest/Butterfly (2).svg"
              alt="Butterfly"
              className="butterfly-image"
            /> */}
          </div> 
        </div>

         {/* <img
          src="./HomeAssest/moving cloud.svg"
          alt="Cloud"
          className="moving-cloud"
          style={{ bottom: `${verticalOffset(10)}px` }}
        />
        <img
          src="./HomeAssest/Cloud1.svg"
          alt="Cloud"
          className="cloud-image"
          style={{ bottom: `${verticalOffset(10)}px` }}
        />  */}
        
        <div>
        <img
          src="./HomeAssest/TREE 1.svg"
          alt="Tree with Kids"
          className="tree-image"
        />
        </div>

        
      </div>

                {/* deceration images */}

      {/* <img
          src="./HomeAssest/plane.svg"
          alt="plane-image"
          className="plane-image"
          style={{ bottom: `${verticalOffset(15)}px` }}
        />  */}

                {/* Box 4*/}
      <div className="homebox-container">
        {/* <img
          src="./assets/toy.svg"
          alt="Decorative box"
          className="toy-image"
        /> */}

 <img 
          src="https://s3-alpha-sig.figma.com/img/6b7d/7dec/19f42c6dc32d67cf5b8b4f4e5239441b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwzHmjRqT0UWF~wxZTvqbG6PJZmuPxhIimyH7oyMkrMUsr5RAptMv~TzH2TTelHhg4v65KEUs1LpHR0oNUa7InFZRmXKVrMRoUeKDS0DqjGA9YNIh0ml5-vLDbESioxKsP3BrOGc1QxAdsumSpHNGW29PBnI0zXoDWulS2D8HHMI3L5ADpkh2PyTeVLt5yggmeiDPCla7M9IQliEEKn8ylJkK~TxU09fP9~n7hDeudnSS4SSn9hFmSM2hVj3FUPZyyw~FWI8jzvnt45miNxX51t4Fa5WtAlwV3mgpj5KG~Pf4vvaDjJ51xd91vs8T0IzmZkQ7rkg1748YsJ3LkZywQ__"
          alt="Truck GIF" className="truck-gif" /> 
       
    <div className="contents">
      <h2 className='box-heading'>PARENTS CHOOSE US</h2>
      <h1 className='box-heading2'>Why Green Apple Kids?</h1>
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-number">12</span>
          <p className="stat-text">Years of Experience</p>
        </div>
        <div className="stat-item">
          <span className="stat-number">15</span>
          <p className="stat-text">Qualified Teachers</p>
        </div>
        <div className="stat-item">
          <span className="stat-number">150+</span>
          <p className="stat-text">Happy Children</p>
        </div>
        <div className="stat-item">
          <span className="stat-number">95</span>
          <p className="stat-text">Total Activities</p>
        </div>
      </div>
    </div>
  </div>

  {/* <img
            src="./HomeAssest/plane.svg"
            alt="plane"
            className="plane-images"
            style={{ bottom: `${verticalOffset(15)}px` }}
          /> */}

                {/* Box 5*/}

      <div className="testimonial-heading">
      <h2 className="testimonial-heading2">
          Testimonials
      </h2>
       
      <h1 className="testimonial-heading1"> What Parents Say </h1>

      </div>

                {/* Box 6*/}


      <div className="testinomial-cards-container">
      
    
      <div className="testinomial-card">
        <img
          src="./HomeAssest/photo.svg"
          alt="Boys Image"
          className="testinomial-card-image"
        />
        <h1>Anusha A</h1>
        <p>
           We have been waiting for such a safe and cheerful environment in the heart of the city for our kid and the wait is finally over now. Well trained and polite staff. Super satisfied.
        </p>
     
      </div>

      <div className="testinomial-card">
        <img
          src="./HomeAssest/photo.svg"
          alt="Mother and Son"
          className="testinomial-card-image"
        />
        <h1>Renuka S</h1>
        <p>
        I must say, I have taken the right decision by God’s grace to put my son in green apple kids. Compared to his previous school, the things he is achieving with GAK are unbelievable.
        </p>
       
      </div>

      {/* Active Learning */}
      <div className="testinomial-card">
        <img
          src="./HomeAssest/Male photo.svg"
          alt="Boy Reading"
          className="testinomial-card-image"
        />
        <h1>Saravana Kumar P</h1>
        <p>
        I could feel the flourishing growth of my daughter Srithar after I joined her with green apple kids. Now she became very cheerful all the time and Active 
        </p>
       
      </div>
    </div>

      


       
  
  
    </div>
  );
};

export default HomePage;