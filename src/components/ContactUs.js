import React from 'react';
import Navbar from './Navbar';

const ContactUs = () => {
  return (
    <div style={styles.mainWrapper}>
      <Navbar />
      <section style={styles.container}>
        {/* <h2 style={styles.heading}>Contact Us</h2> */}
        <p style={styles.text}>
          Feel free to reach out to us at the following address or contact numbers for any inquiries or assistance.
        </p>
        <div style={styles.contactDetails}>
          <p style={styles.detail}><strong>Address:</strong></p>
          <p style={styles.detail}>
            H.No: 1-4-10, New Found Land,<br />
            Habsiguda, Street No. 7,<br />
            Hyderabad, 500007
          </p>
          <p style={styles.detail}>
            <strong>Phone:</strong><br />
            <a href="tel:9347794484" style={styles.link}>93477 94484</a><br />
            <a href="tel:781583567" style={styles.link}>78158 35672</a>
          </p>
        </div>
      </section>
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
    textAlign: 'center',
    lineHeight: '1.8',
    color: '#666',
    marginBottom: '1rem',
  },
  contactDetails: {
    textAlign: 'left',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#333',
  },
  detail: {
    marginBottom: '1rem',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default ContactUs;
