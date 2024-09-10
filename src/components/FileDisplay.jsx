import React from 'react';

// FileDisplay Component
const FileDisplay = ({ file }) => {
  return (
    <div style={styles.fileContainer}>
      {/* File Icon (Based on File Type) */}
      <div style={styles.icon}>
        {file.Extension.toLowerCase() === '.pdf' ? '📄' : '🖼️'}
      </div>

      {/* File Information */}
      <div style={styles.fileInfo}>
        <h3 style={styles.fileName}>{file.FileName}</h3>
        <p style={styles.fileDetails}>
          <strong>Pages:</strong> {file.PageCount ? `${file.PageCount} pages` : 'Unknown pages'}
        </p>
        <p style={styles.fileDetails}>
          <strong>Type:</strong> {file.Extension.toUpperCase()}
        </p>
      </div>

      {/* Download Link */}
      {/* <div style={styles.download}>
        <a
          href={file.RelativePath}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.downloadLink}
        >
          Download
        </a>
      </div> */}
    </div>
  );
};

// Component styles for a cleaner, more modern look
const styles = {
  fileContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    margin: '10px 0',
    backgroundColor: '#fff', // Clean white background
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    fontFamily: "'Roboto', sans-serif", // Clean, modern font
    transition: 'transform 0.2s ease', // Slight hover effect
  },
  icon: {
    
    fontSize: '40px',
    marginRight: '20px',
    color: '#555', // Subtle, neutral color for the icon
  },
  fileInfo: {
    flexGrow: 1,
  },
  fileName: {
    fontFamily: 'Trebuchet MS, sans-serif', 
    fontSize: '18px',
    margin: '0',
    fontWeight: 'bold',
    color: '#333',
  },
  fileDetails: {
    fontFamily: 'Trebuchet MS, sans-serif', 
    margin: '5px 0',
    color: '#777',
  },
  download: {
    marginLeft: '20px',
  },
  downloadLink: {
    fontFamily: 'Trebuchet MS, sans-serif', 
    padding: '8px 16px',
    backgroundColor: 'rgb(88 114 182)', // Light blue to match modern UI themes
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    border: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for button
    transition: 'background-color 0.3s ease',
  },
  downloadLinkHover: {
    backgroundColor: '#0056b3', // Darker blue on hover
  },
};

export default FileDisplay;