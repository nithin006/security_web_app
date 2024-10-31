import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ContentWithImage() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
        <img
            src="../securitymen3.jpg" // Corrected path
            alt="Descriptive content"
            className="img-fluid"
            // style={{ height: '300px', objectFit: 'cover' }} // Optional: set height and fit
          />
        </Col>
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet
            accumsan urna. Donec scelerisque augue vel nisi placerat, eu sodales eros
            iaculis. Vivamus maximus velit ut ligula facilisis dapibus. Sed id fringilla
            magna. Curabitur ut ullamcorper orci, nec tincidunt leo. Vivamus ac quam at
            nulla sagittis fermentum.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContentWithImage;
