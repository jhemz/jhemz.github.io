import React from 'react';

// Reusable YearBadge component
const YearBadge = ({ text }) => {
  return (
    <div style={{
      margin:'10px',
      backgroundColor: 'transparent', // Transparent background
      color: '#000', // Dark grey/black text
      padding: '5px 10px', 
      fontSize: '18px', 
      fontWeight: 'bold', 
      border: '3px solid #333', // Thin dark grey border
      borderRadius: '20px', // Corner radius of 5px
      display: 'flex', // Use flexbox to center the text
      alignItems: 'center', // Center vertically
    }}>
      {text}
    </div>
  );
};

export default YearBadge;