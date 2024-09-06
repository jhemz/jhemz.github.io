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

  return (
    <div className="wd-bikes-container">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
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
              style={{ padding: '10px', width: '100%', fontSize: '16px' }}
            />
            <button onClick={handleSearchByFrameNumber} style={{ padding: '10px', width: '100%', fontSize: '16px' }}>
              Search by Frame Number
            </button>
          </div>
          <div style={{ width: '100%', maxWidth: '300px' }}> {/* Adjust width for responsiveness */}
            <input
              type="text"
              placeholder="Enter engine number"
              value={engineNumberInput}
              onChange={(e) => setEngineNumberInput(e.target.value)}
              style={{ padding: '10px', width: '100%', fontSize: '16px' }}
            />
            <button onClick={handleSearchByFrameNumber} style={{ padding: '10px', width: '100%', fontSize: '16px' }}>
              Search by Engine Number
            </button>
          </div>
          <div style={{ width: '100%', maxWidth: '300px' }}> {/* Adjust width for responsiveness */}
            <input
              type="text"
              placeholder="Enter WD serial number"
              value={serialNumberInput}
              onChange={(e) => setSerialNumberInput(e.target.value)}
              style={{ padding: '10px', width: '100%', fontSize: '16px' }}
            />
            <button onClick={handleSearchByFrameNumber} style={{ padding: '10px', width: '100%', fontSize: '16px' }}>
              Search by Serial Number
            </button>
          </div>
        </div>
        <div id="wdLocationDisplay" style={{ marginTop: '20px' }}>
          {searchError && <p style={{ color: 'red' }}>{searchError}</p>}
          {searchResult && (
            <WDRecordCard record={searchResult} />
          )}
        </div>
      </div>
    </div>
  );
};

export default WDBikesTab;