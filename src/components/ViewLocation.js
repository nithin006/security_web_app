import React from 'react';

function ViewLocation() {
  const mapUrl = "https://www.google.co.in/maps/place/Paradise+Biryani+%7C+Padmarao+Nagar/@17.4312043,78.4878031,14z/data=!4m6!3m5!1s0x3bcb9b89bf6b4f2b:0xc97632e244957619!8m2!3d17.4312036!4d78.5051256!16s%2Fg%2F11s8hgpzgt?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D";

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Location</h1>
      <p>Click on the map to navigate to Google Maps for detailed directions.</p>
      <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto', height: '500px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
        <iframe
          title="Paradise Biryani Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15230.897350611306!2d78.4878031!3d17.4312043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b89bf6b4f2b%3A0xc97632e244957619!2sParadise%20Biryani%20%7C%20Padmarao%20Nagar!5e0!3m2!1sen!2sin!4v1696988440012!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >View Location</a>
      </div>
    </div>
  );
}

export default ViewLocation;
