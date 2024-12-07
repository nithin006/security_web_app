import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          <img
            src="../AVicon.jpeg" // Adjust the path if necessary
            alt="Icon"
            width="40" // Adjusted for mobile-friendliness
            height="40"
            className="me-2"
            style={{ borderRadius: "50%" }}
          />
          AV Security Services
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center text-lg-start"> {/* Centered on mobile */}
            <Nav.Link href="../ImageCarousel" className="ms-lg-3 my-1" style={{ fontWeight: "bold" }}>Home</Nav.Link>
            <Nav.Link href="#AboutUs" className="ms-lg-3 my-1" style={{ fontWeight: "bold" }}>About</Nav.Link>
            <Nav.Link href="#services" className="ms-lg-3 my-1" style={{ fontWeight: "bold" }}>Services</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className="ms-lg-3 my-1" style={{ fontWeight: "bold" }}>
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#faq">Locaton</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
