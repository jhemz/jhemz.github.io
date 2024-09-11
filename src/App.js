import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Bikes from './components/Bikes';
import Events from './components/Events';
import Contact from './components/Contact';
import Chat from './components/Chat'; // Import Chat component
import bikesData from './Data/Bikes.json'; // Import bikes data for Chat component
import './App.css'; // Import global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import SuppliersPage from './components/SuppliersPage';
import ArchivePage from './components/ArchivePage';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  // Function to render the correct component based on selectedPage
  const renderContent = () => {
    switch (selectedPage) {
      case 'home':
        return <Home onNavigate={setSelectedPage} />;
      case 'bikes':
        return <Bikes onNavigate={setSelectedPage} />;
      case 'events':
        return <Events onNavigate={setSelectedPage} />;
      case 'suppliers':
        return <SuppliersPage onNavigate={setSelectedPage} />;
      case 'archive':
        return <ArchivePage onNavigate={setSelectedPage} />;
      case 'contact':
        return <Contact onNavigate={setSelectedPage} />;
      default:
        return <Home onNavigate={setSelectedPage} />;
    }
  };

  return (
    <div className="App">
      {/* Pass the selectedPage and onNavigate to the Header */}
      <Header selectedPage={selectedPage} onNavigate={setSelectedPage} />

      <div className="content">
        {renderContent()}
      </div>

      <Footer />

      {/* Floating Chat Component, accessible across all pages */}
      <div
        style={{
          overflow: 'hidden', // Ensure nothing overflows
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '0%',
          maxWidth: '400px',
          padding: '0px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Ensure shadow isn't causing overflow
          backgroundColor: 'red', // The background color you set
          borderRadius: '10px',
          zIndex: '1000',
          margin: '0', // Remove 'auto' margin, might push things unexpectedly
          display: 'flex', // Ensure the content inside behaves as expected
          justifyContent: 'center', // Center the content if necessary
          alignItems: 'center',
        }}
      >
        <Chat bikes={bikesData} />
      </div>
    </div>
  );
}

export default App;