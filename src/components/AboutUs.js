import React from 'react';

const AboutUs = () => {
  return (
    <section style={styles.container}>
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

const styles = {
  container: {
    padding: '1.5rem',
    // backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    width: '90%', // width is set to 90% to be responsive on smaller screens
    maxWidth: '90%',
    margin: '0 auto', // centers the container horizontally
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    textAlign: 'left',
    lineHeight: '1.6',
    color: '#555',
  },
  '@media (min-width: 768px)': {
    container: {
      maxWidth: '600px',
    },
    heading: {
      fontSize: '1.8rem',
    },
    text: {
      fontSize: '1rem',
    },
  },
  '@media (min-width: 1024px)': {
    container: {
      maxWidth: '800px',
    },
    heading: {
      fontSize: '2.2rem',
    },
    text: {
      fontSize: '1.2rem',
    },
  },
};

export default AboutUs;
