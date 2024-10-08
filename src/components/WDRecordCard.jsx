import React from 'react';
import Card from 'react-bootstrap/Card';
import WDMatchlessLogo from '../assets/WDMatchlessLogo.png';
import YearBadge from './YearBadge'; 
import WDSerialBadge from './WDSerialBadge';
import placeholderImage from '../assets/bikes/placeholder.png'; // Placeholder image

// WDRecordCard Component
const WDRecordCard = ({ record }) => {
  // Dynamically require the tank image using the file name from record.Tank
  const tankImage = require(`../assets/tanks/${record.Tank}`);

  // Set bike image based on the Maker's Type
  let bikeImage;
  switch(record["Model"]) {
    case 'Silver Arrow':
      bikeImage = require('../assets/bikes/MatchlessSilverArrow.png');
      break;
    case 'G3WO':
      bikeImage = require('../assets/bikes/MatchlessG3WO.png');
      break;
    case 'G3L':
      bikeImage = require('../assets/bikes/MatchlessWDG3L.png');
      break;
    default:
      bikeImage = placeholderImage; // Use placeholder if none of the conditions match
  }

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
      {/* Matchless logo, name, and engine number */}
      <div style={{
        position: 'absolute', 
        top: '30px', 
        left: '10px',
        zIndex: 10,
        textAlign: 'center',
      }}>
        <img 
          src={WDMatchlessLogo} 
          alt="Matchless Logo" 
          style={{
            top: '10px',
            left: '30px',
            width: '120px',
            height: 'auto',
            zIndex: 10,
          }} 
        />

        <Card.Text 
          style={{ 
            fontFamily: 'Trebuchet MS, sans-serif',
            marginLeft: '20px',
            marginRight: '20px',
            marginTop:'5px',
            fontSize: '24px' ,
            fontWeight: 'bold',
            color: '#4D4B1D'
          }}>
            {record.Model}
        </Card.Text>
      </div>

      <div style={{
          position: 'absolute',
          top: '10px',  // Adjust to position the badges vertically
          right: '10px', // Adjust to position the badges horizontally
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-end', // Ensure badges are aligned to the right
          zIndex: 10 // Ensure badges are above other elements
        }}>
              <YearBadge text={record["Dates"]} />
              <WDSerialBadge 
                text={record["WD Serial No."]} 
              />
      </div>

      {/* Display the bike image */}
      <Card.Img 
        variant="top"
        src={bikeImage} 
        style={{ 
            width: '90%',
            marginLeft:'20px',
            marginRight:'10px',
            height: 'auto',
            marginTop: '100px'
        }} 
      />

      {/* Green line separator */}
      <div style={{
        backgroundColor: '#4D4B1D', 
        height: '5px', 
        borderRadius: '0px',
        margin: '10px 0',
        position: 'relative',
      }} />

      {/* Body section with two columns: tank image and text */}
      <Card.Body style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        {/* Left column: tank image */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          width: '150px', 
          height: '100%' 
        }}>
          <img 
            src={tankImage} 
            alt="Tank Image" 
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', marginTop:'30px', marginLeft:'20px' }} 
          />
        </div>

        {/* Right column: text content */}
        <Card.Text
          style={{ 
            fontFamily: 'Trebuchet MS, sans-serif',
            marginLeft: '20px',
            flex: 1, 
            fontSize: '15px' 
        }}>
          {/* Display all record details in the card description */}
          <strong>Military Class:</strong> {record["Military Class"]} <br />
          <strong>Frame No.:</strong> {record["Frame No."]} <br />
          <strong>WD Serial No.:</strong> {record["WD Serial No."]} <br />
          <strong>Engine No.:</strong> {record["Engine No."]} <br />
          <strong>Contract Number:</strong> {record["Contract Number"]} <br />
          <strong>Price:</strong> {record["Price"]} <br />
          <strong>Delivery Destination:</strong> {record["Delivery Destination"]}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WDRecordCard;