import React from 'react';

// Reusable WDSerialBadge component
const WDSerialBadge = ({ text }) => {
  return (
    <div style={{
        position: 'absolute', 
        right: '10px',
        top: '50px',  
        backgroundColor: '#4D4B1D', // Dark green background
        color: '#fff', // White text
        padding: '5px 10px', 
        fontSize: '38px', 
        fontWeight: 'bold', 
        borderRadius: '30px', // Corner radius for rounded edges
        display: 'flex', // Use flexbox to center the text
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
    }}>
      C{text} {/* Prefix the serial with "C" */}
    </div>
  );
};

export default WDSerialBadge;