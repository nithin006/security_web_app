import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function Header() {
  const location = useLocation();
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const text = "JOIN US NOW !!";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0; 
      }
    }, 200); 

    return () => clearInterval(interval);
  }, [location.pathname]);

  return (
    <>
    <Navbar bg="light" expand="lg" className="p-3">
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          <img
            src="../newav.png" // Adjust the path if necessary
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
            <Nav.Link href="../ImageCarousel" className="ms-lg-3 my-1" style={{ fontWeight: "bold" }}>Home</Nav.Link>
            <Nav.Link href="#AboutUs" className="ms-lg-3 my-1" style={{ fontWeight: "bold" }}>About</Nav.Link>
            <Nav.Link href="#services" className="ms-lg-3 my-1" style={{ fontWeight: "bold" }}>Contact</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className="ms-lg-3 my-1" style={{ fontWeight: "bold" }}>
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <a 
                  href="https://www.google.co.in/maps/place/Paradise+Biryani+%7C+Padmarao+Nagar/@17.4312043,78.4878031,14z/data=!4m6!3m5!1s0x3bcb9b89bf6b4f2b:0xc97632e244957619!8m2!3d17.4312036!4d78.5051256!16s%2Fg%2F11s8hgpzgt?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  View Location
                </a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <div className="home-para1">
  <div>
    <h1 className="hp">
      Reliable Security Solutions, Tailored for Your Needs
      <br />
      <span className="sp">{displayText}</span>
    </h1>

    <p>
      At <strong>AV Security Services</strong>, our mission is to deliver top-tier security solutions for homes, offices, and personal safety. 
      With a team of trained professionals, cutting-edge technology, and a commitment to excellence, we ensure peace of mind for our clients. 
      Whether it's round-the-clock surveillance, personal security, or comprehensive risk assessments, we stand as a trusted partner in safeguarding what matters most to you.
    </p>
  </div>
  <div>
    <img
      src="../logo.png"
      alt="Security Services"
      id="pic"
      style={{ borderRadius: "10px" }}
    />
  </div>
</div>

    </>
  );
}

export default Header;
