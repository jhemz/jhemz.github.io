import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import GearboxCard from './GearboxCard';  // Import the new GearboxCard component
import BikeCard from './BikeCard';
import MatchlessLogo from '../assets/WDMatchlessLogo.png';

const GearboxesTab = ({ gearboxes }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedGearbox, setSelectedGearbox] = useState(null); // To store the gearbox selected for the modal

  // Function to handle opening the modal
  const handleOpenModal = (gearbox) => {
    setSelectedGearbox(gearbox);  // Set the clicked gearbox as the selected one
    setShowModal(true);           // Show the modal
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);          // Hide the modal
    setSelectedGearbox(null);     // Clear the selected gearbox
  };

  const gearboxesContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  };

  return (
    <div className="tabcontent">
      <div style={gearboxesContainerStyle}>
        {gearboxes.map((gearbox) => (
          <div >
            <GearboxCard gearbox={gearbox} /> {/* Use the GearboxCard component */}
          </div>
        ))}
      </div>

      {/* Modal for displaying detailed gearbox info and the bikes using it */}
      {selectedGearbox && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton style={{ paddingRight: '30px' }}>
            <div style={{
              marginLeft: '20px',
              marginTop: '20px',
              marginBottom: '-20px',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}>
              <img
                src={MatchlessLogo}
                alt="Matchless Logo"
                style={{
                  width: '120px',
                  height: 'auto',
                  marginRight: '20px'
                }}
              />
              <h2 style={{
                fontFamily: 'Trebuchet MS, sans-serif',
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#4D4B1D',
                margin: 0,
              }}>
                {selectedGearbox.name} {/* Display the name of the selected gearbox */}
              </h2>
            </div>
          </Modal.Header>
          <Modal.Body>
            <h4>Bikes using this gearbox:</h4>
            <div style={gearboxesContainerStyle}>
              {selectedGearbox.bikes.map((bike) => (
                <div key={bike} className="bike-list-item">
                  {/* Assuming BikeCard can take just the bike name */}
                  <BikeCard bike={{ name: bike }} /> {/* Render each bike in the modal */}
                </div>
              ))}
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default GearboxesTab;