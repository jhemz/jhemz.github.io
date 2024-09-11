import React, { useState, useEffect } from 'react';
import bikesData from '../Data/Bikes.json';
import GearboxData from '../Data/Gearboxes.json';
import numberPlateData from '../Data/NumberPlates.json';
import BikesTab from './BikesTab';
import NumberPlatesTab from './NumberPlatesTab';
import WDBikesTab from './WDBikesTab';
import GearboxesTab from './GearboxesTab';
import factoryImage from '../assets/factory.png'; // Import the image
import Header from './Header'; // Make sure to import your Header component

const BikesPage = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('Bikes');
  const [bikes] = useState(bikesData || []);
  const [numberPlates] = useState(numberPlateData || []);

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  // Prepare the secondary menu items for the bikes page
  const secondaryMenuItems = [
    {
      name: 'Bikes',
      isActive: activeTab === 'Bikes',
      onClick: () => openTab('Bikes')
    },
    {
      name: 'Number Plates',
      isActive: activeTab === 'Table',
      onClick: () => openTab('Table')
    },
    {
      name: 'WD Bikes',
      isActive: activeTab === 'WDBikes',
      onClick: () => openTab('WDBikes')
    }
  ];

  const bikesPageStyle = {
    padding: '20px',
    marginTop: '170px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed', // Makes the background image fixed while scrolling
  };

  const titleStyle = {
    fontFamily: 'Trebuchet MS, sans-serif',
    position: 'absolute',
    top: '200px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '4rem',
    fontWeight: 'bold',
    color: 'white',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.9)',
    zIndex: 20, // Ensure title stays above the faded overlay
  };

  return (
    <div>
      {/* Pass the secondary menu items to the Header */}
      <Header selectedPage="bikes" onNavigate={onNavigate} secondaryMenuItems={secondaryMenuItems} />

      <div className="image-container2">
        <div className="faded-factoryImage"></div>
      </div>

      <div style={bikesPageStyle}>
        {/* Render the appropriate tab content based on activeTab */}
        {activeTab === 'Bikes' && <BikesTab bikes={bikes} />}
        {activeTab === 'Table' && <NumberPlatesTab numberPlates={numberPlates} />}
        {activeTab === 'WDBikes' && <WDBikesTab bikes={bikes.filter(bike => bike.wd)} />}
      </div>
    </div>
  );
};

export default BikesPage;