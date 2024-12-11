import React from 'react';

const ContactDetails = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.text}>
        Feel free to reach out to us for any inquiries or assistance. We are here to help!
      </p>
      <ul style={styles.contactList}>
        <li>Email: <a href="mailto:contact@yourcompany.com" style={styles.link}>contact@yourcompany.com</a></li>
        <li>Phone: <a href="tel:+1234567890" style={styles.link}>+123 456 7890</a></li>
        <li>Address: 123 Secure Lane, Safety City, SC 12345</li>
      </ul>
    </section>
  );
};

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
  return (
    <div>
      <AboutUs />
      <OurServices />
      <ContactDetails />
    </div>
  );
};

const styles = {
  container: {
    padding: '1.5rem',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '800px',
    margin: '1rem auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    textAlign: 'left',
    lineHeight: '1.6',
    color: '#555',
  },
  contactList: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'left',
    lineHeight: '1.8',
    color: '#555',
  },
  servicesList: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    textAlign: 'left',
    lineHeight: '1.8',
    color: '#555',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
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

export default MainComponent;
