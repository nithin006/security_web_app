import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">AV Security Services</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="ms-3">Home</Nav.Link>
            <Nav.Link href="#about" className="ms-3">About</Nav.Link>
            <Nav.Link href="#services" className="ms-3">Services</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className="ms-3">
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#faq">FAQ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;