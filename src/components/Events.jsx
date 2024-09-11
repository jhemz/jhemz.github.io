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
        backgroundColor: 'transparent', // Light background color
      }}
    >
      <div className="card" style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        <div className="card-body">
          <FaCalendarTimes size={60} style={{ color: 'rgb(87 114 182)', marginBottom: '20px' }} />
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