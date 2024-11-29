import React from 'react';
import ContactDetails from './Components/Contact';
import AdmissionPage from './Components/Admission'
import Popupform from './Components/Popup'
import GalleryNavbar from './Components/Gallerynav';
import Navbar from './Components/Navbar';
import FooterImage from './Components/FooterImage'
import Whyus from './Components/Whyus'
import Header from './Components/Header'
import About from './Components/About'
import Home from './Components/Homepage'
import SideIcons from './Components/SocialMediaIcons'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
        <BrowserRouter>
        <Header />

     <Navbar />
     <SideIcons />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/why-us" element={<Whyus />} />
     <Route path="/gallery" element={<GalleryNavbar />} />
     <Route path="/contact" element={<ContactDetails />} />
     <Route path="/admissions" element={<AdmissionPage />} />
     <Route path="/contact" element={<ContactDetails />} />
     <Route path="/enquire" element={<Popupform />} />

     </Routes>
     <FooterImage />
     </BrowserRouter>  


     
    </div>
  );
}   

export default App;
