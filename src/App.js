import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure routing context
import Header from './components/Header.js';
import ImageCarousel from './components/ImageCarousel.js';
import ContentWithImage from './components/ContentWithImage.js';
import Footer from './components/Footer.js';
import OurClients from './components/OurClients.js';
import Services from './components/Services.js';
import './App.css';
import ViewLocation from './components/ViewLocation.js';

function App() {
  return (
    <Router>
      {/* Main Application Structure */}
      <>
        <Header />
        {/* <AboutUs /> */}
        <ImageCarousel />
        <ContentWithImage />
        <Services />
        <OurClients />
        <ViewLocation/>
        <Footer />
        
      </>
    </Router>
  );
}

export default App;
