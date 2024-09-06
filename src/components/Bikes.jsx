import React, { useState } from 'react';
import bikesData from '../Data/Bikes.json';
import numberPlateData from '../Data/NumberPlates.json';
import BikesTab from './BikesTab';
import NumberPlatesTab from './NumberPlatesTab';
import WDBikesTab from './WDBikesTab';

const BikesPage = () => {
  const [activeTab, setActiveTab] = useState('Bikes');
  const [bikes] = useState(bikesData || []);
  const [numberPlates] = useState(numberPlateData || []);

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const bikesPageStyle = {
    padding: '20px',
    marginTop: '90px',
    fontFamily: 'Arial, sans-serif',
  };

  const secondaryNavStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const tablinkStyle = (isActive) => ({
    padding: '10px 20px',
    cursor: 'pointer',
    fontWeight: isActive ? 'bold' : 'normal',
    backgroundColor: isActive ? '#ddd' : '#f1f1f1',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '0 5px',
  });

  return (
    <div style={bikesPageStyle}>
      <div style={secondaryNavStyle}>
        <a
          style={tablinkStyle(activeTab === 'Bikes')}
          onClick={() => openTab('Bikes')}
        >
          Bikes
        </a>
        <a
          style={tablinkStyle(activeTab === 'Table')}
          onClick={() => openTab('Table')}
        >
          Number Plates
        </a>
        <a
          style={tablinkStyle(activeTab === 'WDBikes')}
          onClick={() => openTab('WDBikes')}
        >
          WD Bikes
        </a>
      </div>

      {/* Conditional rendering of tabs */}
      {activeTab === 'Bikes' && <BikesTab bikes={bikes} />}
      {activeTab === 'Table' && <NumberPlatesTab numberPlates={numberPlates} />}
      {activeTab === 'WDBikes' && <WDBikesTab bikes={bikes.filter(bike => bike.wd)} />}
    </div>
  );
};

export default BikesPage;