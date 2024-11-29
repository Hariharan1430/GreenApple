import React, { useState } from 'react';
import './Gallerynav.css'; 

const GalleryNavbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-navbar">
        <button
          className={activeTab === 'All' ? 'active' : ''}
          onClick={() => handleTabClick('All')}
        >
          All
        </button>
        <button
          className={activeTab === 'PlayArea' ? 'active' : ''}
          onClick={() => handleTabClick('PlayArea')}
        >
          Play Area
        </button>
        <button
          className={activeTab === 'DanceClass' ? 'active' : ''}
          onClick={() => handleTabClick('DanceClass')}
        >
          Dance Class
        </button>
        <button
          className={activeTab === 'ClassRoom' ? 'active' : ''}
          onClick={() => handleTabClick('ClassRoom')}
        >
          Classroom
        </button>
      </div>

      <div className="frame-container">
        {activeTab === 'PlayArea' && (
          <div className="image-frame">
            <div className="left-column">
              <img src="./Playarea/Gallery-Playarea-img1.png" alt="Play Area 1" />
              <img src="./Playarea/Gallery-Playarea-img4.png" alt="Play Area 2" />
            </div>

            <div className="center-column">
              <img src="./Playarea/Gallery-Playarea-img2.png" alt="Play Area 3" />
              <img src="./Playarea/Gallery-Playarea-img5.png" alt="Play Area 4" />
            </div>

            <div className="right-column">
              <img src="./Playarea/Gallery-Playarea-img3.png" alt="Play Area 5" />
              <img src="./Playarea/Gallery-Playarea-img6.png" alt="Play Area 6" />
              <img src="./Playarea/Gallery-Playarea-img7.png" alt="Play Area 7" />
            </div>
          </div>
        )}

        {activeTab === 'All' && (
          <>
          <div className="image-frame" style={{marginBottom:'3%'}}>
            <div className="center-column">
              <img src="./All-1X/All-img1.png" alt="Dance Class 1" />
              <img src="./All-1X/All-img4.png" alt="Dance Class 2" />
            </div>

            <div className="right-column">
              <img src="./All-1X/All-img2.png" alt="Dance Class 3" />
              <img src="./All-1X/All-img5.png" alt="Dance Class 4" />
              <img src="./All-1X/All-img6.png" alt="Dance Class 5" />

            </div>

            <div className="left-column">
              <img src="./All-1X/All-img3.png" alt="Dance Class 6" />
              <img src="./All-1X/All-img7.png" alt="Dance Class 7" />
            </div>
          </div>
                {/* Dance images */}

           <div className="image-frame" style={{marginBottom:'3%'}}>
           <div className="left-column">
             <img src="./Danceclass-1x/DanceClass-img1.png" alt="Dance Class 1" />
             <img src="./Danceclass-1x/DanceClass-img5.png" alt="Dance Class 2" />
           </div>

           <div className="right-column">
             <img src="./Danceclass-1x/DanceClass-img6.png" alt="Dance Class 3" />
             <img src="./Danceclass-1x/DanceClass-img4.png" alt="Dance Class 4" />
             <img src="./Danceclass-1x/DanceClass-img2.png" alt="Dance Class 5" />

           </div>

           <div className="left-column">
             <img src="./Danceclass-1x/DanceClass-img3.png" alt="Dance Class 6" />
             <img src="./Danceclass-1x/DanceClass-img7.png" alt="Dance Class 7" />
           </div>
         </div>
               {/* playarea images */}
               <div className="image-frame"  style={{marginBottom:'3%'}}>
            <div className="left-column">
              <img src="./Playarea/Gallery-Playarea-img1.png" alt="Play Area 1" />
              <img src="./Playarea/Gallery-Playarea-img4.png" alt="Play Area 2" />
            </div>

            <div className="center-column">
              <img src="./Playarea/Gallery-Playarea-img2.png" alt="Play Area 3" />
              <img src="./Playarea/Gallery-Playarea-img5.png" alt="Play Area 4" />
            </div>

            <div className="right-column">
              <img src="./Playarea/Gallery-Playarea-img3.png" alt="Play Area 5" />
              <img src="./Playarea/Gallery-Playarea-img6.png" alt="Play Area 6" />
              <img src="./Playarea/Gallery-Playarea-img7.png" alt="Play Area 7" />
            </div>
          </div>
                        {/*class images */}

          <div className="image-frame">
            <div className="right-column">
              <img src="./Classroom-1x/classroom-img1.png" alt="Dance Class 1" />
              <img src="./Classroom-1x/classroom-img4.png" alt="Dance Class 2" />
              <img src="./Classroom-1x/classroom-img7.png" alt="Dance Class 3" />

            </div>

            <div className="center-column">
              <img src="./Classroom-1x/classroom-img2.png" alt="Dance Class 4" />
              <img src="./Classroom-1x/classroom-img5.png" alt="Dance Class 5" />

            </div>

            <div className="right-column">
              <img src="./Classroom-1x/classroom-img3.png" alt="Dance Class 6" />
              <img src="./Classroom-1x/classroom-img6.png" alt="Dance Class 7" />
              <img src="./Classroom-1x/classroom-img8.png" alt="Dance Class 3" />

            </div>
          </div>

         </>
        )}
        {activeTab === 'DanceClass' && (
          <div className="image-frame">
            <div className="left-column">
              <img src="./Danceclass-1x/DanceClass-img1.png" alt="Dance Class 1" />
              <img src="./Danceclass-1x/DanceClass-img5.png" alt="Dance Class 2" />
            </div>

            <div className="right-column">
              <img src="./Danceclass-1x/DanceClass-img6.png" alt="Dance Class 3" />
              <img src="./Danceclass-1x/DanceClass-img4.png" alt="Dance Class 4" />
              <img src="./Danceclass-1x/DanceClass-img2.png" alt="Dance Class 5" />

            </div>

            <div className="left-column">
              <img src="./Danceclass-1x/DanceClass-img3.png" alt="Dance Class 6" />
              <img src="./Danceclass-1x/DanceClass-img7.png" alt="Dance Class 7" />
            </div>
          </div>
        )}
        {activeTab === 'ClassRoom' && (
          <div className="image-frame">
            <div className="right-column">
              <img src="./Classroom-1x/classroom-img1.png" alt="Dance Class 1" />
              <img src="./Classroom-1x/classroom-img4.png" alt="Dance Class 2" />
              <img src="./Classroom-1x/classroom-img7.png" alt="Dance Class 3" />

            </div>

            <div className="center-column">
              <img src="./Classroom-1x/classroom-img2.png" alt="Dance Class 4" />
              <img src="./Classroom-1x/classroom-img5.png" alt="Dance Class 5" />

            </div>

            <div className="right-column">
              <img src="./Classroom-1x/classroom-img3.png" alt="Dance Class 6" />
              <img src="./Classroom-1x/classroom-img6.png" alt="Dance Class 7" />
              <img src="./Classroom-1x/classroom-img8.png" alt="Dance Class 3" />

            </div>
          </div>
        )}
      </div>

      {/* Decorative images */}
      <img src="./Playarea/Contactus-Rocket.svg" alt="Rocket" className="rocket-image" />
      <img src="./Playarea/Group.svg" alt="Bee" className="bee-image" />
      <img src="./Playarea/Contactus-Red Baloon.svg" alt="Balloon" className="balloon-image" />
      <img src="./Playarea/Group (1).svg" alt="Teddy Bear" className="teddy-image" />
    </div>
  );
};

export default GalleryNavbar;  