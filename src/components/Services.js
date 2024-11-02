import React from 'react';


const services = [
  {
    id: 1,
    title: 'Office Security',
    description: 'Protect your Office from threats and vulnerabilities.',
    image: '../office.webp', // Replace with actual image path
  },
  {
    id: 2,
    title: 'Home Security',
    description: 'Protect your Office from threats and vulnerabilities',
    image: '../house.webp', // Replace with actual image path
  },
  {
    id: 3,
    title: 'Personal Security',
    description: 'Protect you from threats and vulnerabilities',
    image: '../bodyguard.webp', // Replace with actual image path
  },
  
  // Add more services as needed
];

function Services() {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
