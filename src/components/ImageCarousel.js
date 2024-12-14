import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
// import './ImageCarousel.css'; // Import the CSS file for styling

function ImageCarousel() {
  return (
    <Container className="mt-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="../securitymen2.jpg" // Corrected path
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Expert Security Personnel</h3>
            <p>Highly trained security guards ensuring the safety of your premises.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="../securitymen3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Advanced Surveillance Technology</h3>
            <p>State-of-the-art security systems to monitor and protect your property 24/7.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="../securitymen4.jpg" // Corrected path
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Customized Security Solutions</h3>
            <p>Tailored security services that meet your unique needs and requirements.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ImageCarousel;
