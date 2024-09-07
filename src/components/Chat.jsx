import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

const Chat = ({ bikes }) => {
  const [input, setInput] = useState('');
  const [selectedBike, setSelectedBike] = useState(''); // To store the selected bike name and year
  const [showModal, setShowModal] = useState(false);
  const [botResponse, setBotResponse] = useState(''); // To store the bot's response

  // Function to send the message and fetch bot's response
  const sendMessage = async () => {
    if (input.trim()) {
      // Prepend the selected bike's name and year to the question
      const bikeInfo = selectedBike ? `${selectedBike.name} (${selectedBike.year}): ` : '';
      const question = bikeInfo + input;

      // Fetch the bot's response
      const response = await fetchMessage(question);

      // Set the bot's response and open the modal
      setBotResponse(response);
      setShowModal(true); // Show the modal when a response is received

      // Clear input field
      setInput('');
    }
  };

  const fetchMessage = async (question) => {
    const response = await fetch('/.netlify/functions/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: question,
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
  };

  const handleClose = () => setShowModal(false); // To close the modal

  // Function to handle combobox change
  const handleBikeChange = (e) => {
    const bikeName = e.target.value;
    const selectedBikeObj = bikes.find((bike) => bike.name === bikeName);
    setSelectedBike(selectedBikeObj || null); // Set the selected bike object
  };

  return (
    <div className="chat-container" style={{ padding: '20px' }}>
      {/* Input field with combobox for bike selection */}
      <div className="input-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
        {/* Combobox (dropdown) for selecting bike */}
        <select
          value={selectedBike ? selectedBike.name : ''}
          onChange={handleBikeChange}
          style={{
            padding: '10px',
            flex: '1 1 250px',
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
          placeholder="Type a message..."
          style={{
            padding: '10px',
            flex: '2 1 250px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />

        {/* Send button */}
        <Button onClick={sendMessage} variant="primary" style={{ flex: '0 1 auto', backgroundColor: '#51624F' }}>
          Ask
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
  );
};

export default Chat;