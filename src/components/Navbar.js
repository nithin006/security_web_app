// components/NavbarComponent.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          <img
            src="../newav.png" // Adjust the path as necessary
            alt="Icon"
            width="40"
            height="40"
            className="me-2"
            style={{ borderRadius: "50%" }}
          />
          AV Security Services
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center text-lg-start">
            <Nav.Link href="/" className="ms-lg-3 my-1" style={{ fontWeight: "bold" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/aboutus" className="ms-lg-3 my-1" style={{ fontWeight: "bold" }}>
              About
            </Nav.Link>
            <Nav.Link href="/contactus" className="ms-lg-3 my-1" style={{ fontWeight: "bold" }}>
              Contact
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className="ms-lg-3 my-1" style={{ fontWeight: "bold" }}>
              {/* <NavDropdown.Item href="/">Contact</NavDropdown.Item> */}
              <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/location">Location </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
