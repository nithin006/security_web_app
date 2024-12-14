import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure routing context
import Header from './components/Header.js';
import ImageCarousel from './components/ImageCarousel.js';
import ContentWithImage from './components/ContentWithImage.js';
import Footer from './components/Footer.js';
import OurClients from './components/OurClients.js';
import Services from './components/Services.js';
import './App.css';
import ViewLocation from './components/ViewLocation.js';
import MainComponent from './components/AboutUs.js';
import ContactUs from './components/ContactUs.js';
import BlogPage from './components/Blog.js';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={
          <>
             <Header />
            <ImageCarousel />
            <ContentWithImage />
            <Services />
            <OurClients />
            {/* <ViewLocation /> */}
          </>
        } />
        <Route path="/aboutus" element={<MainComponent />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/location" element={<ViewLocation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
