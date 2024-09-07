import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaRobot } from 'react-icons/fa'; // Import a robot icon from react-icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

const Chat = ({ bikes }) => {
  const [input, setInput] = useState('');
  const [selectedBike, setSelectedBike] = useState(''); // To store the selected bike name and year
  const [showChat, setShowChat] = useState(false); // Toggle between chat open and closed
  const [showModal, setShowModal] = useState(false); // To display the bot's response in a modal
  const [botResponse, setBotResponse] = useState(''); // To store the bot's response
  const [loading, setLoading] = useState(false); // Add a loading state to prevent multiple submissions

  const chatRef = useRef(null); // Create a ref for the chat container

  // Function to send the message and fetch bot's response
  const sendMessage = async () => {
    if (input.trim() && !loading) {
      setLoading(true); // Prevent multiple submissions
      setBotResponse(''); // Clear previous response
      const bikeInfo = selectedBike ? `${selectedBike.name} (${selectedBike.year}): ` : '';
      const question = bikeInfo + input;
      const response = await fetchMessage(question);
      setBotResponse(response);
      setShowModal(true); // Show the modal when a response is received
      setInput(''); // Clear input field
      setLoading(false); // Reset loading state
    }
  };

  const fetchMessage = async (question) => {
    const response = await fetch('/.netlify/functions/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: question }),
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
  };

  const handleClose = () => setShowModal(false); // To close the modal

  const handleBikeChange = (e) => {
    const bikeName = e.target.value;
    const selectedBikeObj = bikes.find((bike) => bike.name === bikeName);
    setSelectedBike(selectedBikeObj || null); // Set the selected bike object
  };

  // Close the chat and modal when clicking outside of the chat window
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setShowChat(false); // Close the chat if click is outside the chat container
        setShowModal(false); // Close the modal if chat is closed
      }
    };

    // Add event listener to the document to detect outside clicks
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      // Cleanup the event listener when the component is unmounted
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [chatRef]);

  return (
    <>
      {/* Floating action button (FAB) */}
      {!showChat && (
        <div
          onClick={() => setShowChat(true)} // Show the chat when clicked
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: 'rgb(87 114 182)',
            color: '#fff',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            zIndex: '1000',
          }}
        >
          <FaRobot size={30} /> {/* Robot Icon */}
        </div>
      )}

      {/* Chat Window */}
      {showChat && (
        <div
          ref={chatRef} // Attach the ref to the chat container
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '300px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            zIndex: '1000',
          }}
        >
          {/* Title and Description */}
          <h3 style={{ marginBottom: '10px', textAlign: 'center' }}>Jam-Bot Assistant</h3>
          <p style={{ marginBottom: '20px', textAlign: 'center' }}>
            Ask questions about your bike, and Jam-Bot will assist you with information and advice.
          </p>

          {/* Input field with combobox for bike selection */}
          <div className="input-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            width: '100%', // Ensure consistent width for all inputs
          }}>
            <select
              value={selectedBike ? selectedBike.name : ''}
              onChange={handleBikeChange}
              style={{
                padding: '10px',
                width: '100%', // Set consistent width
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            >
              <option value="">Select Bike</option>
              {bikes.map((bike) => (
                <option key={bike.name} value={bike.name}>
                  {bike.name} ({bike.year})
                </option>
              ))}
            </select>

            {/* Text input for the user to type their question */}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a question..."
              style={{
                padding: '10px',
                width: '100%', // Set consistent width
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />

            {/* Send button */}
            <Button
              onClick={sendMessage}
              variant="primary"
              disabled={loading} // Disable button while loading
              style={{
                width: '100%', // Set consistent width
                backgroundColor: loading ? 'gray' : 'rgb(87 114 182)', // Gray color when loading
              }}
            >
              {loading ? 'Loading...' : 'Ask Jam-Bot'}
            </Button>
          </div>

          {/* Modal for displaying bot response */}
          <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Jampot Mechanic</Modal.Title>
            </Modal.Header>
            <Modal.Body>{botResponse}</Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Chat;