import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { OpenAIAPIKey } from '../config'; // Ensure your config.js has the OpenAI key

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
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OpenAIAPIKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // Or 'gpt-4' if you're using GPT-4
        messages: [
          {
            role: 'system',
            content: "You are a helpful assistant. Respond in a polite and concise manner, providing clear and structured answers.",
          },
          {
            role: 'user',
            content: question, // User's question prefixed with bike info
          },
        ],
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content.trim();
  };

  const handleClose = () => setShowModal(false); // To close the modal

  // Function to handle combobox change
  const handleBikeChange = (e) => {
    const bikeName = e.target.value;
    const selectedBikeObj = bikes.find(bike => bike.name === bikeName);
    setSelectedBike(selectedBikeObj || null); // Set the selected bike object
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {/* Input field with combobox for bike selection */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        {/* Combobox (dropdown) for selecting bike */}
        <select
          value={selectedBike ? selectedBike.name : ''}
          onChange={handleBikeChange}
          style={{
            padding: '10px',
            width: '300px',
            marginRight: '10px',
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
            width: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px',
          }}
        />

        {/* Send button */}
        <Button onClick={sendMessage} variant="primary" style={{
            background:'#51624F'}}>
          Ask
        </Button>
      </div>

      {/* Modal for displaying bot response */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Jampot Mechanic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {botResponse} {/* Display the bot's response here */}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Chat;