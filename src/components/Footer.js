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
            We are a trusted security provider offering tailored solutions for office security, home protection,
             and personal safety. With advanced technology, highly trained personnel, and 24/7 support, we’re dedicated to
             delivering comprehensive protection and peace of mind for all your security needs.
            </p>
          </Col>

          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/aboutus" className="text-light">About</a></li>
              <li><a href="/" className="text-light">Services</a></li>
              <li><a href="/contactus" className="text-light">Contact</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className='list-unstyled'>
              <li><a href="https://facebook.com" className="text-light me-3">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-light me-3">Twitter</a></li>
              <li><a href="https://instagram.com" className="text-light">Instagram</a></li>
              </ul>
            
          </Col>
        </Row>
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} AV Security Services. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
