import React, { useState } from 'react';
import WDData from '../Data/WDBikes.json';
import WDRecordCard from './WDRecordCard';

// Helper Functions
const generateNumberRange = (start, end) => {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

const generateSerialNumberList = (rangeString) => {
  const ranges = rangeString.split(',').map(range => range.trim());
  let fullList = [];
  ranges.forEach(range => {
    if (range.includes('–') || range.includes('-')) {
      const [start, end] = range.split(/[–-]/).map(Number);
      if (start && end) {
        fullList = fullList.concat(generateNumberRange(start, end));
      }
    } else {
      const number = parseInt(range, 10);
      if (!isNaN(number)) {
        fullList.push(number);
      }
    }
  });
  return fullList;
};

const getTankImageByContractNumber = (contractNumber, makersType) => {
  switch (contractNumber) {
    case "C4608":
    case "C5247":
    case "C6094":
      return "tank1.png";  
    case "C7183":
    case "C8078":
    case "C8934":
      return "tank2.png";
    case "C1050":
    case "C2604":
    case "C4555":
      return "tank4.png";
    case "C6150":
      return "tank5.png";
    default:
      if (makersType.includes("G3L")) {
        return "tank3.png";
      } else {
        return "default_tank.png";
      }
  }
};

const WDBikesTab = () => {
  const [frameNumberInput, setFrameNumberInput] = useState('');
  const [engineNumberInput, setEngineNumberInput] = useState('');
  const [serialNumberInput, setSerialNumberInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState('');

  const findRecordByFrameNumber = (frameNumber) => {
    for (const record of WDData) {
      if (record['Frame Number'] && record['Engine Number'] && record['WD Serial No. Allocation']) {
        const frameNumberRange = record['Frame Number'];
        const engineNumberRange = record['Engine Number'];
        const wdSerialNumberRanges = record['WD Serial No. Allocation'];

        const frameRangeMatch = frameNumberRange.match(/^(\d+)[–-](\d+)$/);
        const engineRangeMatch = engineNumberRange.match(/^(.*-)(\d+)\s+to\s+(.*-)(\d+)$/);

        if (frameRangeMatch && engineRangeMatch) {
          const frameStart = parseInt(frameRangeMatch[1], 10);
          const frameEnd = parseInt(frameRangeMatch[2], 10);
          const enginePrefixStart = engineRangeMatch[1];
          const engineStart = parseInt(engineRangeMatch[2], 10);
          const engineEnd = parseInt(engineRangeMatch[4], 10);

          const frameNumbers = generateNumberRange(frameStart, frameEnd);
          const engineNumbers = generateNumberRange(engineStart, engineEnd);
          const wdSerialNumbers = generateSerialNumberList(wdSerialNumberRanges);

          const frameIndex = frameNumbers.indexOf(parseInt(frameNumber, 10));

          if (frameIndex !== -1 && frameIndex < engineNumbers.length && frameIndex < wdSerialNumbers.length) {
            const correspondingEngineNumber = enginePrefixStart + (engineStart + frameIndex).toString();
            const correspondingSerialNumber = wdSerialNumbers[frameIndex];
            const tankImage = getTankImageByContractNumber(record["Contract Number"], record["Maker's Type"]);
            return {
              "Model": record["Maker's Type"],
              "Military Class": record["Military Class"],
              "WD Serial No.": correspondingSerialNumber,
              "Engine No.": correspondingEngineNumber,
              "Contract Number": record["Contract Number"],
              "Dates": record["Dates"],
              "Price": record["Price(s)"],
              "Delivery Destination": record["Delivery Destination & Notes"],
              "Tank": tankImage,
              "Frame No.": frameNumber // Include the frame number
            };
          }
        }
      }
    }
    return null;
  };

 // Updated function to search by Engine Number
 const findRecordByEngineNumber = (engineNumber) => {
  for (const record of WDData) {
    if (record['Engine Number'] && record['Frame Number'] && record['WD Serial No. Allocation']) {
      const frameNumberRange = record['Frame Number'];
      const engineNumberRange = record['Engine Number'];
      const wdSerialNumberRanges = record['WD Serial No. Allocation'];

      const engineRangeMatch = engineNumberRange.match(/^(.*-)(\d+)\s+to\s+(.*-)(\d+)$/);
      const frameRangeMatch = frameNumberRange.match(/^(\d+)[–-](\d+)$/);

      if (engineRangeMatch && frameRangeMatch) {
        const enginePrefix = engineRangeMatch[1];
        const engineStart = parseInt(engineRangeMatch[2], 10);
        const engineEnd = parseInt(engineRangeMatch[4], 10);
        const frameStart = parseInt(frameRangeMatch[1], 10);
        const frameEnd = parseInt(frameRangeMatch[2], 10);

        const engineNumbers = generateNumberRange(engineStart, engineEnd).map(num => enginePrefix + num);
        const frameNumbers = generateNumberRange(frameStart, frameEnd);
        const wdSerialNumbers = generateSerialNumberList(wdSerialNumberRanges);

        const engineIndex = engineNumbers.indexOf(engineNumber);

        if (engineIndex !== -1 && engineIndex < frameNumbers.length && engineIndex < wdSerialNumbers.length) {
          const correspondingFrameNumber = frameNumbers[engineIndex];
          const correspondingSerialNumber = wdSerialNumbers[engineIndex];
          const tankImage = getTankImageByContractNumber(record["Contract Number"], record["Maker's Type"]);
          return {
            "Model": record["Maker's Type"],
            "Military Class": record["Military Class"],
            "WD Serial No.": correspondingSerialNumber,
            "Engine No.": engineNumber,
            "Contract Number": record["Contract Number"],
            "Dates": record["Dates"],
            "Price": record["Price(s)"],
            "Delivery Destination": record["Delivery Destination & Notes"],
            "Tank": tankImage,
            "Frame No.": correspondingFrameNumber
          };
        }
      }
    }
  }
  return null;
};

 // Updated function to search by WD Serial Number
 const findRecordBySerialNumber = (serialNumber) => {
  for (const record of WDData) {
    if (record['WD Serial No. Allocation'] && record['Frame Number'] && record['Engine Number']) {
      const wdSerialNumberRanges = record['WD Serial No. Allocation'];
      const frameNumberRange = record['Frame Number'];
      const engineNumberRange = record['Engine Number'];

      const frameRangeMatch = frameNumberRange.match(/^(\d+)[–-](\d+)$/);
      const engineRangeMatch = engineNumberRange.match(/^(.*-)(\d+)\s+to\s+(.*-)(\d+)$/);

      if (frameRangeMatch && engineRangeMatch) {
        const frameStart = parseInt(frameRangeMatch[1], 10);
        const frameEnd = parseInt(frameRangeMatch[2], 10);
        const enginePrefixStart = engineRangeMatch[1];
        const engineStart = parseInt(engineRangeMatch[2], 10);
        const engineEnd = parseInt(engineRangeMatch[4], 10);

        const frameNumbers = generateNumberRange(frameStart, frameEnd);
        const engineNumbers = generateNumberRange(engineStart, engineEnd).map(num => enginePrefixStart + num);
        const wdSerialNumbers = generateSerialNumberList(wdSerialNumberRanges);

        const serialIndex = wdSerialNumbers.indexOf(parseInt(serialNumber, 10));

        if (serialIndex !== -1 && serialIndex < frameNumbers.length && serialIndex < engineNumbers.length) {
          const correspondingFrameNumber = frameNumbers[serialIndex];
          const correspondingEngineNumber = engineNumbers[serialIndex];
          const tankImage = getTankImageByContractNumber(record["Contract Number"], record["Maker's Type"]);
          return {
            "Model": record["Maker's Type"],
            "Military Class": record["Military Class"],
            "WD Serial No.": serialNumber,
            "Engine No.": correspondingEngineNumber,
            "Contract Number": record["Contract Number"],
            "Dates": record["Dates"],
            "Price": record["Price(s)"],
            "Delivery Destination": record["Delivery Destination & Notes"],
            "Tank": tankImage,
            "Frame No.": correspondingFrameNumber
          };
        }
      }
    }
  }
  return null;
};

  // Define input and button styles inline
  const commonInputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#f4f4f2',
    border: '2px solid #6b6b47', // Dark olive green
    borderRadius: '4px',
    fontFamily: '"Courier New", Courier, monospace', // Military-style font
    color: '#2e2e1f',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    marginBottom: '10px',
  };

  const commonButtonStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    fontFamily: '"Courier New", Courier, monospace',
    backgroundColor: '#6b6b47', // Dark olive green
    color: '#f4f4f2',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const buttonHoverStyle = {
    backgroundColor: '#5a5a3b',
  };

  // Search handlers
  const handleSearchByFrameNumber = () => {
    const result = findRecordByFrameNumber(frameNumberInput);
    if (result) {
      setSearchResult(result);
      setSearchError('');
    } else {
      setSearchError('No matching record found.');
      setSearchResult(null);
    }
  };

  const handleSearchByEngineNumber = () => {
    const result = findRecordByEngineNumber(engineNumberInput);
    if (result) {
      setSearchResult(result);
      setSearchError('');
    } else {
      setSearchError('No matching record found.');
      setSearchResult(null);
    }
  };

  const handleSearchBySerialNumber = () => {
    const result = findRecordBySerialNumber(serialNumberInput);
    if (result) {
      setSearchResult(result);
      setSearchError('');
    } else {
      setSearchError('No matching record found.');
      setSearchResult(null);
    }
  };

  return (
    <div className="wd-bikes-container" style={{ textAlign: 'center', marginBottom: '20px' }}>
      {/* Introductory text explaining the WD Bikes section */}
      <div style={{ margin: '20px auto', maxWidth: '600px', textAlign: 'left', fontFamily: '"Courier New", Courier, monospace', color: '#2e2e1f' }}>
        <h2 style={{ color: '#6b6b47' }}>WD Bike Search</h2>
        <p>
          This section allows you to explore a variety of bikes used during World War II. 
          Whether you're searching by frame number, engine number, or WD serial number, 
          this tool will help you find detailed information about each military bike. 
          Enter the details below and discover more about the rich history of WD bikes.
        </p>
      </div>

      <div style={{
        display: 'flex', 
        justifyContent: 'center', 
        gap: '10px',
        flexWrap: 'wrap', // Ensure input fields and buttons wrap on smaller screens
      }}>
        <div style={{ width: '100%', maxWidth: '300px' }}> {/* Adjust width for responsiveness */}
          <input
            type="text"
            placeholder="Enter frame number"
            value={frameNumberInput}
            onChange={(e) => setFrameNumberInput(e.target.value)}
            style={commonInputStyle}
          />
          <button
            onClick={handleSearchByFrameNumber}
            style={commonButtonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = commonButtonStyle.backgroundColor)}
          >
            Search by Frame Number
          </button>
        </div>

        <div style={{ width: '100%', maxWidth: '300px' }}> {/* Adjust width for responsiveness */}
          <input
            type="text"
            placeholder="Enter engine number"
            value={engineNumberInput}
            onChange={(e) => setEngineNumberInput(e.target.value)}
            style={commonInputStyle}
          />
          <button
            onClick={handleSearchByEngineNumber}
            style={commonButtonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = commonButtonStyle.backgroundColor)}
          >
            Search by Engine Number
          </button>
        </div>

        <div style={{ width: '100%', maxWidth: '300px' }}> {/* Adjust width for responsiveness */}
          <input
            type="text"
            placeholder="Enter WD serial number"
            value={serialNumberInput}
            onChange={(e) => setSerialNumberInput(e.target.value)}
            style={commonInputStyle}
          />
          <button
            onClick={handleSearchBySerialNumber}
            style={commonButtonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = commonButtonStyle.backgroundColor)}
          >
            Search by Serial Number
          </button>
        </div>
      </div>

      {/* Display search results or error messages */}
      <div id="wdLocationDisplay" style={{ marginTop: '20px' }}>
        {searchError && <p style={{ color: 'red' }}>{searchError}</p>}
        {searchResult && (
          <WDRecordCard record={searchResult} />
        )}
      </div>
    </div>
  );
};

export default WDBikesTab;