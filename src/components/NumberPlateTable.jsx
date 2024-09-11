import React from 'react';

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

  const tableWrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Allow columns to wrap on smaller screens
    justifyContent: 'space-around',
    marginTop: '20px',
    padding: '20px',
  };

  const tableColumnStyle = {
    background: 'white',
    flex: '1 1 300px', // Flex-grow, flex-shrink, and min-width for responsiveness
    margin: '10px', // Space between columns
    maxWidth: '100%',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const thStyle = {
    ...thTdStyle, // Copy styles from thTdStyle
    backgroundColor: 'rgba(81, 98, 79, 0.95)', // Green background for the header
    color: 'white', // White text color for contrast
  };

  return (
    <div style={tableWrapperStyle}>
      {columns.map((columnData, columnIndex) => (
        <div key={columnIndex} style={tableColumnStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Code</th>
                <th style={thStyle}>Location</th>
              </tr>
            </thead>
            <tbody>
              {columnData.map((item, rowIndex) => (
                <tr key={rowIndex}>
                  <td style={thTdStyle}>{item.prefix}</td>
                  <td style={thTdStyle}>{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default NumberPlateTable;