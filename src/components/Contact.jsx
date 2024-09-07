import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import { FaHardHat } from 'react-icons/fa'; // Import a construction worker icon from react-icons

function Contact() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height to center vertically
        padding: '20px',
        backgroundColor: 'transparent', // Light background color
      }}
    >
      <div className="card" style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        <div className="card-body">
          <FaHardHat size={60} style={{ color: 'rgb(87 114 182)', marginBottom: '20px' }} />
          <h1 className="card-title">Under Construction</h1>
          <p className="card-text">
            Our events page is currently under construction. Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;