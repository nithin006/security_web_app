import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <section style={{ ...styles.container }}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.text}>
        We are a trusted security and service provider committed to protecting offices, homes, and individuals. 
        Our customized solutions include office security, home protection, and personal safety, combining advanced 
        technology with highly trained personnel to ensure comprehensive protection. With a customer-first approach, 
        24/7 support, and a dedication to excellence, we deliver peace of mind for all your security needs.
      </p>
    </section>
  );
};

const OurServices = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Our Services</h2>
      <ul style={styles.servicesList}>
        <li>Office Security</li>
        <li>Home Protection</li>
        <li>Personal Safety</li>
        <li>24/7 Surveillance</li>
        <li>Customized Security Solutions</li>
      </ul>
    </section>
  );
};

const MainComponent = () => {
  const [containerStyles, setContainerStyles] = useState(styles.container);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setContainerStyles({
          ...styles.container,
          maxWidth: '800px',
        });
      } else if (width >= 768) {
        setContainerStyles({
          ...styles.container,
          maxWidth: '600px',
        });
      } else {
        setContainerStyles({
          ...styles.container,
          maxWidth: '90%',
        });
      }
    };

    handleResize(); // Set initial styles
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={styles.mainWrapper}>
      <Navbar />
      <div style={containerStyles}>
        <AboutUs />
        <OurServices />
      </div>
    </div>
  );
};

const styles = {
  mainWrapper: {
    minHeight: '100vh',
    
    fontFamily: '"Roboto", sans-serif',
  },
  container: {
    padding: '2rem',
    background: 'white',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    margin: '1rem auto',
    textAlign: 'center',
    maxWidth: '90%',
    animation: 'fadeIn 1s ease-in-out',
  },
  heading: {
    fontSize: '2rem',
    color: '#444',
    marginBottom: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  text: {
    fontSize: '1.2rem',
    textAlign: 'left',
    lineHeight: '1.8',
    color: '#666',
  },
  servicesList: {
    listStyleType: 'circle',
    paddingLeft: '20px',
    textAlign: 'left',
    lineHeight: '1.8',
    color: '#333',
    fontSize: '1.1rem',
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  '@media (max-width: 768px)': {
    heading: {
      fontSize: '1.8rem',
    },
    text: {
      fontSize: '1rem',
    },
    servicesList: {
      fontSize: '0.9rem',
    },
  },
  '@media (max-width: 480px)': {
    heading: {
      fontSize: '1.5rem',
    },
    text: {
      fontSize: '0.9rem',
    },
    servicesList: {
      fontSize: '0.8rem',
    },
    container: {
      padding: '1rem',
    },
  },
};

export default MainComponent;
