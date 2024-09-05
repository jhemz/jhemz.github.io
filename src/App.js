import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Bikes from './components/Bikes';
import Events from './components/Events';
import Contact from './components/Contact';
import './App.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          {/* Define routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/bikes" element={<Bikes />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;