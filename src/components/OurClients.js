import React from 'react';
// import './OurClients.css';

const clients = [
  { id: 1, name: 'Client A', logo: 'path/to/clientA-logo.png' },
  { id: 2, name: 'Client B', logo: 'path/to/clientB-logo.png' },
  { id: 3, name: 'Client C', logo: 'path/to/clientC-logo.png' },
  { id: 4, name: 'Client D', logo: 'path/to/clientD-logo.png' },
  { id: 5, name: 'Client D', logo: 'path/to/clientD-logo.png' },
  
  
  // Add more clients as needed
];

function OurClients() {
  return (
    <div className="our-clients">
      <h2>Our Clients</h2>
      <div className="clients-grid">
        {clients.map((client) => (
          <div key={client.id} className="client-card">
            <img src={client.logo} alt={`${client.name} logo`} className="client-logo" />
            <p className="client-name">{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurClients;
