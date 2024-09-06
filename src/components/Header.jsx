import React, { useState } from 'react';
import '../css//Header.css'; // Assuming you have Header.css for specific header styling
import ClubLogo from '../assets/ClubLogo_west.png'
import MatchlessLogo from '../assets/matchless.png';
import AJSLogo from '../assets/ajs.png';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <a href="/home">Home</a>
        <a href="/bikes">Bikes</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact</a>
        <img src={AJSLogo} alt="AJS Logo" className="nav-logo bottom-logo" />
      </nav>
    </header>
  );
}

export default Header;