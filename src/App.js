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
import WikiSearchPage from './components/WikiSearchPage';
import ArticleView from './components/ArticleView'; // Import the new ArticleView component

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null); // State for selected article

  // Adjusted navigation handler to clear the selected article before navigating
  const handleNavigate = (page) => {
    setSelectedArticle(null); // Clear the selected article when navigating to a new page
    setSelectedPage(page); // Set the new page
  };

  // Function to render the correct component based on selectedPage or selectedArticle
  const renderContent = () => {
    if (selectedArticle) {
      // If an article is selected, use ArticleView to display it
      return (
        <ArticleView
          article={selectedArticle}
          onBack={() => setSelectedArticle(null)} // Pass onBack function to reset selectedArticle
        />
      );
    }

    // Render the correct page when no article is selected
    switch (selectedPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'bikes':
        return <Bikes onNavigate={handleNavigate} />;
      case 'events':
        return <Events onNavigate={handleNavigate} />;
      case 'suppliers':
        return <SuppliersPage onNavigate={handleNavigate} />;
      case 'archive':
        return <ArchivePage onNavigate={handleNavigate} />;
      case 'wiki':
        return <WikiSearchPage onNavigate={handleNavigate} onSelectArticle={setSelectedArticle} />; // Pass onSelectArticle
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="App">
      {/* Pass the selectedPage and onNavigate to the Header */}
      <Header selectedPage={selectedPage} onNavigate={handleNavigate} />

      <div className="content">
        {renderContent()}
      </div>

      <Footer />

      {/* Floating Chat Component, accessible across all pages */}
      <div
        style={{
          overflow: 'hidden',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '0%',
          maxWidth: '400px',
          padding: '0px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          backgroundColor: 'red',
          borderRadius: '10px',
          zIndex: '1000',
          margin: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Chat bikes={bikesData} />
      </div>
    </div>
  );
}

export default App;