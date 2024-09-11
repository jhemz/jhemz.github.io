import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import { FaCalendarTimes } from 'react-icons/fa'; // Import a no-events icon from react-icons

function Events() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height to center vertically
        padding: '20px',
        backgroundColor: 'transparent', // Background for the outer container
      }}
    >
      <div className="image-container2">
        <div className="faded-RallyImage"></div>
      </div>
      <div 
        className="card" 
        style={{
          backgroundColor: 'white', // Explicitly set background color to white
          maxWidth: '500px',
          zIndex:'1000',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for emphasis
          borderRadius: '8px', // Add some rounding to make it more modern
          padding: '20px',
        }}
      >
        <div className="card-body">
          <FaCalendarTimes 
            size={60} 
            style={{ color: 'rgb(87 114 182)', marginBottom: '20px' }} 
          />
          <h1 className="card-title">No Upcoming Events</h1>
          <p className="card-text">
            Currently, there are no upcoming events. Please check back later for updates!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Events;