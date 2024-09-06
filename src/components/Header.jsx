import React, { useState } from 'react';
import '../css/Header.css'; // Assuming you have Header.css for specific header styling
import ClubLogo from '../assets/ClubLogo_west.png';
import MatchlessLogo from '../assets/matchless.png';
import AJSLogo from '../assets/ajs.png';

function Header({ selectedPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggles the menu between open and closed states
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handles navigation and closes the menu after selecting a page
  const handleNavigation = (page) => {
    onNavigate(page);  // Navigate to the selected page
    setIsMenuOpen(false); // Close the menu after navigation
  };

  return (
    <header>
      <a href="/">
        <img src={ClubLogo} alt="AJS & Matchless Owners Club Logo" className="logo left" />
      </a>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={isMenuOpen ? 'expanded' : 'collapsed'}>
        <img src={MatchlessLogo} alt="Matchless Logo" className="nav-logo top-logo" />

        {/* When a button is clicked, the menu will collapse */}
        <button
          className={selectedPage === 'home' ? 'active' : ''}
          onClick={() => handleNavigation('home')}
        >
          Home
        </button>
        <button
          className={selectedPage === 'bikes' ? 'active' : ''}
          onClick={() => handleNavigation('bikes')}
        >
          Bikes
        </button>
        <button
          className={selectedPage === 'events' ? 'active' : ''}
          onClick={() => handleNavigation('events')}
        >
          Events
        </button>
        <button
          className={selectedPage === 'contact' ? 'active' : ''}
          onClick={() => handleNavigation('contact')}
        >
          Contact
        </button>

        <img src={AJSLogo} alt="AJS Logo" className="nav-logo bottom-logo" />
      </nav>
    </header>
  );
}

export default Header;