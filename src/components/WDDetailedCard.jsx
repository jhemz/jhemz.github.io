import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import DownloadIcon from '../assets/PartsListIcon.jpg';
import YearBadge from './YearBadge';
import SmallBadge from './SmallBadge';
import DownloadItem from './DownloadItem';  // Import the DownloadImage component


const WDDetailedCard = ({ bike }) => {
  const bikeImage = require(`../assets/bikes/${bike.image}`);
  const bikeName = bike.name.replace('Matchless', '');

  // State to handle the currently selected tab
  const [key, setKey] = useState('details');
  const partsList = require(`../Documents/1940_Matchless_G3WO_Parts_list.pdf`);

  return (
    <Card style={{
      width: '100%',
      maxWidth: '50rem', // Slightly larger card for the detailed view
      margin: '20px auto',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      background: 'white',
      borderRadius: '10px'
    }}>
     

      {/* Tabs for Details, Documentation, and Specs */}
      <Tabs
        id="bike-details-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        style={{
          marginTop: '10px', 
          zIndex: 5,
          position: 'relative',
        }}
      >
        <Tab eventKey="details" title="Details">
          {/* Tab 1: Details */}
          <Card.Body>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ maxWidth: '50%' }}>
                <h2 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: '24px', fontWeight: 'bold', color: '#4D4B1D', margin: '0 0 10px 0' }}>
                  {bikeName}
                </h2>
                <p style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: '18px' }}>
                  Engine: {bike.engine}
                </p>
                <Card.Text
                  style={{ fontFamily: 'Trebuchet MS, sans-serif', marginLeft: '20px', marginRight: '20px', fontSize: '15px' }}
                >
                  {bike.description}
                </Card.Text>
              </div>

              {/* Badges on the right */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <YearBadge text={bike.year} />
                <SmallBadge text={bike.gearbox} />
                <SmallBadge text={bike.weight} />
                <SmallBadge text={bike.topSpeed} />
              </div>
            </div>

            {/* Bike image in the details tab */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Card.Img variant="top" src={bikeImage} alt={`${bikeName} Image`} style={{ width: '90%', height: 'auto' }} />
            </div>
          </Card.Body>
        </Tab>

        <Tab eventKey="documentation" title="Documentation">
          {/* Tab 2: Documentation */}
          <Card.Body>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              <DownloadItem
                imageSrc={DownloadIcon}
                label="Parts List"
                fileUrl={partsList}
                fileName="1940_Matchless_G3WO_Parts_list.pdf"
              />
             
            </div>
          </Card.Body>
        </Tab>

        <Tab eventKey="specs" title="Specs">
          {/* Tab 3: Specs (Empty for now) */}
          <Card.Body>
            <Card.Text style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: '15px' }}>
              Specs are currently unavailable.
            </Card.Text>
           
          </Card.Body>
        </Tab>
      </Tabs>
    </Card>
  );
};

export default WDDetailedCard;