// components/Header.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

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
      <Navbar />
      <div className="home-para1">
        <div>
          <h1 className="hp">
            Reliable Security Solutions, Tailored for Your Needs
            <br />
            <span className="sp">{displayText}</span>
          </h1>
          <p>
            <h4 style={{ fontFamily: 'Arial, sans-serif', color: '#333', fontStyle: 'italic' }}>
              Contact: <strong style={{ color: 'red', fontStyle: 'italic' }}>9347794484</strong>
            </h4>
            <h4 style={{ fontFamily: 'Arial, sans-serif', color: '#333', fontStyle: 'italic' }}>
              Email: <strong style={{ color: 'red', fontStyle: 'italic' }}>avsecurityservices@gmail.com</strong>
            </h4>
            At <strong>AV Security Services</strong>, our mission is to deliver top-tier security solutions for homes, offices, and personal safety. 
            With a team of trained professionals, cutting-edge technology, and a commitment to excellence, we ensure peace of mind for our clients. 
            Whether it's round-the-clock surveillance, personal security, or comprehensive risk assessments, we stand as a trusted partner in safeguarding what matters most to you.
          </p>
        </div>
        <div>
          <img
            src="../avlogo.jpeg"
            alt="Security Services"
            id="pic"
            style={{ borderRadius: "10px" }}
          />
          <h1
          style={{
            color: '#3498db',
            fontSize: '1.5em',
            textAlign: 'center',
            margin: '10px',
            padding: '10px',
            
          }}
          >AV Security Services</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
