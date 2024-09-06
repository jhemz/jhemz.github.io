import React from 'react';

// Reusable GearboxBadge component
const SmallBadge = ({ text }) => {
  return (
    <div style={{
      marginTop:'1px',
      marginBottom:'1px',
      marginRight:'10px',
      backgroundColor: '#717171', // Dark grey background
      color: 'white', // White text
      padding: '5px 10px', 
      fontSize: '14px', 
      fontWeight: 'bold', 
      border: '3px solid #333', // Thin dark grey border
      borderRadius: '20px', // Rounded corners
      textAlign: 'center', // Center the text
    }}>
      {text}
    </div>
  );
};

export default SmallBadge;