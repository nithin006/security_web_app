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
          Our mission is to provide comprehensive security solutions that empower peace of mind for individuals, families, and businesses.
           We are dedicated to upholding the highest standards of professionalism, reliability,
           and innovation to ensure the safety of our clients in every environment. By
           combining advanced technology with personalized service, we strive to create secure, trustworthy spaces where our clients can focus on what 
          matters most. Our commitment to excellence drives us to continually enhance our solutions, foster trust,
           and build lasting partnerships within the communities we serve.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContentWithImage;
