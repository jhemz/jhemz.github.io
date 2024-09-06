import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import BikeCard from './BikeCard';
import WDDetailedCard from './WDDetailedCard';  // Import the detailed card component for modal
import MatchlessLogo from '../assets/WDMatchlessLogo.png';

const BikesTab = ({ bikes }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBike, setSelectedBike] = useState(null); // To store the bike selected for the modal

  // Function to handle opening the modal
  const handleOpenModal = (bike) => {
    setSelectedBike(bike);  // Set the clicked bike as the selected one
    setShowModal(true);      // Show the modal
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);     // Hide the modal
    setSelectedBike(null);   // Clear the selected bike
  };

  const bikesContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  };

  return (
    <div className="tabcontent">
      <div style={bikesContainerStyle}>
        {bikes.map((bike) => (
          <div onClick={() => handleOpenModal(bike)} key={bike.name}>
            <BikeCard bike={bike} />
          </div>
        ))}
      </div>

      {/* Modal for displaying detailed bike info */}
      {selectedBike && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton style={{ paddingRight: '30px' }}>
            <div style={{
              marginLeft:'20px',
              marginTop:'20px',
              marginBottom:'-20px',
              display: 'flex',
              alignItems: 'center', // Align items vertically in the center
              width: '100%',
            }}>
              <img
                src={MatchlessLogo}
                alt="Matchless Logo"
                style={{
                  width: '120px',
                  height: 'auto',
                  marginRight: '20px' // Add space between logo and bike name
                }}
              />
              <h2 style={{
                fontFamily: 'Trebuchet MS, sans-serif',
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#4D4B1D',
                margin: 0, // Remove margin for clean alignment
              }}>
                {selectedBike.name} {/* Corrected to selectedBike.name */}
              </h2>
            </div>
          </Modal.Header>
          <Modal.Body>
            {/* Show the detailed view inside the modal */}
            <WDDetailedCard bike={selectedBike} />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default BikesTab;