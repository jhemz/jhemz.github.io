import React from 'react';
import Card from 'react-bootstrap/Card'; // Import Bootstrap Card
import BurmanLogo from '../assets/BurmanLogo.png'; // Adjust the logo based on gearbox type or brand

// Gearbox Card Component
const GearboxCard = ({ gearbox }) => {
  const gearboxImage = require(`../assets/Gearboxes/${gearbox.image}`); // Ensure images are in the right folder

  return (
    <Card style={{
      width: '100%', 
      maxWidth: '39rem', 
      margin: '20px auto', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
      position: 'relative',
      background: 'white',
      borderRadius: '10px'
    }}>
      <div style={{
        position: 'absolute', 
        top: '10px', // Adjust based on logo size
        left: '10px',
        zIndex: 10,
        textAlign: 'center',
      }}>
        <img 
          src={BurmanLogo} // You can adjust this for specific gearbox branding
          alt="Logo" 
          style={{
            top: '-10px',
            left: '30px',
            width: '300px',
            height: 'auto',
            zIndex: 10,
          }} 
        />
        <h2 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: '24px', fontWeight: 'bold', color: 'black', margin: 0 }}>
          {gearbox.name}
        </h2>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Flexbox wrapper for the image */}
        <Card.Img
          variant="top"
          src={gearboxImage}
          alt={`${gearbox.name} Image`}
          style={{ width: '90%', marginLeft: '20px', marginRight: '10px', height: 'auto', marginTop: '100px' }}
        />
      </div>

      <Card.Body>
        <div style={{
          backgroundColor: '#d40c0b', 
          height: '5px', 
          borderRadius: '0px',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}>        
        </div>

        <Card.Text style={{ fontFamily: 'Trebuchet MS, sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '15px' }}>
          <strong>Bikes using this gearbox:</strong>
          <ul>
            {gearbox.bikes.map((bike, index) => (
              <li key={index}>{bike}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GearboxCard;