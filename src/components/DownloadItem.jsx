import React from 'react';

const DownloadItem = ({ imageSrc, label, fileUrl, fileName }) => {
  // Function to handle file download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;  // The name of the file to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the DOM after download
  };

  return (
    <div
      style={{
        textAlign: 'center',
        cursor: 'pointer',
        margin: '20px',
        display: 'inline-block',
      }}
      onClick={handleDownload}
    >
      {/* Display Image */}
      <img
        src={imageSrc}
        alt={label}
        style={{
          width: '150px', // You can adjust the width/height as needed
          height: 'auto',
        }}
      />
      {/* Display Label */}
      <p style={{ marginTop: '10px', fontSize: '16px' }}>{label}</p>
    </div>
  );
};

export default DownloadItem;