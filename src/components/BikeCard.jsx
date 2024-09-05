import React from 'react';
import '../css/BikeCard.css'; // Import the CSS
import MatchlessLogo from '../assets/matchlesslogo.png';
import AJSLogo from '../assets/ajsLogo.png';

const MatchlessCard = ({ bike }) => {
  const bikeImage = require(`../assets/bikes/${bike.image}`);
  const bikeName = bike.name.replace('Matchless', 'Model');

  return (
    <div className="bike-card matchless">
      {/* Year Badge */}
      <div className="year-badge">{bike.year}</div>

      {/* Top Section: Left for specs, right for image */}
      <div className="top-section">
        <div className="left-section">
          <img src={MatchlessLogo} alt="Matchless Logo" className="matchless-logo" />
          <h2 className="matchless-model-name">{bikeName}</h2>
          <p className="specs">{bike.engine}</p>
          <p className="specs">{bike.suspension}</p>
        </div>
        <div className="right-section">
          <img src={bikeImage} alt={`${bike.name} Image`} className="bike-image" />
        </div>
      </div>

      {/* Bottom pink section for description */}
      <div className="bottom-colored-section" style={{ backgroundColor: '#f5a9a9' }}>
        <p className="description">{bike.description}</p>
      </div>
    </div>
  );
};

const AJSCard = ({ bike }) => {
  const bikeImage = require(`../assets/bikes/${bike.image}`);
  const bikeName1 = bike.name.replace('Model', '');
  const bikeName = bikeName1.replace('AJS', 'Model');

  return (
    <div className="bike-card ajs">
      {/* Year Badge */}
      <div className="year-badge">{bike.year}</div>

      {/* Image of the bike */}
      <div className="bike-image-container">
        <img src={bikeImage} alt={`${bikeName} Image`} className="bike-image" />
      </div>

      {/* Middle blue bar with the bike name */}
      <div className="ajs-bar" style={{ backgroundColor: '#3b6fc4' }}>
        <h2 className="ajs-model-name">{bikeName}</h2>
        <img src={AJSLogo} alt="AJS Logo" className="ajs-logo" />
      </div>

      {/* Bottom section for description */}
      <div className="bottom-section ajs-description">
        <p className="description">{bike.description}</p>
      </div>
    </div>
  );
};

const BikeCard = ({ bike }) => {
  const isMatchless = bike.name.toLowerCase().startsWith('matchless');
  return isMatchless ? <MatchlessCard bike={bike} /> : <AJSCard bike={bike} />;
};

export default BikeCard;