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
            <h3>First Slide Label</h3>
            <p>This is the first slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="../securitymen3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>This is the second slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="../securitymen4.jpg" // Corrected path
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <p>This is the third slide description.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ImageCarousel;
