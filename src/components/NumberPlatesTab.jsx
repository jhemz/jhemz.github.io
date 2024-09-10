import React, { useState } from 'react';
import NumberPlateTable from './NumberPlateTable';
import platesImage from '../assets/plate.png'; // Import the image from assets

const NumberPlatesTab = ({ numberPlates }) => {
  const [numberPlateInput, setNumberPlateInput] = useState('');
  const [locationDisplay, setLocationDisplay] = useState('');

  const locationToolStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    position: 'relative', // Keep relative positioning
  };

  const inputStyle = {
    opacity: 0, // Make input invisible but still focusable
    width: '0px', // Set width to 0
    height: '0px', // Set height to 0
    position: 'absolute', // Keep it in the document flow but hidden
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    marginLeft: '10px',
    cursor: 'pointer',
    display: 'inline-block',
    position: 'relative', // Ensure it's properly placed within the flow
    zIndex: 1, // Ensure it's on top of other elements
  };

  const locationDisplayStyle = {
    marginTop: '15px',
    fontSize: '30px',
    fontWeight: 'bold',
  };

  const numberPlateContainerStyle = {
    position: 'relative',
    width: '400px',
    height: '300px',
    margin: '0 auto',
    backgroundImage: `url(${platesImage})`, // Use the imported image here
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };

  const svgContainerStyle = {
    position: 'absolute',
    top: '44px',
    left: '-17px',
    width: '100%',
    height: '100%',
    zIndex: 0, // Make sure the SVG is behind the button
  };

  const textOverlayStyle = (angle) => ({
    transform: `rotate(${angle}deg)`, // Rotate the text by the specified angle
    transformOrigin: 'center',
  });

  const showBikeLocation = () => {
    const unformattedNumberPlate = numberPlateInput.replace(/\s+/g, ''); // Remove the space for the search
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

  // Function to handle the input change with formatting
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
    maxWidth: '500px',
    lineHeight: '1.5',
    textAlign: 'center',
    margin: '0 auto',
  };

  // Card styling for the white background container
  const cardStyle = {
    backgroundColor: 'white', // White background for the card
    borderRadius: '8px', // Rounded corners
    padding: '20px', // Padding inside the card
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow to give a card-like effect
    maxWidth: '600px', // Limit the card width
    margin: '20px auto', // Center the card
  };

  return (
    <div className="tabcontent" onClick={() => document.getElementById('hiddenInput').focus()}>
      {/* White card container for the explanatory text */}
      <div style={cardStyle}>
        <p style={explanationTextStyle}>
          Enter a number plate by clicking on the number plate and typing in a reg, hit "Search" 
          to find the location associated with the plate.
        </p>
      </div>

      {/* Container for the background image */}
      <div style={locationToolStyle}>
        <div style={numberPlateContainerStyle}>
          {/* SVG container for curved text */}
          <div style={svgContainerStyle}>
            <svg width="300" height="150" viewBox="0 0 300 150" style={textOverlayStyle(0)}>
              <path
                id="curve"
                d="M20,80 Q190,20 280,100"
                fill="transparent"
              />
              <text width="100%">
                <textPath
                  xlinkHref="#curve"
                  startOffset="58%"
                  textAnchor="middle"
                  style={{ fontSize: '39px', fill: 'white', fontWeight: 'bold' }}
                >
                  {numberPlateInput || 'ABC 123'}
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Hidden Input for Number Plate */}
        <input
          id="hiddenInput"
          type="text"
          value={numberPlateInput}
          onChange={handleInputChange}
          placeholder="Enter Number Plate"
          style={inputStyle} // Hidden but focusable input
        />

        {/* Search Button */}
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