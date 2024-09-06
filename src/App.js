import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Bikes from './components/Bikes';
import Events from './components/Events';
import Contact from './components/Contact';
import './App.css'; // Import global styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  // Function to render the correct component based on selectedPage
  const renderContent = () => {
    switch (selectedPage) {
      case 'home':
        return <Home />;
      case 'bikes':
        return <Bikes />;
      case 'events':
        return <Events />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      {/* Pass the selectedPage and setSelectedPage to the Header */}
      <Header selectedPage={selectedPage} onNavigate={setSelectedPage} />

      <div className="content">
        {renderContent()}
      </div>

      <Footer />
    </div>
  );
}

export default App;