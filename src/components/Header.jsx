import React, { useState, useEffect, useRef } from 'react';
import '../css/Header.css'; // Assuming you have Header.css for specific header styling
import ClubLogo from '../assets/ClubLogo_west.png';
import MatchlessLogo from '../assets/matchless.png';
import AJSLogo from '../assets/ajs.png';

function Header({ selectedPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu
  const headerRef = useRef(null); // Reference to the header

  // Toggles the menu between open and closed states
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handles navigation and closes the menu after selecting a page
  const handleNavigation = (page) => {
    onNavigate(page);  // Navigate to the selected page
    setIsMenuOpen(false); // Close the menu after navigation
  };

  // Closes the menu if a click is detected outside of the menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Close the menu if the click is outside the menu
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className={isMenuOpen ? 'menu-open' : ''}>
      <a href="/">
        <img src={ClubLogo} alt="AJS & Matchless Owners Club Logo" className="logo left" />
      </a>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Overlay that appears when menu is open */}
      {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)} />}

      <nav ref={menuRef} className={isMenuOpen ? 'expanded' : 'collapsed'}>
        <img src={MatchlessLogo} alt="Matchless Logo" className="nav-logo top-logo" />

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
          className={selectedPage === 'suppliers' ? 'active' : ''}
          onClick={() => handleNavigation('suppliers')}
        >
          Suppliers
        </button>
        {/* <button
          className={selectedPage === 'archive' ? 'active' : ''}
          onClick={() => handleNavigation('archive')}
        >
          Archive
        </button> */}
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