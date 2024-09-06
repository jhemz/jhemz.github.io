import React, { useState, useEffect } from 'react';
import '../css/Bikes.css';
import bikesData from '../Data/Bikes.json';
import MatchlessBikeCard from './BikeCard';
const numberPlateData = require('../Data/NumberPlates.json');

const NumberPlateTable = ({ data }) => {
  const maxRowsPerColumn = 80;

  const createColumns = (data) => {
    const columns = [];
    for (let i = 0; i < data.length; i += maxRowsPerColumn) {
      columns.push(data.slice(i, i + maxRowsPerColumn));
    }
    return columns;
  };

  const columns = createColumns(data);

  return (
    <div className="table-wrapper">
      {columns.map((columnData, columnIndex) => (
        <div key={columnIndex} className="table-column">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {columnData.map((item, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{item.prefix}</td>
                  <td>{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

const BikesPage = () => {
  const [activeTab, setActiveTab] = useState('Bikes');
  const [numberPlateInput, setNumberPlateInput] = useState('');
  const [locationDisplay, setLocationDisplay] = useState('');
  const [bikes, setBikes] = useState(bikesData || []);
  const [numberPlates, setNumberPlates] = useState(numberPlateData || []);

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const showBikeLocation = () => {
    getBikeLocation(numberPlateInput).then((location) => {
      setLocationDisplay(`Location: ${location}`);
    });
  };

  const getBikeLocation = async (numberPlate) => {
    const prefix = extractPrefix(numberPlate);
    if (prefix) {
      return getLocationByPrefix(prefix);
    }
    return 'Invalid number plate';
  };

  const extractPrefix = (numberPlate) => {
    const match = numberPlate.match(/^[A-Z]+/i);
    return match ? match[0].slice(-2).toUpperCase() : null;
  };

  const getLocationByPrefix = (prefix) => {
    const entry = numberPlates.find((item) => item.prefix === prefix);
    return entry ? entry.location : 'Unknown location';
  };

  return (
    <div className="bikes-page">
      <div className="secondary-nav">
        <a
          className={`tablinks ${activeTab === 'Bikes' ? 'active' : ''}`}
          onClick={() => openTab('Bikes')}
        >
          Bikes
        </a>
        <a
          className={`tablinks ${activeTab === 'Table' ? 'active' : ''}`}
          onClick={() => openTab('Table')}
        >
          Number Plates
        </a>
        <a
          className={`tablinks ${activeTab === 'WDBikes' ? 'active' : ''}`}
          onClick={() => openTab('WDBikes')}
        >
          WD Bikes
        </a>
      </div>

      {/* Bikes Tab */}
      {activeTab === 'Bikes' && (
        <div className="tabcontent">
          <div className="bikes-container">
            {bikes.map((bike) => 
                <MatchlessBikeCard bike={bike} />
            )}
          </div>
        </div>
      )}

      {/* Number Plates Tab */}
      {activeTab === 'Table' && (
        <div className="tabcontent">
          <div className="location-tool" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <input
              type="text"
              value={numberPlateInput}
              onChange={(e) => setNumberPlateInput(e.target.value.toUpperCase())}
              placeholder="Reg"
              style={{ padding: '10px', fontSize: '30px' }}
            />
            <button onClick={showBikeLocation} style={{ padding: '10px 20px', fontSize: '16px' }}>
              Search
            </button>
            <p style={{ marginTop: '15px', fontSize: '30px', fontWeight: 'bold' }}>{locationDisplay}</p>
          </div>
          <div className="table-wrapper">
            <NumberPlateTable data={numberPlates} />
          </div>
        </div>
      )}

      {/* WD Bikes Tab (for future implementation) */}
    </div>
  );
};

export default BikesPage; 