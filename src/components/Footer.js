import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet
              accumsan urna. Donec scelerisque.
            </p>
          </Col>

          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home</a></li>
              <li><a href="#about" className="text-light">About</a></li>
              <li><a href="#services" className="text-light">Services</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-light me-3">Facebook</a>
              <a href="https://twitter.com" className="text-light me-3">Twitter</a>
              <a href="https://instagram.com" className="text-light">Instagram</a>
            </div>
          </Col>
        </Row>
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
