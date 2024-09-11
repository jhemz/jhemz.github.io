import React, { useState } from 'react';
import NumberPlateTable from './NumberPlateTable';

const NumberPlatesTab = ({ numberPlates }) => {
  const [numberPlateInput, setNumberPlateInput] = useState('');
  const [locationDisplay, setLocationDisplay] = useState('');

  const locationToolStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    position: 'relative', // Keep relative positioning
    maxWidth: '100%',
    padding: '20px',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '18px',
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    marginLeft: '10px',
    cursor: 'pointer',
    display: 'inline-block',
    position: 'relative', // Ensure it's properly placed within the flow
    zIndex: 1, // Ensure it's on top of other elements
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#51624F', // Use the same color as your header
    color: '#fff',
  };

  const locationDisplayStyle = {
    marginTop: '15px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  const showBikeLocation = () => {
    const unformattedNumberPlate = numberPlateInput.replace(/\s+/g, ''); // Remove spaces
    const location = getBikeLocation(unformattedNumberPlate);
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

  const handleInputChange = (e) => {
    let value = e.target.value.toUpperCase().replace(/\s+/g, ''); // Remove spaces and convert to uppercase
    if (value.length > 6) {
      value = value.slice(0, 6); // Limit to 6 characters
    }

    // Automatically insert space after the first 3 characters if there are more than 3
    if (value.length > 3) {
      value = `${value.slice(0, 3)} ${value.slice(3)}`;
    }

    setNumberPlateInput(value); // Update the state with the formatted value
  };

  const explanationTextStyle = {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#333',
    maxWidth: '100%', // Ensure it doesn't overflow
    lineHeight: '1.5',
    textAlign: 'center',
    margin: '0 auto',
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%', // Allow it to fit the container
    margin: '20px auto',
  };

  return (
    <div className="tabcontent">
      {/* White card container for the explanatory text */}
      <div style={cardStyle}>
        <p style={explanationTextStyle}>
          Enter a number plate in the field below and hit "Search" to find the location associated with the plate.
        </p>
      </div>

      {/* Simple Input and Button for Number Plate */}
      <div style={locationToolStyle}>
        <input
          type="text"
          value={numberPlateInput}
          onChange={handleInputChange}
          placeholder="Enter Number Plate"
          style={inputStyle}
        />
        <button onClick={showBikeLocation} style={buttonStyle}>
          Search
        </button>

        {/* Location Display */}
        <p style={locationDisplayStyle}>{locationDisplay}</p>
      </div>

      <div className="table-wrapper">
        <NumberPlateTable data={numberPlates} />
      </div>
    </div>
  );
};

export default NumberPlatesTab;