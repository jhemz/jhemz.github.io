import React, { useState } from 'react';
import NumberPlateTable from './NumberPlateTable';

const NumberPlatesTab = ({ numberPlates }) => {
  const [numberPlateInput, setNumberPlateInput] = useState('');
  const [locationDisplay, setLocationDisplay] = useState('');

  const locationToolStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '30px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    marginLeft: '10px',
    cursor: 'pointer',
  };

  const locationDisplayStyle = {
    marginTop: '15px',
    fontSize: '30px',
    fontWeight: 'bold',
  };

  const showBikeLocation = () => {
    const location = getBikeLocation(numberPlateInput);
    setLocationDisplay(`Location: ${location}`);
  };

  const getBikeLocation = (numberPlate) => {
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
    <div className="tabcontent">
      <div style={locationToolStyle}>
        <input
          type="text"
          value={numberPlateInput}
          onChange={(e) => setNumberPlateInput(e.target.value.toUpperCase())}
          placeholder="Reg"
          style={inputStyle}
        />
        <button onClick={showBikeLocation} style={buttonStyle}>
          Search
        </button>
        <p style={locationDisplayStyle}>{locationDisplay}</p>
      </div>
      <div className="table-wrapper">
        <NumberPlateTable data={numberPlates} />
      </div>
    </div>
  );
};

export default NumberPlatesTab;