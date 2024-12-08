import Header from './components/Header.js';
import ImageCarousel from './components/ImageCarousel.js';
import ContentWithImage from './components/ContentWithImage.js';
import Footer from './components/Footer.js';
import OurClients from './components/OurClients.js';
import Services from './components/Services.js';
import AboutUs from './components/AboutUs.js';
import './App.css';

function App() {
  return (
   <>
   <Header />
   <AboutUs />
   <ImageCarousel />
   <ContentWithImage />
    <Services />
   <OurClients />
   
   <Footer />
   </>
  );
}

export default App;
