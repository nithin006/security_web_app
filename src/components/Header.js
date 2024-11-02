import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
          <img
            src="../AVicon.jpeg" // Adjust the path if necessary
            alt="Icon"
            width="100" // Set width to desired size
            height="50" // Set height to desired size
            className="me-2"
            // style={{ borderRadius: "50%" }}
          />
          AV Security Services
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Aligned to the left */}
            <Nav.Link href="../ImageCarousel" className="ms-3" style={{ fontWeight: "bold" }}>Home</Nav.Link>
            <Nav.Link href="#about" className="ms-3" style={{ fontWeight: "bold" }}>About</Nav.Link>
            <Nav.Link href="#services" className="ms-3" style={{ fontWeight: "bold" }}>Services</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className="ms-3" style={{ fontWeight: "bold" }}>
              <NavDropdown.Item href="#contact" >Contact</NavDropdown.Item>
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
